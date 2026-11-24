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
    this._productId = "Ess";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-qingdao': "ess.aliyuncs.com",
      'cn-beijing': "ess.aliyuncs.com",
      'cn-hangzhou': "ess.aliyuncs.com",
      'cn-shanghai': "ess.aliyuncs.com",
      'cn-shenzhen': "ess.aliyuncs.com",
      'cn-hongkong': "ess.aliyuncs.com",
      'ap-southeast-1': "ess.aliyuncs.com",
      'us-east-1': "ess.aliyuncs.com",
      'us-west-1': "ess.aliyuncs.com",
      'cn-shanghai-finance-1': "ess.aliyuncs.com",
      'cn-shenzhen-finance-1': "ess.aliyuncs.com",
      'cn-north-2-gov-1': "ess.aliyuncs.com",
      'ap-northeast-2-pop': "ess.aliyuncs.com",
      'cn-beijing-finance-pop': "ess.aliyuncs.com",
      'cn-beijing-gov-1': "ess.aliyuncs.com",
      'cn-beijing-nu16-b01': "ess.aliyuncs.com",
      'cn-edge-1': "ess.aliyuncs.com",
      'cn-fujian': "ess.aliyuncs.com",
      'cn-haidian-cm12-c01': "ess.aliyuncs.com",
      'cn-hangzhou-bj-b01': "ess.aliyuncs.com",
      'cn-hangzhou-finance': "ess.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "ess.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "ess.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "ess.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "ess.aliyuncs.com",
      'cn-hangzhou-test-306': "ess.aliyuncs.com",
      'cn-hongkong-finance-pop': "ess.aliyuncs.com",
      'cn-huhehaote-nebula-1': "ess.aliyuncs.com",
      'cn-qingdao-nebula': "ess.aliyuncs.com",
      'cn-shanghai-et15-b01': "ess.aliyuncs.com",
      'cn-shanghai-et2-b01': "ess.aliyuncs.com",
      'cn-shanghai-inner': "ess.aliyuncs.com",
      'cn-shanghai-internal-test-1': "ess.aliyuncs.com",
      'cn-shenzhen-inner': "ess.aliyuncs.com",
      'cn-shenzhen-st4-d01': "ess.aliyuncs.com",
      'cn-shenzhen-su18-b01': "ess.aliyuncs.com",
      'cn-wuhan': "ess.aliyuncs.com",
      'cn-yushanfang': "ess.aliyuncs.com",
      'cn-zhangbei': "ess.aliyuncs.com",
      'cn-zhangbei-na61-b01': "ess.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "ess.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "ess.aliyuncs.com",
      'eu-west-1-oxs': "ess.aliyuncs.com",
      'rus-west-1-pop': "ess.aliyuncs.com",
      'cn-nanjing': "ess.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ess", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates or updates an Elastic Container Instance (ECI) scaling configuration by using a configuration file.
   * 
   * @remarks
   * When you manage ECI scaling configurations by using YAML configuration files, take note of the following items:
   * - If you specify the ID of an ECI scaling configuration, the system updates the ECI scaling configuration based on the YAML configuration file.
   * - If you do not specify the ID of an ECI scaling configuration, the system creates an ECI scaling configuration based on the YAML configuration file.
   * 
   * @param request - ApplyEciScalingConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyEciScalingConfigurationResponse
   */
  async applyEciScalingConfigurationWithOptions(request: $_model.ApplyEciScalingConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyEciScalingConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.format)) {
      query["Format"] = request.format;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scalingConfigurationId)) {
      query["ScalingConfigurationId"] = request.scalingConfigurationId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyEciScalingConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyEciScalingConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.ApplyEciScalingConfigurationResponse({}));
  }

  /**
   * Creates or updates an Elastic Container Instance (ECI) scaling configuration by using a configuration file.
   * 
   * @remarks
   * When you manage ECI scaling configurations by using YAML configuration files, take note of the following items:
   * - If you specify the ID of an ECI scaling configuration, the system updates the ECI scaling configuration based on the YAML configuration file.
   * - If you do not specify the ID of an ECI scaling configuration, the system creates an ECI scaling configuration based on the YAML configuration file.
   * 
   * @param request - ApplyEciScalingConfigurationRequest
   * @returns ApplyEciScalingConfigurationResponse
   */
  async applyEciScalingConfiguration(request: $_model.ApplyEciScalingConfigurationRequest): Promise<$_model.ApplyEciScalingConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyEciScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * Creates and manages a scaling group by using a configuration file.
   * 
   * @remarks
   * The ApplyScalingGroup operation supports the Kubernetes Deployment resource definition format to quickly create Elastic Container Instance (ECI) scaling groups. It also supports ECI extended annotations for Kubernetes YAML. For more information, see the "Supported annotations" section.
   * Mapping between YAML configurations and scaling groups: A scaling group name is mapped by the namespace, kind, and name tuple in the YAML definition. In the same region, the same YAML configuration can only be mapped to the same scaling group. Example: If you use a Deployment YAML configuration with the name nginx in the default namespace, it is mapped to a scaling group named k8s_default_Deployment_nginx in the same region.
   * Logic for managing scaling groups based on YAML configurations:
   * - If the scaling group mapped to the YAML configuration exists, the scaling group is updated based on the YAML configuration.
   * - If the scaling group mapped to the YAML configuration does not exist, a corresponding scaling group is created based on the YAML configuration.
   * ### Precautions 
   * 1. If the YAML configuration does not specify the VPC, vSwitch, and security group annotations, the system performs automatic creation of a default VPC, creates a default vSwitch in the VPC, and creates the default Auto Scaling security group ess-default-sg. By default, the security group policy allows traffic on TCP ports 22 and 3389, and the ICMP (IPv4) protocol. If you have other port and protocol requirements, you can modify the security group policy.
   * 2. When you use a public image, you must enable public network access and configure the Settings for the k8s.aliyun.com/eci-with-eip pod annotation to enable the elastic IP address (EIP).
   * 3. After the ApplyScalingGroup operation applies the YAML configuration, the scaling group and scaling configuration take effect immediately. If replicas is set to a value greater than 0, automatic creation of resources is triggered.
   * ### Supported annotations
   * The annotations are referenced from [ECI Pod Annotation](https://help.aliyun.com/document_detail/186939.html).
   * |Parameter|Example|Description|
   * |-----|-----|-----|
   * |k8s.aliyun.com/ess-scaling-group-min-size|1|The minimum number of instances in the scaling group. Default value: 0.
   * |k8s.aliyun.com/ess-scaling-group-max-size|20|The maximum number of instances in the scaling group. Default value: max(replicas, 30).
   * |k8s.aliyun.com/eci-ntp-server|100.100.*.*|The NTP server.
   * |k8s.aliyun.com/eci-use-specs|2-4Gi|The instance specifications, such as 2 vCPUs and 4 GiB of memory. For more information, see [Create a pod by using multiple instance types](https://help.aliyun.com/document_detail/451267.html).
   * |k8s.aliyun.com/eci-vswitch|vsw-bp1xpiowfm5vo8o3c****|The ID of the vSwitch. You can specify multiple vSwitches to implement the multi-active zone feature.
   * |k8s.aliyun.com/eci-security-group|sg-bp1dktddjsg5nktv****|The ID of the security group. Requirements: <ul><li>You can specify one or more security groups. A maximum of five security groups can be specified.</li><li>The specified security groups must belong to the same VPC.</li><li>The specified security groups must be of the same type.</li></ul>
   * |k8s.aliyun.com/eci-sls-enable|"false"|Specifies whether to shutdown log collection. A value of false indicates that log collection is shutdown. <p>When you collect logs by using Simple Log Service CRDs, if you do not need to collect logs for specific pods, you can configure this annotation to shutdown the log collection feature. This prevents the system from performing automatic creation of Logtail and wasting resources.</p> 
   * |k8s.aliyun.com/eci-spot-strategy|SpotAsPriceGo|The bidding policy for the spot instance. Valid values: <ul><li>SpotWithPriceLimit: You use custom Settings for the maximum hourly price of the spot instance. In this case, you must set k8s.aliyun.com/eci-spot-price-limit.</li><li>SpotAsPriceGo: The system automatically places bids based on the actual price of the current marketplace.</li></ul>
   * |k8s.aliyun.com/eci-spot-price-limit|"0.5"|The maximum hourly price for the spot instance. The value is accurate to three decimal places. <p>This parameter takes effect only when the Settings of k8s.aliyun.com/eci-spot-strategy are SpotWithPriceLimit.</p>
   * |k8s.aliyun.com/eci-with-eip|"true"|Specifies whether to perform automatic creation and attach an EIP. A value of true indicates that an EIP is automatically created and attached.
   * |k8s.aliyun.com/eci-data-cache-bucket|default|The bucket of DataCache. This parameter is required when you use DataCache to create a pod.
   * |k8s.aliyun.com/eci-data-cache-pl|PL1|The performance level (PL) of the cloud disk created based on DataCache. <p>By default, an ESSD standard SSD is used, and the default PL is PL1.</p>
   * |k8s.aliyun.com/eci-data-cache-provisionedIops|"40000"|The provisioned read and write IOPS of the ESSD AutoPL cloud disk. Valid values: 0 to min{50000, 1000 × Capacity - Baseline performance}. Baseline performance = min{1800 + 50 × Capacity, 50000}. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html). <p>If this annotation is added, the cloud disk created based on DataCache is an ESSD AutoPL cloud disk.</p>
   * |k8s.aliyun.com/eci-data-cache-burstingEnabled|"true"|Specifies whether to enable the burst feature for the ESSD AutoPL cloud disk. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html). <p>If this annotation is added, the cloud disk created based on DataCache is an ESSD AutoPL cloud disk.</p>
   * |k8s.aliyun.com/eci-custom-tags|"env:test,name:alice"|The label string attached to the pod. You can attach up to three labels. Separate the label key and label value with a half-width colon character, and separate multiple labels with a half-width comma character.
   * 
   * @param request - ApplyScalingGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyScalingGroupResponse
   */
  async applyScalingGroupWithOptions(request: $_model.ApplyScalingGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyScalingGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.format)) {
      query["Format"] = request.format;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyScalingGroup",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyScalingGroupResponse>(await this.callApi(params, req, runtime), new $_model.ApplyScalingGroupResponse({}));
  }

  /**
   * Creates and manages a scaling group by using a configuration file.
   * 
   * @remarks
   * The ApplyScalingGroup operation supports the Kubernetes Deployment resource definition format to quickly create Elastic Container Instance (ECI) scaling groups. It also supports ECI extended annotations for Kubernetes YAML. For more information, see the "Supported annotations" section.
   * Mapping between YAML configurations and scaling groups: A scaling group name is mapped by the namespace, kind, and name tuple in the YAML definition. In the same region, the same YAML configuration can only be mapped to the same scaling group. Example: If you use a Deployment YAML configuration with the name nginx in the default namespace, it is mapped to a scaling group named k8s_default_Deployment_nginx in the same region.
   * Logic for managing scaling groups based on YAML configurations:
   * - If the scaling group mapped to the YAML configuration exists, the scaling group is updated based on the YAML configuration.
   * - If the scaling group mapped to the YAML configuration does not exist, a corresponding scaling group is created based on the YAML configuration.
   * ### Precautions 
   * 1. If the YAML configuration does not specify the VPC, vSwitch, and security group annotations, the system performs automatic creation of a default VPC, creates a default vSwitch in the VPC, and creates the default Auto Scaling security group ess-default-sg. By default, the security group policy allows traffic on TCP ports 22 and 3389, and the ICMP (IPv4) protocol. If you have other port and protocol requirements, you can modify the security group policy.
   * 2. When you use a public image, you must enable public network access and configure the Settings for the k8s.aliyun.com/eci-with-eip pod annotation to enable the elastic IP address (EIP).
   * 3. After the ApplyScalingGroup operation applies the YAML configuration, the scaling group and scaling configuration take effect immediately. If replicas is set to a value greater than 0, automatic creation of resources is triggered.
   * ### Supported annotations
   * The annotations are referenced from [ECI Pod Annotation](https://help.aliyun.com/document_detail/186939.html).
   * |Parameter|Example|Description|
   * |-----|-----|-----|
   * |k8s.aliyun.com/ess-scaling-group-min-size|1|The minimum number of instances in the scaling group. Default value: 0.
   * |k8s.aliyun.com/ess-scaling-group-max-size|20|The maximum number of instances in the scaling group. Default value: max(replicas, 30).
   * |k8s.aliyun.com/eci-ntp-server|100.100.*.*|The NTP server.
   * |k8s.aliyun.com/eci-use-specs|2-4Gi|The instance specifications, such as 2 vCPUs and 4 GiB of memory. For more information, see [Create a pod by using multiple instance types](https://help.aliyun.com/document_detail/451267.html).
   * |k8s.aliyun.com/eci-vswitch|vsw-bp1xpiowfm5vo8o3c****|The ID of the vSwitch. You can specify multiple vSwitches to implement the multi-active zone feature.
   * |k8s.aliyun.com/eci-security-group|sg-bp1dktddjsg5nktv****|The ID of the security group. Requirements: <ul><li>You can specify one or more security groups. A maximum of five security groups can be specified.</li><li>The specified security groups must belong to the same VPC.</li><li>The specified security groups must be of the same type.</li></ul>
   * |k8s.aliyun.com/eci-sls-enable|"false"|Specifies whether to shutdown log collection. A value of false indicates that log collection is shutdown. <p>When you collect logs by using Simple Log Service CRDs, if you do not need to collect logs for specific pods, you can configure this annotation to shutdown the log collection feature. This prevents the system from performing automatic creation of Logtail and wasting resources.</p> 
   * |k8s.aliyun.com/eci-spot-strategy|SpotAsPriceGo|The bidding policy for the spot instance. Valid values: <ul><li>SpotWithPriceLimit: You use custom Settings for the maximum hourly price of the spot instance. In this case, you must set k8s.aliyun.com/eci-spot-price-limit.</li><li>SpotAsPriceGo: The system automatically places bids based on the actual price of the current marketplace.</li></ul>
   * |k8s.aliyun.com/eci-spot-price-limit|"0.5"|The maximum hourly price for the spot instance. The value is accurate to three decimal places. <p>This parameter takes effect only when the Settings of k8s.aliyun.com/eci-spot-strategy are SpotWithPriceLimit.</p>
   * |k8s.aliyun.com/eci-with-eip|"true"|Specifies whether to perform automatic creation and attach an EIP. A value of true indicates that an EIP is automatically created and attached.
   * |k8s.aliyun.com/eci-data-cache-bucket|default|The bucket of DataCache. This parameter is required when you use DataCache to create a pod.
   * |k8s.aliyun.com/eci-data-cache-pl|PL1|The performance level (PL) of the cloud disk created based on DataCache. <p>By default, an ESSD standard SSD is used, and the default PL is PL1.</p>
   * |k8s.aliyun.com/eci-data-cache-provisionedIops|"40000"|The provisioned read and write IOPS of the ESSD AutoPL cloud disk. Valid values: 0 to min{50000, 1000 × Capacity - Baseline performance}. Baseline performance = min{1800 + 50 × Capacity, 50000}. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html). <p>If this annotation is added, the cloud disk created based on DataCache is an ESSD AutoPL cloud disk.</p>
   * |k8s.aliyun.com/eci-data-cache-burstingEnabled|"true"|Specifies whether to enable the burst feature for the ESSD AutoPL cloud disk. For more information, see [ESSD AutoPL cloud disks](https://help.aliyun.com/document_detail/368372.html). <p>If this annotation is added, the cloud disk created based on DataCache is an ESSD AutoPL cloud disk.</p>
   * |k8s.aliyun.com/eci-custom-tags|"env:test,name:alice"|The label string attached to the pod. You can attach up to three labels. Separate the label key and label value with a half-width colon character, and separate multiple labels with a half-width comma character.
   * 
   * @param request - ApplyScalingGroupRequest
   * @returns ApplyScalingGroupResponse
   */
  async applyScalingGroup(request: $_model.ApplyScalingGroupRequest): Promise<$_model.ApplyScalingGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyScalingGroupWithOptions(request, runtime);
  }

  /**
   * Adds one or more Application Load Balancer (ALB) server groups to a scaling group. This operation is applicable to scenarios where you need to dynamically adjust the number of instances to handle fluctuating workloads and ensure high availability of applications. It enables automatic elastic scaling during business fluctuations, dynamically distributes traffic based on loads, and improves application stability.
   * 
   * @remarks
   * When you add ALB server groups to a scaling group, the following conditions must be met:
   * - The network type of the scaling group must be VPC, and the scaling group must be in the same VPC as the ALB server groups.
   * - The ALB server groups must be in the Available state.
   * 
   * @param request - AttachAlbServerGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachAlbServerGroupsResponse
   */
  async attachAlbServerGroupsWithOptions(request: $_model.AttachAlbServerGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachAlbServerGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.albServerGroups)) {
      query["AlbServerGroups"] = request.albServerGroups;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.forceAttach)) {
      query["ForceAttach"] = request.forceAttach;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachAlbServerGroups",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachAlbServerGroupsResponse>(await this.callApi(params, req, runtime), new $_model.AttachAlbServerGroupsResponse({}));
  }

  /**
   * Adds one or more Application Load Balancer (ALB) server groups to a scaling group. This operation is applicable to scenarios where you need to dynamically adjust the number of instances to handle fluctuating workloads and ensure high availability of applications. It enables automatic elastic scaling during business fluctuations, dynamically distributes traffic based on loads, and improves application stability.
   * 
   * @remarks
   * When you add ALB server groups to a scaling group, the following conditions must be met:
   * - The network type of the scaling group must be VPC, and the scaling group must be in the same VPC as the ALB server groups.
   * - The ALB server groups must be in the Available state.
   * 
   * @param request - AttachAlbServerGroupsRequest
   * @returns AttachAlbServerGroupsResponse
   */
  async attachAlbServerGroups(request: $_model.AttachAlbServerGroupsRequest): Promise<$_model.AttachAlbServerGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachAlbServerGroupsWithOptions(request, runtime);
  }

  /**
   * Attaches one or more RDS instances to a scaling group, which allows you to adjust the number of RDS instances in the scaling group at any time to increase flexibility and usability.
   * 
   * @remarks
   * The following conditions must be met when you attach RDS instances to a scaling group:
   * - The RDS instances and the scaling group must belong to the same account.
   * - The RDS instances must not be locked. For more information about the locking policy, see [Usage notes for ApsaraDB RDS](https://help.aliyun.com/document_detail/41872.html).
   * - The RDS instances must be in the Running state.
   * - The RDS instances must be owned by your current account and must not be deleted.
   * - If you attach an RDS instance that already exists in the scaling group to the scaling group again, the number of RDS instances in the scaling group does not change. However, the system attempts to add the private IP addresses of all ECS instances in the current scaling group to the IP address whitelist of the RDS instance.
   * > After you attach RDS instances, the default whitelist group of the RDS instances can contain a maximum of 1,000 IP addresses. For more information about IP address whitelists, see [Configure an IP address whitelist](https://help.aliyun.com/document_detail/96118.html).
   * 
   * @param request - AttachDBInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachDBInstancesResponse
   */
  async attachDBInstancesWithOptions(request: $_model.AttachDBInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachDBInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.attachMode)) {
      query["AttachMode"] = request.attachMode;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstances)) {
      query["DBInstances"] = request.DBInstances;
    }

    if (!$dara.isNull(request.forceAttach)) {
      query["ForceAttach"] = request.forceAttach;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachDBInstances",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachDBInstancesResponse>(await this.callApi(params, req, runtime), new $_model.AttachDBInstancesResponse({}));
  }

  /**
   * Attaches one or more RDS instances to a scaling group, which allows you to adjust the number of RDS instances in the scaling group at any time to increase flexibility and usability.
   * 
   * @remarks
   * The following conditions must be met when you attach RDS instances to a scaling group:
   * - The RDS instances and the scaling group must belong to the same account.
   * - The RDS instances must not be locked. For more information about the locking policy, see [Usage notes for ApsaraDB RDS](https://help.aliyun.com/document_detail/41872.html).
   * - The RDS instances must be in the Running state.
   * - The RDS instances must be owned by your current account and must not be deleted.
   * - If you attach an RDS instance that already exists in the scaling group to the scaling group again, the number of RDS instances in the scaling group does not change. However, the system attempts to add the private IP addresses of all ECS instances in the current scaling group to the IP address whitelist of the RDS instance.
   * > After you attach RDS instances, the default whitelist group of the RDS instances can contain a maximum of 1,000 IP addresses. For more information about IP address whitelists, see [Configure an IP address whitelist](https://help.aliyun.com/document_detail/96118.html).
   * 
   * @param request - AttachDBInstancesRequest
   * @returns AttachDBInstancesResponse
   */
  async attachDBInstances(request: $_model.AttachDBInstancesRequest): Promise<$_model.AttachDBInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachDBInstancesWithOptions(request, runtime);
  }

  /**
   * Manually adds instances to a scaling group. You can add ECS instances, Elastic Container Instance (ECI) instances, or managed instances outside the scaling group to the scaling group and put them into service. You can also restart ECS instances in the scaling group that are in the Economical Mode to the Running state and put them into service.
   * 
   * @remarks
   * - Before you invoke this operation, make sure that the following conditions are met:
   *     - The scaling group is in the Active state.
   *     - No scaling activities are in progress in the scaling group.
   * - Limits on ECS instances or ECI instances to be added to the scaling group:
   *     - The instances must be in the same region as the scaling group.
   *     - The instances must be in the Running state.
   *     - The instances must not be added to other scaling groups.
   *     - The billing method of the instances must be subscription, pay-as-you-go, or spot instance.
   *     - If a vSwitch ID is specified for the scaling group, classic network-connected ECS instances or ECI instances, or ECS instances or ECI instances in other VPCs cannot be added to the scaling group.
   *     - If no vSwitch ID is specified for the scaling group, VPC-connected ECS instances or ECI instances cannot be added to the scaling group.
   * - Limits on managed instances to be added to the scaling group:
   *     - The instances must be in the same region as the scaling group.
   *     - Only managed instances that are not added to any scaling group can be added to an ECS scaling group.
   *     - Managed instances do not support lifecycle hooks, association with load balancing, or the health check feature.
   *     - After managed instances are added to an ECS scaling group, the scaling group does not manage the lifecycle of the managed instances.
   *     - Managed instances can only be manually added to or removed from the scaling group. Removed managed instances are not released.
   * - Precautions for using this operation:
   *     - If no scaling activities are in progress in the scaling group, this operation can bypass the cooldown time and be executed directly.
   *     - A successful response only indicates that Auto Scaling accepted the request of the operation invocation and the scaling activity can be executed. It does not mean that the scaling activity will be executed successfully. You must use the returned ScalingActivityId to check the execution status of the scaling activity.
   *     - If the sum of the number of instances specified in this operation and the current number of instances in the scaling group (Total Capacity) is greater than the maximum number of instances (MaxSize), the operation invocation fails.
   *     - ECS instances, ECI instances, or managed instances manually added by using this operation are not associated with the active scaling configuration of the scaling group.
   * 
   * @param request - AttachInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachInstancesResponse
   */
  async attachInstancesWithOptions(request: $_model.AttachInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.entrusted)) {
      query["Entrusted"] = request.entrusted;
    }

    if (!$dara.isNull(request.ignoreInvalidInstance)) {
      query["IgnoreInvalidInstance"] = request.ignoreInvalidInstance;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.lifecycleHook)) {
      query["LifecycleHook"] = request.lifecycleHook;
    }

    if (!$dara.isNull(request.loadBalancerWeights)) {
      query["LoadBalancerWeights"] = request.loadBalancerWeights;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachInstances",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachInstancesResponse>(await this.callApi(params, req, runtime), new $_model.AttachInstancesResponse({}));
  }

  /**
   * Manually adds instances to a scaling group. You can add ECS instances, Elastic Container Instance (ECI) instances, or managed instances outside the scaling group to the scaling group and put them into service. You can also restart ECS instances in the scaling group that are in the Economical Mode to the Running state and put them into service.
   * 
   * @remarks
   * - Before you invoke this operation, make sure that the following conditions are met:
   *     - The scaling group is in the Active state.
   *     - No scaling activities are in progress in the scaling group.
   * - Limits on ECS instances or ECI instances to be added to the scaling group:
   *     - The instances must be in the same region as the scaling group.
   *     - The instances must be in the Running state.
   *     - The instances must not be added to other scaling groups.
   *     - The billing method of the instances must be subscription, pay-as-you-go, or spot instance.
   *     - If a vSwitch ID is specified for the scaling group, classic network-connected ECS instances or ECI instances, or ECS instances or ECI instances in other VPCs cannot be added to the scaling group.
   *     - If no vSwitch ID is specified for the scaling group, VPC-connected ECS instances or ECI instances cannot be added to the scaling group.
   * - Limits on managed instances to be added to the scaling group:
   *     - The instances must be in the same region as the scaling group.
   *     - Only managed instances that are not added to any scaling group can be added to an ECS scaling group.
   *     - Managed instances do not support lifecycle hooks, association with load balancing, or the health check feature.
   *     - After managed instances are added to an ECS scaling group, the scaling group does not manage the lifecycle of the managed instances.
   *     - Managed instances can only be manually added to or removed from the scaling group. Removed managed instances are not released.
   * - Precautions for using this operation:
   *     - If no scaling activities are in progress in the scaling group, this operation can bypass the cooldown time and be executed directly.
   *     - A successful response only indicates that Auto Scaling accepted the request of the operation invocation and the scaling activity can be executed. It does not mean that the scaling activity will be executed successfully. You must use the returned ScalingActivityId to check the execution status of the scaling activity.
   *     - If the sum of the number of instances specified in this operation and the current number of instances in the scaling group (Total Capacity) is greater than the maximum number of instances (MaxSize), the operation invocation fails.
   *     - ECS instances, ECI instances, or managed instances manually added by using this operation are not associated with the active scaling configuration of the scaling group.
   * 
   * @param request - AttachInstancesRequest
   * @returns AttachInstancesResponse
   */
  async attachInstances(request: $_model.AttachInstancesRequest): Promise<$_model.AttachInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachInstancesWithOptions(request, runtime);
  }

  /**
   * Associates one or more load balancing instances with a scaling group to distribute access traffic to multiple instances in the scaling group and enhance the service capability of the scaling group. You can call the AttachLoadBalancers API operation to add one or more load balancing instances.
   * 
   * @remarks
   * The following conditions must be met when adding load balancing instances to a scaling group:
   * - The load balancing instances and the scaling group must belong to the same account and region.
   * - The load balancing instances must be in the `Running` state.
   * - Each load balancing instance must be configured with at least one listener and have health checks enabled.
   * - If the network type of both the load balancing instances and the scaling group is VPC, they must be in the same VPC.
   * - If the network type of the scaling group is VPC and the network type of the load balancing instances is classic network, and the backend servers of the load balancing instances include VPC-connected instances, the VPC-connected instances must be in the same VPC as the scaling group.
   * - The number of load balancing instances associated with the scaling group does not exceed the quota. For more information about the quota, see [Limits](https://help.aliyun.com/document_detail/25863.html).
   * 
   * @param request - AttachLoadBalancersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachLoadBalancersResponse
   */
  async attachLoadBalancersWithOptions(request: $_model.AttachLoadBalancersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachLoadBalancersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.async)) {
      query["Async"] = request.async;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.forceAttach)) {
      query["ForceAttach"] = request.forceAttach;
    }

    if (!$dara.isNull(request.loadBalancerConfigs)) {
      query["LoadBalancerConfigs"] = request.loadBalancerConfigs;
    }

    if (!$dara.isNull(request.loadBalancers)) {
      query["LoadBalancers"] = request.loadBalancers;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachLoadBalancers",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachLoadBalancersResponse>(await this.callApi(params, req, runtime), new $_model.AttachLoadBalancersResponse({}));
  }

  /**
   * Associates one or more load balancing instances with a scaling group to distribute access traffic to multiple instances in the scaling group and enhance the service capability of the scaling group. You can call the AttachLoadBalancers API operation to add one or more load balancing instances.
   * 
   * @remarks
   * The following conditions must be met when adding load balancing instances to a scaling group:
   * - The load balancing instances and the scaling group must belong to the same account and region.
   * - The load balancing instances must be in the `Running` state.
   * - Each load balancing instance must be configured with at least one listener and have health checks enabled.
   * - If the network type of both the load balancing instances and the scaling group is VPC, they must be in the same VPC.
   * - If the network type of the scaling group is VPC and the network type of the load balancing instances is classic network, and the backend servers of the load balancing instances include VPC-connected instances, the VPC-connected instances must be in the same VPC as the scaling group.
   * - The number of load balancing instances associated with the scaling group does not exceed the quota. For more information about the quota, see [Limits](https://help.aliyun.com/document_detail/25863.html).
   * 
   * @param request - AttachLoadBalancersRequest
   * @returns AttachLoadBalancersResponse
   */
  async attachLoadBalancers(request: $_model.AttachLoadBalancersRequest): Promise<$_model.AttachLoadBalancersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachLoadBalancersWithOptions(request, runtime);
  }

  /**
   * Invokes the AttachServerGroups API to attach one or more load balancing server groups to a scaling group. This applies to scenarios that require dynamic instance scaling to handle fluctuating workloads and ensure application programs remain active with high availability. Supported server group types include Application Load Balancer (ALB), Network Load Balancer (NLB), and Gateway Load Balancer (GWLB). This enables automatic elastic extension, allows you to dynamically allocate traffic based on load conditions, and improves the stability of application programs.
   * 
   * @param request - AttachServerGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachServerGroupsResponse
   */
  async attachServerGroupsWithOptions(request: $_model.AttachServerGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachServerGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.forceAttach)) {
      query["ForceAttach"] = request.forceAttach;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.serverGroups)) {
      query["ServerGroups"] = request.serverGroups;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachServerGroups",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachServerGroupsResponse>(await this.callApi(params, req, runtime), new $_model.AttachServerGroupsResponse({}));
  }

  /**
   * Invokes the AttachServerGroups API to attach one or more load balancing server groups to a scaling group. This applies to scenarios that require dynamic instance scaling to handle fluctuating workloads and ensure application programs remain active with high availability. Supported server group types include Application Load Balancer (ALB), Network Load Balancer (NLB), and Gateway Load Balancer (GWLB). This enables automatic elastic extension, allows you to dynamically allocate traffic based on load conditions, and improves the stability of application programs.
   * 
   * @param request - AttachServerGroupsRequest
   * @returns AttachServerGroupsResponse
   */
  async attachServerGroups(request: $_model.AttachServerGroupsRequest): Promise<$_model.AttachServerGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachServerGroupsWithOptions(request, runtime);
  }

  /**
   * Adds one or more vServer groups of a Classic Load Balancer (CLB) instance to a scaling group. After a scaling group is associated with a CLB instance, instances added to the scaling group are automatically added as backend servers of the CLB instance to process access requests forwarded by the CLB instance. To forward different requests to different backend servers or forward requests based on domain names and URLs, you can call the AttachVServerGroups API operation to add one or more vServer groups of the CLB instance and manage different backend servers by using the vServer groups.
   * 
   * @remarks
   * - To add vServer groups to a scaling group, the following conditions must be met:
   *     - The CLB instance and the scaling group must belong to the same account.
   *     - The CLB instance and the scaling group must be in the same region.
   *     - The CLB instance must be in the Running state.
   *     - The CLB instance must be configured with at least one listener and health checks must be enabled.
   *     - If the network types of both the CLB instance and the scaling group are VPC, they must be in the same VPC.
   *     - If the network type of the scaling group is VPC and the network type of the CLB instance is classic network, and the vServer group contains VPC-connected instances, the instances must be in the same VPC as the scaling group.
   *     - The vServer groups to be added must belong to the corresponding CLB instance.
   *     - The number of vServer groups in the scaling group does not exceed the quota. For more information about the quota, see [Limits](https://help.aliyun.com/document_detail/25863.html).
   * - When you add vServer groups to a scaling group, you must specify the following properties:
   *     - CLB instance ID (LoadBalancerId)
   *     - vServer group ID (VServerGroupId)
   *     - vServer group port number (Port)
   *     >If you add the same vServer group to a scaling group by using different port numbers, the system considers that multiple vServer groups are added to the scaling group. If both the vServer group ID and the port number in the request parameters are duplicated, the system uses the first configured group by default and ignores the other vServer groups.
   * 
   * @param request - AttachVServerGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachVServerGroupsResponse
   */
  async attachVServerGroupsWithOptions(request: $_model.AttachVServerGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachVServerGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.forceAttach)) {
      query["ForceAttach"] = request.forceAttach;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.VServerGroups)) {
      query["VServerGroups"] = request.VServerGroups;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachVServerGroups",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachVServerGroupsResponse>(await this.callApi(params, req, runtime), new $_model.AttachVServerGroupsResponse({}));
  }

  /**
   * Adds one or more vServer groups of a Classic Load Balancer (CLB) instance to a scaling group. After a scaling group is associated with a CLB instance, instances added to the scaling group are automatically added as backend servers of the CLB instance to process access requests forwarded by the CLB instance. To forward different requests to different backend servers or forward requests based on domain names and URLs, you can call the AttachVServerGroups API operation to add one or more vServer groups of the CLB instance and manage different backend servers by using the vServer groups.
   * 
   * @remarks
   * - To add vServer groups to a scaling group, the following conditions must be met:
   *     - The CLB instance and the scaling group must belong to the same account.
   *     - The CLB instance and the scaling group must be in the same region.
   *     - The CLB instance must be in the Running state.
   *     - The CLB instance must be configured with at least one listener and health checks must be enabled.
   *     - If the network types of both the CLB instance and the scaling group are VPC, they must be in the same VPC.
   *     - If the network type of the scaling group is VPC and the network type of the CLB instance is classic network, and the vServer group contains VPC-connected instances, the instances must be in the same VPC as the scaling group.
   *     - The vServer groups to be added must belong to the corresponding CLB instance.
   *     - The number of vServer groups in the scaling group does not exceed the quota. For more information about the quota, see [Limits](https://help.aliyun.com/document_detail/25863.html).
   * - When you add vServer groups to a scaling group, you must specify the following properties:
   *     - CLB instance ID (LoadBalancerId)
   *     - vServer group ID (VServerGroupId)
   *     - vServer group port number (Port)
   *     >If you add the same vServer group to a scaling group by using different port numbers, the system considers that multiple vServer groups are added to the scaling group. If both the vServer group ID and the port number in the request parameters are duplicated, the system uses the first configured group by default and ignores the other vServer groups.
   * 
   * @param request - AttachVServerGroupsRequest
   * @returns AttachVServerGroupsResponse
   */
  async attachVServerGroups(request: $_model.AttachVServerGroupsRequest): Promise<$_model.AttachVServerGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachVServerGroupsWithOptions(request, runtime);
  }

  /**
   * Cancels an instance refresh task and retains new instances that have been replaced and scaled out.
   * 
   * @remarks
   * - You cannot cancel an instance refresh task that is being rolled back.
   * 
   * @param request - CancelInstanceRefreshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelInstanceRefreshResponse
   */
  async cancelInstanceRefreshWithOptions(request: $_model.CancelInstanceRefreshRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelInstanceRefreshResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceRefreshTaskId)) {
      query["InstanceRefreshTaskId"] = request.instanceRefreshTaskId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelInstanceRefresh",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelInstanceRefreshResponse>(await this.callApi(params, req, runtime), new $_model.CancelInstanceRefreshResponse({}));
  }

  /**
   * Cancels an instance refresh task and retains new instances that have been replaced and scaled out.
   * 
   * @remarks
   * - You cannot cancel an instance refresh task that is being rolled back.
   * 
   * @param request - CancelInstanceRefreshRequest
   * @returns CancelInstanceRefreshResponse
   */
  async cancelInstanceRefresh(request: $_model.CancelInstanceRefreshRequest): Promise<$_model.CancelInstanceRefreshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelInstanceRefreshWithOptions(request, runtime);
  }

  /**
   * Cancels the zone fault degradation for a scaling group.
   * 
   * @param request - CancelScalingGroupZoneShiftRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelScalingGroupZoneShiftResponse
   */
  async cancelScalingGroupZoneShiftWithOptions(request: $_model.CancelScalingGroupZoneShiftRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelScalingGroupZoneShiftResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelScalingGroupZoneShift",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelScalingGroupZoneShiftResponse>(await this.callApi(params, req, runtime), new $_model.CancelScalingGroupZoneShiftResponse({}));
  }

  /**
   * Cancels the zone fault degradation for a scaling group.
   * 
   * @param request - CancelScalingGroupZoneShiftRequest
   * @returns CancelScalingGroupZoneShiftResponse
   */
  async cancelScalingGroupZoneShift(request: $_model.CancelScalingGroupZoneShiftRequest): Promise<$_model.CancelScalingGroupZoneShiftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelScalingGroupZoneShiftWithOptions(request, runtime);
  }

  /**
   * Changes the resource group to which a scaling group belongs. Resource groups allow you to group your cloud resources, such as scaling groups, by purpose, permissions, and ownership to implement hierarchical resource management for multiple users and projects within an enterprise. You can call the ChangeResourceGroup operation to move a scaling group from one resource group to another. This allows you to centrally monitor and manage the scaling group in the new resource group, eliminating the need to check resources across multiple Alibaba Cloud services.
   * 
   * @remarks
   * - A resource is a cloud service entity that you create in Alibaba Cloud. For example, a scaling group is a resource.
   * - A resource group is a mechanism for grouping and managing resources within an Alibaba Cloud account. It helps you resolve the complexities of resource grouping and authorization management within a single cloud account. For more information, see [What is Resource Management](https://help.aliyun.com/document_detail/94475.html).
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2022-02-22",
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
   * Changes the resource group to which a scaling group belongs. Resource groups allow you to group your cloud resources, such as scaling groups, by purpose, permissions, and ownership to implement hierarchical resource management for multiple users and projects within an enterprise. You can call the ChangeResourceGroup operation to move a scaling group from one resource group to another. This allows you to centrally monitor and manage the scaling group in the new resource group, eliminating the need to check resources across multiple Alibaba Cloud services.
   * 
   * @remarks
   * - A resource is a cloud service entity that you create in Alibaba Cloud. For example, a scaling group is a resource.
   * - A resource group is a mechanism for grouping and managing resources within an Alibaba Cloud account. It helps you resolve the complexities of resource grouping and authorization management within a single cloud account. For more information, see [What is Resource Management](https://help.aliyun.com/document_detail/94475.html).
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Ends the wait state of a scaling activity in advance to execute the next action if a lifecycle hook is configured for a scaling group.
   * 
   * @remarks
   * Allows you to specify the next action after the wait state ends: continue the scaling activity (CONTINUE), abandon the scaling activity (ABANDON), or perform a rollback (ROLLBACK).
   * 
   * @param request - CompleteLifecycleActionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompleteLifecycleActionResponse
   */
  async completeLifecycleActionWithOptions(request: $_model.CompleteLifecycleActionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CompleteLifecycleActionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.lifecycleActionResult)) {
      query["LifecycleActionResult"] = request.lifecycleActionResult;
    }

    if (!$dara.isNull(request.lifecycleActionToken)) {
      query["LifecycleActionToken"] = request.lifecycleActionToken;
    }

    if (!$dara.isNull(request.lifecycleHookId)) {
      query["LifecycleHookId"] = request.lifecycleHookId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompleteLifecycleAction",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompleteLifecycleActionResponse>(await this.callApi(params, req, runtime), new $_model.CompleteLifecycleActionResponse({}));
  }

  /**
   * Ends the wait state of a scaling activity in advance to execute the next action if a lifecycle hook is configured for a scaling group.
   * 
   * @remarks
   * Allows you to specify the next action after the wait state ends: continue the scaling activity (CONTINUE), abandon the scaling activity (ABANDON), or perform a rollback (ROLLBACK).
   * 
   * @param request - CompleteLifecycleActionRequest
   * @returns CompleteLifecycleActionResponse
   */
  async completeLifecycleAction(request: $_model.CompleteLifecycleActionRequest): Promise<$_model.CompleteLifecycleActionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.completeLifecycleActionWithOptions(request, runtime);
  }

  /**
   * For workloads with bursty or unpredictable traffic patterns, call the CreateAlarm operation to create an event-triggered task. After the task is associated with CloudMonitor metrics, you can dynamically adjust the number of ECS or ECI instances in a scaling group and monitor instance metrics in real time to help you better manage and maintain cloud resources.
   * 
   * @remarks
   * - If you create an event-triggered task of the custom monitoring type (MetricType=custom), you must first report custom metric data to CloudMonitor. For more information, see [Custom monitoring event-triggered tasks](https://help.aliyun.com/document_detail/74861.html).
   * - When you create an event-triggered task, you must specify a metric (MetricName) and configure dimension information (Dimensions.DimensionKey and Dimensions.DimensionValue) to determine the aggregation scope of the metric data in the scaling group. For example, you can specify user_id and scaling_group to aggregate the metric data of all ECS or ECI instances for a specific user in a specific scaling group.
   *     - The metrics for custom monitoring event-triggered tasks (MetricType=custom) depend on your custom metrics.
   *     - For more information about the metrics supported by system monitoring event-triggered tasks (MetricType=system), see [System monitoring event-triggered tasks](https://help.aliyun.com/document_detail/74854.html).
   * > In the dimension information, user_id and scaling_group are automatically populated by the system, while device and state must be manually specified. For more information, see the Dimensions.DimensionKey and Dimensions.DimensionValue parameters.
   * 
   * @param request - CreateAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAlarmResponse
   */
  async createAlarmWithOptions(request: $_model.CreateAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAlarmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmActions)) {
      query["AlarmActions"] = request.alarmActions;
    }

    if (!$dara.isNull(request.comparisonOperator)) {
      query["ComparisonOperator"] = request.comparisonOperator;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.effective)) {
      query["Effective"] = request.effective;
    }

    if (!$dara.isNull(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!$dara.isNull(request.expressions)) {
      query["Expressions"] = request.expressions;
    }

    if (!$dara.isNull(request.expressionsLogicOperator)) {
      query["ExpressionsLogicOperator"] = request.expressionsLogicOperator;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.statistics)) {
      query["Statistics"] = request.statistics;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlarm",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAlarmResponse>(await this.callApi(params, req, runtime), new $_model.CreateAlarmResponse({}));
  }

  /**
   * For workloads with bursty or unpredictable traffic patterns, call the CreateAlarm operation to create an event-triggered task. After the task is associated with CloudMonitor metrics, you can dynamically adjust the number of ECS or ECI instances in a scaling group and monitor instance metrics in real time to help you better manage and maintain cloud resources.
   * 
   * @remarks
   * - If you create an event-triggered task of the custom monitoring type (MetricType=custom), you must first report custom metric data to CloudMonitor. For more information, see [Custom monitoring event-triggered tasks](https://help.aliyun.com/document_detail/74861.html).
   * - When you create an event-triggered task, you must specify a metric (MetricName) and configure dimension information (Dimensions.DimensionKey and Dimensions.DimensionValue) to determine the aggregation scope of the metric data in the scaling group. For example, you can specify user_id and scaling_group to aggregate the metric data of all ECS or ECI instances for a specific user in a specific scaling group.
   *     - The metrics for custom monitoring event-triggered tasks (MetricType=custom) depend on your custom metrics.
   *     - For more information about the metrics supported by system monitoring event-triggered tasks (MetricType=system), see [System monitoring event-triggered tasks](https://help.aliyun.com/document_detail/74854.html).
   * > In the dimension information, user_id and scaling_group are automatically populated by the system, while device and state must be manually specified. For more information, see the Dimensions.DimensionKey and Dimensions.DimensionValue parameters.
   * 
   * @param request - CreateAlarmRequest
   * @returns CreateAlarmResponse
   */
  async createAlarm(request: $_model.CreateAlarmRequest): Promise<$_model.CreateAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAlarmWithOptions(request, runtime);
  }

  /**
   * Creates a diagnostic report.
   * 
   * @param request - CreateDiagnoseReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDiagnoseReportResponse
   */
  async createDiagnoseReportWithOptions(request: $_model.CreateDiagnoseReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDiagnoseReportResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDiagnoseReport",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDiagnoseReportResponse>(await this.callApi(params, req, runtime), new $_model.CreateDiagnoseReportResponse({}));
  }

  /**
   * Creates a diagnostic report.
   * 
   * @param request - CreateDiagnoseReportRequest
   * @returns CreateDiagnoseReportResponse
   */
  async createDiagnoseReport(request: $_model.CreateDiagnoseReportRequest): Promise<$_model.CreateDiagnoseReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDiagnoseReportWithOptions(request, runtime);
  }

  /**
   * Creates an Elastic Container Instance (ECI) scaling configuration. Auto Scaling uses this scaling configuration as a template for ECI instances and performs automatic creation of ECI instances to meet your business needs when a scale-out activity is triggered.
   * 
   * @remarks
   * The scaling configuration specifies the template for ECI instances used during scale-out activities.
   * The Cpu and Memory parameters specify the range of vCPUs and memory to define the instance type. Auto Scaling determines the available instance types based on factors such as I/O optimization and zone, and creates the most cost-effective instance based on price sorting. This method applies only when the scaling policy of the scaling group is set to cost optimization and no instance type is specified in the scaling configuration.
   * 
   * @param request - CreateEciScalingConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEciScalingConfigurationResponse
   */
  async createEciScalingConfigurationWithOptions(request: $_model.CreateEciScalingConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEciScalingConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acrRegistryInfos)) {
      query["AcrRegistryInfos"] = request.acrRegistryInfos;
    }

    if (!$dara.isNull(request.activeDeadlineSeconds)) {
      query["ActiveDeadlineSeconds"] = request.activeDeadlineSeconds;
    }

    if (!$dara.isNull(request.autoCreateEip)) {
      query["AutoCreateEip"] = request.autoCreateEip;
    }

    if (!$dara.isNull(request.autoMatchImageCache)) {
      query["AutoMatchImageCache"] = request.autoMatchImageCache;
    }

    if (!$dara.isNull(request.containerGroupName)) {
      query["ContainerGroupName"] = request.containerGroupName;
    }

    if (!$dara.isNull(request.containers)) {
      query["Containers"] = request.containers;
    }

    if (!$dara.isNull(request.costOptimization)) {
      query["CostOptimization"] = request.costOptimization;
    }

    if (!$dara.isNull(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.cpuOptionsCore)) {
      query["CpuOptionsCore"] = request.cpuOptionsCore;
    }

    if (!$dara.isNull(request.cpuOptionsThreadsPerCore)) {
      query["CpuOptionsThreadsPerCore"] = request.cpuOptionsThreadsPerCore;
    }

    if (!$dara.isNull(request.dataCacheBucket)) {
      query["DataCacheBucket"] = request.dataCacheBucket;
    }

    if (!$dara.isNull(request.dataCacheBurstingEnabled)) {
      query["DataCacheBurstingEnabled"] = request.dataCacheBurstingEnabled;
    }

    if (!$dara.isNull(request.dataCachePL)) {
      query["DataCachePL"] = request.dataCachePL;
    }

    if (!$dara.isNull(request.dataCacheProvisionedIops)) {
      query["DataCacheProvisionedIops"] = request.dataCacheProvisionedIops;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dnsConfigNameServers)) {
      query["DnsConfigNameServers"] = request.dnsConfigNameServers;
    }

    if (!$dara.isNull(request.dnsConfigOptions)) {
      query["DnsConfigOptions"] = request.dnsConfigOptions;
    }

    if (!$dara.isNull(request.dnsConfigSearchs)) {
      query["DnsConfigSearchs"] = request.dnsConfigSearchs;
    }

    if (!$dara.isNull(request.dnsPolicy)) {
      query["DnsPolicy"] = request.dnsPolicy;
    }

    if (!$dara.isNull(request.egressBandwidth)) {
      query["EgressBandwidth"] = request.egressBandwidth;
    }

    if (!$dara.isNull(request.eipBandwidth)) {
      query["EipBandwidth"] = request.eipBandwidth;
    }

    if (!$dara.isNull(request.enableSls)) {
      query["EnableSls"] = request.enableSls;
    }

    if (!$dara.isNull(request.ephemeralStorage)) {
      query["EphemeralStorage"] = request.ephemeralStorage;
    }

    if (!$dara.isNull(request.gpuDriverVersion)) {
      query["GpuDriverVersion"] = request.gpuDriverVersion;
    }

    if (!$dara.isNull(request.hostAliases)) {
      query["HostAliases"] = request.hostAliases;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.imageRegistryCredentials)) {
      query["ImageRegistryCredentials"] = request.imageRegistryCredentials;
    }

    if (!$dara.isNull(request.imageSnapshotId)) {
      query["ImageSnapshotId"] = request.imageSnapshotId;
    }

    if (!$dara.isNull(request.ingressBandwidth)) {
      query["IngressBandwidth"] = request.ingressBandwidth;
    }

    if (!$dara.isNull(request.initContainers)) {
      query["InitContainers"] = request.initContainers;
    }

    if (!$dara.isNull(request.instanceFamilyLevel)) {
      query["InstanceFamilyLevel"] = request.instanceFamilyLevel;
    }

    if (!$dara.isNull(request.instanceTypes)) {
      query["InstanceTypes"] = request.instanceTypes;
    }

    if (!$dara.isNull(request.ipv6AddressCount)) {
      query["Ipv6AddressCount"] = request.ipv6AddressCount;
    }

    if (!$dara.isNull(request.loadBalancerWeight)) {
      query["LoadBalancerWeight"] = request.loadBalancerWeight;
    }

    if (!$dara.isNull(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.ntpServers)) {
      query["NtpServers"] = request.ntpServers;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.restartPolicy)) {
      query["RestartPolicy"] = request.restartPolicy;
    }

    if (!$dara.isNull(request.scalingConfigurationName)) {
      query["ScalingConfigurationName"] = request.scalingConfigurationName;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.securityContextSysctls)) {
      query["SecurityContextSysctls"] = request.securityContextSysctls;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.spotPriceLimit)) {
      query["SpotPriceLimit"] = request.spotPriceLimit;
    }

    if (!$dara.isNull(request.spotStrategy)) {
      query["SpotStrategy"] = request.spotStrategy;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.terminationGracePeriodSeconds)) {
      query["TerminationGracePeriodSeconds"] = request.terminationGracePeriodSeconds;
    }

    if (!$dara.isNull(request.volumes)) {
      query["Volumes"] = request.volumes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEciScalingConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEciScalingConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.CreateEciScalingConfigurationResponse({}));
  }

  /**
   * Creates an Elastic Container Instance (ECI) scaling configuration. Auto Scaling uses this scaling configuration as a template for ECI instances and performs automatic creation of ECI instances to meet your business needs when a scale-out activity is triggered.
   * 
   * @remarks
   * The scaling configuration specifies the template for ECI instances used during scale-out activities.
   * The Cpu and Memory parameters specify the range of vCPUs and memory to define the instance type. Auto Scaling determines the available instance types based on factors such as I/O optimization and zone, and creates the most cost-effective instance based on price sorting. This method applies only when the scaling policy of the scaling group is set to cost optimization and no instance type is specified in the scaling configuration.
   * 
   * @param request - CreateEciScalingConfigurationRequest
   * @returns CreateEciScalingConfigurationResponse
   */
  async createEciScalingConfiguration(request: $_model.CreateEciScalingConfigurationRequest): Promise<$_model.CreateEciScalingConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEciScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * The CreateLifecycleHook API creates one or more lifecycle hooks in a specified scaling group. These hooks intervene at critical stages of the instance lifecycle, such as before startup or termination, and allow you to perform custom operations, such as sending notifications or executing automation scripts. This feature enables finer-grained control and management. For example, you can perform validation, configuration, or data backup tasks before and after instances are affected by scaling activities, which enhances the flexibility and reliability of application deployments.
   * 
   * @remarks
   * You can create up to 10 lifecycle hooks in a scaling group. When a scaling activity occurs in a scaling group that has lifecycle hooks, the lifecycle hooks suspend the scaling activity for a period of time. You can specify the wait time by using the HeartbeatTimeout parameter. During the wait time, you can perform operations such as initializing the configurations of ECS instances and obtaining ECS instance data.
   * During a scale-out activity, ECS instances enter the wait state after they are added to the whitelist of an ApsaraDB RDS instance, and are added to the backend server group of a Server Load Balancer (SLB) instance after the wait state ends. During a scale-in activity, ECS instances enter the wait state after they are removed from the backend server group of the SLB instance, and are removed from the whitelist of the ApsaraDB RDS instance after the wait state ends.
   * You can configure notification methods for lifecycle hooks. Supported notification methods include Message Service (MNS) topics, MNS queues, and Operation Orchestration Service (OOS) templates. If you configure an OOS template, you must create a Resource Access Management (RAM) role for OOS. For more information, see [Grant RAM permissions to OOS](https://help.aliyun.com/document_detail/120810.html).
   * > If the scaling group contains existing ECS instances and the configured OOS template is used to add or remove instances from the whitelist of a cloud database other than ApsaraDB RDS, you must manually add the existing ECS instances to the whitelist of the cloud database.
   * 
   * @param request - CreateLifecycleHookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLifecycleHookResponse
   */
  async createLifecycleHookWithOptions(request: $_model.CreateLifecycleHookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLifecycleHookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defaultResult)) {
      query["DefaultResult"] = request.defaultResult;
    }

    if (!$dara.isNull(request.heartbeatTimeout)) {
      query["HeartbeatTimeout"] = request.heartbeatTimeout;
    }

    if (!$dara.isNull(request.lifecycleActionSources)) {
      query["LifecycleActionSources"] = request.lifecycleActionSources;
    }

    if (!$dara.isNull(request.lifecycleHookName)) {
      query["LifecycleHookName"] = request.lifecycleHookName;
    }

    if (!$dara.isNull(request.lifecycleTransition)) {
      query["LifecycleTransition"] = request.lifecycleTransition;
    }

    if (!$dara.isNull(request.notificationArn)) {
      query["NotificationArn"] = request.notificationArn;
    }

    if (!$dara.isNull(request.notificationMetadata)) {
      query["NotificationMetadata"] = request.notificationMetadata;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLifecycleHook",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLifecycleHookResponse>(await this.callApi(params, req, runtime), new $_model.CreateLifecycleHookResponse({}));
  }

  /**
   * The CreateLifecycleHook API creates one or more lifecycle hooks in a specified scaling group. These hooks intervene at critical stages of the instance lifecycle, such as before startup or termination, and allow you to perform custom operations, such as sending notifications or executing automation scripts. This feature enables finer-grained control and management. For example, you can perform validation, configuration, or data backup tasks before and after instances are affected by scaling activities, which enhances the flexibility and reliability of application deployments.
   * 
   * @remarks
   * You can create up to 10 lifecycle hooks in a scaling group. When a scaling activity occurs in a scaling group that has lifecycle hooks, the lifecycle hooks suspend the scaling activity for a period of time. You can specify the wait time by using the HeartbeatTimeout parameter. During the wait time, you can perform operations such as initializing the configurations of ECS instances and obtaining ECS instance data.
   * During a scale-out activity, ECS instances enter the wait state after they are added to the whitelist of an ApsaraDB RDS instance, and are added to the backend server group of a Server Load Balancer (SLB) instance after the wait state ends. During a scale-in activity, ECS instances enter the wait state after they are removed from the backend server group of the SLB instance, and are removed from the whitelist of the ApsaraDB RDS instance after the wait state ends.
   * You can configure notification methods for lifecycle hooks. Supported notification methods include Message Service (MNS) topics, MNS queues, and Operation Orchestration Service (OOS) templates. If you configure an OOS template, you must create a Resource Access Management (RAM) role for OOS. For more information, see [Grant RAM permissions to OOS](https://help.aliyun.com/document_detail/120810.html).
   * > If the scaling group contains existing ECS instances and the configured OOS template is used to add or remove instances from the whitelist of a cloud database other than ApsaraDB RDS, you must manually add the existing ECS instances to the whitelist of the cloud database.
   * 
   * @param request - CreateLifecycleHookRequest
   * @returns CreateLifecycleHookResponse
   */
  async createLifecycleHook(request: $_model.CreateLifecycleHookRequest): Promise<$_model.CreateLifecycleHookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLifecycleHookWithOptions(request, runtime);
  }

  /**
   * Creates a notification configuration for Auto Scaling events and resource changes to help you track scaling group dynamics and automate the management of Auto Scaling events.
   * 
   * @remarks
   * - You can configure the notification Settings to receive messages from cloud monitoring system events, Simple Message Queue (formerly MNS) queues, or Simple Message Queue (formerly MNS) topics. When a scaling event or resource change of a specified type occurs in a scaling group, Auto Scaling notifies cloud monitoring or Simple Message Queue (formerly MNS).
   * - Different event notifications within the same scaling group cannot use the same destination.
   *   For example, different event notifications cannot use the same cloud monitoring system event, the same MNS topic, or the same MNS queue at the same time.
   * 
   * @param request - CreateNotificationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNotificationConfigurationResponse
   */
  async createNotificationConfigurationWithOptions(request: $_model.CreateNotificationConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNotificationConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.messageEncoding)) {
      query["MessageEncoding"] = request.messageEncoding;
    }

    if (!$dara.isNull(request.notificationArn)) {
      query["NotificationArn"] = request.notificationArn;
    }

    if (!$dara.isNull(request.notificationTypes)) {
      query["NotificationTypes"] = request.notificationTypes;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.timeZone)) {
      query["TimeZone"] = request.timeZone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNotificationConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNotificationConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.CreateNotificationConfigurationResponse({}));
  }

  /**
   * Creates a notification configuration for Auto Scaling events and resource changes to help you track scaling group dynamics and automate the management of Auto Scaling events.
   * 
   * @remarks
   * - You can configure the notification Settings to receive messages from cloud monitoring system events, Simple Message Queue (formerly MNS) queues, or Simple Message Queue (formerly MNS) topics. When a scaling event or resource change of a specified type occurs in a scaling group, Auto Scaling notifies cloud monitoring or Simple Message Queue (formerly MNS).
   * - Different event notifications within the same scaling group cannot use the same destination.
   *   For example, different event notifications cannot use the same cloud monitoring system event, the same MNS topic, or the same MNS queue at the same time.
   * 
   * @param request - CreateNotificationConfigurationRequest
   * @returns CreateNotificationConfigurationResponse
   */
  async createNotificationConfiguration(request: $_model.CreateNotificationConfigurationRequest): Promise<$_model.CreateNotificationConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNotificationConfigurationWithOptions(request, runtime);
  }

  /**
   * Creates an ECS scaling configuration for a scaling group.
   * 
   * @remarks
   * A scaling configuration specifies the ECS instance template used during scale-out. The following instance configuration methods are supported:
   * - InstancePatternInfos: the intelligent configuration mode. You do not need to specify exact network types. You only need to specify the number of vCPUs, memory size, instance family level, and maximum price based on your business requirements. The system automatically filters network types that meet the requirements and preferentially selects the network type with the lowest price to create ECS instances. This mode applies only to scaling groups in a VPC and effectively reduces the chance of insufficient network type inventory during scale-out.
   * - InstanceType: specifies a single instance type.
   * - InstanceTypes: specifies multiple instance types.
   * - InstanceTypeOverrides: specifies multiple instance types and configures weights for different instance types.
   * - Cpu and Memory: specifies the range of instance types by defining the number of vCPUs and memory size. Auto Scaling determines the available instance types based on factors such as I/O optimization and zone, and creates instances with the lowest price. This method applies only when the scaling policy of the scaling group is set to cost optimization and no instance type is specified in the scaling configuration.
   * - You can use one of the following methods to bind the primary ENI. Note that you can use only one method to configure the primary ENI in a single call. Using both methods at the same time causes the call to fail and returns an error message.
   *     - Directly set the configuration information of the primary ENI by using parameters such as SecurityGroupId, SecurityGroupIds, and Ipv6AddressCount.
   *     - Set the configuration information of the primary ENI and secondary ENIs by using NetworkInterfaces. When you use the NetworkInterface parameter, you must set the primary ENI information. If NetworkInterface.InstanceType is set to Primary, it indicates the primary ENI. If NetworkInterface.InstanceType is set to Secondary or left empty, it indicates a secondary ENI.
   * > You cannot specify InstanceType, InstanceTypes, InstanceTypeOverrides, and Cpu and Memory at the same time. However, you can specify InstanceType or InstanceTypes together with InstancePatternInfos. When InstanceType or InstanceTypes is specified together with InstancePatternInfos, Auto Scaling preferentially uses the specified instance types for scale-out. If the specified instance types are out of stock, Auto Scaling uses the instance types that match the InstancePatternInfos configuration.
   * 
   * @param tmpReq - CreateScalingConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScalingConfigurationResponse
   */
  async createScalingConfigurationWithOptions(tmpReq: $_model.CreateScalingConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScalingConfigurationResponse> {
    tmpReq.validate();
    let request = new $_model.CreateScalingConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.schedulerOptions)) {
      request.schedulerOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.schedulerOptions, "SchedulerOptions", "json");
    }

    let query = { };
    if (!$dara.isNull(request.affinity)) {
      query["Affinity"] = request.affinity;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.creditSpecification)) {
      query["CreditSpecification"] = request.creditSpecification;
    }

    if (!$dara.isNull(request.customPriorities)) {
      query["CustomPriorities"] = request.customPriorities;
    }

    if (!$dara.isNull(request.dataDisks)) {
      query["DataDisks"] = request.dataDisks;
    }

    if (!$dara.isNull(request.dedicatedHostClusterId)) {
      query["DedicatedHostClusterId"] = request.dedicatedHostClusterId;
    }

    if (!$dara.isNull(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.deploymentSetId)) {
      query["DeploymentSetId"] = request.deploymentSetId;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.hpcClusterId)) {
      query["HpcClusterId"] = request.hpcClusterId;
    }

    if (!$dara.isNull(request.httpEndpoint)) {
      query["HttpEndpoint"] = request.httpEndpoint;
    }

    if (!$dara.isNull(request.httpTokens)) {
      query["HttpTokens"] = request.httpTokens;
    }

    if (!$dara.isNull(request.imageFamily)) {
      query["ImageFamily"] = request.imageFamily;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.instanceDescription)) {
      query["InstanceDescription"] = request.instanceDescription;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instancePatternInfos)) {
      query["InstancePatternInfos"] = request.instancePatternInfos;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.instanceTypeCandidateOptions)) {
      query["InstanceTypeCandidateOptions"] = request.instanceTypeCandidateOptions;
    }

    if (!$dara.isNull(request.instanceTypeOverrides)) {
      query["InstanceTypeOverrides"] = request.instanceTypeOverrides;
    }

    if (!$dara.isNull(request.instanceTypes)) {
      query["InstanceTypes"] = request.instanceTypes;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.internetMaxBandwidthIn)) {
      query["InternetMaxBandwidthIn"] = request.internetMaxBandwidthIn;
    }

    if (!$dara.isNull(request.internetMaxBandwidthOut)) {
      query["InternetMaxBandwidthOut"] = request.internetMaxBandwidthOut;
    }

    if (!$dara.isNull(request.ioOptimized)) {
      query["IoOptimized"] = request.ioOptimized;
    }

    if (!$dara.isNull(request.ipv6AddressCount)) {
      query["Ipv6AddressCount"] = request.ipv6AddressCount;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.loadBalancerWeight)) {
      query["LoadBalancerWeight"] = request.loadBalancerWeight;
    }

    if (!$dara.isNull(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.networkInterfaces)) {
      query["NetworkInterfaces"] = request.networkInterfaces;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.passwordInherit)) {
      query["PasswordInherit"] = request.passwordInherit;
    }

    if (!$dara.isNull(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourcePoolOptions)) {
      query["ResourcePoolOptions"] = request.resourcePoolOptions;
    }

    if (!$dara.isNull(request.scalingConfigurationName)) {
      query["ScalingConfigurationName"] = request.scalingConfigurationName;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.schedulerOptionsShrink)) {
      query["SchedulerOptions"] = request.schedulerOptionsShrink;
    }

    if (!$dara.isNull(request.secondaryEniVSwitchConstraint)) {
      query["SecondaryEniVSwitchConstraint"] = request.secondaryEniVSwitchConstraint;
    }

    if (!$dara.isNull(request.securityEnhancementStrategy)) {
      query["SecurityEnhancementStrategy"] = request.securityEnhancementStrategy;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.securityGroupIds)) {
      query["SecurityGroupIds"] = request.securityGroupIds;
    }

    if (!$dara.isNull(request.securityOptions)) {
      query["SecurityOptions"] = request.securityOptions;
    }

    if (!$dara.isNull(request.spotDuration)) {
      query["SpotDuration"] = request.spotDuration;
    }

    if (!$dara.isNull(request.spotInterruptionBehavior)) {
      query["SpotInterruptionBehavior"] = request.spotInterruptionBehavior;
    }

    if (!$dara.isNull(request.spotPriceLimits)) {
      query["SpotPriceLimits"] = request.spotPriceLimits;
    }

    if (!$dara.isNull(request.spotStrategy)) {
      query["SpotStrategy"] = request.spotStrategy;
    }

    if (!$dara.isNull(request.storageSetId)) {
      query["StorageSetId"] = request.storageSetId;
    }

    if (!$dara.isNull(request.storageSetPartitionNumber)) {
      query["StorageSetPartitionNumber"] = request.storageSetPartitionNumber;
    }

    if (!$dara.isNull(request.systemDiskCategories)) {
      query["SystemDiskCategories"] = request.systemDiskCategories;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.tenancy)) {
      query["Tenancy"] = request.tenancy;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    if (!$dara.isNull(request.imageOptions)) {
      query["ImageOptions"] = request.imageOptions;
    }

    if (!$dara.isNull(request.privatePoolOptions)) {
      query["PrivatePoolOptions"] = request.privatePoolOptions;
    }

    if (!$dara.isNull(request.systemDisk)) {
      query["SystemDisk"] = request.systemDisk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScalingConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScalingConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.CreateScalingConfigurationResponse({}));
  }

  /**
   * Creates an ECS scaling configuration for a scaling group.
   * 
   * @remarks
   * A scaling configuration specifies the ECS instance template used during scale-out. The following instance configuration methods are supported:
   * - InstancePatternInfos: the intelligent configuration mode. You do not need to specify exact network types. You only need to specify the number of vCPUs, memory size, instance family level, and maximum price based on your business requirements. The system automatically filters network types that meet the requirements and preferentially selects the network type with the lowest price to create ECS instances. This mode applies only to scaling groups in a VPC and effectively reduces the chance of insufficient network type inventory during scale-out.
   * - InstanceType: specifies a single instance type.
   * - InstanceTypes: specifies multiple instance types.
   * - InstanceTypeOverrides: specifies multiple instance types and configures weights for different instance types.
   * - Cpu and Memory: specifies the range of instance types by defining the number of vCPUs and memory size. Auto Scaling determines the available instance types based on factors such as I/O optimization and zone, and creates instances with the lowest price. This method applies only when the scaling policy of the scaling group is set to cost optimization and no instance type is specified in the scaling configuration.
   * - You can use one of the following methods to bind the primary ENI. Note that you can use only one method to configure the primary ENI in a single call. Using both methods at the same time causes the call to fail and returns an error message.
   *     - Directly set the configuration information of the primary ENI by using parameters such as SecurityGroupId, SecurityGroupIds, and Ipv6AddressCount.
   *     - Set the configuration information of the primary ENI and secondary ENIs by using NetworkInterfaces. When you use the NetworkInterface parameter, you must set the primary ENI information. If NetworkInterface.InstanceType is set to Primary, it indicates the primary ENI. If NetworkInterface.InstanceType is set to Secondary or left empty, it indicates a secondary ENI.
   * > You cannot specify InstanceType, InstanceTypes, InstanceTypeOverrides, and Cpu and Memory at the same time. However, you can specify InstanceType or InstanceTypes together with InstancePatternInfos. When InstanceType or InstanceTypes is specified together with InstancePatternInfos, Auto Scaling preferentially uses the specified instance types for scale-out. If the specified instance types are out of stock, Auto Scaling uses the instance types that match the InstancePatternInfos configuration.
   * 
   * @param request - CreateScalingConfigurationRequest
   * @returns CreateScalingConfigurationResponse
   */
  async createScalingConfiguration(request: $_model.CreateScalingConfigurationRequest): Promise<$_model.CreateScalingConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * Creates a scaling group to automatically adjust your computing capacity by adding or removing instances based on business demands and policies.
   * 
   * @remarks
   * A scaling group is a collection of ECS instances that share the same application scenarios.
   * The number of scaling groups that you can create in a region depends on your Auto Scaling usage. Go to Quota Center to check the quota for the total number of scaling groups.
   * A scaling group does not take effect immediately after it is created. You must invoke the [EnableScalingGroup](https://help.aliyun.com/document_detail/25939.html) operation to enable the scaling group before it can trigger scaling activities and execute scaling rules.
   * The scaling group, the associated Classic Load Balancer (CLB) instances, and the associated ApsaraDB RDS instances must reside in the same region. For more information, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * If you associate CLB instances with the scaling group, Auto Scaling automatically adds the ECS instances in the scaling group to the backend server groups of the CLB instances. You can specify the server groups to which the ECS instances are added. The following types of server groups are supported:
   * - Default server group: contains ECS instances that accept frontend requests. If a listener is not configured with a virtual server group or a primary/secondary server group, requests are forwarded to the ECS instances in the default server group by default.
   * - Virtual server group: used when you need to forward different requests to different backend servers, or forward requests based on domain names and URLs.
   * > If you specify both the default server group and multiple virtual server groups, the ECS instances are added to all these server groups.
   * After an instance is added to a backend server group of a CLB instance, the default weight of the instance is 50. The CLB instance must meet the following conditions:
   * - The CLB instance must be in the Active state. You can call the [DescribeLoadBalancers](https://help.aliyun.com/document_detail/2401696.html) operation to check the status of the CLB instance.
   * - Health checks must be enabled for all listeners configured on the CLB instance. Otherwise, the scaling group fails to be created.
   * If you associate Application Load Balancer (ALB) server groups, Network Load Balancer (NLB) server groups, or Gateway Load Balancer (GWLB) server groups with the scaling group, Auto Scaling automatically adds the ECS instances in the scaling group as backend servers to the ALB, NLB, or GWLB server groups to process access requests distributed by the ALB, NLB, or GWLB instances. You can specify multiple ALB, NLB, or GWLB server groups, but the server groups must belong to the same VPC as the scaling group. For more information, see [AttachAlbServerGroups](https://help.aliyun.com/document_detail/266800.html) or [AttachServerGroups](https://help.aliyun.com/document_detail/600535.html).
   * If you associate ApsaraDB RDS instances with the scaling group, Auto Scaling automatically adds the internal IP addresses of the ECS instances in the scaling group to the whitelists of the ApsaraDB RDS instances. The ApsaraDB RDS instances must meet the following conditions:
   * - The ApsaraDB RDS instance must be in the Running state. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) operation to check the status of the ApsaraDB RDS instance.
   * - The number of IP addresses in the whitelist of the ApsaraDB RDS instance cannot exceed the upper limit. For more information, see [Configure a whitelist](https://help.aliyun.com/document_detail/43185.html) in the ApsaraDB RDS documentation.
   * If the MultiAZPolicy parameter of the scaling group is set to COST_OPTIMIZED:
   * - If the OnDemandBaseCapacity, OnDemandPercentageAboveBaseCapacity, and SpotInstancePools parameters are specified, the instance allocation method under the cost optimization policy is specified. This allocation method is prioritized during scale-out and scale-in.
   * - If the OnDemandBaseCapacity, OnDemandPercentageAboveBaseCapacity, or SpotInstancePools parameter is not specified, instances are created based on the lowest cost under the cost optimization policy. In this mode, you cannot create instances by using elasticity assurances or capacity reservations, and you cannot specify the vSwitch to which secondary elastic network interfaces (ENIs) belong.
   * If you configure propagatable tags for the scaling group, which means `Tags.Propagate` is set to true:
   * - Tags on the scaling group are propagated only to newly created instances, not to existing instances in the scaling group.
   * - If you specify instance tags in the scaling configuration and choose to propagate the tags of the scaling group to the instances, all tags coexist.
   * - If a tag in the scaling configuration and a propagatable tag in the scaling group have the same tag key, the tag value in the scaling configuration takes precedence.
   * 
   * @param request - CreateScalingGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScalingGroupResponse
   */
  async createScalingGroupWithOptions(request: $_model.CreateScalingGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScalingGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.albServerGroups)) {
      query["AlbServerGroups"] = request.albServerGroups;
    }

    if (!$dara.isNull(request.allocationStrategy)) {
      query["AllocationStrategy"] = request.allocationStrategy;
    }

    if (!$dara.isNull(request.autoRebalance)) {
      query["AutoRebalance"] = request.autoRebalance;
    }

    if (!$dara.isNull(request.azBalance)) {
      query["AzBalance"] = request.azBalance;
    }

    if (!$dara.isNull(request.balanceMode)) {
      query["BalanceMode"] = request.balanceMode;
    }

    if (!$dara.isNull(request.capacityOptions)) {
      query["CapacityOptions"] = request.capacityOptions;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.compensateWithOnDemand)) {
      query["CompensateWithOnDemand"] = request.compensateWithOnDemand;
    }

    if (!$dara.isNull(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!$dara.isNull(request.customPolicyARN)) {
      query["CustomPolicyARN"] = request.customPolicyARN;
    }

    if (!$dara.isNull(request.DBInstanceIds)) {
      query["DBInstanceIds"] = request.DBInstanceIds;
    }

    if (!$dara.isNull(request.DBInstances)) {
      query["DBInstances"] = request.DBInstances;
    }

    if (!$dara.isNull(request.defaultCooldown)) {
      query["DefaultCooldown"] = request.defaultCooldown;
    }

    if (!$dara.isNull(request.desiredCapacity)) {
      query["DesiredCapacity"] = request.desiredCapacity;
    }

    if (!$dara.isNull(request.groupDeletionProtection)) {
      query["GroupDeletionProtection"] = request.groupDeletionProtection;
    }

    if (!$dara.isNull(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!$dara.isNull(request.healthCheckType)) {
      query["HealthCheckType"] = request.healthCheckType;
    }

    if (!$dara.isNull(request.healthCheckTypes)) {
      query["HealthCheckTypes"] = request.healthCheckTypes;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.launchTemplateId)) {
      query["LaunchTemplateId"] = request.launchTemplateId;
    }

    if (!$dara.isNull(request.launchTemplateOverrides)) {
      query["LaunchTemplateOverrides"] = request.launchTemplateOverrides;
    }

    if (!$dara.isNull(request.launchTemplateVersion)) {
      query["LaunchTemplateVersion"] = request.launchTemplateVersion;
    }

    if (!$dara.isNull(request.lifecycleHooks)) {
      query["LifecycleHooks"] = request.lifecycleHooks;
    }

    if (!$dara.isNull(request.loadBalancerConfigs)) {
      query["LoadBalancerConfigs"] = request.loadBalancerConfigs;
    }

    if (!$dara.isNull(request.loadBalancerIds)) {
      query["LoadBalancerIds"] = request.loadBalancerIds;
    }

    if (!$dara.isNull(request.maxInstanceLifetime)) {
      query["MaxInstanceLifetime"] = request.maxInstanceLifetime;
    }

    if (!$dara.isNull(request.maxSize)) {
      query["MaxSize"] = request.maxSize;
    }

    if (!$dara.isNull(request.minSize)) {
      query["MinSize"] = request.minSize;
    }

    if (!$dara.isNull(request.multiAZPolicy)) {
      query["MultiAZPolicy"] = request.multiAZPolicy;
    }

    if (!$dara.isNull(request.onDemandBaseCapacity)) {
      query["OnDemandBaseCapacity"] = request.onDemandBaseCapacity;
    }

    if (!$dara.isNull(request.onDemandPercentageAboveBaseCapacity)) {
      query["OnDemandPercentageAboveBaseCapacity"] = request.onDemandPercentageAboveBaseCapacity;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.removalPolicies)) {
      query["RemovalPolicies"] = request.removalPolicies;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupName)) {
      query["ScalingGroupName"] = request.scalingGroupName;
    }

    if (!$dara.isNull(request.scalingPolicy)) {
      query["ScalingPolicy"] = request.scalingPolicy;
    }

    if (!$dara.isNull(request.serverGroups)) {
      query["ServerGroups"] = request.serverGroups;
    }

    if (!$dara.isNull(request.spotAllocationStrategy)) {
      query["SpotAllocationStrategy"] = request.spotAllocationStrategy;
    }

    if (!$dara.isNull(request.spotInstancePools)) {
      query["SpotInstancePools"] = request.spotInstancePools;
    }

    if (!$dara.isNull(request.spotInstanceRemedy)) {
      query["SpotInstanceRemedy"] = request.spotInstanceRemedy;
    }

    if (!$dara.isNull(request.stopInstanceTimeout)) {
      query["StopInstanceTimeout"] = request.stopInstanceTimeout;
    }

    if (!$dara.isNull(request.syncAlarmRuleToCms)) {
      query["SyncAlarmRuleToCms"] = request.syncAlarmRuleToCms;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.VServerGroups)) {
      query["VServerGroups"] = request.VServerGroups;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    if (!$dara.isNull(request.zoneShiftPolicy)) {
      query["ZoneShiftPolicy"] = request.zoneShiftPolicy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScalingGroup",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScalingGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateScalingGroupResponse({}));
  }

  /**
   * Creates a scaling group to automatically adjust your computing capacity by adding or removing instances based on business demands and policies.
   * 
   * @remarks
   * A scaling group is a collection of ECS instances that share the same application scenarios.
   * The number of scaling groups that you can create in a region depends on your Auto Scaling usage. Go to Quota Center to check the quota for the total number of scaling groups.
   * A scaling group does not take effect immediately after it is created. You must invoke the [EnableScalingGroup](https://help.aliyun.com/document_detail/25939.html) operation to enable the scaling group before it can trigger scaling activities and execute scaling rules.
   * The scaling group, the associated Classic Load Balancer (CLB) instances, and the associated ApsaraDB RDS instances must reside in the same region. For more information, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * If you associate CLB instances with the scaling group, Auto Scaling automatically adds the ECS instances in the scaling group to the backend server groups of the CLB instances. You can specify the server groups to which the ECS instances are added. The following types of server groups are supported:
   * - Default server group: contains ECS instances that accept frontend requests. If a listener is not configured with a virtual server group or a primary/secondary server group, requests are forwarded to the ECS instances in the default server group by default.
   * - Virtual server group: used when you need to forward different requests to different backend servers, or forward requests based on domain names and URLs.
   * > If you specify both the default server group and multiple virtual server groups, the ECS instances are added to all these server groups.
   * After an instance is added to a backend server group of a CLB instance, the default weight of the instance is 50. The CLB instance must meet the following conditions:
   * - The CLB instance must be in the Active state. You can call the [DescribeLoadBalancers](https://help.aliyun.com/document_detail/2401696.html) operation to check the status of the CLB instance.
   * - Health checks must be enabled for all listeners configured on the CLB instance. Otherwise, the scaling group fails to be created.
   * If you associate Application Load Balancer (ALB) server groups, Network Load Balancer (NLB) server groups, or Gateway Load Balancer (GWLB) server groups with the scaling group, Auto Scaling automatically adds the ECS instances in the scaling group as backend servers to the ALB, NLB, or GWLB server groups to process access requests distributed by the ALB, NLB, or GWLB instances. You can specify multiple ALB, NLB, or GWLB server groups, but the server groups must belong to the same VPC as the scaling group. For more information, see [AttachAlbServerGroups](https://help.aliyun.com/document_detail/266800.html) or [AttachServerGroups](https://help.aliyun.com/document_detail/600535.html).
   * If you associate ApsaraDB RDS instances with the scaling group, Auto Scaling automatically adds the internal IP addresses of the ECS instances in the scaling group to the whitelists of the ApsaraDB RDS instances. The ApsaraDB RDS instances must meet the following conditions:
   * - The ApsaraDB RDS instance must be in the Running state. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) operation to check the status of the ApsaraDB RDS instance.
   * - The number of IP addresses in the whitelist of the ApsaraDB RDS instance cannot exceed the upper limit. For more information, see [Configure a whitelist](https://help.aliyun.com/document_detail/43185.html) in the ApsaraDB RDS documentation.
   * If the MultiAZPolicy parameter of the scaling group is set to COST_OPTIMIZED:
   * - If the OnDemandBaseCapacity, OnDemandPercentageAboveBaseCapacity, and SpotInstancePools parameters are specified, the instance allocation method under the cost optimization policy is specified. This allocation method is prioritized during scale-out and scale-in.
   * - If the OnDemandBaseCapacity, OnDemandPercentageAboveBaseCapacity, or SpotInstancePools parameter is not specified, instances are created based on the lowest cost under the cost optimization policy. In this mode, you cannot create instances by using elasticity assurances or capacity reservations, and you cannot specify the vSwitch to which secondary elastic network interfaces (ENIs) belong.
   * If you configure propagatable tags for the scaling group, which means `Tags.Propagate` is set to true:
   * - Tags on the scaling group are propagated only to newly created instances, not to existing instances in the scaling group.
   * - If you specify instance tags in the scaling configuration and choose to propagate the tags of the scaling group to the instances, all tags coexist.
   * - If a tag in the scaling configuration and a propagatable tag in the scaling group have the same tag key, the tag value in the scaling configuration takes precedence.
   * 
   * @param request - CreateScalingGroupRequest
   * @returns CreateScalingGroupResponse
   */
  async createScalingGroup(request: $_model.CreateScalingGroupRequest): Promise<$_model.CreateScalingGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScalingGroupWithOptions(request, runtime);
  }

  /**
   * Creates a scaling rule. The purpose of a scaling rule is determined by its type and can be used to trigger a scaling activity or intelligently configure the boundary values of a scaling group. You can create different types of scaling rules based on your business requirements. For example, if you only need to configure the boundary values of a scaling group, select the predictive scaling rule type.
   * 
   * @remarks
   * A scaling rule defines specific scale-out or scale-in operations, such as adding or removing N instances. If executing a scaling rule causes the number of ECS or ECI instances in the scaling group to fall below MinSize or exceed MaxSize, Auto Scaling automatically adjusts the number of ECS or ECI instances to be added or removed so that the total number of instances reaches MinSize or MaxSize. However, the configured value of the scaling rule remains unchanged. Examples:
   * - For a scaling group with MaxSize set to 3 and a current total capacity of 2, if the scaling rule specifies adding 3 ECS instances, only 1 ECS instance is added during actual execution, but the configured value of the scaling rule remains 3.
   * - For a scaling group with MinSize set to 2 and a current total capacity of 3, if the scaling rule specifies removing 5 ECS instances, only 1 ECS instance is removed during actual execution, but the configured value of the scaling rule remains 5.
   * Note the following parameter descriptions:
   * - If AdjustmentType is set to TotalCapacity, the number of ECS or ECI instances in the scaling group is adjusted to the specified number. The corresponding AdjustmentValue must be greater than or equal to 0.
   * - If AdjustmentType is set to QuantityChangeInCapacity or PercentChangeInCapacity, a positive AdjustmentValue indicates to increase instances, and a negative value indicates to decrease instances.
   * - If AdjustmentType is set to PercentChangeInCapacity, Auto Scaling calculates the number of ECS instances or ECI instances to be added or removed by using the formula: Current total capacity × AdjustmentValue / 100, and uses the rounding principle to confirm the number of ECS instances or ECI instances to increase or decrease.
   * - If a cooldown time (Cooldown) is specified for the scaling rule, the scaling group enters the cooldown state for the specified duration after the scaling activity triggered by the rule is completed. If no cooldown time is specified for the scaling rule, the default cooldown time (DefaultCooldown) of the scaling group is used.
   * - The number of scaling rules that can be created in a scaling group is limited. For more information, see [Limits](https://help.aliyun.com/document_detail/25863.html).
   * - The returned unique identifier of the scaling rule (ScalingRuleAri) can be used in the following API operations:
   *     - Specify it in the ScalingRuleAri parameter of the ExecuteScalingRule operation to manually execute the scaling rule.
   *     - Specify it in the ScheduledAction parameter of the CreateScheduledTask operation to execute the scaling rule on a schedule.
   * 
   * @param request - CreateScalingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScalingRuleResponse
   */
  async createScalingRuleWithOptions(request: $_model.CreateScalingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScalingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adjustmentType)) {
      query["AdjustmentType"] = request.adjustmentType;
    }

    if (!$dara.isNull(request.adjustmentValue)) {
      query["AdjustmentValue"] = request.adjustmentValue;
    }

    if (!$dara.isNull(request.alarmDimensions)) {
      query["AlarmDimensions"] = request.alarmDimensions;
    }

    if (!$dara.isNull(request.alarmOptions)) {
      query["AlarmOptions"] = request.alarmOptions;
    }

    if (!$dara.isNull(request.cooldown)) {
      query["Cooldown"] = request.cooldown;
    }

    if (!$dara.isNull(request.disableScaleIn)) {
      query["DisableScaleIn"] = request.disableScaleIn;
    }

    if (!$dara.isNull(request.estimatedInstanceWarmup)) {
      query["EstimatedInstanceWarmup"] = request.estimatedInstanceWarmup;
    }

    if (!$dara.isNull(request.hybridMetrics)) {
      query["HybridMetrics"] = request.hybridMetrics;
    }

    if (!$dara.isNull(request.hybridMonitorNamespace)) {
      query["HybridMonitorNamespace"] = request.hybridMonitorNamespace;
    }

    if (!$dara.isNull(request.initialMaxSize)) {
      query["InitialMaxSize"] = request.initialMaxSize;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.minAdjustmentMagnitude)) {
      query["MinAdjustmentMagnitude"] = request.minAdjustmentMagnitude;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.predictiveScalingMode)) {
      query["PredictiveScalingMode"] = request.predictiveScalingMode;
    }

    if (!$dara.isNull(request.predictiveTaskBufferTime)) {
      query["PredictiveTaskBufferTime"] = request.predictiveTaskBufferTime;
    }

    if (!$dara.isNull(request.predictiveValueBehavior)) {
      query["PredictiveValueBehavior"] = request.predictiveValueBehavior;
    }

    if (!$dara.isNull(request.predictiveValueBuffer)) {
      query["PredictiveValueBuffer"] = request.predictiveValueBuffer;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scaleInEvaluationCount)) {
      query["ScaleInEvaluationCount"] = request.scaleInEvaluationCount;
    }

    if (!$dara.isNull(request.scaleOutEvaluationCount)) {
      query["ScaleOutEvaluationCount"] = request.scaleOutEvaluationCount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    if (!$dara.isNull(request.scalingRuleType)) {
      query["ScalingRuleType"] = request.scalingRuleType;
    }

    if (!$dara.isNull(request.stepAdjustments)) {
      query["StepAdjustments"] = request.stepAdjustments;
    }

    if (!$dara.isNull(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScalingRule",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateScalingRuleResponse({}));
  }

  /**
   * Creates a scaling rule. The purpose of a scaling rule is determined by its type and can be used to trigger a scaling activity or intelligently configure the boundary values of a scaling group. You can create different types of scaling rules based on your business requirements. For example, if you only need to configure the boundary values of a scaling group, select the predictive scaling rule type.
   * 
   * @remarks
   * A scaling rule defines specific scale-out or scale-in operations, such as adding or removing N instances. If executing a scaling rule causes the number of ECS or ECI instances in the scaling group to fall below MinSize or exceed MaxSize, Auto Scaling automatically adjusts the number of ECS or ECI instances to be added or removed so that the total number of instances reaches MinSize or MaxSize. However, the configured value of the scaling rule remains unchanged. Examples:
   * - For a scaling group with MaxSize set to 3 and a current total capacity of 2, if the scaling rule specifies adding 3 ECS instances, only 1 ECS instance is added during actual execution, but the configured value of the scaling rule remains 3.
   * - For a scaling group with MinSize set to 2 and a current total capacity of 3, if the scaling rule specifies removing 5 ECS instances, only 1 ECS instance is removed during actual execution, but the configured value of the scaling rule remains 5.
   * Note the following parameter descriptions:
   * - If AdjustmentType is set to TotalCapacity, the number of ECS or ECI instances in the scaling group is adjusted to the specified number. The corresponding AdjustmentValue must be greater than or equal to 0.
   * - If AdjustmentType is set to QuantityChangeInCapacity or PercentChangeInCapacity, a positive AdjustmentValue indicates to increase instances, and a negative value indicates to decrease instances.
   * - If AdjustmentType is set to PercentChangeInCapacity, Auto Scaling calculates the number of ECS instances or ECI instances to be added or removed by using the formula: Current total capacity × AdjustmentValue / 100, and uses the rounding principle to confirm the number of ECS instances or ECI instances to increase or decrease.
   * - If a cooldown time (Cooldown) is specified for the scaling rule, the scaling group enters the cooldown state for the specified duration after the scaling activity triggered by the rule is completed. If no cooldown time is specified for the scaling rule, the default cooldown time (DefaultCooldown) of the scaling group is used.
   * - The number of scaling rules that can be created in a scaling group is limited. For more information, see [Limits](https://help.aliyun.com/document_detail/25863.html).
   * - The returned unique identifier of the scaling rule (ScalingRuleAri) can be used in the following API operations:
   *     - Specify it in the ScalingRuleAri parameter of the ExecuteScalingRule operation to manually execute the scaling rule.
   *     - Specify it in the ScheduledAction parameter of the CreateScheduledTask operation to execute the scaling rule on a schedule.
   * 
   * @param request - CreateScalingRuleRequest
   * @returns CreateScalingRuleResponse
   */
  async createScalingRule(request: $_model.CreateScalingRuleRequest): Promise<$_model.CreateScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScalingRuleWithOptions(request, runtime);
  }

  /**
   * Creates a scheduled task. A scheduled task is a preset node. You can invoke the CreateScheduledTask API to create a scheduled task that executes a specified scaling rule at a specified time to automatically scale the compute resource, meeting business requirements while controlling costs.
   * 
   * @remarks
   * - If a scheduled node has failed to trigger the execution of the scaling rule because a scaling activity is in progress or the scaling group is disabled, the scheduled node automatically retries within the `LaunchExpirationTime` period. Otherwise, the scheduled trigger is canceled.
   * - If multiple scheduled nodes trigger scaling rules for the same scaling group at approximately the same time, the details of the triggered scaling activities are as follows:
   *     - **Scaling groups with Settings for the expected number of instances**: Scaling activities triggered by multiple scheduled nodes are of the parallel scaling activity type. For example, if multiple scheduled nodes are executed at approximately the same time, the scaling group can trigger multiple parallel scaling activity executions simultaneously.
   *     - **Scaling groups without Settings for the expected number of instances**: The earliest triggered scheduled node executes the scaling activity first. Because a scaling group can run only one scaling activity at a time, subsequent scheduled nodes automatically retry within the `LaunchExpirationTime` period. If a subsequent scheduled node is still retrying within the `LaunchExpirationTime` period after the previous scaling activity is completed, the scaling rule of the scheduled node is executed and the corresponding scaling activity is triggered.
   * - Scheduled nodes support the following two scaling methods:
   *     - Specify the scaling rule to be executed by using the ScheduledAction parameter.
   *     - Specify the number of instances in the scaling group by using the ScalingGroupId parameter.
   *   > You cannot specify both ScheduledAction and ScalingGroupId at the same time.
   * 
   * @param request - CreateScheduledTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScheduledTaskResponse
   */
  async createScheduledTaskWithOptions(request: $_model.CreateScheduledTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScheduledTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.desiredCapacity)) {
      query["DesiredCapacity"] = request.desiredCapacity;
    }

    if (!$dara.isNull(request.launchExpirationTime)) {
      query["LaunchExpirationTime"] = request.launchExpirationTime;
    }

    if (!$dara.isNull(request.launchTime)) {
      query["LaunchTime"] = request.launchTime;
    }

    if (!$dara.isNull(request.maxValue)) {
      query["MaxValue"] = request.maxValue;
    }

    if (!$dara.isNull(request.minValue)) {
      query["MinValue"] = request.minValue;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.recurrenceEndTime)) {
      query["RecurrenceEndTime"] = request.recurrenceEndTime;
    }

    if (!$dara.isNull(request.recurrenceType)) {
      query["RecurrenceType"] = request.recurrenceType;
    }

    if (!$dara.isNull(request.recurrenceValue)) {
      query["RecurrenceValue"] = request.recurrenceValue;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.scheduledAction)) {
      query["ScheduledAction"] = request.scheduledAction;
    }

    if (!$dara.isNull(request.scheduledTaskName)) {
      query["ScheduledTaskName"] = request.scheduledTaskName;
    }

    if (!$dara.isNull(request.taskEnabled)) {
      query["TaskEnabled"] = request.taskEnabled;
    }

    if (!$dara.isNull(request.warmPoolCapacityOptions)) {
      query["WarmPoolCapacityOptions"] = request.warmPoolCapacityOptions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScheduledTask",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScheduledTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateScheduledTaskResponse({}));
  }

  /**
   * Creates a scheduled task. A scheduled task is a preset node. You can invoke the CreateScheduledTask API to create a scheduled task that executes a specified scaling rule at a specified time to automatically scale the compute resource, meeting business requirements while controlling costs.
   * 
   * @remarks
   * - If a scheduled node has failed to trigger the execution of the scaling rule because a scaling activity is in progress or the scaling group is disabled, the scheduled node automatically retries within the `LaunchExpirationTime` period. Otherwise, the scheduled trigger is canceled.
   * - If multiple scheduled nodes trigger scaling rules for the same scaling group at approximately the same time, the details of the triggered scaling activities are as follows:
   *     - **Scaling groups with Settings for the expected number of instances**: Scaling activities triggered by multiple scheduled nodes are of the parallel scaling activity type. For example, if multiple scheduled nodes are executed at approximately the same time, the scaling group can trigger multiple parallel scaling activity executions simultaneously.
   *     - **Scaling groups without Settings for the expected number of instances**: The earliest triggered scheduled node executes the scaling activity first. Because a scaling group can run only one scaling activity at a time, subsequent scheduled nodes automatically retry within the `LaunchExpirationTime` period. If a subsequent scheduled node is still retrying within the `LaunchExpirationTime` period after the previous scaling activity is completed, the scaling rule of the scheduled node is executed and the corresponding scaling activity is triggered.
   * - Scheduled nodes support the following two scaling methods:
   *     - Specify the scaling rule to be executed by using the ScheduledAction parameter.
   *     - Specify the number of instances in the scaling group by using the ScalingGroupId parameter.
   *   > You cannot specify both ScheduledAction and ScalingGroupId at the same time.
   * 
   * @param request - CreateScheduledTaskRequest
   * @returns CreateScheduledTaskResponse
   */
  async createScheduledTask(request: $_model.CreateScheduledTaskRequest): Promise<$_model.CreateScheduledTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScheduledTaskWithOptions(request, runtime);
  }

  /**
   * 使指定伸缩配置进入失效状态
   * 
   * @param request - DeactivateScalingConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeactivateScalingConfigurationResponse
   */
  async deactivateScalingConfigurationWithOptions(request: $_model.DeactivateScalingConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeactivateScalingConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingConfigurationId)) {
      query["ScalingConfigurationId"] = request.scalingConfigurationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeactivateScalingConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeactivateScalingConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.DeactivateScalingConfigurationResponse({}));
  }

  /**
   * 使指定伸缩配置进入失效状态
   * 
   * @param request - DeactivateScalingConfigurationRequest
   * @returns DeactivateScalingConfigurationResponse
   */
  async deactivateScalingConfiguration(request: $_model.DeactivateScalingConfigurationRequest): Promise<$_model.DeactivateScalingConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deactivateScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * Deletes an event-triggered task. If your business pattern is unpredictable or prone to unforeseen traffic spikes, you can create event-triggered tasks by associating CloudMonitor metrics to effectively monitor fluctuations in your business workload. Upon detecting that the criteria for alerts, as specified in event-triggered tasks, are fulfilled, Auto Scaling promptly issues alerts and executes the scaling rules predefined within those tasks. This process occurs within the predefined effective time windows of the tasks, thereby facilitating the automatic increase or decrease of Elastic Compute Service (ECS) instances or elastic container instances within your scaling groups. Ultimately, this mechanism ensures the dynamic optimization of resources based on real-time workload demands. If you no longer need an event-triggered task, you can call the DeleteAlarm operation to delete it.
   * 
   * @param request - DeleteAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlarmResponse
   */
  async deleteAlarmWithOptions(request: $_model.DeleteAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlarmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmTaskId)) {
      query["AlarmTaskId"] = request.alarmTaskId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlarm",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAlarmResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAlarmResponse({}));
  }

  /**
   * Deletes an event-triggered task. If your business pattern is unpredictable or prone to unforeseen traffic spikes, you can create event-triggered tasks by associating CloudMonitor metrics to effectively monitor fluctuations in your business workload. Upon detecting that the criteria for alerts, as specified in event-triggered tasks, are fulfilled, Auto Scaling promptly issues alerts and executes the scaling rules predefined within those tasks. This process occurs within the predefined effective time windows of the tasks, thereby facilitating the automatic increase or decrease of Elastic Compute Service (ECS) instances or elastic container instances within your scaling groups. Ultimately, this mechanism ensures the dynamic optimization of resources based on real-time workload demands. If you no longer need an event-triggered task, you can call the DeleteAlarm operation to delete it.
   * 
   * @param request - DeleteAlarmRequest
   * @returns DeleteAlarmResponse
   */
  async deleteAlarm(request: $_model.DeleteAlarmRequest): Promise<$_model.DeleteAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAlarmWithOptions(request, runtime);
  }

  /**
   * Deletes a health diagnosis report for a scaling group.
   * 
   * @param request - DeleteDiagnoseReportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDiagnoseReportResponse
   */
  async deleteDiagnoseReportWithOptions(request: $_model.DeleteDiagnoseReportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDiagnoseReportResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDiagnoseReport",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDiagnoseReportResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDiagnoseReportResponse({}));
  }

  /**
   * Deletes a health diagnosis report for a scaling group.
   * 
   * @param request - DeleteDiagnoseReportRequest
   * @returns DeleteDiagnoseReportResponse
   */
  async deleteDiagnoseReport(request: $_model.DeleteDiagnoseReportRequest): Promise<$_model.DeleteDiagnoseReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDiagnoseReportWithOptions(request, runtime);
  }

  /**
   * Deletes a scaling configuration of the Elastic Container Instance type. If the scaling configuration of a scaling group is in the Inactive state and the scaling group contains no elastic container instances created from the scaling configuration, you can call the DeleteEciScalingConfiguration operation to delete the scaling configuration to free up the scaling configuration quota.
   * 
   * @remarks
   * You cannot call this operation to delete a scaling configuration in the following scenarios:
   * *   The scaling configuration is in the Active state.
   * *   The scaling group contains elastic container instances created from the scaling configuration.
   * 
   * @param request - DeleteEciScalingConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEciScalingConfigurationResponse
   */
  async deleteEciScalingConfigurationWithOptions(request: $_model.DeleteEciScalingConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEciScalingConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingConfigurationId)) {
      query["ScalingConfigurationId"] = request.scalingConfigurationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEciScalingConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEciScalingConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEciScalingConfigurationResponse({}));
  }

  /**
   * Deletes a scaling configuration of the Elastic Container Instance type. If the scaling configuration of a scaling group is in the Inactive state and the scaling group contains no elastic container instances created from the scaling configuration, you can call the DeleteEciScalingConfiguration operation to delete the scaling configuration to free up the scaling configuration quota.
   * 
   * @remarks
   * You cannot call this operation to delete a scaling configuration in the following scenarios:
   * *   The scaling configuration is in the Active state.
   * *   The scaling group contains elastic container instances created from the scaling configuration.
   * 
   * @param request - DeleteEciScalingConfigurationRequest
   * @returns DeleteEciScalingConfigurationResponse
   */
  async deleteEciScalingConfiguration(request: $_model.DeleteEciScalingConfigurationRequest): Promise<$_model.DeleteEciScalingConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEciScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * Deletes a lifecycle hook. If you no longer require a lifecycle hook, you can call the DeleteLifecycleHook operation to delete it, which frees up the lifecycle hook quota.
   * 
   * @remarks
   * If you delete an effective lifecycle hook before its timeout period ends, the instances on which the lifecycle hook takes effect exits the Pending state ahead of schedule. You can use the following methods to delete a lifecycle hook:
   * *   Include `LifecycleHookId` within your request to specify the lifecycle hook that you want to delete. In this case, `ScalingGroupId` and `LifecycleHookName` are ignored.
   * *   Include `ScalingGroupId` and `LifecycleHookName` within your request to specify the lifecycle hook that you want to delete.
   * 
   * @param request - DeleteLifecycleHookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLifecycleHookResponse
   */
  async deleteLifecycleHookWithOptions(request: $_model.DeleteLifecycleHookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLifecycleHookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lifecycleHookId)) {
      query["LifecycleHookId"] = request.lifecycleHookId;
    }

    if (!$dara.isNull(request.lifecycleHookName)) {
      query["LifecycleHookName"] = request.lifecycleHookName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLifecycleHook",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLifecycleHookResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLifecycleHookResponse({}));
  }

  /**
   * Deletes a lifecycle hook. If you no longer require a lifecycle hook, you can call the DeleteLifecycleHook operation to delete it, which frees up the lifecycle hook quota.
   * 
   * @remarks
   * If you delete an effective lifecycle hook before its timeout period ends, the instances on which the lifecycle hook takes effect exits the Pending state ahead of schedule. You can use the following methods to delete a lifecycle hook:
   * *   Include `LifecycleHookId` within your request to specify the lifecycle hook that you want to delete. In this case, `ScalingGroupId` and `LifecycleHookName` are ignored.
   * *   Include `ScalingGroupId` and `LifecycleHookName` within your request to specify the lifecycle hook that you want to delete.
   * 
   * @param request - DeleteLifecycleHookRequest
   * @returns DeleteLifecycleHookResponse
   */
  async deleteLifecycleHook(request: $_model.DeleteLifecycleHookRequest): Promise<$_model.DeleteLifecycleHookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLifecycleHookWithOptions(request, runtime);
  }

  /**
   * Deletes event notification rules. The event notification feature facilitates efficient issue identification and event management by automatically forwarding notifications from Auto Scaling to designated endpoints such as CloudMonitor or Message Service (MNS) topics and queues. If you no longer require an event notification rule, you can call the DeleteNotificationConfiguration operation to delete it.
   * 
   * @param request - DeleteNotificationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNotificationConfigurationResponse
   */
  async deleteNotificationConfigurationWithOptions(request: $_model.DeleteNotificationConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNotificationConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.notificationArn)) {
      query["NotificationArn"] = request.notificationArn;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNotificationConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNotificationConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNotificationConfigurationResponse({}));
  }

  /**
   * Deletes event notification rules. The event notification feature facilitates efficient issue identification and event management by automatically forwarding notifications from Auto Scaling to designated endpoints such as CloudMonitor or Message Service (MNS) topics and queues. If you no longer require an event notification rule, you can call the DeleteNotificationConfiguration operation to delete it.
   * 
   * @param request - DeleteNotificationConfigurationRequest
   * @returns DeleteNotificationConfigurationResponse
   */
  async deleteNotificationConfiguration(request: $_model.DeleteNotificationConfigurationRequest): Promise<$_model.DeleteNotificationConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNotificationConfigurationWithOptions(request, runtime);
  }

  /**
   * Deletes a scaling configuration that is used to create Elastic Compute Service (ECS) instances.
   * 
   * @remarks
   * You cannot delete a scaling configuration in one of the following scenarios:
   * *   The scaling configuration in your scaling group is in the Active state.
   * *   The scaling group contains ECS instances that were created based on the scaling configuration.
   * 
   * @param request - DeleteScalingConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScalingConfigurationResponse
   */
  async deleteScalingConfigurationWithOptions(request: $_model.DeleteScalingConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScalingConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingConfigurationId)) {
      query["ScalingConfigurationId"] = request.scalingConfigurationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScalingConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScalingConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScalingConfigurationResponse({}));
  }

  /**
   * Deletes a scaling configuration that is used to create Elastic Compute Service (ECS) instances.
   * 
   * @remarks
   * You cannot delete a scaling configuration in one of the following scenarios:
   * *   The scaling configuration in your scaling group is in the Active state.
   * *   The scaling group contains ECS instances that were created based on the scaling configuration.
   * 
   * @param request - DeleteScalingConfigurationRequest
   * @returns DeleteScalingConfigurationResponse
   */
  async deleteScalingConfiguration(request: $_model.DeleteScalingConfigurationRequest): Promise<$_model.DeleteScalingConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * Deletes a scaling group. If you want to enable policy-based automatic addition or removal of instances of a specific type to meet evolving business requirements, you can create scaling groups to manage your computing power with ease. The computing power refers to the instances that provide the computing capability. If you no longer require a scaling group, you can call the DeleteScalingGroup operation to delete it to free up the scaling group quota.
   * 
   * @remarks
   * Before you call the DeleteScalingGroup operation, take note of the following items:
   * *   If you delete a scaling group, the scaling configurations, scaling rules, scaling activities, and scaling requests related to the scaling group are also deleted.
   * *   If you delete a scaling group, the scheduled tasks and event-triggered tasks of the scaling group are not deleted. The Server Load Balancer (SLB) instances and ApsaraDB RDS instances that are attached to the scaling group are also not deleted.
   * *   If the scaling group that you want to delete contains ECS instances or elastic container instances that are in the In Service state, Auto Scaling stops the instances and then removes all manually added instances from the scaling group or releases all automatically created instances in the scaling group before the scaling group is deleted.
   *     **
   *     **Note** Before you delete a scaling group, make sure that the Deletion Protection feature is disabled. If you have enabled the Deletion Protection feature for a scaling group, disable the feature on the Modify Scaling Group page before you delete the scaling group.
   * *   If you do not disable the Deletion Protection feature for a scaling group, you cannot delete the scaling group by using the Auto Scaling console or calling this operation. The Deletion Protection feature is an effective measure to safeguard scaling groups against unintended deletion.
   * *   Prior to deleting a scaling group, make sure that your ECS instances within the scaling group are safeguarded against unintended release. Even if you have already enabled the Release Protection feature for the ECS instances, you must manually put these ECS instances into the Protected state. Doing so guarantees that the ECS instances will not be forcibly released during the deletion process of the scaling group, providing an extra layer of security.
   *     **
   *     **Note** Before you delete a scaling group, we recommend that you enable the Deletion Protection feature for ECS instances that you want to retain. This action guarantees that the ECS instances are not forcibly released after you delete the scaling group. For more information, see [SetInstancesProtection](https://help.aliyun.com/document_detail/459342.html).
   * 
   * @param request - DeleteScalingGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScalingGroupResponse
   */
  async deleteScalingGroupWithOptions(request: $_model.DeleteScalingGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScalingGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.forceDelete)) {
      query["ForceDelete"] = request.forceDelete;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScalingGroup",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScalingGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScalingGroupResponse({}));
  }

  /**
   * Deletes a scaling group. If you want to enable policy-based automatic addition or removal of instances of a specific type to meet evolving business requirements, you can create scaling groups to manage your computing power with ease. The computing power refers to the instances that provide the computing capability. If you no longer require a scaling group, you can call the DeleteScalingGroup operation to delete it to free up the scaling group quota.
   * 
   * @remarks
   * Before you call the DeleteScalingGroup operation, take note of the following items:
   * *   If you delete a scaling group, the scaling configurations, scaling rules, scaling activities, and scaling requests related to the scaling group are also deleted.
   * *   If you delete a scaling group, the scheduled tasks and event-triggered tasks of the scaling group are not deleted. The Server Load Balancer (SLB) instances and ApsaraDB RDS instances that are attached to the scaling group are also not deleted.
   * *   If the scaling group that you want to delete contains ECS instances or elastic container instances that are in the In Service state, Auto Scaling stops the instances and then removes all manually added instances from the scaling group or releases all automatically created instances in the scaling group before the scaling group is deleted.
   *     **
   *     **Note** Before you delete a scaling group, make sure that the Deletion Protection feature is disabled. If you have enabled the Deletion Protection feature for a scaling group, disable the feature on the Modify Scaling Group page before you delete the scaling group.
   * *   If you do not disable the Deletion Protection feature for a scaling group, you cannot delete the scaling group by using the Auto Scaling console or calling this operation. The Deletion Protection feature is an effective measure to safeguard scaling groups against unintended deletion.
   * *   Prior to deleting a scaling group, make sure that your ECS instances within the scaling group are safeguarded against unintended release. Even if you have already enabled the Release Protection feature for the ECS instances, you must manually put these ECS instances into the Protected state. Doing so guarantees that the ECS instances will not be forcibly released during the deletion process of the scaling group, providing an extra layer of security.
   *     **
   *     **Note** Before you delete a scaling group, we recommend that you enable the Deletion Protection feature for ECS instances that you want to retain. This action guarantees that the ECS instances are not forcibly released after you delete the scaling group. For more information, see [SetInstancesProtection](https://help.aliyun.com/document_detail/459342.html).
   * 
   * @param request - DeleteScalingGroupRequest
   * @returns DeleteScalingGroupResponse
   */
  async deleteScalingGroup(request: $_model.DeleteScalingGroupRequest): Promise<$_model.DeleteScalingGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScalingGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a scaling rule.
   * 
   * @param request - DeleteScalingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScalingRuleResponse
   */
  async deleteScalingRuleWithOptions(request: $_model.DeleteScalingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScalingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingRuleId)) {
      query["ScalingRuleId"] = request.scalingRuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScalingRule",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScalingRuleResponse({}));
  }

  /**
   * Deletes a scaling rule.
   * 
   * @param request - DeleteScalingRuleRequest
   * @returns DeleteScalingRuleResponse
   */
  async deleteScalingRule(request: $_model.DeleteScalingRuleRequest): Promise<$_model.DeleteScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScalingRuleWithOptions(request, runtime);
  }

  /**
   * Deletes scheduled tasks. For workloads with predictable patterns, you can create scheduled tasks to align with your business requirements and optimize resource utilization for cost savings. These tasks automatically ensure that sufficient computing resources are provisioned in anticipation of peak hours and efficiently release unused resources during off-peak hours, thereby streamlining operational efficiency and reducing expenses. If you no longer require a scheduled task, you can call the DeleteScheduledTask operation to delete it.
   * 
   * @param request - DeleteScheduledTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScheduledTaskResponse
   */
  async deleteScheduledTaskWithOptions(request: $_model.DeleteScheduledTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScheduledTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scheduledTaskId)) {
      query["ScheduledTaskId"] = request.scheduledTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScheduledTask",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScheduledTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScheduledTaskResponse({}));
  }

  /**
   * Deletes scheduled tasks. For workloads with predictable patterns, you can create scheduled tasks to align with your business requirements and optimize resource utilization for cost savings. These tasks automatically ensure that sufficient computing resources are provisioned in anticipation of peak hours and efficiently release unused resources during off-peak hours, thereby streamlining operational efficiency and reducing expenses. If you no longer require a scheduled task, you can call the DeleteScheduledTask operation to delete it.
   * 
   * @param request - DeleteScheduledTaskRequest
   * @returns DeleteScheduledTaskResponse
   */
  async deleteScheduledTask(request: $_model.DeleteScheduledTaskRequest): Promise<$_model.DeleteScheduledTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScheduledTaskWithOptions(request, runtime);
  }

  /**
   * Deletes the warmup pool of a scaling group and releases the instances in the warmup pool.
   * 
   * @param request - DeleteWarmPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWarmPoolResponse
   */
  async deleteWarmPoolWithOptions(request: $_model.DeleteWarmPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWarmPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWarmPool",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWarmPoolResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWarmPoolResponse({}));
  }

  /**
   * Deletes the warmup pool of a scaling group and releases the instances in the warmup pool.
   * 
   * @param request - DeleteWarmPoolRequest
   * @returns DeleteWarmPoolResponse
   */
  async deleteWarmPool(request: $_model.DeleteWarmPoolRequest): Promise<$_model.DeleteWarmPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWarmPoolWithOptions(request, runtime);
  }

  /**
   * Queries the information about event-triggered tasks. This helps you track the configurations and metric data trends of existing event-triggered tasks, detect system resource anomalies in real time, and ensure system stability and reliability.
   * 
   * @param request - DescribeAlarmsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlarmsResponse
   */
  async describeAlarmsWithOptions(request: $_model.DescribeAlarmsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlarmsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmTaskId)) {
      query["AlarmTaskId"] = request.alarmTaskId;
    }

    if (!$dara.isNull(request.isEnable)) {
      query["IsEnable"] = request.isEnable;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlarms",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlarmsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlarmsResponse({}));
  }

  /**
   * Queries the information about event-triggered tasks. This helps you track the configurations and metric data trends of existing event-triggered tasks, detect system resource anomalies in real time, and ensure system stability and reliability.
   * 
   * @param request - DescribeAlarmsRequest
   * @returns DescribeAlarmsResponse
   */
  async describeAlarms(request: $_model.DescribeAlarmsRequest): Promise<$_model.DescribeAlarmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlarmsWithOptions(request, runtime);
  }

  /**
   * Queries the status of scaling activities that trigger text message, internal message, or email-based notifications. When you call the DescribeAlertConfiguration operation, you must specify the scaling group ID and region ID to query the status of the desired scaling activities. A scaling activity can be in one of the following states: Successful, Failed, and Rejected.
   * 
   * @param request - DescribeAlertConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertConfigurationResponse
   */
  async describeAlertConfigurationWithOptions(request: $_model.DescribeAlertConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlertConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlertConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlertConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlertConfigurationResponse({}));
  }

  /**
   * Queries the status of scaling activities that trigger text message, internal message, or email-based notifications. When you call the DescribeAlertConfiguration operation, you must specify the scaling group ID and region ID to query the status of the desired scaling activities. A scaling activity can be in one of the following states: Successful, Failed, and Rejected.
   * 
   * @param request - DescribeAlertConfigurationRequest
   * @returns DescribeAlertConfigurationResponse
   */
  async describeAlertConfiguration(request: $_model.DescribeAlertConfigurationRequest): Promise<$_model.DescribeAlertConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertConfigurationWithOptions(request, runtime);
  }

  /**
   * Lists candidate instance types.
   * 
   * @param request - DescribeCandidateInstanceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCandidateInstanceTypeResponse
   */
  async describeCandidateInstanceTypeWithOptions(request: $_model.DescribeCandidateInstanceTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCandidateInstanceTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowCrossAz)) {
      query["AllowCrossAz"] = request.allowCrossAz;
    }

    if (!$dara.isNull(request.allowDifferentGeneration)) {
      query["AllowDifferentGeneration"] = request.allowDifferentGeneration;
    }

    if (!$dara.isNull(request.dataDiskCategories)) {
      query["DataDiskCategories"] = request.dataDiskCategories;
    }

    if (!$dara.isNull(request.imageFamily)) {
      query["ImageFamily"] = request.imageFamily;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.instanceTypes)) {
      query["InstanceTypes"] = request.instanceTypes;
    }

    if (!$dara.isNull(request.ipv6AddressCount)) {
      query["Ipv6AddressCount"] = request.ipv6AddressCount;
    }

    if (!$dara.isNull(request.maxPrice)) {
      query["MaxPrice"] = request.maxPrice;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.spotStrategy)) {
      query["SpotStrategy"] = request.spotStrategy;
    }

    if (!$dara.isNull(request.systemDiskCategories)) {
      query["SystemDiskCategories"] = request.systemDiskCategories;
    }

    if (!$dara.isNull(request.zoneIds)) {
      query["ZoneIds"] = request.zoneIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCandidateInstanceType",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCandidateInstanceTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCandidateInstanceTypeResponse({}));
  }

  /**
   * Lists candidate instance types.
   * 
   * @param request - DescribeCandidateInstanceTypeRequest
   * @returns DescribeCandidateInstanceTypeResponse
   */
  async describeCandidateInstanceType(request: $_model.DescribeCandidateInstanceTypeRequest): Promise<$_model.DescribeCandidateInstanceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCandidateInstanceTypeWithOptions(request, runtime);
  }

  /**
   * Queries health diagnostic reports.
   * 
   * @param request - DescribeDiagnoseReportsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnoseReportsResponse
   */
  async describeDiagnoseReportsWithOptions(request: $_model.DescribeDiagnoseReportsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiagnoseReportsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiagnoseReports",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiagnoseReportsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiagnoseReportsResponse({}));
  }

  /**
   * Queries health diagnostic reports.
   * 
   * @param request - DescribeDiagnoseReportsRequest
   * @returns DescribeDiagnoseReportsResponse
   */
  async describeDiagnoseReports(request: $_model.DescribeDiagnoseReportsRequest): Promise<$_model.DescribeDiagnoseReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiagnoseReportsWithOptions(request, runtime);
  }

  /**
   * Queries the details of an Elastic Container Instance (ECI) scaling configuration based on the scaling configuration ID. The details include the temporary storage size, the number of IPv6 addresses, and the elastic IP address (EIP) bandwidth. The output supports the YAML format.
   * 
   * @param request - DescribeEciScalingConfigurationDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEciScalingConfigurationDetailResponse
   */
  async describeEciScalingConfigurationDetailWithOptions(request: $_model.DescribeEciScalingConfigurationDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEciScalingConfigurationDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.outputFormat)) {
      query["OutputFormat"] = request.outputFormat;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scalingConfigurationId)) {
      query["ScalingConfigurationId"] = request.scalingConfigurationId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEciScalingConfigurationDetail",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEciScalingConfigurationDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEciScalingConfigurationDetailResponse({}));
  }

  /**
   * Queries the details of an Elastic Container Instance (ECI) scaling configuration based on the scaling configuration ID. The details include the temporary storage size, the number of IPv6 addresses, and the elastic IP address (EIP) bandwidth. The output supports the YAML format.
   * 
   * @param request - DescribeEciScalingConfigurationDetailRequest
   * @returns DescribeEciScalingConfigurationDetailResponse
   */
  async describeEciScalingConfigurationDetail(request: $_model.DescribeEciScalingConfigurationDetailRequest): Promise<$_model.DescribeEciScalingConfigurationDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEciScalingConfigurationDetailWithOptions(request, runtime);
  }

  /**
   * Queries ECI scaling configurations. You can invoke DescribeEciScalingConfigurations and specify parameters such as the scaling group ID, and the scaling configuration IDs or names. This parameter query retrieves information such as the instance preemption policy, container group instance types, container image pull policy, and the weight of ECI instances as backend servers.
   * 
   * @param request - DescribeEciScalingConfigurationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEciScalingConfigurationsResponse
   */
  async describeEciScalingConfigurationsWithOptions(request: $_model.DescribeEciScalingConfigurationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEciScalingConfigurationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingConfigurationIds)) {
      query["ScalingConfigurationIds"] = request.scalingConfigurationIds;
    }

    if (!$dara.isNull(request.scalingConfigurationNames)) {
      query["ScalingConfigurationNames"] = request.scalingConfigurationNames;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEciScalingConfigurations",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEciScalingConfigurationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEciScalingConfigurationsResponse({}));
  }

  /**
   * Queries ECI scaling configurations. You can invoke DescribeEciScalingConfigurations and specify parameters such as the scaling group ID, and the scaling configuration IDs or names. This parameter query retrieves information such as the instance preemption policy, container group instance types, container image pull policy, and the weight of ECI instances as backend servers.
   * 
   * @param request - DescribeEciScalingConfigurationsRequest
   * @returns DescribeEciScalingConfigurationsResponse
   */
  async describeEciScalingConfigurations(request: $_model.DescribeEciScalingConfigurationsRequest): Promise<$_model.DescribeEciScalingConfigurationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEciScalingConfigurationsWithOptions(request, runtime);
  }

  /**
   * A scaling group\\"s configuration is key to successful scale-outs. Auto Scaling uses elasticity strength to quantify the effectiveness of a Scaling Configuration, helping you make targeted optimizations.
   * 
   * @param request - DescribeElasticStrengthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticStrengthResponse
   */
  async describeElasticStrengthWithOptions(request: $_model.DescribeElasticStrengthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeElasticStrengthResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeElasticStrength",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeElasticStrengthResponse>(await this.callApi(params, req, runtime), new $_model.DescribeElasticStrengthResponse({}));
  }

  /**
   * A scaling group\\"s configuration is key to successful scale-outs. Auto Scaling uses elasticity strength to quantify the effectiveness of a Scaling Configuration, helping you make targeted optimizations.
   * 
   * @param request - DescribeElasticStrengthRequest
   * @returns DescribeElasticStrengthResponse
   */
  async describeElasticStrength(request: $_model.DescribeElasticStrengthRequest): Promise<$_model.DescribeElasticStrengthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeElasticStrengthWithOptions(request, runtime);
  }

  /**
   * Instance creation and deletion statistics.
   * 
   * @param request - DescribeInstanceCreateAndDeleteStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceCreateAndDeleteStatisticsResponse
   */
  async describeInstanceCreateAndDeleteStatisticsWithOptions(request: $_model.DescribeInstanceCreateAndDeleteStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceCreateAndDeleteStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceCreateAndDeleteStatistics",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceCreateAndDeleteStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceCreateAndDeleteStatisticsResponse({}));
  }

  /**
   * Instance creation and deletion statistics.
   * 
   * @param request - DescribeInstanceCreateAndDeleteStatisticsRequest
   * @returns DescribeInstanceCreateAndDeleteStatisticsResponse
   */
  async describeInstanceCreateAndDeleteStatistics(request: $_model.DescribeInstanceCreateAndDeleteStatisticsRequest): Promise<$_model.DescribeInstanceCreateAndDeleteStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceCreateAndDeleteStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the instance refresh tasks of a scaling group to view basic information and task progress.
   * 
   * @param request - DescribeInstanceRefreshesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceRefreshesResponse
   */
  async describeInstanceRefreshesWithOptions(request: $_model.DescribeInstanceRefreshesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceRefreshesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceRefreshTaskIds)) {
      query["InstanceRefreshTaskIds"] = request.instanceRefreshTaskIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceRefreshes",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceRefreshesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceRefreshesResponse({}));
  }

  /**
   * Queries the instance refresh tasks of a scaling group to view basic information and task progress.
   * 
   * @param request - DescribeInstanceRefreshesRequest
   * @returns DescribeInstanceRefreshesResponse
   */
  async describeInstanceRefreshes(request: $_model.DescribeInstanceRefreshesRequest): Promise<$_model.DescribeInstanceRefreshesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceRefreshesWithOptions(request, runtime);
  }

  /**
   * Queries lifecycle hook actions. When you call the DescribeLifecycleActions operation, you can specify parameters such as ScalingActivityId, NextToken, and MaxResults to query the details such as the action status and ID of a lifecycle hook. You can also call this operation to query the IDs of Elastic Compute Service (ECS) instances on which the lifecycle hook takes effect.
   * 
   * @remarks
   * If a scaling activity is executed and a lifecycle hook is created for the scaling activity, the lifecycle hook triggers a lifecycle action. A lifecycle action can be in one of the following states:
   * *   If a lifecycle action is in the Pending state, Elastic Compute Service (ECS) instances are waiting to be added to a scaling group or waiting to be removed from a scaling group.
   * *   If a lifecycle action is in the Timeout state, the lifecycle hook that triggers the lifecycle action expires and ECS instances are added to or removed from a scaling group.
   * *   If a lifecycle action is in the Completed state, you manually end the lifecycle hook that triggers the lifecycle action ahead of schedule.
   * If you do not specify the action to perform, such as execute a specific OOS template, after a lifecycle hook ends, you can call this operation to obtain the token of the lifecycle action that corresponds to the lifecycle hook. Then, you can specify a custom action to perform after the lifecycle hook ends.
   * 
   * @param request - DescribeLifecycleActionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLifecycleActionsResponse
   */
  async describeLifecycleActionsWithOptions(request: $_model.DescribeLifecycleActionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLifecycleActionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lifecycleActionStatus)) {
      query["LifecycleActionStatus"] = request.lifecycleActionStatus;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingActivityId)) {
      query["ScalingActivityId"] = request.scalingActivityId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLifecycleActions",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLifecycleActionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLifecycleActionsResponse({}));
  }

  /**
   * Queries lifecycle hook actions. When you call the DescribeLifecycleActions operation, you can specify parameters such as ScalingActivityId, NextToken, and MaxResults to query the details such as the action status and ID of a lifecycle hook. You can also call this operation to query the IDs of Elastic Compute Service (ECS) instances on which the lifecycle hook takes effect.
   * 
   * @remarks
   * If a scaling activity is executed and a lifecycle hook is created for the scaling activity, the lifecycle hook triggers a lifecycle action. A lifecycle action can be in one of the following states:
   * *   If a lifecycle action is in the Pending state, Elastic Compute Service (ECS) instances are waiting to be added to a scaling group or waiting to be removed from a scaling group.
   * *   If a lifecycle action is in the Timeout state, the lifecycle hook that triggers the lifecycle action expires and ECS instances are added to or removed from a scaling group.
   * *   If a lifecycle action is in the Completed state, you manually end the lifecycle hook that triggers the lifecycle action ahead of schedule.
   * If you do not specify the action to perform, such as execute a specific OOS template, after a lifecycle hook ends, you can call this operation to obtain the token of the lifecycle action that corresponds to the lifecycle hook. Then, you can specify a custom action to perform after the lifecycle hook ends.
   * 
   * @param request - DescribeLifecycleActionsRequest
   * @returns DescribeLifecycleActionsResponse
   */
  async describeLifecycleActions(request: $_model.DescribeLifecycleActionsRequest): Promise<$_model.DescribeLifecycleActionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLifecycleActionsWithOptions(request, runtime);
  }

  /**
   * Queries the information of lifecycle hooks by specifying lifecycle hook IDs or scaling group IDs. The information includes the next action to perform after the wait state ends, the scaling activity type associated with the lifecycle hook, the notification recipient identifier, and the suspension wait time.
   * 
   * @remarks
   * You can query lifecycle hooks in the following three ways:
   * - Specify a list of lifecycle hook IDs (LifecycleHookIds). In this case, the ScalingGroupId and LifecycleHookName parameters are ignored.
   * - Specify a scaling group ID (ScalingGroupId).
   * - Specify both a scaling group ID (ScalingGroupId) and a lifecycle hook name (LifecycleHookName).
   * 
   * @param request - DescribeLifecycleHooksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLifecycleHooksResponse
   */
  async describeLifecycleHooksWithOptions(request: $_model.DescribeLifecycleHooksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLifecycleHooksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lifecycleHookIds)) {
      query["LifecycleHookIds"] = request.lifecycleHookIds;
    }

    if (!$dara.isNull(request.lifecycleHookName)) {
      query["LifecycleHookName"] = request.lifecycleHookName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLifecycleHooks",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLifecycleHooksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLifecycleHooksResponse({}));
  }

  /**
   * Queries the information of lifecycle hooks by specifying lifecycle hook IDs or scaling group IDs. The information includes the next action to perform after the wait state ends, the scaling activity type associated with the lifecycle hook, the notification recipient identifier, and the suspension wait time.
   * 
   * @remarks
   * You can query lifecycle hooks in the following three ways:
   * - Specify a list of lifecycle hook IDs (LifecycleHookIds). In this case, the ScalingGroupId and LifecycleHookName parameters are ignored.
   * - Specify a scaling group ID (ScalingGroupId).
   * - Specify both a scaling group ID (ScalingGroupId) and a lifecycle hook name (LifecycleHookName).
   * 
   * @param request - DescribeLifecycleHooksRequest
   * @returns DescribeLifecycleHooksResponse
   */
  async describeLifecycleHooks(request: $_model.DescribeLifecycleHooksRequest): Promise<$_model.DescribeLifecycleHooksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLifecycleHooksWithOptions(request, runtime);
  }

  /**
   * Queries resource quotas. For example, you can call the DescribeLimitation operation to query the maximum numbers of scheduled tasks that you can create in a scaling group, load balancers that you can attach to a scaling group, instances that you can add to a scaling group, and scaling configurations that you can create in a scaling group.
   * 
   * @param request - DescribeLimitationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLimitationResponse
   */
  async describeLimitationWithOptions(request: $_model.DescribeLimitationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLimitationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLimitation",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLimitationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLimitationResponse({}));
  }

  /**
   * Queries resource quotas. For example, you can call the DescribeLimitation operation to query the maximum numbers of scheduled tasks that you can create in a scaling group, load balancers that you can attach to a scaling group, instances that you can add to a scaling group, and scaling configurations that you can create in a scaling group.
   * 
   * @param request - DescribeLimitationRequest
   * @returns DescribeLimitationResponse
   */
  async describeLimitation(request: $_model.DescribeLimitationRequest): Promise<$_model.DescribeLimitationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLimitationWithOptions(request, runtime);
  }

  /**
   * Queries notification settings. You can call the DescribeNotificationConfiguration operation to query notification settings of scaling events or resource changes, including the notification types and methods.
   * 
   * @param request - DescribeNotificationConfigurationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNotificationConfigurationsResponse
   */
  async describeNotificationConfigurationsWithOptions(request: $_model.DescribeNotificationConfigurationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNotificationConfigurationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNotificationConfigurations",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNotificationConfigurationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNotificationConfigurationsResponse({}));
  }

  /**
   * Queries notification settings. You can call the DescribeNotificationConfiguration operation to query notification settings of scaling events or resource changes, including the notification types and methods.
   * 
   * @param request - DescribeNotificationConfigurationsRequest
   * @returns DescribeNotificationConfigurationsResponse
   */
  async describeNotificationConfigurations(request: $_model.DescribeNotificationConfigurationsRequest): Promise<$_model.DescribeNotificationConfigurationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNotificationConfigurationsWithOptions(request, runtime);
  }

  /**
   * Queries notification types. You can call the DescribeNotificationTypes operation to query the types of notifications on scaling events or resource changes occurred in your scaling groups. Notifications are triggered in scenarios such as successful scale-out events, successful scale-in events, expiration of scheduled tasks, and partially successful scale-out events.
   * 
   * @param request - DescribeNotificationTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNotificationTypesResponse
   */
  async describeNotificationTypesWithOptions(request: $_model.DescribeNotificationTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNotificationTypesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNotificationTypes",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNotificationTypesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNotificationTypesResponse({}));
  }

  /**
   * Queries notification types. You can call the DescribeNotificationTypes operation to query the types of notifications on scaling events or resource changes occurred in your scaling groups. Notifications are triggered in scenarios such as successful scale-out events, successful scale-in events, expiration of scheduled tasks, and partially successful scale-out events.
   * 
   * @param request - DescribeNotificationTypesRequest
   * @returns DescribeNotificationTypesResponse
   */
  async describeNotificationTypes(request: $_model.DescribeNotificationTypesRequest): Promise<$_model.DescribeNotificationTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNotificationTypesWithOptions(request, runtime);
  }

  /**
   * Queries instance types that meet specified requirements by filtering based on parameters such as the vSwitch ID, number of vCPUs, memory size, instance family level, and maximum acceptable price.
   * 
   * @param request - DescribePatternTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePatternTypesResponse
   */
  async describePatternTypesWithOptions(request: $_model.DescribePatternTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePatternTypesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePatternTypes",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePatternTypesResponse>(await this.callApi(params, req, runtime), new $_model.DescribePatternTypesResponse({}));
  }

  /**
   * Queries instance types that meet specified requirements by filtering based on parameters such as the vSwitch ID, number of vCPUs, memory size, instance family level, and maximum acceptable price.
   * 
   * @param request - DescribePatternTypesRequest
   * @returns DescribePatternTypesResponse
   */
  async describePatternTypes(request: $_model.DescribePatternTypesRequest): Promise<$_model.DescribePatternTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePatternTypesWithOptions(request, runtime);
  }

  /**
   * Queries regions. Before you activate Auto Scaling, you can call the DescribeRegions operation to query the regions where Auto Scaling is officially launched. This preliminary step facilitates the strategic selection of both the optimal region and availability zones for activating Auto Scaling, thereby guaranteeing the finest access speeds and operational efficiency within your chosen geographical area.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
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
      action: "DescribeRegions",
      version: "2022-02-22",
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
   * Queries regions. Before you activate Auto Scaling, you can call the DescribeRegions operation to query the regions where Auto Scaling is officially launched. This preliminary step facilitates the strategic selection of both the optimal region and availability zones for activating Auto Scaling, thereby guaranteeing the finest access speeds and operational efficiency within your chosen geographical area.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the details of scaling activities to check the results of scaling activities triggered by scheduled tasks, event-triggered tasks, or manual execution of scaling rules. For example, you can view the status, cause, and total number of instances after the scaling activity on the scaling activity details page.
   * 
   * @remarks
   * - You can specify a scaling group ID to query all scaling activity records in the scaling group.
   * - You can filter query results by the status of the scaling activity.
   * - You can query the scaling activity that occurred within the last 30 days.
   * 
   * @param request - DescribeScalingActivitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScalingActivitiesResponse
   */
  async describeScalingActivitiesWithOptions(request: $_model.DescribeScalingActivitiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScalingActivitiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceRefreshTaskId)) {
      query["InstanceRefreshTaskId"] = request.instanceRefreshTaskId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingActivityIds)) {
      query["ScalingActivityIds"] = request.scalingActivityIds;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.statusCode)) {
      query["StatusCode"] = request.statusCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScalingActivities",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScalingActivitiesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScalingActivitiesResponse({}));
  }

  /**
   * Queries the details of scaling activities to check the results of scaling activities triggered by scheduled tasks, event-triggered tasks, or manual execution of scaling rules. For example, you can view the status, cause, and total number of instances after the scaling activity on the scaling activity details page.
   * 
   * @remarks
   * - You can specify a scaling group ID to query all scaling activity records in the scaling group.
   * - You can filter query results by the status of the scaling activity.
   * - You can query the scaling activity that occurred within the last 30 days.
   * 
   * @param request - DescribeScalingActivitiesRequest
   * @returns DescribeScalingActivitiesResponse
   */
  async describeScalingActivities(request: $_model.DescribeScalingActivitiesRequest): Promise<$_model.DescribeScalingActivitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScalingActivitiesWithOptions(request, runtime);
  }

  /**
   * Queries the details of a scaling activity. You can query a scaling activity by its ID. The scaling activity details include the scaling activity status, error code, and error message. You can efficiently troubleshoot issues and analyze service performance based on the error message.
   * 
   * @param request - DescribeScalingActivityDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScalingActivityDetailResponse
   */
  async describeScalingActivityDetailWithOptions(request: $_model.DescribeScalingActivityDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScalingActivityDetailResponse> {
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

    if (!$dara.isNull(request.scalingActivityId)) {
      query["ScalingActivityId"] = request.scalingActivityId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScalingActivityDetail",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScalingActivityDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScalingActivityDetailResponse({}));
  }

  /**
   * Queries the details of a scaling activity. You can query a scaling activity by its ID. The scaling activity details include the scaling activity status, error code, and error message. You can efficiently troubleshoot issues and analyze service performance based on the error message.
   * 
   * @param request - DescribeScalingActivityDetailRequest
   * @returns DescribeScalingActivityDetailResponse
   */
  async describeScalingActivityDetail(request: $_model.DescribeScalingActivityDetailRequest): Promise<$_model.DescribeScalingActivityDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScalingActivityDetailWithOptions(request, runtime);
  }

  /**
   * The distribution of scaling activities in different states over a period of time.
   * 
   * @param request - DescribeScalingActivityStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScalingActivityStatisticsResponse
   */
  async describeScalingActivityStatisticsWithOptions(request: $_model.DescribeScalingActivityStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScalingActivityStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScalingActivityStatistics",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScalingActivityStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScalingActivityStatisticsResponse({}));
  }

  /**
   * The distribution of scaling activities in different states over a period of time.
   * 
   * @param request - DescribeScalingActivityStatisticsRequest
   * @returns DescribeScalingActivityStatisticsResponse
   */
  async describeScalingActivityStatistics(request: $_model.DescribeScalingActivityStatisticsRequest): Promise<$_model.DescribeScalingActivityStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScalingActivityStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the information about ECS-type scaling configurations, including instance types and images, to help you understand the details of ECS instance templates used during scale-out.
   * 
   * @param request - DescribeScalingConfigurationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScalingConfigurationsResponse
   */
  async describeScalingConfigurationsWithOptions(request: $_model.DescribeScalingConfigurationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScalingConfigurationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingConfigurationIds)) {
      query["ScalingConfigurationIds"] = request.scalingConfigurationIds;
    }

    if (!$dara.isNull(request.scalingConfigurationNames)) {
      query["ScalingConfigurationNames"] = request.scalingConfigurationNames;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScalingConfigurations",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScalingConfigurationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScalingConfigurationsResponse({}));
  }

  /**
   * Queries the information about ECS-type scaling configurations, including instance types and images, to help you understand the details of ECS instance templates used during scale-out.
   * 
   * @param request - DescribeScalingConfigurationsRequest
   * @returns DescribeScalingConfigurationsResponse
   */
  async describeScalingConfigurations(request: $_model.DescribeScalingConfigurationsRequest): Promise<$_model.DescribeScalingConfigurationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScalingConfigurationsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified scaling group, such as the basic information, instances in the scaling group, and scaling configurations. If the OutputFormat parameter is set to YAML for an Elastic Container Instance (ECI) scaling group, the content in the Kubernetes Deployment YAML format is returned.
   * 
   * @param request - DescribeScalingGroupDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScalingGroupDetailResponse
   */
  async describeScalingGroupDetailWithOptions(request: $_model.DescribeScalingGroupDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScalingGroupDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.outputFormat)) {
      query["OutputFormat"] = request.outputFormat;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScalingGroupDetail",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScalingGroupDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScalingGroupDetailResponse({}));
  }

  /**
   * Queries the details of a specified scaling group, such as the basic information, instances in the scaling group, and scaling configurations. If the OutputFormat parameter is set to YAML for an Elastic Container Instance (ECI) scaling group, the content in the Kubernetes Deployment YAML format is returned.
   * 
   * @param request - DescribeScalingGroupDetailRequest
   * @returns DescribeScalingGroupDetailResponse
   */
  async describeScalingGroupDetail(request: $_model.DescribeScalingGroupDetailRequest): Promise<$_model.DescribeScalingGroupDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScalingGroupDetailWithOptions(request, runtime);
  }

  /**
   * DescribeScalingGroupDiagnoseDetails
   * 
   * @param request - DescribeScalingGroupDiagnoseDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScalingGroupDiagnoseDetailsResponse
   */
  async describeScalingGroupDiagnoseDetailsWithOptions(request: $_model.DescribeScalingGroupDiagnoseDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScalingGroupDiagnoseDetailsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScalingGroupDiagnoseDetails",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScalingGroupDiagnoseDetailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScalingGroupDiagnoseDetailsResponse({}));
  }

  /**
   * DescribeScalingGroupDiagnoseDetails
   * 
   * @param request - DescribeScalingGroupDiagnoseDetailsRequest
   * @returns DescribeScalingGroupDiagnoseDetailsResponse
   */
  async describeScalingGroupDiagnoseDetails(request: $_model.DescribeScalingGroupDiagnoseDetailsRequest): Promise<$_model.DescribeScalingGroupDiagnoseDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScalingGroupDiagnoseDetailsWithOptions(request, runtime);
  }

  /**
   * Queries the details of scaling groups, including basic information, instances in the scaling groups, and scaling configurations.
   * 
   * @param request - DescribeScalingGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScalingGroupsResponse
   */
  async describeScalingGroupsWithOptions(request: $_model.DescribeScalingGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScalingGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingGroupIds)) {
      query["ScalingGroupIds"] = request.scalingGroupIds;
    }

    if (!$dara.isNull(request.scalingGroupName)) {
      query["ScalingGroupName"] = request.scalingGroupName;
    }

    if (!$dara.isNull(request.scalingGroupNames)) {
      query["ScalingGroupNames"] = request.scalingGroupNames;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScalingGroups",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScalingGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScalingGroupsResponse({}));
  }

  /**
   * Queries the details of scaling groups, including basic information, instances in the scaling groups, and scaling configurations.
   * 
   * @param request - DescribeScalingGroupsRequest
   * @returns DescribeScalingGroupsResponse
   */
  async describeScalingGroups(request: $_model.DescribeScalingGroupsRequest): Promise<$_model.DescribeScalingGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScalingGroupsWithOptions(request, runtime);
  }

  /**
   * Queries a list of ECS instances and their details in a scaling group by scaling group ID. The details include the total number of running spot instances, the total number of ECS instances, the warmup status, and the lifecycle status of the ECS instances in the scaling group. This operation also allows you to filter ECS instances by health status, lifecycle status, and creation type.
   * 
   * @param request - DescribeScalingInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScalingInstancesResponse
   */
  async describeScalingInstancesWithOptions(request: $_model.DescribeScalingInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScalingInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.creationType)) {
      query["CreationType"] = request.creationType;
    }

    if (!$dara.isNull(request.creationTypes)) {
      query["CreationTypes"] = request.creationTypes;
    }

    if (!$dara.isNull(request.healthStatus)) {
      query["HealthStatus"] = request.healthStatus;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.lifecycleState)) {
      query["LifecycleState"] = request.lifecycleState;
    }

    if (!$dara.isNull(request.lifecycleStates)) {
      query["LifecycleStates"] = request.lifecycleStates;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingActivityId)) {
      query["ScalingActivityId"] = request.scalingActivityId;
    }

    if (!$dara.isNull(request.scalingConfigurationId)) {
      query["ScalingConfigurationId"] = request.scalingConfigurationId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScalingInstances",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScalingInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScalingInstancesResponse({}));
  }

  /**
   * Queries a list of ECS instances and their details in a scaling group by scaling group ID. The details include the total number of running spot instances, the total number of ECS instances, the warmup status, and the lifecycle status of the ECS instances in the scaling group. This operation also allows you to filter ECS instances by health status, lifecycle status, and creation type.
   * 
   * @param request - DescribeScalingInstancesRequest
   * @returns DescribeScalingInstancesResponse
   */
  async describeScalingInstances(request: $_model.DescribeScalingInstancesRequest): Promise<$_model.DescribeScalingInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScalingInstancesWithOptions(request, runtime);
  }

  /**
   * Queries scaling rules and their details by specifying parameters such as the scaling rule ID, scaling rule name, and unique identifier of the scaling rule. The details include the adjustment type, instance warmup time, and event-triggered tasks associated with the scaling rules.
   * 
   * @param request - DescribeScalingRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScalingRulesResponse
   */
  async describeScalingRulesWithOptions(request: $_model.DescribeScalingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScalingRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.scalingRuleAris)) {
      query["ScalingRuleAris"] = request.scalingRuleAris;
    }

    if (!$dara.isNull(request.scalingRuleIds)) {
      query["ScalingRuleIds"] = request.scalingRuleIds;
    }

    if (!$dara.isNull(request.scalingRuleNames)) {
      query["ScalingRuleNames"] = request.scalingRuleNames;
    }

    if (!$dara.isNull(request.scalingRuleType)) {
      query["ScalingRuleType"] = request.scalingRuleType;
    }

    if (!$dara.isNull(request.showAlarmRules)) {
      query["ShowAlarmRules"] = request.showAlarmRules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScalingRules",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScalingRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScalingRulesResponse({}));
  }

  /**
   * Queries scaling rules and their details by specifying parameters such as the scaling rule ID, scaling rule name, and unique identifier of the scaling rule. The details include the adjustment type, instance warmup time, and event-triggered tasks associated with the scaling rules.
   * 
   * @param request - DescribeScalingRulesRequest
   * @returns DescribeScalingRulesResponse
   */
  async describeScalingRules(request: $_model.DescribeScalingRulesRequest): Promise<$_model.DescribeScalingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScalingRulesWithOptions(request, runtime);
  }

  /**
   * Queries the details of scheduled tasks. A scheduled task is a preset task that executes a specified scaling rule at a specified time to implement automatic scale-out and scale-in of compute resources. After you create a scheduled task, you can call the DescribeScheduledTasks API to query the details of the scheduled task, such as the trigger time, the total number of scheduled tasks, and the ID of the scaling group that executes the scheduled task.
   * 
   * @remarks
   * You can query scheduled tasks by scheduled task ID, scheduled task name, or the scaling rule executed by the scheduled task.
   * 
   * @param request - DescribeScheduledTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScheduledTasksResponse
   */
  async describeScheduledTasksWithOptions(request: $_model.DescribeScheduledTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScheduledTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.recurrenceType)) {
      query["RecurrenceType"] = request.recurrenceType;
    }

    if (!$dara.isNull(request.recurrenceValue)) {
      query["RecurrenceValue"] = request.recurrenceValue;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.scheduledActions)) {
      query["ScheduledActions"] = request.scheduledActions;
    }

    if (!$dara.isNull(request.scheduledTaskIds)) {
      query["ScheduledTaskIds"] = request.scheduledTaskIds;
    }

    if (!$dara.isNull(request.scheduledTaskNames)) {
      query["ScheduledTaskNames"] = request.scheduledTaskNames;
    }

    if (!$dara.isNull(request.taskEnabled)) {
      query["TaskEnabled"] = request.taskEnabled;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScheduledTasks",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScheduledTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScheduledTasksResponse({}));
  }

  /**
   * Queries the details of scheduled tasks. A scheduled task is a preset task that executes a specified scaling rule at a specified time to implement automatic scale-out and scale-in of compute resources. After you create a scheduled task, you can call the DescribeScheduledTasks API to query the details of the scheduled task, such as the trigger time, the total number of scheduled tasks, and the ID of the scaling group that executes the scheduled task.
   * 
   * @remarks
   * You can query scheduled tasks by scheduled task ID, scheduled task name, or the scaling rule executed by the scheduled task.
   * 
   * @param request - DescribeScheduledTasksRequest
   * @returns DescribeScheduledTasksResponse
   */
  async describeScheduledTasks(request: $_model.DescribeScheduledTasksRequest): Promise<$_model.DescribeScheduledTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScheduledTasksWithOptions(request, runtime);
  }

  /**
   * Queries the list of ECS instances in the warm pool of a scaling group.
   * 
   * @param request - DescribeWarmPoolInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWarmPoolInstancesResponse
   */
  async describeWarmPoolInstancesWithOptions(request: $_model.DescribeWarmPoolInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWarmPoolInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWarmPoolInstances",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWarmPoolInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWarmPoolInstancesResponse({}));
  }

  /**
   * Queries the list of ECS instances in the warm pool of a scaling group.
   * 
   * @param request - DescribeWarmPoolInstancesRequest
   * @returns DescribeWarmPoolInstancesResponse
   */
  async describeWarmPoolInstances(request: $_model.DescribeWarmPoolInstancesRequest): Promise<$_model.DescribeWarmPoolInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWarmPoolInstancesWithOptions(request, runtime);
  }

  /**
   * Detaches Application Load Balancer (ALB) server groups from a scaling group. When you call the DetachAlbServerGroups operation, you can specify the scaling group ID, ALB server group ID, and port used by Elastic Compute Service (ECS) instances in the desired ALB server group to detach one or more ALB server groups from your scaling group.
   * 
   * @param request - DetachAlbServerGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachAlbServerGroupsResponse
   */
  async detachAlbServerGroupsWithOptions(request: $_model.DetachAlbServerGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachAlbServerGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.albServerGroups)) {
      query["AlbServerGroups"] = request.albServerGroups;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.forceDetach)) {
      query["ForceDetach"] = request.forceDetach;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachAlbServerGroups",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachAlbServerGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DetachAlbServerGroupsResponse({}));
  }

  /**
   * Detaches Application Load Balancer (ALB) server groups from a scaling group. When you call the DetachAlbServerGroups operation, you can specify the scaling group ID, ALB server group ID, and port used by Elastic Compute Service (ECS) instances in the desired ALB server group to detach one or more ALB server groups from your scaling group.
   * 
   * @param request - DetachAlbServerGroupsRequest
   * @returns DetachAlbServerGroupsResponse
   */
  async detachAlbServerGroups(request: $_model.DetachAlbServerGroupsRequest): Promise<$_model.DetachAlbServerGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachAlbServerGroupsWithOptions(request, runtime);
  }

  /**
   * Detaches one or more ApsaraDB RDS instances from a scaling group to remove the mandatory association between the scaling group and the RDS instances and improve flexibility.
   * 
   * @param request - DetachDBInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachDBInstancesResponse
   */
  async detachDBInstancesWithOptions(request: $_model.DetachDBInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachDBInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBInstances)) {
      query["DBInstances"] = request.DBInstances;
    }

    if (!$dara.isNull(request.forceDetach)) {
      query["ForceDetach"] = request.forceDetach;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.removeSecurityGroup)) {
      query["RemoveSecurityGroup"] = request.removeSecurityGroup;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachDBInstances",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachDBInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DetachDBInstancesResponse({}));
  }

  /**
   * Detaches one or more ApsaraDB RDS instances from a scaling group to remove the mandatory association between the scaling group and the RDS instances and improve flexibility.
   * 
   * @param request - DetachDBInstancesRequest
   * @returns DetachDBInstancesResponse
   */
  async detachDBInstances(request: $_model.DetachDBInstancesRequest): Promise<$_model.DetachDBInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachDBInstancesWithOptions(request, runtime);
  }

  /**
   * Removes instances from a scaling group. If an enabled scaling group has no ongoing scaling activities, you can call the DetachInstances operation to remove one or more Elastic Compute Service (ECS) instances, elastic container instances, or Alibaba Cloud-hosted third-party instances from the scaling group.
   * 
   * @remarks
   *   Before you call the DetachInstances operation, make sure that the following conditions are met:
   *     *   The specified scaling group is enabled.
   *     *   The specified scaling group does not have any ongoing scaling activities.
   *     **
   *     **Note** If the specified scaling group does not have any ongoing scaling activities, the operation can bypass the cooldown period of the scaling group and immediately trigger scaling activities.
   * *   Before you call this operation, take note of the following items:
   *     *   The ECS instances, elastic container instances, or Alibaba Cloud-hosted third-party instances that are removed from a scaling group by using this operation can run independently. If needed, you can call the [AttachInstances](https://help.aliyun.com/document_detail/25954.html) operation to re-add these instances to a scaling group.
   *     *   The ECS instances, elastic container instances, or Alibaba Cloud-hosted third-party instances that are removed from a scaling group by using this operation are not stopped or released.
   *     *   A successful call only means that Auto Scaling accepts your request. Scaling activities can be triggered as expected, but their successful execution is not guaranteed. You can query the status of a scaling activity based on the ScalingActivityId response parameter.
   *     *   The removal of ECS instances, elastic container instances, or Alibaba Cloud-hosted third-party instances must not result in the overall number of instances within the specified scaling group falling below the minimum capacity threshold (MinSize); otherwise, an error will be reported.
   * 
   * @param request - DetachInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachInstancesResponse
   */
  async detachInstancesWithOptions(request: $_model.DetachInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.decreaseDesiredCapacity)) {
      query["DecreaseDesiredCapacity"] = request.decreaseDesiredCapacity;
    }

    if (!$dara.isNull(request.detachOption)) {
      query["DetachOption"] = request.detachOption;
    }

    if (!$dara.isNull(request.ignoreInvalidInstance)) {
      query["IgnoreInvalidInstance"] = request.ignoreInvalidInstance;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.lifecycleHook)) {
      query["LifecycleHook"] = request.lifecycleHook;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachInstances",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DetachInstancesResponse({}));
  }

  /**
   * Removes instances from a scaling group. If an enabled scaling group has no ongoing scaling activities, you can call the DetachInstances operation to remove one or more Elastic Compute Service (ECS) instances, elastic container instances, or Alibaba Cloud-hosted third-party instances from the scaling group.
   * 
   * @remarks
   *   Before you call the DetachInstances operation, make sure that the following conditions are met:
   *     *   The specified scaling group is enabled.
   *     *   The specified scaling group does not have any ongoing scaling activities.
   *     **
   *     **Note** If the specified scaling group does not have any ongoing scaling activities, the operation can bypass the cooldown period of the scaling group and immediately trigger scaling activities.
   * *   Before you call this operation, take note of the following items:
   *     *   The ECS instances, elastic container instances, or Alibaba Cloud-hosted third-party instances that are removed from a scaling group by using this operation can run independently. If needed, you can call the [AttachInstances](https://help.aliyun.com/document_detail/25954.html) operation to re-add these instances to a scaling group.
   *     *   The ECS instances, elastic container instances, or Alibaba Cloud-hosted third-party instances that are removed from a scaling group by using this operation are not stopped or released.
   *     *   A successful call only means that Auto Scaling accepts your request. Scaling activities can be triggered as expected, but their successful execution is not guaranteed. You can query the status of a scaling activity based on the ScalingActivityId response parameter.
   *     *   The removal of ECS instances, elastic container instances, or Alibaba Cloud-hosted third-party instances must not result in the overall number of instances within the specified scaling group falling below the minimum capacity threshold (MinSize); otherwise, an error will be reported.
   * 
   * @param request - DetachInstancesRequest
   * @returns DetachInstancesResponse
   */
  async detachInstances(request: $_model.DetachInstancesRequest): Promise<$_model.DetachInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachInstancesWithOptions(request, runtime);
  }

  /**
   * Detaches Classic Load Balancer (CLB, formerly known as Server Load Balancer or SLB) instances from a scaling group. If the current CLB instance no longer meets your business requirements, you can call the DetachLoadBalancers operation to detach it from your scaling group. When you call this operation, you can use ScalingGroupId, LoadBalancer.N, and ForceDetach to specify one or more CLB instances to detach. You can also determine whether to call this operation asynchronously and whether to remove the Elastic Compute Service (ECS) instances acting as backend servers from the backend server groups of the CLB instance. You can call this operation to detach only CLB instances from a scaling group.
   * 
   * @param request - DetachLoadBalancersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachLoadBalancersResponse
   */
  async detachLoadBalancersWithOptions(request: $_model.DetachLoadBalancersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachLoadBalancersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.async)) {
      query["Async"] = request.async;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.forceDetach)) {
      query["ForceDetach"] = request.forceDetach;
    }

    if (!$dara.isNull(request.loadBalancers)) {
      query["LoadBalancers"] = request.loadBalancers;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachLoadBalancers",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachLoadBalancersResponse>(await this.callApi(params, req, runtime), new $_model.DetachLoadBalancersResponse({}));
  }

  /**
   * Detaches Classic Load Balancer (CLB, formerly known as Server Load Balancer or SLB) instances from a scaling group. If the current CLB instance no longer meets your business requirements, you can call the DetachLoadBalancers operation to detach it from your scaling group. When you call this operation, you can use ScalingGroupId, LoadBalancer.N, and ForceDetach to specify one or more CLB instances to detach. You can also determine whether to call this operation asynchronously and whether to remove the Elastic Compute Service (ECS) instances acting as backend servers from the backend server groups of the CLB instance. You can call this operation to detach only CLB instances from a scaling group.
   * 
   * @param request - DetachLoadBalancersRequest
   * @returns DetachLoadBalancersResponse
   */
  async detachLoadBalancers(request: $_model.DetachLoadBalancersRequest): Promise<$_model.DetachLoadBalancersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachLoadBalancersWithOptions(request, runtime);
  }

  /**
   * Remove one or more SLB server groups from a scaling group. Supported server group types include Application Load Balancer (ALB), Network Load Balancer (NLB), and Gateway Load Balancer (GWLB), which can dynamically adjust SLB policies and help improve high availability of the system.
   * 
   * @param request - DetachServerGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachServerGroupsResponse
   */
  async detachServerGroupsWithOptions(request: $_model.DetachServerGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachServerGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.forceDetach)) {
      query["ForceDetach"] = request.forceDetach;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.serverGroups)) {
      query["ServerGroups"] = request.serverGroups;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachServerGroups",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachServerGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DetachServerGroupsResponse({}));
  }

  /**
   * Remove one or more SLB server groups from a scaling group. Supported server group types include Application Load Balancer (ALB), Network Load Balancer (NLB), and Gateway Load Balancer (GWLB), which can dynamically adjust SLB policies and help improve high availability of the system.
   * 
   * @param request - DetachServerGroupsRequest
   * @returns DetachServerGroupsResponse
   */
  async detachServerGroups(request: $_model.DetachServerGroupsRequest): Promise<$_model.DetachServerGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachServerGroupsWithOptions(request, runtime);
  }

  /**
   * Detaches vServer groups from a scaling group. Auto Scaling supports the attachment of load balancers to scaling groups to improve service performance. If the load balancer currently attached to your scaling group is no longer needed to distribute the access traffic to the instances in your scaling group, you can call the DetachVServerGroups operation to detach one or more vServer groups of this load balancer from the scaling group.
   * 
   * @remarks
   *   When you call the DetachVServerGroups operation, you must use the following parameters to specify the vServer groups that you want to detach from your scaling group:
   *     *   LoadBalancerId: the ID of the load balancer
   *     *   VServerGroupId: the ID of the vServer group
   *     *   Port: the port number of the vServer group
   * *   When the vServer group specified by the request parameters matches that attached to your scaling group, this operation yields a favorable result. Otherwise, the request is ignored and no error is reported.
   * *   Before you call this operation, you must make sure that the load balancer has ceased routing the access traffic to the instances in the scaling group. Failure to do so may lead to service requests being dropped or lost during the detachment process.
   * 
   * @param request - DetachVServerGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachVServerGroupsResponse
   */
  async detachVServerGroupsWithOptions(request: $_model.DetachVServerGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachVServerGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.forceDetach)) {
      query["ForceDetach"] = request.forceDetach;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.VServerGroups)) {
      query["VServerGroups"] = request.VServerGroups;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachVServerGroups",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachVServerGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DetachVServerGroupsResponse({}));
  }

  /**
   * Detaches vServer groups from a scaling group. Auto Scaling supports the attachment of load balancers to scaling groups to improve service performance. If the load balancer currently attached to your scaling group is no longer needed to distribute the access traffic to the instances in your scaling group, you can call the DetachVServerGroups operation to detach one or more vServer groups of this load balancer from the scaling group.
   * 
   * @remarks
   *   When you call the DetachVServerGroups operation, you must use the following parameters to specify the vServer groups that you want to detach from your scaling group:
   *     *   LoadBalancerId: the ID of the load balancer
   *     *   VServerGroupId: the ID of the vServer group
   *     *   Port: the port number of the vServer group
   * *   When the vServer group specified by the request parameters matches that attached to your scaling group, this operation yields a favorable result. Otherwise, the request is ignored and no error is reported.
   * *   Before you call this operation, you must make sure that the load balancer has ceased routing the access traffic to the instances in the scaling group. Failure to do so may lead to service requests being dropped or lost during the detachment process.
   * 
   * @param request - DetachVServerGroupsRequest
   * @returns DetachVServerGroupsResponse
   */
  async detachVServerGroups(request: $_model.DetachVServerGroupsRequest): Promise<$_model.DetachVServerGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachVServerGroupsWithOptions(request, runtime);
  }

  /**
   * Disables an event-triggered task. If your business pattern is unpredictable or prone to unforeseen traffic spikes, you can create event-triggered tasks by associating CloudMonitor metrics to effectively monitor fluctuations in your business workload. Upon detecting that the criteria for alerts, as specified in event-triggered tasks, are fulfilled, Auto Scaling promptly issues alerts and executes the scaling rules predefined within those tasks. This process occurs within the predefined effective time windows of the tasks, thereby facilitating the automatic increase or decrease of Elastic Compute Service (ECS) instances or elastic container instances within your scaling groups. Ultimately, this mechanism ensures the dynamic optimization of resources based on real-time workload demands. If you currently do not need an event-triggered task, you can call the DisableAlarm operation to disable it.
   * 
   * @remarks
   * Before you disable an event-triggered task, make sure that the task is in the `Normal`, `Alert`, or `Insufficient Data` state.
   * 
   * @param request - DisableAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAlarmResponse
   */
  async disableAlarmWithOptions(request: $_model.DisableAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableAlarmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmTaskId)) {
      query["AlarmTaskId"] = request.alarmTaskId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableAlarm",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableAlarmResponse>(await this.callApi(params, req, runtime), new $_model.DisableAlarmResponse({}));
  }

  /**
   * Disables an event-triggered task. If your business pattern is unpredictable or prone to unforeseen traffic spikes, you can create event-triggered tasks by associating CloudMonitor metrics to effectively monitor fluctuations in your business workload. Upon detecting that the criteria for alerts, as specified in event-triggered tasks, are fulfilled, Auto Scaling promptly issues alerts and executes the scaling rules predefined within those tasks. This process occurs within the predefined effective time windows of the tasks, thereby facilitating the automatic increase or decrease of Elastic Compute Service (ECS) instances or elastic container instances within your scaling groups. Ultimately, this mechanism ensures the dynamic optimization of resources based on real-time workload demands. If you currently do not need an event-triggered task, you can call the DisableAlarm operation to disable it.
   * 
   * @remarks
   * Before you disable an event-triggered task, make sure that the task is in the `Normal`, `Alert`, or `Insufficient Data` state.
   * 
   * @param request - DisableAlarmRequest
   * @returns DisableAlarmResponse
   */
  async disableAlarm(request: $_model.DisableAlarmRequest): Promise<$_model.DisableAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAlarmWithOptions(request, runtime);
  }

  /**
   * Disables a scaling group. If you temporarily do not require a scaling group that is in the Enabled state, you can call the DisableScalingGroup operation to disable it.
   * 
   * @remarks
   * Before you call this operation to disable a scaling group, take note of the following items:
   * *   If scaling activities are being executed in the specified scaling group when you call this operation, these activities will continue until they are complete. However, scaling activities that are triggered after this operation is called will be rejected.
   * *   This operation can be called only when the scaling group is in the Active state.
   * 
   * @param request - DisableScalingGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableScalingGroupResponse
   */
  async disableScalingGroupWithOptions(request: $_model.DisableScalingGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableScalingGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableScalingGroup",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableScalingGroupResponse>(await this.callApi(params, req, runtime), new $_model.DisableScalingGroupResponse({}));
  }

  /**
   * Disables a scaling group. If you temporarily do not require a scaling group that is in the Enabled state, you can call the DisableScalingGroup operation to disable it.
   * 
   * @remarks
   * Before you call this operation to disable a scaling group, take note of the following items:
   * *   If scaling activities are being executed in the specified scaling group when you call this operation, these activities will continue until they are complete. However, scaling activities that are triggered after this operation is called will be rejected.
   * *   This operation can be called only when the scaling group is in the Active state.
   * 
   * @param request - DisableScalingGroupRequest
   * @returns DisableScalingGroupResponse
   */
  async disableScalingGroup(request: $_model.DisableScalingGroupRequest): Promise<$_model.DisableScalingGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableScalingGroupWithOptions(request, runtime);
  }

  /**
   * Enables an event-triggered task. If your business pattern is unpredictable or prone to unforeseen traffic spikes, you can create event-triggered tasks by associating CloudMonitor metrics to effectively monitor fluctuations in your business workload. Upon detecting that the criteria for alerts, as specified in event-triggered tasks, are fulfilled, Auto Scaling promptly issues alerts and executes the scaling rules predefined within those tasks. This process occurs within the predefined effective time windows of the tasks, thereby facilitating the automatic increase or decrease of Elastic Compute Service (ECS) instances or elastic container instances within your scaling groups. Ultimately, this mechanism ensures the dynamic optimization of resources based on real-time workload demands. If you want to reuse an event-triggered task that is in the Disabled state, you can call the EnableAlarm operation to enable it.
   * 
   * @param request - EnableAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAlarmResponse
   */
  async enableAlarmWithOptions(request: $_model.EnableAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableAlarmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmTaskId)) {
      query["AlarmTaskId"] = request.alarmTaskId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableAlarm",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableAlarmResponse>(await this.callApi(params, req, runtime), new $_model.EnableAlarmResponse({}));
  }

  /**
   * Enables an event-triggered task. If your business pattern is unpredictable or prone to unforeseen traffic spikes, you can create event-triggered tasks by associating CloudMonitor metrics to effectively monitor fluctuations in your business workload. Upon detecting that the criteria for alerts, as specified in event-triggered tasks, are fulfilled, Auto Scaling promptly issues alerts and executes the scaling rules predefined within those tasks. This process occurs within the predefined effective time windows of the tasks, thereby facilitating the automatic increase or decrease of Elastic Compute Service (ECS) instances or elastic container instances within your scaling groups. Ultimately, this mechanism ensures the dynamic optimization of resources based on real-time workload demands. If you want to reuse an event-triggered task that is in the Disabled state, you can call the EnableAlarm operation to enable it.
   * 
   * @param request - EnableAlarmRequest
   * @returns EnableAlarmResponse
   */
  async enableAlarm(request: $_model.EnableAlarmRequest): Promise<$_model.EnableAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAlarmWithOptions(request, runtime);
  }

  /**
   * Enables a scaling group. If a scaling group is in the Disabled state and contains an instance configuration source such as a launch template or a scaling configuration, you can call the EnableScalingGroup operation to enable the scaling group. This operation permits Auto Scaling to dynamically adjust the computing power (also known as the number of instances) in the scaling group based on your business requirements.
   * 
   * @remarks
   *   You can call this operation to enable a scaling group only if the scaling group is in the Inactive state and contains an instance configuration source such as a launch temple or a scaling configuration. The instance configuration source can also be the Elastic Compute Service (ECS) instance that you specified when you created the scaling group. If the preceding requirements are not met, the operation will fail.
   *     **
   *     **Note** A scaling group can have only one active instance configuration source at a time. When you call this operation to enable a scaling group, you can specify a scaling configuration or a launch template for the scaling group. If the scaling group already have an instance configuration source defined prior to your calling, the scaling configuration or launch template specified within your request will supersede the existing scaling configuration or launch template.
   * *   If you specify InstanceId.N to add to the scaling group within your request, Auto Scaling will check whether the addition of InstanceId.N will cause the total number of ECS instances in the scaling group to fall outside the boundaries specified by MinSize and MaxSize after you call this operation.
   *     *   If the call results in the total number of ECS instances dropping below the value of MinSize, Auto Scaling proactively creates pay-as-you-go ECS instances to ensure that the total number reaches the minimum threshold. For example, if you set MinSize to 5 when you created a scaling group and include InstanceId.N within your request to add two ECS instances when you attempt to enable the scaling group, Auto Scaling creates three more ECS instances in the scaling group after the two ECS instances are added.
   *     *   If the call results in the total number of ECS instances exceeding the value of MaxSize, the operation fails.
   * 
   * @param request - EnableScalingGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableScalingGroupResponse
   */
  async enableScalingGroupWithOptions(request: $_model.EnableScalingGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableScalingGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activeScalingConfigurationId)) {
      query["ActiveScalingConfigurationId"] = request.activeScalingConfigurationId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.launchTemplateId)) {
      query["LaunchTemplateId"] = request.launchTemplateId;
    }

    if (!$dara.isNull(request.launchTemplateOverrides)) {
      query["LaunchTemplateOverrides"] = request.launchTemplateOverrides;
    }

    if (!$dara.isNull(request.launchTemplateVersion)) {
      query["LaunchTemplateVersion"] = request.launchTemplateVersion;
    }

    if (!$dara.isNull(request.loadBalancerWeights)) {
      query["LoadBalancerWeights"] = request.loadBalancerWeights;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableScalingGroup",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableScalingGroupResponse>(await this.callApi(params, req, runtime), new $_model.EnableScalingGroupResponse({}));
  }

  /**
   * Enables a scaling group. If a scaling group is in the Disabled state and contains an instance configuration source such as a launch template or a scaling configuration, you can call the EnableScalingGroup operation to enable the scaling group. This operation permits Auto Scaling to dynamically adjust the computing power (also known as the number of instances) in the scaling group based on your business requirements.
   * 
   * @remarks
   *   You can call this operation to enable a scaling group only if the scaling group is in the Inactive state and contains an instance configuration source such as a launch temple or a scaling configuration. The instance configuration source can also be the Elastic Compute Service (ECS) instance that you specified when you created the scaling group. If the preceding requirements are not met, the operation will fail.
   *     **
   *     **Note** A scaling group can have only one active instance configuration source at a time. When you call this operation to enable a scaling group, you can specify a scaling configuration or a launch template for the scaling group. If the scaling group already have an instance configuration source defined prior to your calling, the scaling configuration or launch template specified within your request will supersede the existing scaling configuration or launch template.
   * *   If you specify InstanceId.N to add to the scaling group within your request, Auto Scaling will check whether the addition of InstanceId.N will cause the total number of ECS instances in the scaling group to fall outside the boundaries specified by MinSize and MaxSize after you call this operation.
   *     *   If the call results in the total number of ECS instances dropping below the value of MinSize, Auto Scaling proactively creates pay-as-you-go ECS instances to ensure that the total number reaches the minimum threshold. For example, if you set MinSize to 5 when you created a scaling group and include InstanceId.N within your request to add two ECS instances when you attempt to enable the scaling group, Auto Scaling creates three more ECS instances in the scaling group after the two ECS instances are added.
   *     *   If the call results in the total number of ECS instances exceeding the value of MaxSize, the operation fails.
   * 
   * @param request - EnableScalingGroupRequest
   * @returns EnableScalingGroupResponse
   */
  async enableScalingGroup(request: $_model.EnableScalingGroupRequest): Promise<$_model.EnableScalingGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableScalingGroupWithOptions(request, runtime);
  }

  /**
   * Puts an Elastic Compute Service (ECS) instance into the Standby state.
   * 
   * @remarks
   * ## Description
   * *   If you call the operation to put an ECS instance in a scaling group that is associated with a Classic Load Balancer (CLB) instance into the Standby state, the weight of the ECS instance as a backend server of the CLB instance is set to 0.
   * *   You can remove an instance that is in the Standby state from a scaling group, and then release the instance.
   * *   ECS instances that are in the Standby state are not removed from the scaling group during scale-in activities triggered by event-triggered tasks.
   * *   If Auto Scaling considers an ECS instance that is in the Standby state unhealthy, for example, the ECS instance is being stopped or being restarted, Auto Scaling does not update the health status of the ECS instance or trigger scale-in activities to remove the ECS instance from the scaling group. Auto Scaling updates the health status of the ECS instance only when the ECS instance is no longer in the Standby state.
   * 
   * @param request - EnterStandbyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnterStandbyResponse
   */
  async enterStandbyWithOptions(request: $_model.EnterStandbyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnterStandbyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.async)) {
      query["Async"] = request.async;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnterStandby",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnterStandbyResponse>(await this.callApi(params, req, runtime), new $_model.EnterStandbyResponse({}));
  }

  /**
   * Puts an Elastic Compute Service (ECS) instance into the Standby state.
   * 
   * @remarks
   * ## Description
   * *   If you call the operation to put an ECS instance in a scaling group that is associated with a Classic Load Balancer (CLB) instance into the Standby state, the weight of the ECS instance as a backend server of the CLB instance is set to 0.
   * *   You can remove an instance that is in the Standby state from a scaling group, and then release the instance.
   * *   ECS instances that are in the Standby state are not removed from the scaling group during scale-in activities triggered by event-triggered tasks.
   * *   If Auto Scaling considers an ECS instance that is in the Standby state unhealthy, for example, the ECS instance is being stopped or being restarted, Auto Scaling does not update the health status of the ECS instance or trigger scale-in activities to remove the ECS instance from the scaling group. Auto Scaling updates the health status of the ECS instance only when the ECS instance is no longer in the Standby state.
   * 
   * @param request - EnterStandbyRequest
   * @returns EnterStandbyResponse
   */
  async enterStandby(request: $_model.EnterStandbyRequest): Promise<$_model.EnterStandbyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enterStandbyWithOptions(request, runtime);
  }

  /**
   * Executes a scaling rule. To adjust the number of Elastic Compute Service (ECS) instances or elastic container instances, you can manually execute a scaling rule or enable Auto Scaling to execute a scaling rule. You can call the ExecuteScalingRule operation to execute simple scaling rules or step scaling rules. Auto Scaling automatically executes target tracking scaling rules and predictive scaling rules on your behalf without requiring explicit execution calls.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   The scaling group is in the Active state.
   * *   No scaling activities in the scaling group are in progress.
   * If no scaling activities in the scaling group are in progress, the operation can trigger scaling activities even before the cooldown time expires.
   * A successful call indicates that Auto Scaling accepts the request. However, the scaling activity may still fail. You can obtain the status of a scaling activity by using the value of the ScalingActivityId parameter in the response.
   * If the addition of a specified number of Elastic Compute Service (ECS) instances to a scaling group causes the total number of ECS instances in the scaling group to exceed the maximum number of instances allowed, Auto Scaling adds only a specific number of ECS instances to ensure that the total number of instances is equal to the maximum number of instances.
   * If the removal of a specified number of ECS instances from a scaling group causes the total number of ECS instances in the scaling group to drop below the minimum number of instances allowed, Auto Scaling removes only a specific number of ECS instances to ensure that the total number of instances is equal to the minimum number of instances.
   * You can specify only a limited number of ECS instances in each adjustment. For more information, see the description of the AdjustmentValue parameter in the CreateScalingRule topic.
   * 
   * @param request - ExecuteScalingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteScalingRuleResponse
   */
  async executeScalingRuleWithOptions(request: $_model.ExecuteScalingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteScalingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.breachThreshold)) {
      query["BreachThreshold"] = request.breachThreshold;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.metricValue)) {
      query["MetricValue"] = request.metricValue;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingRuleAri)) {
      query["ScalingRuleAri"] = request.scalingRuleAri;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteScalingRule",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteScalingRuleResponse({}));
  }

  /**
   * Executes a scaling rule. To adjust the number of Elastic Compute Service (ECS) instances or elastic container instances, you can manually execute a scaling rule or enable Auto Scaling to execute a scaling rule. You can call the ExecuteScalingRule operation to execute simple scaling rules or step scaling rules. Auto Scaling automatically executes target tracking scaling rules and predictive scaling rules on your behalf without requiring explicit execution calls.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   The scaling group is in the Active state.
   * *   No scaling activities in the scaling group are in progress.
   * If no scaling activities in the scaling group are in progress, the operation can trigger scaling activities even before the cooldown time expires.
   * A successful call indicates that Auto Scaling accepts the request. However, the scaling activity may still fail. You can obtain the status of a scaling activity by using the value of the ScalingActivityId parameter in the response.
   * If the addition of a specified number of Elastic Compute Service (ECS) instances to a scaling group causes the total number of ECS instances in the scaling group to exceed the maximum number of instances allowed, Auto Scaling adds only a specific number of ECS instances to ensure that the total number of instances is equal to the maximum number of instances.
   * If the removal of a specified number of ECS instances from a scaling group causes the total number of ECS instances in the scaling group to drop below the minimum number of instances allowed, Auto Scaling removes only a specific number of ECS instances to ensure that the total number of instances is equal to the minimum number of instances.
   * You can specify only a limited number of ECS instances in each adjustment. For more information, see the description of the AdjustmentValue parameter in the CreateScalingRule topic.
   * 
   * @param request - ExecuteScalingRuleRequest
   * @returns ExecuteScalingRuleResponse
   */
  async executeScalingRule(request: $_model.ExecuteScalingRuleRequest): Promise<$_model.ExecuteScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeScalingRuleWithOptions(request, runtime);
  }

  /**
   * Removes an instance from the Standby state. When a scale-in event is triggered in a scaling group, Auto Scaling does not remove Elastic Compute Service (ECS) instances or elastic container instances that are in the Standby state from the scaling group. If you want to restart the instances that are in the Standby state, you can call the ExitStandby operation to remove the instances from the Standby state and put them into the In Service state.
   * 
   * @remarks
   * After ECS instances or elastic container instances are removed from the Standby state, the following rules apply:
   * *   The ECS instances or elastic container instances enter the In Service state.
   * *   The default weight of each ECS instance or elastic container instance as a backend server of the attached load balancer is 50.
   * *   If you stop or restart the ECS instances or elastic container instances, the health check status of the instances will be updated.
   * *   When a scale-in event is triggered, Auto Scaling may remove the ECS instances or elastic container instances from the scaling group.
   * 
   * @param request - ExitStandbyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExitStandbyResponse
   */
  async exitStandbyWithOptions(request: $_model.ExitStandbyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExitStandbyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.async)) {
      query["Async"] = request.async;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExitStandby",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExitStandbyResponse>(await this.callApi(params, req, runtime), new $_model.ExitStandbyResponse({}));
  }

  /**
   * Removes an instance from the Standby state. When a scale-in event is triggered in a scaling group, Auto Scaling does not remove Elastic Compute Service (ECS) instances or elastic container instances that are in the Standby state from the scaling group. If you want to restart the instances that are in the Standby state, you can call the ExitStandby operation to remove the instances from the Standby state and put them into the In Service state.
   * 
   * @remarks
   * After ECS instances or elastic container instances are removed from the Standby state, the following rules apply:
   * *   The ECS instances or elastic container instances enter the In Service state.
   * *   The default weight of each ECS instance or elastic container instance as a backend server of the attached load balancer is 50.
   * *   If you stop or restart the ECS instances or elastic container instances, the health check status of the instances will be updated.
   * *   When a scale-in event is triggered, Auto Scaling may remove the ECS instances or elastic container instances from the scaling group.
   * 
   * @param request - ExitStandbyRequest
   * @returns ExitStandbyResponse
   */
  async exitStandby(request: $_model.ExitStandbyRequest): Promise<$_model.ExitStandbyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exitStandbyWithOptions(request, runtime);
  }

  /**
   * Queries the tag keys added to Auto Scaling resources. Querying tag keys facilitates easier classification, identification, and monitoring of your Auto Scaling resources, thereby enhancing the flexibility and convenience of your resource management processes.
   * 
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: $_model.ListTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagKeys",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListTagKeysResponse({}));
  }

  /**
   * Queries the tag keys added to Auto Scaling resources. Querying tag keys facilitates easier classification, identification, and monitoring of your Auto Scaling resources, thereby enhancing the flexibility and convenience of your resource management processes.
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: $_model.ListTagKeysRequest): Promise<$_model.ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries tags. You can call the ListTagResources operation to query tags that are added to Auto Scaling resources, thereby clarifying resource utilization and facilitating efficient resource management. This operation aids in the automation of resource categorization and permission management processes.
   * 
   * @remarks
   *   Specify at least one of the following request parameters: `ResourceIds` and `Tags`. `Tags.Key` and `Tags.Value` are used to specify the query objects.
   * *   If you provide both `ResourceIds` and `Tags` in your request, the response will exclusively include Auto Scaling resources that satisfy the criteria set by these parameters, ensuring targeted and precise information retrieval.
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

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2022-02-22",
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
   * Queries tags. You can call the ListTagResources operation to query tags that are added to Auto Scaling resources, thereby clarifying resource utilization and facilitating efficient resource management. This operation aids in the automation of resource categorization and permission management processes.
   * 
   * @remarks
   *   Specify at least one of the following request parameters: `ResourceIds` and `Tags`. `Tags.Key` and `Tags.Value` are used to specify the query objects.
   * *   If you provide both `ResourceIds` and `Tags` in your request, the response will exclusively include Auto Scaling resources that satisfy the criteria set by these parameters, ensuring targeted and precise information retrieval.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the tag keys associated with Auto Scaling resources to facilitate a deeper comprehension of those resources. By doing so, you can categorize and manage your Auto Scaling resources more efficiently.
   * 
   * @param request - ListTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagValuesResponse
   */
  async listTagValuesWithOptions(request: $_model.ListTagValuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagValuesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagValues",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagValuesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagValuesResponse({}));
  }

  /**
   * Queries the tag keys associated with Auto Scaling resources to facilitate a deeper comprehension of those resources. By doing so, you can categorize and manage your Auto Scaling resources more efficiently.
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: $_model.ListTagValuesRequest): Promise<$_model.ListTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Modifies an event-triggered task.
   * 
   * @remarks
   * - If you create an event-triggered task of the custom monitoring type (MetricType=custom), you must first report custom monitoring metrics to CloudMonitor. For more information, see [Event-triggered tasks for custom monitoring](https://help.aliyun.com/document_detail/74861.html).
   * - When you create an event-triggered task, you must specify a metric (MetricName) and configure dimension information (Dimension.N.DimensionKey and Dimension.N.DimensionValue) to determine the aggregation scope of the metric data in the scaling group. For example, you can specify user_id and scaling_group to aggregate the metric data of all ECS instances or elastic container instances in the scaling group of the specified user.
   *     - The metrics of a custom monitoring event-triggered task (MetricType=custom) depend on your custom monitoring metrics.
   *     - For more information about the metrics supported by system monitoring event-triggered tasks (MetricType=system), see [Event-triggered tasks for system monitoring](https://help.aliyun.com/document_detail/74854.html).
   * > In the dimension information, user_id and scaling_group are automatically populated by the system. You must manually specify device and state. For more information, see the Dimension.N.DimensionKey and Dimension.N.DimensionValue parameters.
   * 
   * @param request - ModifyAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAlarmResponse
   */
  async modifyAlarmWithOptions(request: $_model.ModifyAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAlarmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmActions)) {
      query["AlarmActions"] = request.alarmActions;
    }

    if (!$dara.isNull(request.alarmTaskId)) {
      query["AlarmTaskId"] = request.alarmTaskId;
    }

    if (!$dara.isNull(request.comparisonOperator)) {
      query["ComparisonOperator"] = request.comparisonOperator;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.effective)) {
      query["Effective"] = request.effective;
    }

    if (!$dara.isNull(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!$dara.isNull(request.expressions)) {
      query["Expressions"] = request.expressions;
    }

    if (!$dara.isNull(request.expressionsLogicOperator)) {
      query["ExpressionsLogicOperator"] = request.expressionsLogicOperator;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.statistics)) {
      query["Statistics"] = request.statistics;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAlarm",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAlarmResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAlarmResponse({}));
  }

  /**
   * Modifies an event-triggered task.
   * 
   * @remarks
   * - If you create an event-triggered task of the custom monitoring type (MetricType=custom), you must first report custom monitoring metrics to CloudMonitor. For more information, see [Event-triggered tasks for custom monitoring](https://help.aliyun.com/document_detail/74861.html).
   * - When you create an event-triggered task, you must specify a metric (MetricName) and configure dimension information (Dimension.N.DimensionKey and Dimension.N.DimensionValue) to determine the aggregation scope of the metric data in the scaling group. For example, you can specify user_id and scaling_group to aggregate the metric data of all ECS instances or elastic container instances in the scaling group of the specified user.
   *     - The metrics of a custom monitoring event-triggered task (MetricType=custom) depend on your custom monitoring metrics.
   *     - For more information about the metrics supported by system monitoring event-triggered tasks (MetricType=system), see [Event-triggered tasks for system monitoring](https://help.aliyun.com/document_detail/74854.html).
   * > In the dimension information, user_id and scaling_group are automatically populated by the system. You must manually specify device and state. For more information, see the Dimension.N.DimensionKey and Dimension.N.DimensionValue parameters.
   * 
   * @param request - ModifyAlarmRequest
   * @returns ModifyAlarmResponse
   */
  async modifyAlarm(request: $_model.ModifyAlarmRequest): Promise<$_model.ModifyAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAlarmWithOptions(request, runtime);
  }

  /**
   * Sets the status of scaling activities that prompt text message or email notifications.
   * 
   * @param request - ModifyAlertConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAlertConfigurationResponse
   */
  async modifyAlertConfigurationWithOptions(request: $_model.ModifyAlertConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAlertConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scaleStatuses)) {
      query["ScaleStatuses"] = request.scaleStatuses;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAlertConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAlertConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAlertConfigurationResponse({}));
  }

  /**
   * Sets the status of scaling activities that prompt text message or email notifications.
   * 
   * @param request - ModifyAlertConfigurationRequest
   * @returns ModifyAlertConfigurationResponse
   */
  async modifyAlertConfiguration(request: $_model.ModifyAlertConfigurationRequest): Promise<$_model.ModifyAlertConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAlertConfigurationWithOptions(request, runtime);
  }

  /**
   * Modifies a scaling configuration by specifying parameters such as the ID of the scaling configuration to be modified, the name of the scaling configuration, and the attributes of the Elastic Container Instance (ECI), such as the instance restart policy, the preemption policy, and the bandwidth of the elastic IP address (EIP).
   * 
   * @remarks
   * - If you modify the name of the scaling configuration, ensure that no other scaling configuration in the same scaling group has the same name.
   * - You can call the [DescribeEciScalingConfigurations](https://help.aliyun.com/document_detail/459374.html) operation to query and verify the modification result.
   * 
   * @param request - ModifyEciScalingConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyEciScalingConfigurationResponse
   */
  async modifyEciScalingConfigurationWithOptions(request: $_model.ModifyEciScalingConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyEciScalingConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acrRegistryInfos)) {
      query["AcrRegistryInfos"] = request.acrRegistryInfos;
    }

    if (!$dara.isNull(request.activeDeadlineSeconds)) {
      query["ActiveDeadlineSeconds"] = request.activeDeadlineSeconds;
    }

    if (!$dara.isNull(request.autoCreateEip)) {
      query["AutoCreateEip"] = request.autoCreateEip;
    }

    if (!$dara.isNull(request.autoMatchImageCache)) {
      query["AutoMatchImageCache"] = request.autoMatchImageCache;
    }

    if (!$dara.isNull(request.containerGroupName)) {
      query["ContainerGroupName"] = request.containerGroupName;
    }

    if (!$dara.isNull(request.containers)) {
      query["Containers"] = request.containers;
    }

    if (!$dara.isNull(request.containersUpdateType)) {
      query["ContainersUpdateType"] = request.containersUpdateType;
    }

    if (!$dara.isNull(request.costOptimization)) {
      query["CostOptimization"] = request.costOptimization;
    }

    if (!$dara.isNull(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.cpuOptionsCore)) {
      query["CpuOptionsCore"] = request.cpuOptionsCore;
    }

    if (!$dara.isNull(request.cpuOptionsThreadsPerCore)) {
      query["CpuOptionsThreadsPerCore"] = request.cpuOptionsThreadsPerCore;
    }

    if (!$dara.isNull(request.dataCacheBucket)) {
      query["DataCacheBucket"] = request.dataCacheBucket;
    }

    if (!$dara.isNull(request.dataCacheBurstingEnabled)) {
      query["DataCacheBurstingEnabled"] = request.dataCacheBurstingEnabled;
    }

    if (!$dara.isNull(request.dataCachePL)) {
      query["DataCachePL"] = request.dataCachePL;
    }

    if (!$dara.isNull(request.dataCacheProvisionedIops)) {
      query["DataCacheProvisionedIops"] = request.dataCacheProvisionedIops;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dnsConfigNameServers)) {
      query["DnsConfigNameServers"] = request.dnsConfigNameServers;
    }

    if (!$dara.isNull(request.dnsConfigOptions)) {
      query["DnsConfigOptions"] = request.dnsConfigOptions;
    }

    if (!$dara.isNull(request.dnsConfigSearchs)) {
      query["DnsConfigSearchs"] = request.dnsConfigSearchs;
    }

    if (!$dara.isNull(request.dnsPolicy)) {
      query["DnsPolicy"] = request.dnsPolicy;
    }

    if (!$dara.isNull(request.egressBandwidth)) {
      query["EgressBandwidth"] = request.egressBandwidth;
    }

    if (!$dara.isNull(request.eipBandwidth)) {
      query["EipBandwidth"] = request.eipBandwidth;
    }

    if (!$dara.isNull(request.enableSls)) {
      query["EnableSls"] = request.enableSls;
    }

    if (!$dara.isNull(request.ephemeralStorage)) {
      query["EphemeralStorage"] = request.ephemeralStorage;
    }

    if (!$dara.isNull(request.gpuDriverVersion)) {
      query["GpuDriverVersion"] = request.gpuDriverVersion;
    }

    if (!$dara.isNull(request.hostAliases)) {
      query["HostAliases"] = request.hostAliases;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.imageRegistryCredentials)) {
      query["ImageRegistryCredentials"] = request.imageRegistryCredentials;
    }

    if (!$dara.isNull(request.imageSnapshotId)) {
      query["ImageSnapshotId"] = request.imageSnapshotId;
    }

    if (!$dara.isNull(request.ingressBandwidth)) {
      query["IngressBandwidth"] = request.ingressBandwidth;
    }

    if (!$dara.isNull(request.initContainers)) {
      query["InitContainers"] = request.initContainers;
    }

    if (!$dara.isNull(request.instanceFamilyLevel)) {
      query["InstanceFamilyLevel"] = request.instanceFamilyLevel;
    }

    if (!$dara.isNull(request.instanceTypes)) {
      query["InstanceTypes"] = request.instanceTypes;
    }

    if (!$dara.isNull(request.ipv6AddressCount)) {
      query["Ipv6AddressCount"] = request.ipv6AddressCount;
    }

    if (!$dara.isNull(request.loadBalancerWeight)) {
      query["LoadBalancerWeight"] = request.loadBalancerWeight;
    }

    if (!$dara.isNull(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.ntpServers)) {
      query["NtpServers"] = request.ntpServers;
    }

    if (!$dara.isNull(request.override)) {
      query["Override"] = request.override;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.restartPolicy)) {
      query["RestartPolicy"] = request.restartPolicy;
    }

    if (!$dara.isNull(request.scalingConfigurationId)) {
      query["ScalingConfigurationId"] = request.scalingConfigurationId;
    }

    if (!$dara.isNull(request.scalingConfigurationName)) {
      query["ScalingConfigurationName"] = request.scalingConfigurationName;
    }

    if (!$dara.isNull(request.securityContextSysCtls)) {
      query["SecurityContextSysCtls"] = request.securityContextSysCtls;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.spotPriceLimit)) {
      query["SpotPriceLimit"] = request.spotPriceLimit;
    }

    if (!$dara.isNull(request.spotStrategy)) {
      query["SpotStrategy"] = request.spotStrategy;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.terminationGracePeriodSeconds)) {
      query["TerminationGracePeriodSeconds"] = request.terminationGracePeriodSeconds;
    }

    if (!$dara.isNull(request.volumes)) {
      query["Volumes"] = request.volumes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyEciScalingConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyEciScalingConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.ModifyEciScalingConfigurationResponse({}));
  }

  /**
   * Modifies a scaling configuration by specifying parameters such as the ID of the scaling configuration to be modified, the name of the scaling configuration, and the attributes of the Elastic Container Instance (ECI), such as the instance restart policy, the preemption policy, and the bandwidth of the elastic IP address (EIP).
   * 
   * @remarks
   * - If you modify the name of the scaling configuration, ensure that no other scaling configuration in the same scaling group has the same name.
   * - You can call the [DescribeEciScalingConfigurations](https://help.aliyun.com/document_detail/459374.html) operation to query and verify the modification result.
   * 
   * @param request - ModifyEciScalingConfigurationRequest
   * @returns ModifyEciScalingConfigurationResponse
   */
  async modifyEciScalingConfiguration(request: $_model.ModifyEciScalingConfigurationRequest): Promise<$_model.ModifyEciScalingConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyEciScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of an ECS instance in a scaling group. Currently, only the lifecycle management attribute of instances manually added to the scaling group can be modified.
   * 
   * @param request - ModifyInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceAttributeResponse
   */
  async modifyInstanceAttributeWithOptions(request: $_model.ModifyInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.entrusted)) {
      query["Entrusted"] = request.entrusted;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceAttribute",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceAttributeResponse({}));
  }

  /**
   * Modifies the attributes of an ECS instance in a scaling group. Currently, only the lifecycle management attribute of instances manually added to the scaling group can be modified.
   * 
   * @param request - ModifyInstanceAttributeRequest
   * @returns ModifyInstanceAttributeResponse
   */
  async modifyInstanceAttribute(request: $_model.ModifyInstanceAttributeRequest): Promise<$_model.ModifyInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a lifecycle hook, such as the applicable scaling activity type, the wait time for the scaling activity, and the subsequent action after the wait state ends. You can specify the lifecycle hook by its ID or name and the scaling group ID without the need to delete the lifecycle hook if it no longer meets your business requirements.
   * 
   * @remarks
   * You can specify the lifecycle hook to be modified in one of the following ways:
   * - Specify only the lifecycle hook ID (LifecycleHookId). In this case, the ScalingGroupId and LifecycleHookName parameters are ignored.
   * - Specify both the scaling group ID (ScalingGroupId) and the lifecycle hook name (LifecycleHookName). The lifecycle hook name is unique within a scaling group.
   * 
   * @param request - ModifyLifecycleHookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLifecycleHookResponse
   */
  async modifyLifecycleHookWithOptions(request: $_model.ModifyLifecycleHookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLifecycleHookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.defaultResult)) {
      query["DefaultResult"] = request.defaultResult;
    }

    if (!$dara.isNull(request.heartbeatTimeout)) {
      query["HeartbeatTimeout"] = request.heartbeatTimeout;
    }

    if (!$dara.isNull(request.lifecycleActionSources)) {
      query["LifecycleActionSources"] = request.lifecycleActionSources;
    }

    if (!$dara.isNull(request.lifecycleHookId)) {
      query["LifecycleHookId"] = request.lifecycleHookId;
    }

    if (!$dara.isNull(request.lifecycleHookName)) {
      query["LifecycleHookName"] = request.lifecycleHookName;
    }

    if (!$dara.isNull(request.lifecycleHookStatus)) {
      query["LifecycleHookStatus"] = request.lifecycleHookStatus;
    }

    if (!$dara.isNull(request.lifecycleTransition)) {
      query["LifecycleTransition"] = request.lifecycleTransition;
    }

    if (!$dara.isNull(request.notificationArn)) {
      query["NotificationArn"] = request.notificationArn;
    }

    if (!$dara.isNull(request.notificationMetadata)) {
      query["NotificationMetadata"] = request.notificationMetadata;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyLifecycleHook",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLifecycleHookResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLifecycleHookResponse({}));
  }

  /**
   * Modifies the configurations of a lifecycle hook, such as the applicable scaling activity type, the wait time for the scaling activity, and the subsequent action after the wait state ends. You can specify the lifecycle hook by its ID or name and the scaling group ID without the need to delete the lifecycle hook if it no longer meets your business requirements.
   * 
   * @remarks
   * You can specify the lifecycle hook to be modified in one of the following ways:
   * - Specify only the lifecycle hook ID (LifecycleHookId). In this case, the ScalingGroupId and LifecycleHookName parameters are ignored.
   * - Specify both the scaling group ID (ScalingGroupId) and the lifecycle hook name (LifecycleHookName). The lifecycle hook name is unique within a scaling group.
   * 
   * @param request - ModifyLifecycleHookRequest
   * @returns ModifyLifecycleHookResponse
   */
  async modifyLifecycleHook(request: $_model.ModifyLifecycleHookRequest): Promise<$_model.ModifyLifecycleHookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLifecycleHookWithOptions(request, runtime);
  }

  /**
   * Modifies event notification rules. Event notification rules support automatic sending of notifications to CloudMonitor, Message Service (MNS) topics, or MNS queues when a specified type of events occur. This helps you learn about the dynamics of your scaling group at the earliest opportunity and further automate resource management. If an existing event notification rule does not meet your business requirements, you can call the ModifyNotificationConfiguration operation to modify the event notification rule, without the need to create a new rule. Take not that you cannot modify the notification method of an event notification rule by calling this operation.
   * 
   * @param request - ModifyNotificationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNotificationConfigurationResponse
   */
  async modifyNotificationConfigurationWithOptions(request: $_model.ModifyNotificationConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNotificationConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.messageEncoding)) {
      query["MessageEncoding"] = request.messageEncoding;
    }

    if (!$dara.isNull(request.notificationArn)) {
      query["NotificationArn"] = request.notificationArn;
    }

    if (!$dara.isNull(request.notificationTypes)) {
      query["NotificationTypes"] = request.notificationTypes;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.timeZone)) {
      query["TimeZone"] = request.timeZone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyNotificationConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNotificationConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.ModifyNotificationConfigurationResponse({}));
  }

  /**
   * Modifies event notification rules. Event notification rules support automatic sending of notifications to CloudMonitor, Message Service (MNS) topics, or MNS queues when a specified type of events occur. This helps you learn about the dynamics of your scaling group at the earliest opportunity and further automate resource management. If an existing event notification rule does not meet your business requirements, you can call the ModifyNotificationConfiguration operation to modify the event notification rule, without the need to create a new rule. Take not that you cannot modify the notification method of an event notification rule by calling this operation.
   * 
   * @param request - ModifyNotificationConfigurationRequest
   * @returns ModifyNotificationConfigurationResponse
   */
  async modifyNotificationConfiguration(request: $_model.ModifyNotificationConfigurationRequest): Promise<$_model.ModifyNotificationConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyNotificationConfigurationWithOptions(request, runtime);
  }

  /**
   * Modifies an ECS-type scaling configuration (the ECS instance template for scale-out) if the current scaling configuration does not meet your business requirements.
   * 
   * @remarks
   * - If you modify the name of a scaling configuration, ensure that no other scaling configuration in the same scaling group has the same name.
   * - You can bind a primary network interface card (NIC) by using one of the following methods. However, you can use only one method in a single request. If you use both methods, the request fails and an error message is returned. When you modify the scaling configuration by using one method, the NIC configuration set by the other method is cleared.
   *     - Directly configure the primary NIC by using parameters such as SecurityGroupId, SecurityGroupIds, and Ipv6AddressCount.
   *     - Configure the primary NIC and secondary NICs by using the NetworkInterfaces parameter. When you use the NetworkInterfaces parameter, you must configure the primary NIC. If NetworkInterface.InstanceType is set to Primary, the primary NIC is configured. If NetworkInterface.InstanceType is set to Secondary or left empty, a secondary NIC is configured.
   * 
   * @param tmpReq - ModifyScalingConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyScalingConfigurationResponse
   */
  async modifyScalingConfigurationWithOptions(tmpReq: $_model.ModifyScalingConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyScalingConfigurationResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyScalingConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.schedulerOptions)) {
      request.schedulerOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.schedulerOptions, "SchedulerOptions", "json");
    }

    let query = { };
    if (!$dara.isNull(request.affinity)) {
      query["Affinity"] = request.affinity;
    }

    if (!$dara.isNull(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.creditSpecification)) {
      query["CreditSpecification"] = request.creditSpecification;
    }

    if (!$dara.isNull(request.customPriorities)) {
      query["CustomPriorities"] = request.customPriorities;
    }

    if (!$dara.isNull(request.dataDisks)) {
      query["DataDisks"] = request.dataDisks;
    }

    if (!$dara.isNull(request.dedicatedHostClusterId)) {
      query["DedicatedHostClusterId"] = request.dedicatedHostClusterId;
    }

    if (!$dara.isNull(request.dedicatedHostId)) {
      query["DedicatedHostId"] = request.dedicatedHostId;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.deploymentSetId)) {
      query["DeploymentSetId"] = request.deploymentSetId;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.hpcClusterId)) {
      query["HpcClusterId"] = request.hpcClusterId;
    }

    if (!$dara.isNull(request.httpEndpoint)) {
      query["HttpEndpoint"] = request.httpEndpoint;
    }

    if (!$dara.isNull(request.httpTokens)) {
      query["HttpTokens"] = request.httpTokens;
    }

    if (!$dara.isNull(request.imageFamily)) {
      query["ImageFamily"] = request.imageFamily;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.instanceDescription)) {
      query["InstanceDescription"] = request.instanceDescription;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instancePatternInfos)) {
      query["InstancePatternInfos"] = request.instancePatternInfos;
    }

    if (!$dara.isNull(request.instanceTypeCandidateOptions)) {
      query["InstanceTypeCandidateOptions"] = request.instanceTypeCandidateOptions;
    }

    if (!$dara.isNull(request.instanceTypeOverrides)) {
      query["InstanceTypeOverrides"] = request.instanceTypeOverrides;
    }

    if (!$dara.isNull(request.instanceTypes)) {
      query["InstanceTypes"] = request.instanceTypes;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.internetMaxBandwidthIn)) {
      query["InternetMaxBandwidthIn"] = request.internetMaxBandwidthIn;
    }

    if (!$dara.isNull(request.internetMaxBandwidthOut)) {
      query["InternetMaxBandwidthOut"] = request.internetMaxBandwidthOut;
    }

    if (!$dara.isNull(request.ioOptimized)) {
      query["IoOptimized"] = request.ioOptimized;
    }

    if (!$dara.isNull(request.ipv6AddressCount)) {
      query["Ipv6AddressCount"] = request.ipv6AddressCount;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.loadBalancerWeight)) {
      query["LoadBalancerWeight"] = request.loadBalancerWeight;
    }

    if (!$dara.isNull(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.networkInterfaces)) {
      query["NetworkInterfaces"] = request.networkInterfaces;
    }

    if (!$dara.isNull(request.override)) {
      query["Override"] = request.override;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.passwordInherit)) {
      query["PasswordInherit"] = request.passwordInherit;
    }

    if (!$dara.isNull(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourcePoolOptions)) {
      query["ResourcePoolOptions"] = request.resourcePoolOptions;
    }

    if (!$dara.isNull(request.scalingConfigurationId)) {
      query["ScalingConfigurationId"] = request.scalingConfigurationId;
    }

    if (!$dara.isNull(request.scalingConfigurationName)) {
      query["ScalingConfigurationName"] = request.scalingConfigurationName;
    }

    if (!$dara.isNull(request.schedulerOptionsShrink)) {
      query["SchedulerOptions"] = request.schedulerOptionsShrink;
    }

    if (!$dara.isNull(request.secondaryEniVSwitchConstraint)) {
      query["SecondaryEniVSwitchConstraint"] = request.secondaryEniVSwitchConstraint;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.securityGroupIds)) {
      query["SecurityGroupIds"] = request.securityGroupIds;
    }

    if (!$dara.isNull(request.securityOptions)) {
      query["SecurityOptions"] = request.securityOptions;
    }

    if (!$dara.isNull(request.spotDuration)) {
      query["SpotDuration"] = request.spotDuration;
    }

    if (!$dara.isNull(request.spotInterruptionBehavior)) {
      query["SpotInterruptionBehavior"] = request.spotInterruptionBehavior;
    }

    if (!$dara.isNull(request.spotPriceLimits)) {
      query["SpotPriceLimits"] = request.spotPriceLimits;
    }

    if (!$dara.isNull(request.spotStrategy)) {
      query["SpotStrategy"] = request.spotStrategy;
    }

    if (!$dara.isNull(request.storageSetId)) {
      query["StorageSetId"] = request.storageSetId;
    }

    if (!$dara.isNull(request.storageSetPartitionNumber)) {
      query["StorageSetPartitionNumber"] = request.storageSetPartitionNumber;
    }

    if (!$dara.isNull(request.systemDiskCategories)) {
      query["SystemDiskCategories"] = request.systemDiskCategories;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.tenancy)) {
      query["Tenancy"] = request.tenancy;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    if (!$dara.isNull(request.imageOptions)) {
      query["ImageOptions"] = request.imageOptions;
    }

    if (!$dara.isNull(request.privatePoolOptions)) {
      query["PrivatePoolOptions"] = request.privatePoolOptions;
    }

    if (!$dara.isNull(request.systemDisk)) {
      query["SystemDisk"] = request.systemDisk;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyScalingConfiguration",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyScalingConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.ModifyScalingConfigurationResponse({}));
  }

  /**
   * Modifies an ECS-type scaling configuration (the ECS instance template for scale-out) if the current scaling configuration does not meet your business requirements.
   * 
   * @remarks
   * - If you modify the name of a scaling configuration, ensure that no other scaling configuration in the same scaling group has the same name.
   * - You can bind a primary network interface card (NIC) by using one of the following methods. However, you can use only one method in a single request. If you use both methods, the request fails and an error message is returned. When you modify the scaling configuration by using one method, the NIC configuration set by the other method is cleared.
   *     - Directly configure the primary NIC by using parameters such as SecurityGroupId, SecurityGroupIds, and Ipv6AddressCount.
   *     - Configure the primary NIC and secondary NICs by using the NetworkInterfaces parameter. When you use the NetworkInterfaces parameter, you must configure the primary NIC. If NetworkInterface.InstanceType is set to Primary, the primary NIC is configured. If NetworkInterface.InstanceType is set to Secondary or left empty, a secondary NIC is configured.
   * 
   * @param request - ModifyScalingConfigurationRequest
   * @returns ModifyScalingConfigurationResponse
   */
  async modifyScalingConfiguration(request: $_model.ModifyScalingConfigurationRequest): Promise<$_model.ModifyScalingConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of a scaling group. You can configure a scaling group to automatically adjust your computing capacity by increasing or decreasing the number of instances based on business demands and policies. If the current attributes of the scaling group no longer meet your business requirements, you can call this operation to modify attributes such as the maximum number of instances, minimum number of instances, or expected number of instances. This eliminates the need to recreate the scaling group and reconfigure related attributes, saving time and resource costs.
   * 
   * @remarks
   * - The following parameters cannot be modified:
   *      - RegionId.
   *     - LoadBalancerId.
   *     > To modify load balancing instances, use the AttachLoadBalancers and DetachLoadBalancers operations.
   *     - DBInstanceId.
   *     > To modify ApsaraDB RDS instances, use the AttachDBInstances and DetachDBInstances operations.
   * - You can call this operation only when the scaling group is in the Active or Inactive state.
   * - Activating a new scaling configuration does not affect the running ECS instances or elastic container instances that were created by using earlier scaling configurations.
   * - If you modify the MaxSize parameter and the number of ECS instances or elastic container instances in the scaling group exceeds the value of MaxSize, Auto Scaling automatically removes ECS instances or elastic container instances from the scaling group until the number of instances equals the value of MaxSize.
   * - If you modify the MinSize parameter and the number of ECS instances or elastic container instances in the scaling group is less than the value of MinSize, Auto Scaling automatically adds ECS instances or elastic container instances to the scaling group until the number of instances equals the value of MinSize.
   * - If the DesiredCapacity parameter is configured for the scaling group and you modify the value of DesiredCapacity, and the current number of ECS instances or elastic container instances in the scaling group is different from the value of DesiredCapacity, Auto Scaling automatically adds or removes ECS instances or elastic container instances until the number of instances equals the value of DesiredCapacity.
   * 
   * @param request - ModifyScalingGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyScalingGroupResponse
   */
  async modifyScalingGroupWithOptions(request: $_model.ModifyScalingGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyScalingGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activeScalingConfigurationId)) {
      query["ActiveScalingConfigurationId"] = request.activeScalingConfigurationId;
    }

    if (!$dara.isNull(request.allocationStrategy)) {
      query["AllocationStrategy"] = request.allocationStrategy;
    }

    if (!$dara.isNull(request.autoRebalance)) {
      query["AutoRebalance"] = request.autoRebalance;
    }

    if (!$dara.isNull(request.azBalance)) {
      query["AzBalance"] = request.azBalance;
    }

    if (!$dara.isNull(request.balanceMode)) {
      query["BalanceMode"] = request.balanceMode;
    }

    if (!$dara.isNull(request.capacityOptions)) {
      query["CapacityOptions"] = request.capacityOptions;
    }

    if (!$dara.isNull(request.compensateWithOnDemand)) {
      query["CompensateWithOnDemand"] = request.compensateWithOnDemand;
    }

    if (!$dara.isNull(request.customPolicyARN)) {
      query["CustomPolicyARN"] = request.customPolicyARN;
    }

    if (!$dara.isNull(request.defaultCooldown)) {
      query["DefaultCooldown"] = request.defaultCooldown;
    }

    if (!$dara.isNull(request.desiredCapacity)) {
      query["DesiredCapacity"] = request.desiredCapacity;
    }

    if (!$dara.isNull(request.disableDesiredCapacity)) {
      query["DisableDesiredCapacity"] = request.disableDesiredCapacity;
    }

    if (!$dara.isNull(request.groupDeletionProtection)) {
      query["GroupDeletionProtection"] = request.groupDeletionProtection;
    }

    if (!$dara.isNull(request.healthCheckType)) {
      query["HealthCheckType"] = request.healthCheckType;
    }

    if (!$dara.isNull(request.healthCheckTypes)) {
      query["HealthCheckTypes"] = request.healthCheckTypes;
    }

    if (!$dara.isNull(request.launchTemplateId)) {
      query["LaunchTemplateId"] = request.launchTemplateId;
    }

    if (!$dara.isNull(request.launchTemplateOverrides)) {
      query["LaunchTemplateOverrides"] = request.launchTemplateOverrides;
    }

    if (!$dara.isNull(request.launchTemplateVersion)) {
      query["LaunchTemplateVersion"] = request.launchTemplateVersion;
    }

    if (!$dara.isNull(request.maxInstanceLifetime)) {
      query["MaxInstanceLifetime"] = request.maxInstanceLifetime;
    }

    if (!$dara.isNull(request.maxSize)) {
      query["MaxSize"] = request.maxSize;
    }

    if (!$dara.isNull(request.minSize)) {
      query["MinSize"] = request.minSize;
    }

    if (!$dara.isNull(request.multiAZPolicy)) {
      query["MultiAZPolicy"] = request.multiAZPolicy;
    }

    if (!$dara.isNull(request.onDemandBaseCapacity)) {
      query["OnDemandBaseCapacity"] = request.onDemandBaseCapacity;
    }

    if (!$dara.isNull(request.onDemandPercentageAboveBaseCapacity)) {
      query["OnDemandPercentageAboveBaseCapacity"] = request.onDemandPercentageAboveBaseCapacity;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.removalPolicies)) {
      query["RemovalPolicies"] = request.removalPolicies;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.scalingGroupName)) {
      query["ScalingGroupName"] = request.scalingGroupName;
    }

    if (!$dara.isNull(request.scalingPolicy)) {
      query["ScalingPolicy"] = request.scalingPolicy;
    }

    if (!$dara.isNull(request.spotAllocationStrategy)) {
      query["SpotAllocationStrategy"] = request.spotAllocationStrategy;
    }

    if (!$dara.isNull(request.spotInstancePools)) {
      query["SpotInstancePools"] = request.spotInstancePools;
    }

    if (!$dara.isNull(request.spotInstanceRemedy)) {
      query["SpotInstanceRemedy"] = request.spotInstanceRemedy;
    }

    if (!$dara.isNull(request.stopInstanceTimeout)) {
      query["StopInstanceTimeout"] = request.stopInstanceTimeout;
    }

    if (!$dara.isNull(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    if (!$dara.isNull(request.zoneShiftPolicy)) {
      query["ZoneShiftPolicy"] = request.zoneShiftPolicy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyScalingGroup",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyScalingGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyScalingGroupResponse({}));
  }

  /**
   * Modifies the attributes of a scaling group. You can configure a scaling group to automatically adjust your computing capacity by increasing or decreasing the number of instances based on business demands and policies. If the current attributes of the scaling group no longer meet your business requirements, you can call this operation to modify attributes such as the maximum number of instances, minimum number of instances, or expected number of instances. This eliminates the need to recreate the scaling group and reconfigure related attributes, saving time and resource costs.
   * 
   * @remarks
   * - The following parameters cannot be modified:
   *      - RegionId.
   *     - LoadBalancerId.
   *     > To modify load balancing instances, use the AttachLoadBalancers and DetachLoadBalancers operations.
   *     - DBInstanceId.
   *     > To modify ApsaraDB RDS instances, use the AttachDBInstances and DetachDBInstances operations.
   * - You can call this operation only when the scaling group is in the Active or Inactive state.
   * - Activating a new scaling configuration does not affect the running ECS instances or elastic container instances that were created by using earlier scaling configurations.
   * - If you modify the MaxSize parameter and the number of ECS instances or elastic container instances in the scaling group exceeds the value of MaxSize, Auto Scaling automatically removes ECS instances or elastic container instances from the scaling group until the number of instances equals the value of MaxSize.
   * - If you modify the MinSize parameter and the number of ECS instances or elastic container instances in the scaling group is less than the value of MinSize, Auto Scaling automatically adds ECS instances or elastic container instances to the scaling group until the number of instances equals the value of MinSize.
   * - If the DesiredCapacity parameter is configured for the scaling group and you modify the value of DesiredCapacity, and the current number of ECS instances or elastic container instances in the scaling group is different from the value of DesiredCapacity, Auto Scaling automatically adds or removes ECS instances or elastic container instances until the number of instances equals the value of DesiredCapacity.
   * 
   * @param request - ModifyScalingGroupRequest
   * @returns ModifyScalingGroupResponse
   */
  async modifyScalingGroup(request: $_model.ModifyScalingGroupRequest): Promise<$_model.ModifyScalingGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyScalingGroupWithOptions(request, runtime);
  }

  /**
   * Modifies one or more attributes of a scaling rule. If an existing scaling rule no longer meets your requirements, you can call this operation to modify its attributes instead of creating a new one. This avoids unnecessary repetitive operations and saves time and resources.
   * 
   * @param request - ModifyScalingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyScalingRuleResponse
   */
  async modifyScalingRuleWithOptions(request: $_model.ModifyScalingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyScalingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adjustmentType)) {
      query["AdjustmentType"] = request.adjustmentType;
    }

    if (!$dara.isNull(request.adjustmentValue)) {
      query["AdjustmentValue"] = request.adjustmentValue;
    }

    if (!$dara.isNull(request.alarmDimensions)) {
      query["AlarmDimensions"] = request.alarmDimensions;
    }

    if (!$dara.isNull(request.alarmOptions)) {
      query["AlarmOptions"] = request.alarmOptions;
    }

    if (!$dara.isNull(request.cooldown)) {
      query["Cooldown"] = request.cooldown;
    }

    if (!$dara.isNull(request.disableScaleIn)) {
      query["DisableScaleIn"] = request.disableScaleIn;
    }

    if (!$dara.isNull(request.estimatedInstanceWarmup)) {
      query["EstimatedInstanceWarmup"] = request.estimatedInstanceWarmup;
    }

    if (!$dara.isNull(request.hybridMetrics)) {
      query["HybridMetrics"] = request.hybridMetrics;
    }

    if (!$dara.isNull(request.hybridMonitorNamespace)) {
      query["HybridMonitorNamespace"] = request.hybridMonitorNamespace;
    }

    if (!$dara.isNull(request.initialMaxSize)) {
      query["InitialMaxSize"] = request.initialMaxSize;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.minAdjustmentMagnitude)) {
      query["MinAdjustmentMagnitude"] = request.minAdjustmentMagnitude;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.predictiveScalingMode)) {
      query["PredictiveScalingMode"] = request.predictiveScalingMode;
    }

    if (!$dara.isNull(request.predictiveTaskBufferTime)) {
      query["PredictiveTaskBufferTime"] = request.predictiveTaskBufferTime;
    }

    if (!$dara.isNull(request.predictiveValueBehavior)) {
      query["PredictiveValueBehavior"] = request.predictiveValueBehavior;
    }

    if (!$dara.isNull(request.predictiveValueBuffer)) {
      query["PredictiveValueBuffer"] = request.predictiveValueBuffer;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scaleInEvaluationCount)) {
      query["ScaleInEvaluationCount"] = request.scaleInEvaluationCount;
    }

    if (!$dara.isNull(request.scaleOutEvaluationCount)) {
      query["ScaleOutEvaluationCount"] = request.scaleOutEvaluationCount;
    }

    if (!$dara.isNull(request.scalingRuleId)) {
      query["ScalingRuleId"] = request.scalingRuleId;
    }

    if (!$dara.isNull(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    if (!$dara.isNull(request.stepAdjustments)) {
      query["StepAdjustments"] = request.stepAdjustments;
    }

    if (!$dara.isNull(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyScalingRule",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyScalingRuleResponse({}));
  }

  /**
   * Modifies one or more attributes of a scaling rule. If an existing scaling rule no longer meets your requirements, you can call this operation to modify its attributes instead of creating a new one. This avoids unnecessary repetitive operations and saves time and resources.
   * 
   * @param request - ModifyScalingRuleRequest
   * @returns ModifyScalingRuleResponse
   */
  async modifyScalingRule(request: $_model.ModifyScalingRuleRequest): Promise<$_model.ModifyScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyScalingRuleWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration parameters of an existing scheduled task, such as the scaling rule to execute, the number of instances in the scaling group, the task execution frequency, and the retry policy.
   * 
   * @remarks
   * Scheduled tasks support two scaling methods:
   * - Specify the scaling rule to execute by using the ScheduledAction parameter.
   * - Specify the number of instances in the scaling group by using the ScalingGroupId parameter.
   * > You cannot specify both ScheduledAction and ScalingGroupId at the same time.
   * 
   * @param request - ModifyScheduledTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyScheduledTaskResponse
   */
  async modifyScheduledTaskWithOptions(request: $_model.ModifyScheduledTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyScheduledTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.desiredCapacity)) {
      query["DesiredCapacity"] = request.desiredCapacity;
    }

    if (!$dara.isNull(request.launchExpirationTime)) {
      query["LaunchExpirationTime"] = request.launchExpirationTime;
    }

    if (!$dara.isNull(request.launchTime)) {
      query["LaunchTime"] = request.launchTime;
    }

    if (!$dara.isNull(request.maxValue)) {
      query["MaxValue"] = request.maxValue;
    }

    if (!$dara.isNull(request.minValue)) {
      query["MinValue"] = request.minValue;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.recurrenceEndTime)) {
      query["RecurrenceEndTime"] = request.recurrenceEndTime;
    }

    if (!$dara.isNull(request.recurrenceType)) {
      query["RecurrenceType"] = request.recurrenceType;
    }

    if (!$dara.isNull(request.recurrenceValue)) {
      query["RecurrenceValue"] = request.recurrenceValue;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.scheduledAction)) {
      query["ScheduledAction"] = request.scheduledAction;
    }

    if (!$dara.isNull(request.scheduledTaskId)) {
      query["ScheduledTaskId"] = request.scheduledTaskId;
    }

    if (!$dara.isNull(request.scheduledTaskName)) {
      query["ScheduledTaskName"] = request.scheduledTaskName;
    }

    if (!$dara.isNull(request.taskEnabled)) {
      query["TaskEnabled"] = request.taskEnabled;
    }

    if (!$dara.isNull(request.warmPoolCapacityOptions)) {
      query["WarmPoolCapacityOptions"] = request.warmPoolCapacityOptions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyScheduledTask",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyScheduledTaskResponse>(await this.callApi(params, req, runtime), new $_model.ModifyScheduledTaskResponse({}));
  }

  /**
   * Modifies the configuration parameters of an existing scheduled task, such as the scaling rule to execute, the number of instances in the scaling group, the task execution frequency, and the retry policy.
   * 
   * @remarks
   * Scheduled tasks support two scaling methods:
   * - Specify the scaling rule to execute by using the ScheduledAction parameter.
   * - Specify the number of instances in the scaling group by using the ScalingGroupId parameter.
   * > You cannot specify both ScheduledAction and ScalingGroupId at the same time.
   * 
   * @param request - ModifyScheduledTaskRequest
   * @returns ModifyScheduledTaskResponse
   */
  async modifyScheduledTask(request: $_model.ModifyScheduledTaskRequest): Promise<$_model.ModifyScheduledTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyScheduledTaskWithOptions(request, runtime);
  }

  /**
   * Configures a warm pool for a scaling group. If the scaling group does not have a warm pool, this operation creates one. If the scaling group already has a warm pool, this operation updates the configurations of the warm pool.
   * 
   * @remarks
   * - Warm pools are supported only for ECS scaling groups.
   * - Warm pools are supported only when the reclaim mode of the scaling group is set to release or forcerelease.
   * 
   * @param request - PutWarmPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutWarmPoolResponse
   */
  async putWarmPoolWithOptions(request: $_model.PutWarmPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutWarmPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.capacityOptions)) {
      query["CapacityOptions"] = request.capacityOptions;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceReusePolicy)) {
      query["InstanceReusePolicy"] = request.instanceReusePolicy;
    }

    if (!$dara.isNull(request.poolState)) {
      query["PoolState"] = request.poolState;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutWarmPool",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutWarmPoolResponse>(await this.callApi(params, req, runtime), new $_model.PutWarmPoolResponse({}));
  }

  /**
   * Configures a warm pool for a scaling group. If the scaling group does not have a warm pool, this operation creates one. If the scaling group already has a warm pool, this operation updates the configurations of the warm pool.
   * 
   * @remarks
   * - Warm pools are supported only for ECS scaling groups.
   * - Warm pools are supported only when the reclaim mode of the scaling group is set to release or forcerelease.
   * 
   * @param request - PutWarmPoolRequest
   * @returns PutWarmPoolResponse
   */
  async putWarmPool(request: $_model.PutWarmPoolRequest): Promise<$_model.PutWarmPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putWarmPoolWithOptions(request, runtime);
  }

  /**
   * Queries the historical monitoring data of a scaling group that uses predictive scaling rules.
   * 
   * @param request - QueryHistoricalMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryHistoricalMetricResponse
   */
  async queryHistoricalMetricWithOptions(request: $_model.QueryHistoricalMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryHistoricalMetricResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryHistoricalMetric",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryHistoricalMetricResponse>(await this.callApi(params, req, runtime), new $_model.QueryHistoricalMetricResponse({}));
  }

  /**
   * Queries the historical monitoring data of a scaling group that uses predictive scaling rules.
   * 
   * @param request - QueryHistoricalMetricRequest
   * @returns QueryHistoricalMetricResponse
   */
  async queryHistoricalMetric(request: $_model.QueryHistoricalMetricRequest): Promise<$_model.QueryHistoricalMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryHistoricalMetricWithOptions(request, runtime);
  }

  /**
   * Queries predictive monitoring data.
   * 
   * @param request - QueryPredictiveMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPredictiveMetricResponse
   */
  async queryPredictiveMetricWithOptions(request: $_model.QueryPredictiveMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPredictiveMetricResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPredictiveMetric",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPredictiveMetricResponse>(await this.callApi(params, req, runtime), new $_model.QueryPredictiveMetricResponse({}));
  }

  /**
   * Queries predictive monitoring data.
   * 
   * @param request - QueryPredictiveMetricRequest
   * @returns QueryPredictiveMetricResponse
   */
  async queryPredictiveMetric(request: $_model.QueryPredictiveMetricRequest): Promise<$_model.QueryPredictiveMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPredictiveMetricWithOptions(request, runtime);
  }

  /**
   * Queries the information about a prediction task.
   * 
   * @param request - QueryPredictiveTaskInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPredictiveTaskInfoResponse
   */
  async queryPredictiveTaskInfoWithOptions(request: $_model.QueryPredictiveTaskInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPredictiveTaskInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingRuleId)) {
      query["ScalingRuleId"] = request.scalingRuleId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPredictiveTaskInfo",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPredictiveTaskInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryPredictiveTaskInfoResponse({}));
  }

  /**
   * Queries the information about a prediction task.
   * 
   * @param request - QueryPredictiveTaskInfoRequest
   * @returns QueryPredictiveTaskInfoResponse
   */
  async queryPredictiveTaskInfo(request: $_model.QueryPredictiveTaskInfoRequest): Promise<$_model.QueryPredictiveTaskInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPredictiveTaskInfoWithOptions(request, runtime);
  }

  /**
   * Queries the predicted number of instances in a scaling group.
   * 
   * @param request - QueryPredictiveValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPredictiveValueResponse
   */
  async queryPredictiveValueWithOptions(request: $_model.QueryPredictiveValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPredictiveValueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.targetValue)) {
      query["TargetValue"] = request.targetValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPredictiveValue",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPredictiveValueResponse>(await this.callApi(params, req, runtime), new $_model.QueryPredictiveValueResponse({}));
  }

  /**
   * Queries the predicted number of instances in a scaling group.
   * 
   * @param request - QueryPredictiveValueRequest
   * @returns QueryPredictiveValueResponse
   */
  async queryPredictiveValue(request: $_model.QueryPredictiveValueRequest): Promise<$_model.QueryPredictiveValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPredictiveValueWithOptions(request, runtime);
  }

  /**
   * Rebalances the distribution of ECS instances in a multi-zone scaling group if the number of instances across zones is unbalanced due to insufficient inventory or other reasons.
   * 
   * @remarks
   * ## Operation description
   * Rebalancing compensates for unbalanced zones by creating new ECS instances to replace existing ones. New ECS instances are started before existing ones are stopped. Rebalancing does not affect the performance or availability of your applications.
   * - This operation is supported only for multi-zone scaling groups whose `MultiAZPolicy` is set to `BALANCE`. It is used to balance the distribution of ECS instances across multiple zones.
   * - You can perform a rebalancing operation only when the instance distribution in the scaling group is severely unbalanced. A single rebalancing activity can replace up to 20 ECS instances.
   * - During a rebalancing activity, if the number of instances in the scaling group approaches or reaches the specified maximum number of ECS instances (MaxSize) but the distribution still needs to be balanced, Auto Scaling allows the number of ECS instances to temporarily exceed MaxSize by 10%. This temporary excess lasts until the distribution is balanced, typically for 1 to 6 minutes. 
   *    > If 10% of the maximum number of instances in the scaling group is not an integer, the decimal part is rounded up to allow an excess of 1 instance. For example, if the maximum number of instances in the scaling group is 15, 10% is 1.5, and the temporary excess allowed is 2 instances.
   * 
   * @param request - RebalanceInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebalanceInstancesResponse
   */
  async rebalanceInstancesWithOptions(request: $_model.RebalanceInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebalanceInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebalanceInstances",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebalanceInstancesResponse>(await this.callApi(params, req, runtime), new $_model.RebalanceInstancesResponse({}));
  }

  /**
   * Rebalances the distribution of ECS instances in a multi-zone scaling group if the number of instances across zones is unbalanced due to insufficient inventory or other reasons.
   * 
   * @remarks
   * ## Operation description
   * Rebalancing compensates for unbalanced zones by creating new ECS instances to replace existing ones. New ECS instances are started before existing ones are stopped. Rebalancing does not affect the performance or availability of your applications.
   * - This operation is supported only for multi-zone scaling groups whose `MultiAZPolicy` is set to `BALANCE`. It is used to balance the distribution of ECS instances across multiple zones.
   * - You can perform a rebalancing operation only when the instance distribution in the scaling group is severely unbalanced. A single rebalancing activity can replace up to 20 ECS instances.
   * - During a rebalancing activity, if the number of instances in the scaling group approaches or reaches the specified maximum number of ECS instances (MaxSize) but the distribution still needs to be balanced, Auto Scaling allows the number of ECS instances to temporarily exceed MaxSize by 10%. This temporary excess lasts until the distribution is balanced, typically for 1 to 6 minutes. 
   *    > If 10% of the maximum number of instances in the scaling group is not an integer, the decimal part is rounded up to allow an excess of 1 instance. For example, if the maximum number of instances in the scaling group is 15, 10% is 1.5, and the temporary excess allowed is 2 instances.
   * 
   * @param request - RebalanceInstancesRequest
   * @returns RebalanceInstancesResponse
   */
  async rebalanceInstances(request: $_model.RebalanceInstancesRequest): Promise<$_model.RebalanceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebalanceInstancesWithOptions(request, runtime);
  }

  /**
   * Extends the suspension period of an ECS instance that is suspended after a lifecycle hook is triggered in a scaling group. If the default wait time of the suspended ECS instance is insufficient for your custom operations, you can call this operation to extend the suspension period by specifying the lifecycle hook ID, the wait state token of the scaling activity, and the new wait time.
   * 
   * @remarks
   * You can call this operation to extend the wait time only when the ECS instance is suspended.
   * The wait time of an ECS instance cannot exceed 6 hours, and each wait state can be extended up to 20 times.
   * 
   * @param request - RecordLifecycleActionHeartbeatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecordLifecycleActionHeartbeatResponse
   */
  async recordLifecycleActionHeartbeatWithOptions(request: $_model.RecordLifecycleActionHeartbeatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecordLifecycleActionHeartbeatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.heartbeatTimeout)) {
      query["heartbeatTimeout"] = request.heartbeatTimeout;
    }

    if (!$dara.isNull(request.lifecycleActionToken)) {
      query["lifecycleActionToken"] = request.lifecycleActionToken;
    }

    if (!$dara.isNull(request.lifecycleHookId)) {
      query["lifecycleHookId"] = request.lifecycleHookId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecordLifecycleActionHeartbeat",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecordLifecycleActionHeartbeatResponse>(await this.callApi(params, req, runtime), new $_model.RecordLifecycleActionHeartbeatResponse({}));
  }

  /**
   * Extends the suspension period of an ECS instance that is suspended after a lifecycle hook is triggered in a scaling group. If the default wait time of the suspended ECS instance is insufficient for your custom operations, you can call this operation to extend the suspension period by specifying the lifecycle hook ID, the wait state token of the scaling activity, and the new wait time.
   * 
   * @remarks
   * You can call this operation to extend the wait time only when the ECS instance is suspended.
   * The wait time of an ECS instance cannot exceed 6 hours, and each wait state can be extended up to 20 times.
   * 
   * @param request - RecordLifecycleActionHeartbeatRequest
   * @returns RecordLifecycleActionHeartbeatResponse
   */
  async recordLifecycleActionHeartbeat(request: $_model.RecordLifecycleActionHeartbeatRequest): Promise<$_model.RecordLifecycleActionHeartbeatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recordLifecycleActionHeartbeatWithOptions(request, runtime);
  }

  /**
   * Deletes one or more unnecessary instances from a scaling group. You can invoke the RemoveInstances API to delete instances if the scaling group is enabled and no scaling activity is being executed.
   * 
   * @remarks
   * - Before you invoke this operation, ensure that the following conditions are met:
   *     - The scaling group is enabled (Active).
   *     - No scaling activity is being executed in the scaling group.
   * > If no scaling activity is being executed in the scaling group, this operation can bypass the cooldown time (DefaultCooldown) and be executed directly.
   * - If an ECS instance is created through automatic creation by Auto Scaling, or was manually added and managed by the scaling group, the ECS instance triggers the economical mode or is released when you delete it from the scaling group.
   * - If an ECS instance was manually added and is not managed by the scaling group, the ECS instance is not stopped or released when you delete it from the scaling group.
   * - If the number of instances in the scaling group (TotalCapacity) minus the number of instances specified in this operation is less than the minimum number of instances (MinSize) in the scaling group, the request to invoke this operation fails.
   * A successful response only indicates that the Auto Scaling service has accepted the request and the scaling activity can be executed. It does not mean that the scaling activity will be executed successfully. You must check the execution status of the scaling activity by using the returned ScalingActivityId.
   * 
   * @param tmpReq - RemoveInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveInstancesResponse
   */
  async removeInstancesWithOptions(tmpReq: $_model.RemoveInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.lifecycleHookContext)) {
      request.lifecycleHookContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lifecycleHookContext, "LifecycleHookContext", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.decreaseDesiredCapacity)) {
      query["DecreaseDesiredCapacity"] = request.decreaseDesiredCapacity;
    }

    if (!$dara.isNull(request.ignoreInvalidInstance)) {
      query["IgnoreInvalidInstance"] = request.ignoreInvalidInstance;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.lifecycleHookContextShrink)) {
      query["LifecycleHookContext"] = request.lifecycleHookContextShrink;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.removePolicy)) {
      query["RemovePolicy"] = request.removePolicy;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.stopInstanceTimeout)) {
      query["StopInstanceTimeout"] = request.stopInstanceTimeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveInstances",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveInstancesResponse>(await this.callApi(params, req, runtime), new $_model.RemoveInstancesResponse({}));
  }

  /**
   * Deletes one or more unnecessary instances from a scaling group. You can invoke the RemoveInstances API to delete instances if the scaling group is enabled and no scaling activity is being executed.
   * 
   * @remarks
   * - Before you invoke this operation, ensure that the following conditions are met:
   *     - The scaling group is enabled (Active).
   *     - No scaling activity is being executed in the scaling group.
   * > If no scaling activity is being executed in the scaling group, this operation can bypass the cooldown time (DefaultCooldown) and be executed directly.
   * - If an ECS instance is created through automatic creation by Auto Scaling, or was manually added and managed by the scaling group, the ECS instance triggers the economical mode or is released when you delete it from the scaling group.
   * - If an ECS instance was manually added and is not managed by the scaling group, the ECS instance is not stopped or released when you delete it from the scaling group.
   * - If the number of instances in the scaling group (TotalCapacity) minus the number of instances specified in this operation is less than the minimum number of instances (MinSize) in the scaling group, the request to invoke this operation fails.
   * A successful response only indicates that the Auto Scaling service has accepted the request and the scaling activity can be executed. It does not mean that the scaling activity will be executed successfully. You must check the execution status of the scaling activity by using the returned ScalingActivityId.
   * 
   * @param request - RemoveInstancesRequest
   * @returns RemoveInstancesResponse
   */
  async removeInstances(request: $_model.RemoveInstancesRequest): Promise<$_model.RemoveInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeInstancesWithOptions(request, runtime);
  }

  /**
   * Resumes an instance refresh task.
   * 
   * @param request - ResumeInstanceRefreshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeInstanceRefreshResponse
   */
  async resumeInstanceRefreshWithOptions(request: $_model.ResumeInstanceRefreshRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeInstanceRefreshResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceRefreshTaskId)) {
      query["InstanceRefreshTaskId"] = request.instanceRefreshTaskId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeInstanceRefresh",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeInstanceRefreshResponse>(await this.callApi(params, req, runtime), new $_model.ResumeInstanceRefreshResponse({}));
  }

  /**
   * Resumes an instance refresh task.
   * 
   * @param request - ResumeInstanceRefreshRequest
   * @returns ResumeInstanceRefreshResponse
   */
  async resumeInstanceRefresh(request: $_model.ResumeInstanceRefreshRequest): Promise<$_model.ResumeInstanceRefreshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeInstanceRefreshWithOptions(request, runtime);
  }

  /**
   * Resumes suspended processes in a scaling group so that the scaling group continues to execute the specified processes based on functional logic. For example, if you resume the health check process, an instance in the scaling group is automatically removed from the scaling group when it is considered unhealthy.
   * 
   * @param request - ResumeProcessesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeProcessesResponse
   */
  async resumeProcessesWithOptions(request: $_model.ResumeProcessesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeProcessesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.processes)) {
      query["Processes"] = request.processes;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeProcesses",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeProcessesResponse>(await this.callApi(params, req, runtime), new $_model.ResumeProcessesResponse({}));
  }

  /**
   * Resumes suspended processes in a scaling group so that the scaling group continues to execute the specified processes based on functional logic. For example, if you resume the health check process, an instance in the scaling group is automatically removed from the scaling group when it is considered unhealthy.
   * 
   * @param request - ResumeProcessesRequest
   * @returns ResumeProcessesResponse
   */
  async resumeProcesses(request: $_model.ResumeProcessesRequest): Promise<$_model.ResumeProcessesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeProcessesWithOptions(request, runtime);
  }

  /**
   * Rolls back an instance refresh task if the desired configuration does not meet your requirements during task execution. During the rollback, the system uses the active configuration of the scaling group to create new instances to replace those created based on the desired configuration.
   * 
   * @remarks
   * ## 前提条件
   * 被回滚的实例刷新任务必须在启动时（调用 StartInstanceRefresh）设置了 `DesiredConfiguration` 参数。未设置 `DesiredConfiguration` 的实例刷新任务不支持回滚，调用本接口会返回 `UnsupportedOperation.DesiredConfiguration` 错误；如需回滚此类任务，请先取消该任务，再以 `DesiredConfiguration` 重新启动实例刷新后执行回滚。
   * 
   * @param request - RollbackInstanceRefreshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackInstanceRefreshResponse
   */
  async rollbackInstanceRefreshWithOptions(request: $_model.RollbackInstanceRefreshRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackInstanceRefreshResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceRefreshTaskId)) {
      query["InstanceRefreshTaskId"] = request.instanceRefreshTaskId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackInstanceRefresh",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RollbackInstanceRefreshResponse>(await this.callApi(params, req, runtime), new $_model.RollbackInstanceRefreshResponse({}));
  }

  /**
   * Rolls back an instance refresh task if the desired configuration does not meet your requirements during task execution. During the rollback, the system uses the active configuration of the scaling group to create new instances to replace those created based on the desired configuration.
   * 
   * @remarks
   * ## 前提条件
   * 被回滚的实例刷新任务必须在启动时（调用 StartInstanceRefresh）设置了 `DesiredConfiguration` 参数。未设置 `DesiredConfiguration` 的实例刷新任务不支持回滚，调用本接口会返回 `UnsupportedOperation.DesiredConfiguration` 错误；如需回滚此类任务，请先取消该任务，再以 `DesiredConfiguration` 重新启动实例刷新后执行回滚。
   * 
   * @param request - RollbackInstanceRefreshRequest
   * @returns RollbackInstanceRefreshResponse
   */
  async rollbackInstanceRefresh(request: $_model.RollbackInstanceRefreshRequest): Promise<$_model.RollbackInstanceRefreshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackInstanceRefreshWithOptions(request, runtime);
  }

  /**
   * Triggers auto scaling based on a specified adjustment rule by calling the ScaleWithAdjustment API, eliminating the need to create a scaling rule in advance as required by the ExecuteScalingRule API.
   * 
   * @remarks
   * - Before you call this operation, ensure that the following conditions are met:
   *     - The scaling group is in the Active state.
   *     - No scaling activities are in progress in the scaling group.
   * - If no scaling activities are in progress in the scaling group, this operation can bypass the cooldown time and directly execute a scaling activity.
   * - If the number of ECS instances to be added specified in the scaling rule plus the current number of instances in the scaling group (Total Capacity) exceeds the maximum number of instances (MaxSize), the scaling activity is executed with Total Capacity set to MaxSize.
   * - If the current number of instances in the scaling group (Total Capacity) minus the number of ECS instances to be removed specified in the scaling rule is less than the minimum number of instances (MinSize), the scaling activity is executed with Total Capacity set to MinSize.
   * A successful response only indicates that Auto Scaling accepted the request and can execute the scaling activity. It does not guarantee that the scaling activity will be successfully executed. You must use the returned `ScalingActivityId` to check the execution status of the scaling activity.
   * 
   * @param tmpReq - ScaleWithAdjustmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScaleWithAdjustmentResponse
   */
  async scaleWithAdjustmentWithOptions(tmpReq: $_model.ScaleWithAdjustmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ScaleWithAdjustmentResponse> {
    tmpReq.validate();
    let request = new $_model.ScaleWithAdjustmentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.lifecycleHookContext)) {
      request.lifecycleHookContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lifecycleHookContext, "LifecycleHookContext", "json");
    }

    if (!$dara.isNull(tmpReq.overrides)) {
      request.overridesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.overrides, "Overrides", "json");
    }

    let query = { };
    if (!$dara.isNull(request.activityMetadata)) {
      query["ActivityMetadata"] = request.activityMetadata;
    }

    if (!$dara.isNull(request.adjustmentType)) {
      query["AdjustmentType"] = request.adjustmentType;
    }

    if (!$dara.isNull(request.adjustmentValue)) {
      query["AdjustmentValue"] = request.adjustmentValue;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.executionMode)) {
      query["ExecutionMode"] = request.executionMode;
    }

    if (!$dara.isNull(request.lifecycleHookContextShrink)) {
      query["LifecycleHookContext"] = request.lifecycleHookContextShrink;
    }

    if (!$dara.isNull(request.minAdjustmentMagnitude)) {
      query["MinAdjustmentMagnitude"] = request.minAdjustmentMagnitude;
    }

    if (!$dara.isNull(request.overridesShrink)) {
      query["Overrides"] = request.overridesShrink;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parallelTask)) {
      query["ParallelTask"] = request.parallelTask;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.syncActivity)) {
      query["SyncActivity"] = request.syncActivity;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScaleWithAdjustment",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScaleWithAdjustmentResponse>(await this.callApi(params, req, runtime), new $_model.ScaleWithAdjustmentResponse({}));
  }

  /**
   * Triggers auto scaling based on a specified adjustment rule by calling the ScaleWithAdjustment API, eliminating the need to create a scaling rule in advance as required by the ExecuteScalingRule API.
   * 
   * @remarks
   * - Before you call this operation, ensure that the following conditions are met:
   *     - The scaling group is in the Active state.
   *     - No scaling activities are in progress in the scaling group.
   * - If no scaling activities are in progress in the scaling group, this operation can bypass the cooldown time and directly execute a scaling activity.
   * - If the number of ECS instances to be added specified in the scaling rule plus the current number of instances in the scaling group (Total Capacity) exceeds the maximum number of instances (MaxSize), the scaling activity is executed with Total Capacity set to MaxSize.
   * - If the current number of instances in the scaling group (Total Capacity) minus the number of ECS instances to be removed specified in the scaling rule is less than the minimum number of instances (MinSize), the scaling activity is executed with Total Capacity set to MinSize.
   * A successful response only indicates that Auto Scaling accepted the request and can execute the scaling activity. It does not guarantee that the scaling activity will be successfully executed. You must use the returned `ScalingActivityId` to check the execution status of the scaling activity.
   * 
   * @param request - ScaleWithAdjustmentRequest
   * @returns ScaleWithAdjustmentResponse
   */
  async scaleWithAdjustment(request: $_model.ScaleWithAdjustmentRequest): Promise<$_model.ScaleWithAdjustmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.scaleWithAdjustmentWithOptions(request, runtime);
  }

  /**
   * Sets deletion protection for a scaling group. If you enable deletion protection for a scaling group, you cannot delete the scaling group. If you disable deletion protection for a scaling group, you can directly delete the scaling group. You can call the SetGroupDeletionProtection operation to enable or disable deletion protection.
   * 
   * @param request - SetGroupDeletionProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetGroupDeletionProtectionResponse
   */
  async setGroupDeletionProtectionWithOptions(request: $_model.SetGroupDeletionProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetGroupDeletionProtectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupDeletionProtection)) {
      query["GroupDeletionProtection"] = request.groupDeletionProtection;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetGroupDeletionProtection",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetGroupDeletionProtectionResponse>(await this.callApi(params, req, runtime), new $_model.SetGroupDeletionProtectionResponse({}));
  }

  /**
   * Sets deletion protection for a scaling group. If you enable deletion protection for a scaling group, you cannot delete the scaling group. If you disable deletion protection for a scaling group, you can directly delete the scaling group. You can call the SetGroupDeletionProtection operation to enable or disable deletion protection.
   * 
   * @param request - SetGroupDeletionProtectionRequest
   * @returns SetGroupDeletionProtectionResponse
   */
  async setGroupDeletionProtection(request: $_model.SetGroupDeletionProtectionRequest): Promise<$_model.SetGroupDeletionProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setGroupDeletionProtectionWithOptions(request, runtime);
  }

  /**
   * Sets the health status of an ECS instance or an Elastic Container Instance (ECI) in a scaling group. In some cases, automatic health checks may not accurately detect the health status of ECS or ECI instances. Manually setting the health status enables quick identification and handling of faulty instances to better meet actual business and O&M requirements.
   * 
   * @remarks
   * A scaling group detects and removes ECS instances or ECI instances that are in the unhealthy state. To retain specific ECS or ECI instances, put the instances into the standby state or protection status. For more information, see [EnterStandby](https://help.aliyun.com/document_detail/459345.html) and [SetInstancesProtection](https://help.aliyun.com/document_detail/459342.html).
   * 
   * @param request - SetInstanceHealthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetInstanceHealthResponse
   */
  async setInstanceHealthWithOptions(request: $_model.SetInstanceHealthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetInstanceHealthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.healthStatus)) {
      query["HealthStatus"] = request.healthStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetInstanceHealth",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetInstanceHealthResponse>(await this.callApi(params, req, runtime), new $_model.SetInstanceHealthResponse({}));
  }

  /**
   * Sets the health status of an ECS instance or an Elastic Container Instance (ECI) in a scaling group. In some cases, automatic health checks may not accurately detect the health status of ECS or ECI instances. Manually setting the health status enables quick identification and handling of faulty instances to better meet actual business and O&M requirements.
   * 
   * @remarks
   * A scaling group detects and removes ECS instances or ECI instances that are in the unhealthy state. To retain specific ECS or ECI instances, put the instances into the standby state or protection status. For more information, see [EnterStandby](https://help.aliyun.com/document_detail/459345.html) and [SetInstancesProtection](https://help.aliyun.com/document_detail/459342.html).
   * 
   * @param request - SetInstanceHealthRequest
   * @returns SetInstanceHealthResponse
   */
  async setInstanceHealth(request: $_model.SetInstanceHealthRequest): Promise<$_model.SetInstanceHealthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setInstanceHealthWithOptions(request, runtime);
  }

  /**
   * Sets or removes the protection status for one or more ECS instances in a scaling group. After the protection feature is enabled for an ECS instance, the instance is not terminated or released during automatic scale-in of the scaling group. The instance can only be manually removed from the console or by calling the RemoveInstances operation.
   * 
   * @remarks
   * After the protection status is enabled for an ECS instance:
   * - The instance remains in this state until you disable the protection status.
   * - The protected ECS instance is not removed even if changes in the number of instances in the scaling group or monitoring tasks trigger a scaling activity for automatic scale-in. You must remove the ECS instance before you can release it. For more information, see [Remove ECS instances](https://help.aliyun.com/document_detail/459393.html).
   * - The health check status of the ECS instance is not updated when the instance is stopped or restarted.
   * 
   * @param request - SetInstancesProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetInstancesProtectionResponse
   */
  async setInstancesProtectionWithOptions(request: $_model.SetInstancesProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetInstancesProtectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.protectedFromScaleIn)) {
      query["ProtectedFromScaleIn"] = request.protectedFromScaleIn;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetInstancesProtection",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetInstancesProtectionResponse>(await this.callApi(params, req, runtime), new $_model.SetInstancesProtectionResponse({}));
  }

  /**
   * Sets or removes the protection status for one or more ECS instances in a scaling group. After the protection feature is enabled for an ECS instance, the instance is not terminated or released during automatic scale-in of the scaling group. The instance can only be manually removed from the console or by calling the RemoveInstances operation.
   * 
   * @remarks
   * After the protection status is enabled for an ECS instance:
   * - The instance remains in this state until you disable the protection status.
   * - The protected ECS instance is not removed even if changes in the number of instances in the scaling group or monitoring tasks trigger a scaling activity for automatic scale-in. You must remove the ECS instance before you can release it. For more information, see [Remove ECS instances](https://help.aliyun.com/document_detail/459393.html).
   * - The health check status of the ECS instance is not updated when the instance is stopped or restarted.
   * 
   * @param request - SetInstancesProtectionRequest
   * @returns SetInstancesProtectionResponse
   */
  async setInstancesProtection(request: $_model.SetInstancesProtectionRequest): Promise<$_model.SetInstancesProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setInstancesProtectionWithOptions(request, runtime);
  }

  /**
   * Refreshes the instances in a scaling group to apply a new scaling configuration or update the images of the instances.
   * 
   * @remarks
   * - A scaling group can have only one running instance refresh node at a time.
   * - This feature is supported only for ECS scaling groups that use the **priority policy** as the scale-out policy. Scaling groups that use the **number of vCPUs to calculate the capacity of the scaling group** and scaling groups whose instance revoke pattern is set to **shutdown revoke pattern** or **forced shutdown revoke pattern** do not support this feature.
   * - During an instance refresh, normal scale-out and scale-in activities can be performed. However, scale-out activities use the desired configuration specified for the instance refresh.
   * - Instances that are manually added to the scaling group, or are in the standby state or protection status are ignored by the instance refresh node and are not refreshed.
   * 
   * @param request - StartInstanceRefreshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartInstanceRefreshResponse
   */
  async startInstanceRefreshWithOptions(request: $_model.StartInstanceRefreshRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartInstanceRefreshResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkpointPauseTime)) {
      query["CheckpointPauseTime"] = request.checkpointPauseTime;
    }

    if (!$dara.isNull(request.checkpoints)) {
      query["Checkpoints"] = request.checkpoints;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.desiredConfiguration)) {
      query["DesiredConfiguration"] = request.desiredConfiguration;
    }

    if (!$dara.isNull(request.maxHealthyPercentage)) {
      query["MaxHealthyPercentage"] = request.maxHealthyPercentage;
    }

    if (!$dara.isNull(request.minHealthyPercentage)) {
      query["MinHealthyPercentage"] = request.minHealthyPercentage;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    if (!$dara.isNull(request.skipMatching)) {
      query["SkipMatching"] = request.skipMatching;
    }

    if (!$dara.isNull(request.strategy)) {
      query["Strategy"] = request.strategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartInstanceRefresh",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartInstanceRefreshResponse>(await this.callApi(params, req, runtime), new $_model.StartInstanceRefreshResponse({}));
  }

  /**
   * Refreshes the instances in a scaling group to apply a new scaling configuration or update the images of the instances.
   * 
   * @remarks
   * - A scaling group can have only one running instance refresh node at a time.
   * - This feature is supported only for ECS scaling groups that use the **priority policy** as the scale-out policy. Scaling groups that use the **number of vCPUs to calculate the capacity of the scaling group** and scaling groups whose instance revoke pattern is set to **shutdown revoke pattern** or **forced shutdown revoke pattern** do not support this feature.
   * - During an instance refresh, normal scale-out and scale-in activities can be performed. However, scale-out activities use the desired configuration specified for the instance refresh.
   * - Instances that are manually added to the scaling group, or are in the standby state or protection status are ignored by the instance refresh node and are not refreshed.
   * 
   * @param request - StartInstanceRefreshRequest
   * @returns StartInstanceRefreshResponse
   */
  async startInstanceRefresh(request: $_model.StartInstanceRefreshRequest): Promise<$_model.StartInstanceRefreshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startInstanceRefreshWithOptions(request, runtime);
  }

  /**
   * Enables zone fault degradation for a scaling group.
   * 
   * @param request - StartScalingGroupZoneShiftRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartScalingGroupZoneShiftResponse
   */
  async startScalingGroupZoneShiftWithOptions(request: $_model.StartScalingGroupZoneShiftRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartScalingGroupZoneShiftResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.expiryTime)) {
      query["ExpiryTime"] = request.expiryTime;
    }

    if (!$dara.isNull(request.impairedZoneIds)) {
      query["ImpairedZoneIds"] = request.impairedZoneIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartScalingGroupZoneShift",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartScalingGroupZoneShiftResponse>(await this.callApi(params, req, runtime), new $_model.StartScalingGroupZoneShiftResponse({}));
  }

  /**
   * Enables zone fault degradation for a scaling group.
   * 
   * @param request - StartScalingGroupZoneShiftRequest
   * @returns StartScalingGroupZoneShiftResponse
   */
  async startScalingGroupZoneShift(request: $_model.StartScalingGroupZoneShiftRequest): Promise<$_model.StartScalingGroupZoneShiftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startScalingGroupZoneShiftWithOptions(request, runtime);
  }

  /**
   * Suspends an instance refresh task. If you are not sure that you want to roll back an ongoing instance refresh task whose configurations you think has an issue, you can call the SuspendInstanceRefresh operation to suspend the task.
   * 
   * @remarks
   *   You cannot call this operation to suspend an instance refresh task that is being rolled back.
   * 
   * @param request - SuspendInstanceRefreshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendInstanceRefreshResponse
   */
  async suspendInstanceRefreshWithOptions(request: $_model.SuspendInstanceRefreshRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendInstanceRefreshResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceRefreshTaskId)) {
      query["InstanceRefreshTaskId"] = request.instanceRefreshTaskId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendInstanceRefresh",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendInstanceRefreshResponse>(await this.callApi(params, req, runtime), new $_model.SuspendInstanceRefreshResponse({}));
  }

  /**
   * Suspends an instance refresh task. If you are not sure that you want to roll back an ongoing instance refresh task whose configurations you think has an issue, you can call the SuspendInstanceRefresh operation to suspend the task.
   * 
   * @remarks
   *   You cannot call this operation to suspend an instance refresh task that is being rolled back.
   * 
   * @param request - SuspendInstanceRefreshRequest
   * @returns SuspendInstanceRefreshResponse
   */
  async suspendInstanceRefresh(request: $_model.SuspendInstanceRefreshRequest): Promise<$_model.SuspendInstanceRefreshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendInstanceRefreshWithOptions(request, runtime);
  }

  /**
   * Suspends scaling processes. This operation empowers you to selectively pause distinct scaling processes within a particular scaling group, enabling you to carry out alternative tasks and achieve more granular management over your scaling operations.
   * 
   * @param request - SuspendProcessesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendProcessesResponse
   */
  async suspendProcessesWithOptions(request: $_model.SuspendProcessesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendProcessesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.processes)) {
      query["Processes"] = request.processes;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.scalingGroupId)) {
      query["ScalingGroupId"] = request.scalingGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendProcesses",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendProcessesResponse>(await this.callApi(params, req, runtime), new $_model.SuspendProcessesResponse({}));
  }

  /**
   * Suspends scaling processes. This operation empowers you to selectively pause distinct scaling processes within a particular scaling group, enabling you to carry out alternative tasks and achieve more granular management over your scaling operations.
   * 
   * @param request - SuspendProcessesRequest
   * @returns SuspendProcessesResponse
   */
  async suspendProcesses(request: $_model.SuspendProcessesRequest): Promise<$_model.SuspendProcessesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendProcessesWithOptions(request, runtime);
  }

  /**
   * Creates and adds tags. You can call the TagResources operation to uniformly create and attach tags to your Auto Scaling resources, streamlining resource management. This capability empowers you to categorize resources based on tags, thereby enhancing the overall efficiency of resource allocation and utilization.
   * 
   * @remarks
   *   You can attach up to 20 tags to a scaling group.
   *     **
   *     **Note** Before you attach tags to a specific Auto Scaling resource, Alibaba Cloud automatically verifies the current number of tags attached to that resource. In the event the proposed addition would exceed the maximum allowed number of tags, an error message will be promptly returned after you call this operation.
   * *   If you set `Tags.Propagate` to `true`, any tags attached to your scaling group will be automatically propagated to new instances that are subsequently created in the scaling group, without affecting existing instances.
   * *   If both the scaling configuration and the scaling group have tags attached, and tag propagation from the scaling group is enabled, the tags of newly created instances comply with the following rules:
   *     *   Instances set to join the scaling group will inherit the following tags: tags attached to the scaling configuration that initiates the instance creation and tags attached to the scaling group that are allowed to propagate to these instances upon instance creation.
   *     *   If the tag keys of the scaling configuration and those attached to the scaling group and propagated to the instances are identical, the tags attached to the scaling group and propagated to the instances will be overwritten by the tags of the scaling configuration.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2022-02-22",
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
   * Creates and adds tags. You can call the TagResources operation to uniformly create and attach tags to your Auto Scaling resources, streamlining resource management. This capability empowers you to categorize resources based on tags, thereby enhancing the overall efficiency of resource allocation and utilization.
   * 
   * @remarks
   *   You can attach up to 20 tags to a scaling group.
   *     **
   *     **Note** Before you attach tags to a specific Auto Scaling resource, Alibaba Cloud automatically verifies the current number of tags attached to that resource. In the event the proposed addition would exceed the maximum allowed number of tags, an error message will be promptly returned after you call this operation.
   * *   If you set `Tags.Propagate` to `true`, any tags attached to your scaling group will be automatically propagated to new instances that are subsequently created in the scaling group, without affecting existing instances.
   * *   If both the scaling configuration and the scaling group have tags attached, and tag propagation from the scaling group is enabled, the tags of newly created instances comply with the following rules:
   *     *   Instances set to join the scaling group will inherit the following tags: tags attached to the scaling configuration that initiates the instance creation and tags attached to the scaling group that are allowed to propagate to these instances upon instance creation.
   *     *   If the tag keys of the scaling configuration and those attached to the scaling group and propagated to the instances are identical, the tags attached to the scaling group and propagated to the instances will be overwritten by the tags of the scaling configuration.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from Auto Scaling resources simultaneously. This operation streamlines resource management activities, enhances system efficiency, and mitigates potential security vulnerabilities. Once a tag is removed from a particular resource, and if it is not re-added to any other resource, the system will automatically delete the unused tag.
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

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKeys)) {
      query["TagKeys"] = request.tagKeys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2022-02-22",
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
   * Removes tags from Auto Scaling resources simultaneously. This operation streamlines resource management activities, enhances system efficiency, and mitigates potential security vulnerabilities. Once a tag is removed from a particular resource, and if it is not re-added to any other resource, the system will automatically delete the unused tag.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Checks whether the account has the AliyunServiceRoleForAutoScaling service-linked role by calling VerifyAuthentication and specifying the Alibaba Cloud account ID. This role is used to authorize Auto Scaling to manage ECS and ECI resources.
   * 
   * @param request - VerifyAuthenticationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyAuthenticationResponse
   */
  async verifyAuthenticationWithOptions(request: $_model.VerifyAuthenticationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyAuthenticationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.onlyCheck)) {
      query["OnlyCheck"] = request.onlyCheck;
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

    if (!$dara.isNull(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyAuthentication",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyAuthenticationResponse>(await this.callApi(params, req, runtime), new $_model.VerifyAuthenticationResponse({}));
  }

  /**
   * Checks whether the account has the AliyunServiceRoleForAutoScaling service-linked role by calling VerifyAuthentication and specifying the Alibaba Cloud account ID. This role is used to authorize Auto Scaling to manage ECS and ECI resources.
   * 
   * @param request - VerifyAuthenticationRequest
   * @returns VerifyAuthenticationResponse
   */
  async verifyAuthentication(request: $_model.VerifyAuthenticationRequest): Promise<$_model.VerifyAuthenticationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyAuthenticationWithOptions(request, runtime);
  }

  /**
   * Verifies whether Auto Scaling is activated. This operation guarantees that in response to shifts in business workloads or variations in incoming traffic, the system will automatically adjust resource provisioning. This auto-scaling capability enhances the overall system performance, ensuring high availability and improved flexibility to accommodate dynamic demands.
   * 
   * @param request - VerifyUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyUserResponse
   */
  async verifyUserWithOptions(request: $_model.VerifyUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "VerifyUser",
      version: "2022-02-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyUserResponse>(await this.callApi(params, req, runtime), new $_model.VerifyUserResponse({}));
  }

  /**
   * Verifies whether Auto Scaling is activated. This operation guarantees that in response to shifts in business workloads or variations in incoming traffic, the system will automatically adjust resource provisioning. This auto-scaling capability enhances the overall system performance, ensuring high availability and improved flexibility to accommodate dynamic demands.
   * 
   * @param request - VerifyUserRequest
   * @returns VerifyUserResponse
   */
  async verifyUser(request: $_model.VerifyUserRequest): Promise<$_model.VerifyUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyUserWithOptions(request, runtime);
  }

}
