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
      'us-southeast-1': "ess.us-southeast-1.aliyuncs.com",
      'na-south-1': "ess.na-south-1.aliyuncs.com",
      'me-east-1': "ess.me-east-1.aliyuncs.com",
      'me-central-1': "ess.me-central-1.aliyuncs.com",
      'eu-west-1': "ess.eu-west-1.aliyuncs.com",
      'eu-central-1': "ess.eu-central-1.aliyuncs.com",
      'cn-zhongwei': "ess.cn-zhongwei.aliyuncs.com",
      'cn-zhengzhou-jva': "ess.cn-zhengzhou-jva.aliyuncs.com",
      'cn-zhangjiakou': "ess.cn-zhangjiakou.aliyuncs.com",
      'cn-wulanchabu-gic-1': "ess.cn-wulanchabu-gic-1.aliyuncs.com",
      'cn-wulanchabu': "ess.cn-wulanchabu.aliyuncs.com",
      'cn-wuhan-lr': "ess.cn-wuhan-lr.aliyuncs.com",
      'cn-nanjing': "ess.aliyuncs.com",
      'cn-huhehaote': "ess.cn-huhehaote.aliyuncs.com",
      'cn-heyuan-acdr-1': "ess.cn-heyuan-acdr-1.aliyuncs.com",
      'cn-heyuan': "ess.cn-heyuan.aliyuncs.com",
      'cn-guangzhou': "ess.cn-guangzhou.aliyuncs.com",
      'cn-fuzhou': "ess.cn-fuzhou.aliyuncs.com",
      'cn-chengdu': "ess.cn-chengdu.aliyuncs.com",
      'cn-beijing-finance-1': "ess.aliyuncs.com",
      'ap-southeast-7': "ess.ap-southeast-7.aliyuncs.com",
      'ap-southeast-6': "ess.ap-southeast-6.aliyuncs.com",
      'ap-southeast-5': "ess.ap-southeast-5.aliyuncs.com",
      'ap-southeast-3': "ess.ap-southeast-3.aliyuncs.com",
      'ap-southeast-2': "ess.ap-southeast-2.aliyuncs.com",
      'ap-south-1': "ess.ap-south-1.aliyuncs.com",
      'ap-northeast-2': "ess.ap-northeast-2.aliyuncs.com",
      'ap-northeast-1': "ess.ap-northeast-1.aliyuncs.com",
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
   * Applies a scaling configuration of the Elastic Container Instance type. If you want to create and manage scaling configurations of the Elastic Container Instance type by using a configuration file, you can call the ApplyEciScalingConfiguration operation.
   * 
   * @remarks
   * 基于YAML配置文件管理ECI类型的伸缩配置时，您需要注意以下事项：
   * - 如果指定ECI类型的伸缩配置ID时，系统会基于YAML配置文件更新ECI类型的伸缩配置。
   * - 如果未指定ECI类型的伸缩配置ID时，系统会基于YAML配置文件创建对应ECI类型的伸缩配置。
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
   * Applies a scaling configuration of the Elastic Container Instance type. If you want to create and manage scaling configurations of the Elastic Container Instance type by using a configuration file, you can call the ApplyEciScalingConfiguration operation.
   * 
   * @remarks
   * 基于YAML配置文件管理ECI类型的伸缩配置时，您需要注意以下事项：
   * - 如果指定ECI类型的伸缩配置ID时，系统会基于YAML配置文件更新ECI类型的伸缩配置。
   * - 如果未指定ECI类型的伸缩配置ID时，系统会基于YAML配置文件创建对应ECI类型的伸缩配置。
   * 
   * @param request - ApplyEciScalingConfigurationRequest
   * @returns ApplyEciScalingConfigurationResponse
   */
  async applyEciScalingConfiguration(request: $_model.ApplyEciScalingConfigurationRequest): Promise<$_model.ApplyEciScalingConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyEciScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * Creates and manages scaling groups by using configuration files. You can call the ApplyScalingGroup operation to create and manage scaling groups by using configuration files with efficiency.
   * 
   * @remarks
   * You can call the ApplyScalingGroup operation to create scaling groups of the Elastic Container Instance type with ease. The resources of the scaling groups are defined in Kubernetes Deployment YAML files. You can also call this operation to extend annotations for elastic container instances in Kubernetes Deployment YAML files. For more information, see "Supported annotations" in this topic.
   * Mapping between YAML files and scaling groups: You can map the triplet of namespace, kind, and name in a YAML file to a scaling group name. A YAML file and a scaling group have a one-to-one mapping relationship in a region. For example, if you use the Kubernetes Deployment YAML file whose name is NGINX in the default namespace to create a scaling group in a region, the unique name of the mapped scaling group is k8s_default_Deployment_nginx.
   * You can use a Kubernetes Deployment YAML file to manage a scaling group based on the following logic:
   * * If an existing scaling group has a mapping relationship with your Kubernetes Deployment YAML file, you can update the scaling group by using the YAML file.
   * * If no scaling group that has a mapping relationship with your Kubernetes Deployment YAML file exists, you can create a scaling group with ease by using the YAML file.
   * 1. If you do not specify a virtual private cloud (VPC), vSwitch, security group, or annotation in your Kubernetes Deployment YAML file, the system creates a default VPC that has default vSwitches and uses the default security group ess-default-sg of Auto Scaling. By default, the security group rule allows traffic on Transmission Control Protocol (TCP)-based port 22 and port 3389 and enables Internet Control Message Protocol (ICMP) for IPv4 addresses. If you want to enable other ports or protocols, you can create custom security group rules.
   * 2. If you want to use a public image, you must enable the Internet access feature and configure the k8s.aliyun.com/eci-with-eip pod annotation to enable the elastic IP address (EIP) feature.
   * 3. After you call the ApplyScalingGroup operation to apply a Kubernetes Deployment YAML file, the scaling group immediately enters the Enabled state and the scaling configuration immediately enters the Active state. If the number of replicas that you specified in the YAML file is grater than 0, elastic container instances are automatically created.
   * ### Supported annotations
   * For more information about annotations, see [ECI Pod Annotation](https://help.aliyun.com/document_detail/186939.html).
   * |Annotation|Example|Description|
   * |---|---|---|
   * |k8s.aliyun.com/ess-scaling-group-min-size|1|The minimum size of the scaling group that you want to create. Default value: 0.|
   * |k8s.aliyun.com/ess-scaling-group-max-size|20|The maximum size of the scaling group that you want to create. Default value: maximum number of replicas or 30, whichever is greater.|
   * |k8s.aliyun.com/eci-ntp-server|100.100.*.*|The IP address of the Network Time Protocol (NTP) server.|
   * |k8s.aliyun.com/eci-use-specs|2-4Gi|The specifications of 2 vCPUs and 4 GiB of memory. For more information, see [Create pods by specifying multiple specifications](https://help.aliyun.com/document_detail/451267.html).|
   * |k8s.aliyun.com/eci-vswitch|vsw-bp1xpiowfm5vo8o3c\\*\\*\\*\\*|The ID of the vSwitch. You can specify multiple vSwitches to specify multiple zones.|
   * |k8s.aliyun.com/eci-security-group|sg-bp1dktddjsg5nktv\\*\\*\\*\\*|The ID of the security group. Before you configure this annotation, take note of the following requirements:<ul data-sourcepos="26:74-26:168"><li data-sourcepos="26:78-26:114">You can specify one or more security groups. You can specify up to five security groups for each scaling group.</li><li data-sourcepos="26:114-26:140">If you specify multiple security groups, the security groups must belong to the same VPC.</li><li data-sourcepos="26:140-26:163">If you specify multiple security groups, the security groups must be of the same type.</li></ul>|
   * |k8s.aliyun.com/eci-sls-enable|"false"|If you set the value to false, the log collection feature is disabled.
   * If you do not want to use Custom Resource Definition (CRD) for Simple Log Service to collect logs of specific pods, you can configure this annotation for the pods and set the value to false. This prevents resource wastes caused by Logtails created by the system.|
   * |k8s.aliyun.com/eci-spot-strategy|SpotAsPriceGo|The bidding policy for preemptible instances. Valid values:<ul data-sourcepos="28:69-28:204"><li data-sourcepos="28:73-28:158">SpotWithPriceLimit: The instances are created as preemptible instances with a maximum hourly price. If you set the value to SpotWithPriceLimit, you must configure the k8s.aliyun.com/eci-spot-price-limit annotation.</li><li data-sourcepos="28:158-28:199">SpotAsPriceGo: The instances are created as preemptible instances for which the market price at the time of purchase is automatically used as the bid price.</li></ul>|
   * |k8s.aliyun.com/eci-spot-price-limit|"0.5"|The maximum hourly price of preemptible instances. This value can be accurate to up to three decimal places.
   * This annotation takes effect only when you set the k8s.aliyun.com/eci-spot-strategy annotation to SpotWithPriceLimit.|
   * |k8s.aliyun.com/eci-with-eip|"true"|If you set the value to true, an elastic IP address (EIP) is automatically created and bound to each elastic container instance.|
   * |k8s.aliyun.com/eci-data-cache-bucket|default|The bucket of data caches. If you want to create a pod based on data caches, you must configure this annotation.|
   * |k8s.aliyun.com/eci-data-cache-pl|PL1|The performance level (PL) of the cloud disk that you want to create based on data caches.
   * By default, enterprise SSDs (ESSDs) are created. Default value: PL1.|
   * |k8s.aliyun.com/eci-data-cache-provisionedIops|"40000"|The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50000, 1000 × Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * If you configure this annotation, the cloud disk that is created based on data caches is of the ESSD AutoPL type.|
   * |k8s.aliyun.com/eci-data-cache-burstingEnabled|"true"|Specifies whether the Burst feature is enabled for the ESSD AutoPL disk. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * If you configure this annotation, the cloud disk that is created based on data caches is of the ESSD AutoPL type.|
   * |k8s.aliyun.com/eci-custom-tags|"env:test,name:alice"|The tags that you want to add to each elastic container instance. You can add up to three tags for each elastic container instance. Separate a tag key and a tag value with a colon (:). Separate multiple tags with commas (,).|
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
   * Creates and manages scaling groups by using configuration files. You can call the ApplyScalingGroup operation to create and manage scaling groups by using configuration files with efficiency.
   * 
   * @remarks
   * You can call the ApplyScalingGroup operation to create scaling groups of the Elastic Container Instance type with ease. The resources of the scaling groups are defined in Kubernetes Deployment YAML files. You can also call this operation to extend annotations for elastic container instances in Kubernetes Deployment YAML files. For more information, see "Supported annotations" in this topic.
   * Mapping between YAML files and scaling groups: You can map the triplet of namespace, kind, and name in a YAML file to a scaling group name. A YAML file and a scaling group have a one-to-one mapping relationship in a region. For example, if you use the Kubernetes Deployment YAML file whose name is NGINX in the default namespace to create a scaling group in a region, the unique name of the mapped scaling group is k8s_default_Deployment_nginx.
   * You can use a Kubernetes Deployment YAML file to manage a scaling group based on the following logic:
   * * If an existing scaling group has a mapping relationship with your Kubernetes Deployment YAML file, you can update the scaling group by using the YAML file.
   * * If no scaling group that has a mapping relationship with your Kubernetes Deployment YAML file exists, you can create a scaling group with ease by using the YAML file.
   * 1. If you do not specify a virtual private cloud (VPC), vSwitch, security group, or annotation in your Kubernetes Deployment YAML file, the system creates a default VPC that has default vSwitches and uses the default security group ess-default-sg of Auto Scaling. By default, the security group rule allows traffic on Transmission Control Protocol (TCP)-based port 22 and port 3389 and enables Internet Control Message Protocol (ICMP) for IPv4 addresses. If you want to enable other ports or protocols, you can create custom security group rules.
   * 2. If you want to use a public image, you must enable the Internet access feature and configure the k8s.aliyun.com/eci-with-eip pod annotation to enable the elastic IP address (EIP) feature.
   * 3. After you call the ApplyScalingGroup operation to apply a Kubernetes Deployment YAML file, the scaling group immediately enters the Enabled state and the scaling configuration immediately enters the Active state. If the number of replicas that you specified in the YAML file is grater than 0, elastic container instances are automatically created.
   * ### Supported annotations
   * For more information about annotations, see [ECI Pod Annotation](https://help.aliyun.com/document_detail/186939.html).
   * |Annotation|Example|Description|
   * |---|---|---|
   * |k8s.aliyun.com/ess-scaling-group-min-size|1|The minimum size of the scaling group that you want to create. Default value: 0.|
   * |k8s.aliyun.com/ess-scaling-group-max-size|20|The maximum size of the scaling group that you want to create. Default value: maximum number of replicas or 30, whichever is greater.|
   * |k8s.aliyun.com/eci-ntp-server|100.100.*.*|The IP address of the Network Time Protocol (NTP) server.|
   * |k8s.aliyun.com/eci-use-specs|2-4Gi|The specifications of 2 vCPUs and 4 GiB of memory. For more information, see [Create pods by specifying multiple specifications](https://help.aliyun.com/document_detail/451267.html).|
   * |k8s.aliyun.com/eci-vswitch|vsw-bp1xpiowfm5vo8o3c\\*\\*\\*\\*|The ID of the vSwitch. You can specify multiple vSwitches to specify multiple zones.|
   * |k8s.aliyun.com/eci-security-group|sg-bp1dktddjsg5nktv\\*\\*\\*\\*|The ID of the security group. Before you configure this annotation, take note of the following requirements:<ul data-sourcepos="26:74-26:168"><li data-sourcepos="26:78-26:114">You can specify one or more security groups. You can specify up to five security groups for each scaling group.</li><li data-sourcepos="26:114-26:140">If you specify multiple security groups, the security groups must belong to the same VPC.</li><li data-sourcepos="26:140-26:163">If you specify multiple security groups, the security groups must be of the same type.</li></ul>|
   * |k8s.aliyun.com/eci-sls-enable|"false"|If you set the value to false, the log collection feature is disabled.
   * If you do not want to use Custom Resource Definition (CRD) for Simple Log Service to collect logs of specific pods, you can configure this annotation for the pods and set the value to false. This prevents resource wastes caused by Logtails created by the system.|
   * |k8s.aliyun.com/eci-spot-strategy|SpotAsPriceGo|The bidding policy for preemptible instances. Valid values:<ul data-sourcepos="28:69-28:204"><li data-sourcepos="28:73-28:158">SpotWithPriceLimit: The instances are created as preemptible instances with a maximum hourly price. If you set the value to SpotWithPriceLimit, you must configure the k8s.aliyun.com/eci-spot-price-limit annotation.</li><li data-sourcepos="28:158-28:199">SpotAsPriceGo: The instances are created as preemptible instances for which the market price at the time of purchase is automatically used as the bid price.</li></ul>|
   * |k8s.aliyun.com/eci-spot-price-limit|"0.5"|The maximum hourly price of preemptible instances. This value can be accurate to up to three decimal places.
   * This annotation takes effect only when you set the k8s.aliyun.com/eci-spot-strategy annotation to SpotWithPriceLimit.|
   * |k8s.aliyun.com/eci-with-eip|"true"|If you set the value to true, an elastic IP address (EIP) is automatically created and bound to each elastic container instance.|
   * |k8s.aliyun.com/eci-data-cache-bucket|default|The bucket of data caches. If you want to create a pod based on data caches, you must configure this annotation.|
   * |k8s.aliyun.com/eci-data-cache-pl|PL1|The performance level (PL) of the cloud disk that you want to create based on data caches.
   * By default, enterprise SSDs (ESSDs) are created. Default value: PL1.|
   * |k8s.aliyun.com/eci-data-cache-provisionedIops|"40000"|The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50000, 1000 × Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * If you configure this annotation, the cloud disk that is created based on data caches is of the ESSD AutoPL type.|
   * |k8s.aliyun.com/eci-data-cache-burstingEnabled|"true"|Specifies whether the Burst feature is enabled for the ESSD AutoPL disk. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * If you configure this annotation, the cloud disk that is created based on data caches is of the ESSD AutoPL type.|
   * |k8s.aliyun.com/eci-custom-tags|"env:test,name:alice"|The tags that you want to add to each elastic container instance. You can add up to three tags for each elastic container instance. Separate a tag key and a tag value with a colon (:). Separate multiple tags with commas (,).|
   * 
   * @param request - ApplyScalingGroupRequest
   * @returns ApplyScalingGroupResponse
   */
  async applyScalingGroup(request: $_model.ApplyScalingGroupRequest): Promise<$_model.ApplyScalingGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyScalingGroupWithOptions(request, runtime);
  }

  /**
   * Attaches Application Load Balancer (ALB) server groups to a scaling group. To seamlessly adjust the number of instances in response to changes in your business workload or to maintain the uninterrupted accessibility of your application, you can call the AttachAlbServerGroups operation. By attaching ALB server groups to your scaling group, this operation enables Auto Scaling to automatically tailor your computing capacity to your business needs. Furthermore, it optimizes traffic routing by dynamically allocating incoming requests based on current workload patterns, which significantly improves the stability and performance of your application.
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
   * Attaches Application Load Balancer (ALB) server groups to a scaling group. To seamlessly adjust the number of instances in response to changes in your business workload or to maintain the uninterrupted accessibility of your application, you can call the AttachAlbServerGroups operation. By attaching ALB server groups to your scaling group, this operation enables Auto Scaling to automatically tailor your computing capacity to your business needs. Furthermore, it optimizes traffic routing by dynamically allocating incoming requests based on current workload patterns, which significantly improves the stability and performance of your application.
   * 
   * @param request - AttachAlbServerGroupsRequest
   * @returns AttachAlbServerGroupsResponse
   */
  async attachAlbServerGroups(request: $_model.AttachAlbServerGroupsRequest): Promise<$_model.AttachAlbServerGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachAlbServerGroupsWithOptions(request, runtime);
  }

  /**
   * Associates one or more ApsaraDB RDS instances with a scaling group.
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
   * Associates one or more ApsaraDB RDS instances with a scaling group.
   * 
   * @param request - AttachDBInstancesRequest
   * @returns AttachDBInstancesResponse
   */
  async attachDBInstances(request: $_model.AttachDBInstancesRequest): Promise<$_model.AttachDBInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachDBInstancesWithOptions(request, runtime);
  }

  /**
   * Adds instances to a scaling group to provide services or restarts Elastic Compute Service (ECS) instances stopped in Economical Mode to provide services. You can call the AttachInstances operation to add ECS instances, elastic container instances, or third-party instances managed by Alibaba Cloud to your scaling group to provide services. You can also call this operation to restart ECS instances stopped in Economical Mode in your scaling group to provide services.
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
   * Adds instances to a scaling group to provide services or restarts Elastic Compute Service (ECS) instances stopped in Economical Mode to provide services. You can call the AttachInstances operation to add ECS instances, elastic container instances, or third-party instances managed by Alibaba Cloud to your scaling group to provide services. You can also call this operation to restart ECS instances stopped in Economical Mode in your scaling group to provide services.
   * 
   * @param request - AttachInstancesRequest
   * @returns AttachInstancesResponse
   */
  async attachInstances(request: $_model.AttachInstancesRequest): Promise<$_model.AttachInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachInstancesWithOptions(request, runtime);
  }

  /**
   * Attaches load balancers to a scaling group. Auto Scaling supports the attachment of load balancers to scaling groups. Load balancers help distribute the access traffic to the instances in scaling groups, which effectively improves the service performance of the scaling groups. You can call the AttachLoadBalancers operation to attach one or more load balancers to your scaling group.
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
   * Attaches load balancers to a scaling group. Auto Scaling supports the attachment of load balancers to scaling groups. Load balancers help distribute the access traffic to the instances in scaling groups, which effectively improves the service performance of the scaling groups. You can call the AttachLoadBalancers operation to attach one or more load balancers to your scaling group.
   * 
   * @param request - AttachLoadBalancersRequest
   * @returns AttachLoadBalancersResponse
   */
  async attachLoadBalancers(request: $_model.AttachLoadBalancersRequest): Promise<$_model.AttachLoadBalancersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachLoadBalancersWithOptions(request, runtime);
  }

  /**
   * Attaches server groups to a scaling group. To seamlessly adjust the number of instances in response to changes in your business workload or to maintain the uninterrupted accessibility of your application, you can call the AttachServerGroups operation. By attaching Application Load Balancer (ALB), Network Load Balancer (NLB), or Gateway Load Balancer (GWLB) server groups to your scaling group, this operation enables Auto Scaling to automatically tailor your computing capacity to your business needs. Furthermore, it optimizes traffic routing by dynamically allocating incoming requests based on current workload patterns, which significantly improves the stability and performance of your application.
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
   * Attaches server groups to a scaling group. To seamlessly adjust the number of instances in response to changes in your business workload or to maintain the uninterrupted accessibility of your application, you can call the AttachServerGroups operation. By attaching Application Load Balancer (ALB), Network Load Balancer (NLB), or Gateway Load Balancer (GWLB) server groups to your scaling group, this operation enables Auto Scaling to automatically tailor your computing capacity to your business needs. Furthermore, it optimizes traffic routing by dynamically allocating incoming requests based on current workload patterns, which significantly improves the stability and performance of your application.
   * 
   * @param request - AttachServerGroupsRequest
   * @returns AttachServerGroupsResponse
   */
  async attachServerGroups(request: $_model.AttachServerGroupsRequest): Promise<$_model.AttachServerGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachServerGroupsWithOptions(request, runtime);
  }

  /**
   * Attaches vServer groups to a scaling group. After a Classic Load Balancer (CLB) instance is attached to your scaling group, the instances in the scaling group are automatically added as backend servers of the CLB instance. These servers then handle requests forwarded by the CLB instance, streamlining the processing of incoming traffic. To direct varying access requests to separate backend servers or to distribute requests based on domain names or URLs, you can call the AttachVServerGroups operation. This operation enables the addition of multiple vServer groups, allowing for efficient management of various backend server configurations tailored to your routing preferences.
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
   * Attaches vServer groups to a scaling group. After a Classic Load Balancer (CLB) instance is attached to your scaling group, the instances in the scaling group are automatically added as backend servers of the CLB instance. These servers then handle requests forwarded by the CLB instance, streamlining the processing of incoming traffic. To direct varying access requests to separate backend servers or to distribute requests based on domain names or URLs, you can call the AttachVServerGroups operation. This operation enables the addition of multiple vServer groups, allowing for efficient management of various backend server configurations tailored to your routing preferences.
   * 
   * @param request - AttachVServerGroupsRequest
   * @returns AttachVServerGroupsResponse
   */
  async attachVServerGroups(request: $_model.AttachVServerGroupsRequest): Promise<$_model.AttachVServerGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachVServerGroupsWithOptions(request, runtime);
  }

  /**
   * Cancels an instance refresh task. Take note that instances whose configurations were already updated by running an instance refresh task remain intact even after you cancel the task.
   * 
   * @remarks
   *   You cannot call this operation to cancel instance refresh tasks that are being rolled back.
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
   * Cancels an instance refresh task. Take note that instances whose configurations were already updated by running an instance refresh task remain intact even after you cancel the task.
   * 
   * @remarks
   *   You cannot call this operation to cancel instance refresh tasks that are being rolled back.
   * 
   * @param request - CancelInstanceRefreshRequest
   * @returns CancelInstanceRefreshResponse
   */
  async cancelInstanceRefresh(request: $_model.CancelInstanceRefreshRequest): Promise<$_model.CancelInstanceRefreshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelInstanceRefreshWithOptions(request, runtime);
  }

  /**
   * Changes a resource group. Resource groups are a means to categorize and manage cloud resources, such as scaling groups, based on specific objectives, permissions, or ownership. In large, multifaceted organizations that manage numerous projects and users, this feature adopts a tiered management approach, simplifying management tasks and improving the effectiveness and oversight of resource allocation. You can call the ChangeResourceGroup operation to move your scaling groups from one resource group to another resource group, which facilitates streamlined monitoring and management within the context of the new group. This operation eliminates the need for repetitive and time-consuming cross-service resource queries, thereby enhancing operational efficiency.
   * 
   * @remarks
   *   A resource is an entity of cloud services that you create on Alibaba Cloud. For example, a scaling group is a resource.
   * *   A resource group serves as a powerful organizational tool within your Alibaba Cloud account, enabling you to manage and monitor multiple resources collectively. It effectively addresses complexities surrounding resource categorization and permission control under a single Alibaba Cloud account, thereby enhancing management efficiency and control. For more information, see [What is resource management?](https://help.aliyun.com/document_detail/94475.html)
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
   * Changes a resource group. Resource groups are a means to categorize and manage cloud resources, such as scaling groups, based on specific objectives, permissions, or ownership. In large, multifaceted organizations that manage numerous projects and users, this feature adopts a tiered management approach, simplifying management tasks and improving the effectiveness and oversight of resource allocation. You can call the ChangeResourceGroup operation to move your scaling groups from one resource group to another resource group, which facilitates streamlined monitoring and management within the context of the new group. This operation eliminates the need for repetitive and time-consuming cross-service resource queries, thereby enhancing operational efficiency.
   * 
   * @remarks
   *   A resource is an entity of cloud services that you create on Alibaba Cloud. For example, a scaling group is a resource.
   * *   A resource group serves as a powerful organizational tool within your Alibaba Cloud account, enabling you to manage and monitor multiple resources collectively. It effectively addresses complexities surrounding resource categorization and permission control under a single Alibaba Cloud account, thereby enhancing management efficiency and control. For more information, see [What is resource management?](https://help.aliyun.com/document_detail/94475.html)
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Ends the timeout period of a lifecycle hook ahead of schedule. If you have created a lifecycle hook for your scaling group, you can call the CompleteLifecycleAction operation to end the timeout period of the lifecycle hook ahead of schedule based on your business requirements.
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
   * Ends the timeout period of a lifecycle hook ahead of schedule. If you have created a lifecycle hook for your scaling group, you can call the CompleteLifecycleAction operation to end the timeout period of the lifecycle hook ahead of schedule based on your business requirements.
   * 
   * @param request - CompleteLifecycleActionRequest
   * @returns CompleteLifecycleActionResponse
   */
  async completeLifecycleAction(request: $_model.CompleteLifecycleActionRequest): Promise<$_model.CompleteLifecycleActionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.completeLifecycleActionWithOptions(request, runtime);
  }

  /**
   * Creates event-triggered tasks. If your business encounters unexpected traffic surges or has no specific patterns, you can call the CreateAlarm operation to create an event-triggered task and associate a CloudMonitor metric with the task. This allows you to dynamically adjust the number of Elastic Compute Service (ECS) instances or elastic container instances in your scaling group and keep updated on the real-time metric data, which facilitates cloud resource management and maintenance.
   * 
   * @remarks
   *   If you set MetricType to custom, you must report your custom metrics to CloudMonitor before you can create event-triggered tasks by using the custom metrics. For more information, see [Event-triggered tasks of the custom monitoring type](https://help.aliyun.com/document_detail/74861.html).
   * *   When you create an event-triggered task, you must specify MetricName, Dimensions.DimensionKey, and Dimensions.DimensionValue to determine the range of statistics that you want to aggregate for the metrics of the scaling group. For example, you can specify user_id and scaling_group for an event-triggered task to aggregate monitoring data of all ECS instances or elastic container instances in a scaling group within an Alibaba Cloud account.
   *     *   If you create an event-triggered task of the custom monitoring type, you can specify only custom metrics in the task.
   *     *   If you create an event-triggered task of the system monitoring type, you can specify the system metrics described in [Event-triggered tasks of the system monitoring type](https://help.aliyun.com/document_detail/74854.html) in the task.
   * >  user_id and scaling_group are automatically populated. You need to only specify device and state. For more information, see `Dimensions.DimensionKey` and `Dimensions.DimensionValue` in the "Request parameters" section of this topic.
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
   * Creates event-triggered tasks. If your business encounters unexpected traffic surges or has no specific patterns, you can call the CreateAlarm operation to create an event-triggered task and associate a CloudMonitor metric with the task. This allows you to dynamically adjust the number of Elastic Compute Service (ECS) instances or elastic container instances in your scaling group and keep updated on the real-time metric data, which facilitates cloud resource management and maintenance.
   * 
   * @remarks
   *   If you set MetricType to custom, you must report your custom metrics to CloudMonitor before you can create event-triggered tasks by using the custom metrics. For more information, see [Event-triggered tasks of the custom monitoring type](https://help.aliyun.com/document_detail/74861.html).
   * *   When you create an event-triggered task, you must specify MetricName, Dimensions.DimensionKey, and Dimensions.DimensionValue to determine the range of statistics that you want to aggregate for the metrics of the scaling group. For example, you can specify user_id and scaling_group for an event-triggered task to aggregate monitoring data of all ECS instances or elastic container instances in a scaling group within an Alibaba Cloud account.
   *     *   If you create an event-triggered task of the custom monitoring type, you can specify only custom metrics in the task.
   *     *   If you create an event-triggered task of the system monitoring type, you can specify the system metrics described in [Event-triggered tasks of the system monitoring type](https://help.aliyun.com/document_detail/74854.html) in the task.
   * >  user_id and scaling_group are automatically populated. You need to only specify device and state. For more information, see `Dimensions.DimensionKey` and `Dimensions.DimensionValue` in the "Request parameters" section of this topic.
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
   * Creates a scaling configuration of the Elastic Container Instance type. Auto Scaling uses the scaling configuration as a template to create elastic container instances to meet your business requirements during scale-out events.
   * 
   * @remarks
   * 伸缩配置用来指定弹性扩张时使用的ECI实例模板。
   * 参数Cpu和Memory用于指定CPU和内存定义实例规格的范围，弹性伸缩会结合IO优化、可用区等因素确定可用实例规格集合，并根据价格排序为您创建价格最低的实例。该方式仅适用于伸缩组的扩缩容策略为成本优化策略，且伸缩配置未指定实例规格的场景。
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
   * Creates a scaling configuration of the Elastic Container Instance type. Auto Scaling uses the scaling configuration as a template to create elastic container instances to meet your business requirements during scale-out events.
   * 
   * @remarks
   * 伸缩配置用来指定弹性扩张时使用的ECI实例模板。
   * 参数Cpu和Memory用于指定CPU和内存定义实例规格的范围，弹性伸缩会结合IO优化、可用区等因素确定可用实例规格集合，并根据价格排序为您创建价格最低的实例。该方式仅适用于伸缩组的扩缩容策略为成本优化策略，且伸缩配置未指定实例规格的场景。
   * 
   * @param request - CreateEciScalingConfigurationRequest
   * @returns CreateEciScalingConfigurationResponse
   */
  async createEciScalingConfiguration(request: $_model.CreateEciScalingConfigurationRequest): Promise<$_model.CreateEciScalingConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEciScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * Creates one or more lifecycle hooks in a scaling group. A lifecycle hook allows you to execute custom actions like sending notifications or automating script execution at critical stages (such as instance startup and termination) in the lifecycle of an instance. Implementing the lifecycle hook feature allows for finer control and management of instances. For example, you can verify configurations, set up custom tasks, or back up data on your instances when lifecycle hooks take effect, thus enhancing the flexibility and reliability of application deployment.
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
   * Creates one or more lifecycle hooks in a scaling group. A lifecycle hook allows you to execute custom actions like sending notifications or automating script execution at critical stages (such as instance startup and termination) in the lifecycle of an instance. Implementing the lifecycle hook feature allows for finer control and management of instances. For example, you can verify configurations, set up custom tasks, or back up data on your instances when lifecycle hooks take effect, thus enhancing the flexibility and reliability of application deployment.
   * 
   * @param request - CreateLifecycleHookRequest
   * @returns CreateLifecycleHookResponse
   */
  async createLifecycleHook(request: $_model.CreateLifecycleHookRequest): Promise<$_model.CreateLifecycleHookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLifecycleHookWithOptions(request, runtime);
  }

  /**
   * Creates a notification rule. You can call the CreateNotificationConfiguration operation to create a notification rule to stay informed about scaling events or resource changes. This helps you learn about the dynamic status of your scaling group in real time and further automates the management of scaling events.
   * 
   * @remarks
   * - You can configure message notifications to be received by CloudMonitor system events, Message Service (formerly MNS) queues, or Message Service (formerly MNS) topics. When specified scaling events or resource changes occur in a scaling group, automatic scaling notifies CloudMonitor or Message Service (formerly MNS).
   * - Different event notifications within the same scaling group cannot share the same accepter.
   *   For example, different event notifications cannot simultaneously use the same CloudMonitor configuration, the same MNS topic, or the same MNS queue.
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
   * Creates a notification rule. You can call the CreateNotificationConfiguration operation to create a notification rule to stay informed about scaling events or resource changes. This helps you learn about the dynamic status of your scaling group in real time and further automates the management of scaling events.
   * 
   * @remarks
   * - You can configure message notifications to be received by CloudMonitor system events, Message Service (formerly MNS) queues, or Message Service (formerly MNS) topics. When specified scaling events or resource changes occur in a scaling group, automatic scaling notifies CloudMonitor or Message Service (formerly MNS).
   * - Different event notifications within the same scaling group cannot share the same accepter.
   *   For example, different event notifications cannot simultaneously use the same CloudMonitor configuration, the same MNS topic, or the same MNS queue.
   * 
   * @param request - CreateNotificationConfigurationRequest
   * @returns CreateNotificationConfigurationResponse
   */
  async createNotificationConfiguration(request: $_model.CreateNotificationConfigurationRequest): Promise<$_model.CreateNotificationConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNotificationConfigurationWithOptions(request, runtime);
  }

  /**
   * Call the CreateScalingConfiguration operation to create an ECS scaling configuration for a scaling group. You must specify the scaling group ID, instance type, and image.
   * 
   * @remarks
   * A scaling configuration is a template that defines the ECS instances to be created during a scale-out event. You can configure instances in the following ways:
   * - InstancePatternInfos: Use the intelligent configuration mode. You do not need to specify an instance type. Instead, you specify the number of vCPUs, memory size, instance family level, and maximum price based on your business needs. The system automatically selects eligible instance types and prioritizes the instance type with the lowest price to create ECS instances. This mode is available only when the network type of the scaling group is VPC. It can effectively reduce the risk of instance creation failures during scale-out events due to an instance type being out of stock.
   * - InstanceType: Specify a single instance type.
   * - InstanceTypes: Specify multiple instance types.
   * - InstanceTypeOverrides: Specify multiple instance types and configure a weight for each instance type.
   * - Cpu and Memory: Specify a range of instance types by setting the number of vCPUs and memory size. Auto Scaling determines the available instance types based on factors such as I/O optimization and zone. It then creates the instance with the lowest price. This method is applicable only if the scaling policy of the scaling group is the cost optimization policy and no instance type is specified in the scaling configuration.
   * - You can attach a primary network interface controller (NIC) in one of the following ways. Note that you can use only one method in a single call. If you use both methods, the call fails and an error message is returned.
   *   - Directly configure the primary NIC using parameters such as SecurityGroupId, SecurityGroupIds, and Ipv6AddressCount.
   *   - Configure the primary and secondary NICs using the NetworkInterfaces parameter. When you use this parameter, you must configure the primary NIC. Set NetworkInterface.InstanceType to Primary to configure the primary NIC. To configure a secondary NIC, set NetworkInterface.InstanceType to Secondary or leave the parameter empty.
   * > You cannot specify \\`InstanceType\\`, \\`InstanceTypes\\`, \\`InstanceTypeOverrides\\`, and \\`Cpu\\`/\\`Memory\\` at the same time. However, you can specify \\`InstanceType\\` or \\`InstanceTypes\\` together with \\`InstancePatternInfos\\`. If you specify them together, Auto Scaling prioritizes the specified instance types during scale-outs. If the specified instance types are out of stock, Auto Scaling uses instance types that match the \\`InstancePatternInfos\\` configuration.
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
   * Call the CreateScalingConfiguration operation to create an ECS scaling configuration for a scaling group. You must specify the scaling group ID, instance type, and image.
   * 
   * @remarks
   * A scaling configuration is a template that defines the ECS instances to be created during a scale-out event. You can configure instances in the following ways:
   * - InstancePatternInfos: Use the intelligent configuration mode. You do not need to specify an instance type. Instead, you specify the number of vCPUs, memory size, instance family level, and maximum price based on your business needs. The system automatically selects eligible instance types and prioritizes the instance type with the lowest price to create ECS instances. This mode is available only when the network type of the scaling group is VPC. It can effectively reduce the risk of instance creation failures during scale-out events due to an instance type being out of stock.
   * - InstanceType: Specify a single instance type.
   * - InstanceTypes: Specify multiple instance types.
   * - InstanceTypeOverrides: Specify multiple instance types and configure a weight for each instance type.
   * - Cpu and Memory: Specify a range of instance types by setting the number of vCPUs and memory size. Auto Scaling determines the available instance types based on factors such as I/O optimization and zone. It then creates the instance with the lowest price. This method is applicable only if the scaling policy of the scaling group is the cost optimization policy and no instance type is specified in the scaling configuration.
   * - You can attach a primary network interface controller (NIC) in one of the following ways. Note that you can use only one method in a single call. If you use both methods, the call fails and an error message is returned.
   *   - Directly configure the primary NIC using parameters such as SecurityGroupId, SecurityGroupIds, and Ipv6AddressCount.
   *   - Configure the primary and secondary NICs using the NetworkInterfaces parameter. When you use this parameter, you must configure the primary NIC. Set NetworkInterface.InstanceType to Primary to configure the primary NIC. To configure a secondary NIC, set NetworkInterface.InstanceType to Secondary or leave the parameter empty.
   * > You cannot specify \\`InstanceType\\`, \\`InstanceTypes\\`, \\`InstanceTypeOverrides\\`, and \\`Cpu\\`/\\`Memory\\` at the same time. However, you can specify \\`InstanceType\\` or \\`InstanceTypes\\` together with \\`InstancePatternInfos\\`. If you specify them together, Auto Scaling prioritizes the specified instance types during scale-outs. If the specified instance types are out of stock, Auto Scaling uses instance types that match the \\`InstancePatternInfos\\` configuration.
   * 
   * @param request - CreateScalingConfigurationRequest
   * @returns CreateScalingConfigurationResponse
   */
  async createScalingConfiguration(request: $_model.CreateScalingConfigurationRequest): Promise<$_model.CreateScalingConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * Call the `CreateScalingGroup` API to create a scaling group. The group automatically adjusts your computing capacity (the number of instances) by scaling instances of a specified type in or out based on your business requirements and scaling policies.
   * 
   * @remarks
   * A scaling group is a collection of ECS instances for the same use case.
   * The number of scaling groups that you can create in a region depends on your Auto Scaling usage. To view your quota for scaling groups, go to Quota Center.
   * A scaling group is not active immediately after creation. You must call the [EnableScalingGroup](https://help.aliyun.com/document_detail/25939.html) operation to enable the group before it can trigger scaling activities or execute scaling rules.
   * The scaling group, as well as its associated Classic Load Balancer (CLB) (formerly SLB) and RDS instances, must be in the same region. For more information, see [Regions and availability zones](https://help.aliyun.com/document_detail/40654.html).
   * If you associate a CLB instance with a scaling group, the scaling group automatically adds new ECS instances to a backend server group of the CLB instance. You can specify which server group to use. The following types of server groups are supported:
   * - Default server group: A group of ECS instances that receive requests from the front end. If no vServer group or primary/standby server group is configured for a listener, it forwards requests to the ECS instances in the default server group.
   * - vServer group: Use a vServer group if you need to forward different requests to different backend servers, or forward requests based on domain names and URLs.
   * > If you specify both a default server group and one or more vServer groups, the scaling group adds new ECS instances to all specified server groups.
   * After an instance is added to a backend server group of a CLB instance, its default weight is 50. The CLB instance must meet the following conditions:
   * - The CLB instance must be in the active state. You can call the [DescribeLoadBalancers](https://help.aliyun.com/document_detail/2401696.html) operation to check the state of a CLB instance.
   * - Health checks must be enabled for all listeners configured on the CLB instance. Otherwise, the scaling group creation fails.
   * If you associate a scaling group with Application Load Balancer (ALB), Network Load Balancer (NLB), or Gateway Load Balancer (GWLB) server groups, it automatically adds new ECS instances as backend servers to those groups to handle distributed requests. You can specify multiple such server groups, but they must all belong to the same VPC as the scaling group. For more information, see [AttachAlbServerGroups](https://help.aliyun.com/document_detail/266800.html) or [AttachServerGroups](https://help.aliyun.com/document_detail/600535.html).
   * If you associate an RDS instance with a scaling group, the scaling group automatically adds the internal IP addresses of new ECS instances to the IP address whitelist of the RDS instance. The RDS instance must meet the following conditions:
   * - The RDS instance must be in the Running state. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) operation to check the state of an RDS instance.
   * - The number of IP addresses in the RDS instance\\"s IP address whitelist cannot exceed the limit. For more information, see the [Configure an IP address whitelist](https://help.aliyun.com/document_detail/43185.html) topic in the RDS documentation.
   * If the `MultiAZPolicy` of a scaling group is set to `COST_OPTIMIZED`:
   * - If you specify the `OnDemandBaseCapacity`, `OnDemandPercentageAboveBaseCapacity`, and `SpotInstancePools` parameters, you define the instance allocation strategy for the cost-optimized policy. Auto Scaling prioritizes this strategy during scaling activities.
   * - If you do not specify the `OnDemandBaseCapacity`, `OnDemandPercentageAboveBaseCapacity`, or `SpotInstancePools` parameters, the cost-optimized policy creates instances by using only the lowest-cost method. In this mode, you cannot create instances by using the Elastic Guarantee service or the Capacity Reservation service.
   * If you enable tag propagation for a scaling group by setting `Tags.Propagate` to `true`:
   * - The scaling group propagates its tags only to new instances, not to existing instances.
   * - If you specify instance tags in the scaling configuration and also choose to propagate tags from the scaling group, Auto Scaling applies both sets of tags to the new instances.
   * - If a tag from the scaling configuration and a propagated tag from the scaling group have the same tag key, the tag value from the scaling configuration takes precedence.
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
   * Call the `CreateScalingGroup` API to create a scaling group. The group automatically adjusts your computing capacity (the number of instances) by scaling instances of a specified type in or out based on your business requirements and scaling policies.
   * 
   * @remarks
   * A scaling group is a collection of ECS instances for the same use case.
   * The number of scaling groups that you can create in a region depends on your Auto Scaling usage. To view your quota for scaling groups, go to Quota Center.
   * A scaling group is not active immediately after creation. You must call the [EnableScalingGroup](https://help.aliyun.com/document_detail/25939.html) operation to enable the group before it can trigger scaling activities or execute scaling rules.
   * The scaling group, as well as its associated Classic Load Balancer (CLB) (formerly SLB) and RDS instances, must be in the same region. For more information, see [Regions and availability zones](https://help.aliyun.com/document_detail/40654.html).
   * If you associate a CLB instance with a scaling group, the scaling group automatically adds new ECS instances to a backend server group of the CLB instance. You can specify which server group to use. The following types of server groups are supported:
   * - Default server group: A group of ECS instances that receive requests from the front end. If no vServer group or primary/standby server group is configured for a listener, it forwards requests to the ECS instances in the default server group.
   * - vServer group: Use a vServer group if you need to forward different requests to different backend servers, or forward requests based on domain names and URLs.
   * > If you specify both a default server group and one or more vServer groups, the scaling group adds new ECS instances to all specified server groups.
   * After an instance is added to a backend server group of a CLB instance, its default weight is 50. The CLB instance must meet the following conditions:
   * - The CLB instance must be in the active state. You can call the [DescribeLoadBalancers](https://help.aliyun.com/document_detail/2401696.html) operation to check the state of a CLB instance.
   * - Health checks must be enabled for all listeners configured on the CLB instance. Otherwise, the scaling group creation fails.
   * If you associate a scaling group with Application Load Balancer (ALB), Network Load Balancer (NLB), or Gateway Load Balancer (GWLB) server groups, it automatically adds new ECS instances as backend servers to those groups to handle distributed requests. You can specify multiple such server groups, but they must all belong to the same VPC as the scaling group. For more information, see [AttachAlbServerGroups](https://help.aliyun.com/document_detail/266800.html) or [AttachServerGroups](https://help.aliyun.com/document_detail/600535.html).
   * If you associate an RDS instance with a scaling group, the scaling group automatically adds the internal IP addresses of new ECS instances to the IP address whitelist of the RDS instance. The RDS instance must meet the following conditions:
   * - The RDS instance must be in the Running state. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) operation to check the state of an RDS instance.
   * - The number of IP addresses in the RDS instance\\"s IP address whitelist cannot exceed the limit. For more information, see the [Configure an IP address whitelist](https://help.aliyun.com/document_detail/43185.html) topic in the RDS documentation.
   * If the `MultiAZPolicy` of a scaling group is set to `COST_OPTIMIZED`:
   * - If you specify the `OnDemandBaseCapacity`, `OnDemandPercentageAboveBaseCapacity`, and `SpotInstancePools` parameters, you define the instance allocation strategy for the cost-optimized policy. Auto Scaling prioritizes this strategy during scaling activities.
   * - If you do not specify the `OnDemandBaseCapacity`, `OnDemandPercentageAboveBaseCapacity`, or `SpotInstancePools` parameters, the cost-optimized policy creates instances by using only the lowest-cost method. In this mode, you cannot create instances by using the Elastic Guarantee service or the Capacity Reservation service.
   * If you enable tag propagation for a scaling group by setting `Tags.Propagate` to `true`:
   * - The scaling group propagates its tags only to new instances, not to existing instances.
   * - If you specify instance tags in the scaling configuration and also choose to propagate tags from the scaling group, Auto Scaling applies both sets of tags to the new instances.
   * - If a tag from the scaling configuration and a propagated tag from the scaling group have the same tag key, the tag value from the scaling configuration takes precedence.
   * 
   * @param request - CreateScalingGroupRequest
   * @returns CreateScalingGroupResponse
   */
  async createScalingGroup(request: $_model.CreateScalingGroupRequest): Promise<$_model.CreateScalingGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScalingGroupWithOptions(request, runtime);
  }

  /**
   * The function of a scaling rule is determined by its type, which can be used to trigger a scaling activity or intelligently set the boundary values of a scaling group. Depending on your business requirements, you can invoke the CreateScalingRule API to create different types of scaling rules. For example, if your business only requires setting the boundary values of a scaling group, we recommend that you select the predictive rule type.
   * 
   * @remarks
   * A scaling rule defines specific scale-out or scale-in operations, such as adding or removing N instances. If executing a scaling rule would cause the number of ECS or ECI instances in the scaling group to fall below MinSize or exceed MaxSize, automatic scaling automatically adjusts the number of ECS or ECI instances to be added or removed so that the actual instance count reaches MinSize or MaxSize. However, the configured value of the scaling rule remains unchanged. Examples are as follows:
   * - For a scaling group with MaxSize=3 and a current Total Capacity of 2, if the scaling rule specifies adding 3 ECS instances, only 1 ECS instance will actually be added during execution, but the configured value of the scaling rule remains 3.
   * - For a scaling group with MinSize=2 and a current Total Capacity of 3, if the scaling rule specifies removing 5 ECS instances, only 1 ECS instance will actually be removed during execution, but the configured value of the scaling rule remains 5.
   * Please note the following parameter-related descriptions:
   * - When AdjustmentType is TotalCapacity, it means adjusting the current number of ECS or ECI instances in the scaling group to the specified quantity. The corresponding AdjustmentValue must be greater than or equal to 0.
   * - When AdjustmentType is QuantityChangeInCapacity or PercentChangeInCapacity, a positive AdjustmentValue indicates adding instances, while a negative value indicates removing instances.
   * - When AdjustmentType is PercentChangeInCapacity, the automatic scaling service calculates the number of ECS or ECI instances to add or remove by multiplying the current instance count (Total Capacity) by AdjustmentValue/100 and then applying rounding.
   * - If a cooldown time (Cooldown) is specified in the scaling rule, the scaling group enters a cooldown period for the specified duration after the scaling activity triggered by this rule completes. If no cooldown time is specified in the scaling rule, the default cooldown time (DefaultCooldown) of the scaling group is used.
   * - There is a limit on the number of scaling rules that can be created within a single scaling group. For details, see [Limits](https://help.aliyun.com/document_detail/25863.html).
   * - The returned Unique Identifier (ScalingRuleAri) of the scaling rule can be used with the following APIs:
   *     - Specify it in the ScalingRuleAri parameter when invoking ExecuteScalingRule to manually execute the scaling rule.
   *     - Specify it in the ScheduledAction parameter when creating a scheduled task (CreateScheduledTask) to execute the scaling rule at a scheduled time.
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
   * The function of a scaling rule is determined by its type, which can be used to trigger a scaling activity or intelligently set the boundary values of a scaling group. Depending on your business requirements, you can invoke the CreateScalingRule API to create different types of scaling rules. For example, if your business only requires setting the boundary values of a scaling group, we recommend that you select the predictive rule type.
   * 
   * @remarks
   * A scaling rule defines specific scale-out or scale-in operations, such as adding or removing N instances. If executing a scaling rule would cause the number of ECS or ECI instances in the scaling group to fall below MinSize or exceed MaxSize, automatic scaling automatically adjusts the number of ECS or ECI instances to be added or removed so that the actual instance count reaches MinSize or MaxSize. However, the configured value of the scaling rule remains unchanged. Examples are as follows:
   * - For a scaling group with MaxSize=3 and a current Total Capacity of 2, if the scaling rule specifies adding 3 ECS instances, only 1 ECS instance will actually be added during execution, but the configured value of the scaling rule remains 3.
   * - For a scaling group with MinSize=2 and a current Total Capacity of 3, if the scaling rule specifies removing 5 ECS instances, only 1 ECS instance will actually be removed during execution, but the configured value of the scaling rule remains 5.
   * Please note the following parameter-related descriptions:
   * - When AdjustmentType is TotalCapacity, it means adjusting the current number of ECS or ECI instances in the scaling group to the specified quantity. The corresponding AdjustmentValue must be greater than or equal to 0.
   * - When AdjustmentType is QuantityChangeInCapacity or PercentChangeInCapacity, a positive AdjustmentValue indicates adding instances, while a negative value indicates removing instances.
   * - When AdjustmentType is PercentChangeInCapacity, the automatic scaling service calculates the number of ECS or ECI instances to add or remove by multiplying the current instance count (Total Capacity) by AdjustmentValue/100 and then applying rounding.
   * - If a cooldown time (Cooldown) is specified in the scaling rule, the scaling group enters a cooldown period for the specified duration after the scaling activity triggered by this rule completes. If no cooldown time is specified in the scaling rule, the default cooldown time (DefaultCooldown) of the scaling group is used.
   * - There is a limit on the number of scaling rules that can be created within a single scaling group. For details, see [Limits](https://help.aliyun.com/document_detail/25863.html).
   * - The returned Unique Identifier (ScalingRuleAri) of the scaling rule can be used with the following APIs:
   *     - Specify it in the ScalingRuleAri parameter when invoking ExecuteScalingRule to manually execute the scaling rule.
   *     - Specify it in the ScheduledAction parameter when creating a scheduled task (CreateScheduledTask) to execute the scaling rule at a scheduled time.
   * 
   * @param request - CreateScalingRuleRequest
   * @returns CreateScalingRuleResponse
   */
  async createScalingRule(request: $_model.CreateScalingRuleRequest): Promise<$_model.CreateScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScalingRuleWithOptions(request, runtime);
  }

  /**
   * Creates a scheduled task. A scheduled task is a type of scaling task that enables automatic execution of a specific scaling rule at a specified point in time. You can call the CreateScheduledTask operation to create a scheduled task to implement automatic scaling of computing resources. This ensures your business continuity and minimizes resource costs.
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
   * Creates a scheduled task. A scheduled task is a type of scaling task that enables automatic execution of a specific scaling rule at a specified point in time. You can call the CreateScheduledTask operation to create a scheduled task to implement automatic scaling of computing resources. This ensures your business continuity and minimizes resource costs.
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
   * Queries event-triggered tasks. You can call the DescribeAlarms operation to learn about the configurations of event-triggered tasks and keep updated on monitoring data changes. This helps you troubleshoot system resource issues at the earliest opportunity and ensures system stability and reliability.
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
   * Queries event-triggered tasks. You can call the DescribeAlarms operation to learn about the configurations of event-triggered tasks and keep updated on monitoring data changes. This helps you troubleshoot system resource issues at the earliest opportunity and ensures system stability and reliability.
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
   * DescribeDiagnoseReports
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
   * DescribeDiagnoseReports
   * 
   * @param request - DescribeDiagnoseReportsRequest
   * @returns DescribeDiagnoseReportsResponse
   */
  async describeDiagnoseReports(request: $_model.DescribeDiagnoseReportsRequest): Promise<$_model.DescribeDiagnoseReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiagnoseReportsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a scaling configuration. You can query a scaling configuration by its ID to learn about its details such as the temporary storage size, number of IPv6 addresses, and bandwidth of the elastic IP address (EIP). The scaling configuration details can be obtained as a YAML file.
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
   * Queries the details of a scaling configuration. You can query a scaling configuration by its ID to learn about its details such as the temporary storage size, number of IPv6 addresses, and bandwidth of the elastic IP address (EIP). The scaling configuration details can be obtained as a YAML file.
   * 
   * @param request - DescribeEciScalingConfigurationDetailRequest
   * @returns DescribeEciScalingConfigurationDetailResponse
   */
  async describeEciScalingConfigurationDetail(request: $_model.DescribeEciScalingConfigurationDetailRequest): Promise<$_model.DescribeEciScalingConfigurationDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEciScalingConfigurationDetailWithOptions(request, runtime);
  }

  /**
   * Queries scaling configurations of the Elastic Container Instance type. When you call the DescribeEciScalingConfigurations operation, you can specify ScalingGroupId, ScalingConfigurationIds, or ScalingConfigurationNames to query details about the desired scaling configurations, such as the instance bidding policy, instance type, image pulling policy, and load balancing weight of each elastic container instance. This can help you select a suitable template for creating elastic container instances or reference existing scaling configurations before you modify the automatic scaling policy for elastic container instances.
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
   * Queries scaling configurations of the Elastic Container Instance type. When you call the DescribeEciScalingConfigurations operation, you can specify ScalingGroupId, ScalingConfigurationIds, or ScalingConfigurationNames to query details about the desired scaling configurations, such as the instance bidding policy, instance type, image pulling policy, and load balancing weight of each elastic container instance. This can help you select a suitable template for creating elastic container instances or reference existing scaling configurations before you modify the automatic scaling policy for elastic container instances.
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
   * Queries instance refresh tasks for a scaling group. You can call this operation to view basic information and progress of instance refresh tasks.
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
   * Queries instance refresh tasks for a scaling group. You can call this operation to view basic information and progress of instance refresh tasks.
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
   * @param request - DescribeLifecycleActionsRequest
   * @returns DescribeLifecycleActionsResponse
   */
  async describeLifecycleActions(request: $_model.DescribeLifecycleActionsRequest): Promise<$_model.DescribeLifecycleActionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLifecycleActionsWithOptions(request, runtime);
  }

  /**
   * Queries lifecycle hooks. When you call this operation, you can specify the lifecycle hook ID or scaling group ID to query the details of the desired lifecycle hook, such as the default action after the lifecycle hook times out, scaling activity that corresponds to the lifecycle hook, Alibaba Cloud Resource Name (ARN) of the notification recipient, and effective period of the lifecycle hook.
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
   * Queries lifecycle hooks. When you call this operation, you can specify the lifecycle hook ID or scaling group ID to query the details of the desired lifecycle hook, such as the default action after the lifecycle hook times out, scaling activity that corresponds to the lifecycle hook, Alibaba Cloud Resource Name (ARN) of the notification recipient, and effective period of the lifecycle hook.
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
   * Queries instance types. When you call the DescribePatternTypes operation, you can specify attributes such as the vSwitch ID, number of vCPUs, memory size, instance family, and maximum acceptable price to filer instance types that meet your business requirements.
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
   * Queries instance types. When you call the DescribePatternTypes operation, you can specify attributes such as the vSwitch ID, number of vCPUs, memory size, instance family, and maximum acceptable price to filer instance types that meet your business requirements.
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
   * Queries scaling activities. You can call the DescribeScalingActivities operation to query the results of scaling activities triggered by scheduled tasks, event-triggered tasks, or manual execution of scaling rules. For example, you can query the status and cause of a scaling activity. You can also query the total number of instances after a scaling activity is complete.
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
   * Queries scaling activities. You can call the DescribeScalingActivities operation to query the results of scaling activities triggered by scheduled tasks, event-triggered tasks, or manual execution of scaling rules. For example, you can query the status and cause of a scaling activity. You can also query the total number of instances after a scaling activity is complete.
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
   * You can call the DescribeScalingConfigurations API to query information about ECS-type scaling configurations, including instance type and image details. This helps you understand the ECS instance template used during scale-out operations.
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
   * You can call the DescribeScalingConfigurations API to query information about ECS-type scaling configurations, including instance type and image details. This helps you understand the ECS instance template used during scale-out operations.
   * 
   * @param request - DescribeScalingConfigurationsRequest
   * @returns DescribeScalingConfigurationsResponse
   */
  async describeScalingConfigurations(request: $_model.DescribeScalingConfigurationsRequest): Promise<$_model.DescribeScalingConfigurationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScalingConfigurationsWithOptions(request, runtime);
  }

  /**
   * Queries a scaling group. You can call the DescribeScalingGroupDetail operation to query the basic information, instances, and scaling configurations of a scaling group. If you set OutputFormat to YAML for a scaling group of the Elastic Container Instance type, the output is a Kubernetes Deployment file in the YAML format.
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
   * Queries a scaling group. You can call the DescribeScalingGroupDetail operation to query the basic information, instances, and scaling configurations of a scaling group. If you set OutputFormat to YAML for a scaling group of the Elastic Container Instance type, the output is a Kubernetes Deployment file in the YAML format.
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
   * Queries information about scaling groups, such as the basic information, instances, and scaling configurations.
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
   * Queries information about scaling groups, such as the basic information, instances, and scaling configurations.
   * 
   * @param request - DescribeScalingGroupsRequest
   * @returns DescribeScalingGroupsResponse
   */
  async describeScalingGroups(request: $_model.DescribeScalingGroupsRequest): Promise<$_model.DescribeScalingGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScalingGroupsWithOptions(request, runtime);
  }

  /**
   * Calls DescribeScalingInstances to query the list and information of ECS instances in a scaling group by scaling group ID, including the total number of running spot instances, the total number of ECS instances, the warmup state of ECS instances, and the lifecycle state in the current scaling group. You can also filter ECS instances by health check status, lifecycle state, or creation type.
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
   * Calls DescribeScalingInstances to query the list and information of ECS instances in a scaling group by scaling group ID, including the total number of running spot instances, the total number of ECS instances, the warmup state of ECS instances, and the lifecycle state in the current scaling group. You can also filter ECS instances by health check status, lifecycle state, or creation type.
   * 
   * @param request - DescribeScalingInstancesRequest
   * @returns DescribeScalingInstancesResponse
   */
  async describeScalingInstances(request: $_model.DescribeScalingInstancesRequest): Promise<$_model.DescribeScalingInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScalingInstancesWithOptions(request, runtime);
  }

  /**
   * Queries scaling rules. When you call this operation, you can specify the ID, name, or Alibaba Cloud Resource Name (ARN) of a scaling rule to query the details of the scaling rule. For example, you can query the adjustment method, instance warm-up period, and associated event-triggered tasks of the desired scaling rule.
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
   * Queries scaling rules. When you call this operation, you can specify the ID, name, or Alibaba Cloud Resource Name (ARN) of a scaling rule to query the details of the scaling rule. For example, you can query the adjustment method, instance warm-up period, and associated event-triggered tasks of the desired scaling rule.
   * 
   * @param request - DescribeScalingRulesRequest
   * @returns DescribeScalingRulesResponse
   */
  async describeScalingRules(request: $_model.DescribeScalingRulesRequest): Promise<$_model.DescribeScalingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScalingRulesWithOptions(request, runtime);
  }

  /**
   * Queries scheduled tasks. A scheduled task is a predefined task that triggers the automatic execution of a scaling rule at the specified point in time. It ensures an automatic scaling of computing resources to fulfill your business demands at a minimum cost. After you create a scheduled task, you can call the DescribeScheduledTasks operation to query the details of the task, such as the execution time point and the scaling group ID. You can also call this operation to query the total number of existing scheduled tasks.
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
   * Queries scheduled tasks. A scheduled task is a predefined task that triggers the automatic execution of a scaling rule at the specified point in time. It ensures an automatic scaling of computing resources to fulfill your business demands at a minimum cost. After you create a scheduled task, you can call the DescribeScheduledTasks operation to query the details of the task, such as the execution time point and the scaling group ID. You can also call this operation to query the total number of existing scheduled tasks.
   * 
   * @param request - DescribeScheduledTasksRequest
   * @returns DescribeScheduledTasksResponse
   */
  async describeScheduledTasks(request: $_model.DescribeScheduledTasksRequest): Promise<$_model.DescribeScheduledTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScheduledTasksWithOptions(request, runtime);
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
   * Detaches one or more ApsaraDB RDS instances from a scaling group. If you want to decrease the number of ApsaraDB RDS instances attached to your scaling group, you can call the DetachDBInstance operation. This operation liberates ApsaraDB RDS instances from your scaling group, thereby significantly boosting the agility and efficiency in managing and allocating your resources.
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
   * Detaches one or more ApsaraDB RDS instances from a scaling group. If you want to decrease the number of ApsaraDB RDS instances attached to your scaling group, you can call the DetachDBInstance operation. This operation liberates ApsaraDB RDS instances from your scaling group, thereby significantly boosting the agility and efficiency in managing and allocating your resources.
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
   * - 如果您创建自定义监控类型的报警任务（MetricType=custom），您需要先将自定义监控项指标上报到云监控。具体操作，请参见[自定义监控报警任务](https://help.aliyun.com/document_detail/74861.html)。
   * - 创建报警任务时，您需要指定监控项（MetricName），并配合维度信息（Dimension.N.DimensionKey和Dimension.N.DimensionValue），来确定伸缩组中该监控项数据的聚合范围。例如，指定user_id和scaling_group来确定聚合该用户、该伸缩组下所有ECS实例或ECI实例的监控项数据。
   *     - 自定义监控报警任务（MetricType=custom）的监控项取决于您自有的监控指标。
   *     - 系统监控报警任务（MetricType=system）支持的监控项的更多信息，请参见[系统监控报警任务](https://help.aliyun.com/document_detail/74854.html)。
   * > 维度信息中，user_id和scaling_group由系统自动填充，device、state需要您手动指定。更多信息，请参见参数`Dimension.N.DimensionKey`和`Dimension.N.DimensionValue`。
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
   * - 如果您创建自定义监控类型的报警任务（MetricType=custom），您需要先将自定义监控项指标上报到云监控。具体操作，请参见[自定义监控报警任务](https://help.aliyun.com/document_detail/74861.html)。
   * - 创建报警任务时，您需要指定监控项（MetricName），并配合维度信息（Dimension.N.DimensionKey和Dimension.N.DimensionValue），来确定伸缩组中该监控项数据的聚合范围。例如，指定user_id和scaling_group来确定聚合该用户、该伸缩组下所有ECS实例或ECI实例的监控项数据。
   *     - 自定义监控报警任务（MetricType=custom）的监控项取决于您自有的监控指标。
   *     - 系统监控报警任务（MetricType=system）支持的监控项的更多信息，请参见[系统监控报警任务](https://help.aliyun.com/document_detail/74854.html)。
   * > 维度信息中，user_id和scaling_group由系统自动填充，device、state需要您手动指定。更多信息，请参见参数`Dimension.N.DimensionKey`和`Dimension.N.DimensionValue`。
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
   * Modifies a scaling configuration of the Elastic Container Instance type. When you call the ModifyEciScalingConfiguration operation, you can specify the ID, name, and instance properties of the scaling configuration whose information you want to modify. You can modify the instance restart policy, instance bidding policy, and elastic IP address (EIP) bandwidth.
   * 
   * @remarks
   * - 如果修改伸缩配置的名称，请注意同一伸缩组下不能存在名称相同的伸缩配置。
   * - 可以调用[DescribeEciScalingConfigurations](https://help.aliyun.com/document_detail/459374.html)查询并验证修改结果。
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
   * Modifies a scaling configuration of the Elastic Container Instance type. When you call the ModifyEciScalingConfiguration operation, you can specify the ID, name, and instance properties of the scaling configuration whose information you want to modify. You can modify the instance restart policy, instance bidding policy, and elastic IP address (EIP) bandwidth.
   * 
   * @remarks
   * - 如果修改伸缩配置的名称，请注意同一伸缩组下不能存在名称相同的伸缩配置。
   * - 可以调用[DescribeEciScalingConfigurations](https://help.aliyun.com/document_detail/459374.html)查询并验证修改结果。
   * 
   * @param request - ModifyEciScalingConfigurationRequest
   * @returns ModifyEciScalingConfigurationResponse
   */
  async modifyEciScalingConfiguration(request: $_model.ModifyEciScalingConfigurationRequest): Promise<$_model.ModifyEciScalingConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyEciScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * Modifies the information of an Elastic Compute Service (ECS) instance. When you call the ModifyInstanceAttribute operation, you can specify attributes such as the instance ID, scaling group ID, and region ID to modify the attributes of an ECS instance in a scaling group. You can modify only the hosting attributes of instances that are manually added to scaling groups.
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
   * Modifies the information of an Elastic Compute Service (ECS) instance. When you call the ModifyInstanceAttribute operation, you can specify attributes such as the instance ID, scaling group ID, and region ID to modify the attributes of an ECS instance in a scaling group. You can modify only the hosting attributes of instances that are manually added to scaling groups.
   * 
   * @param request - ModifyInstanceAttributeRequest
   * @returns ModifyInstanceAttributeResponse
   */
  async modifyInstanceAttribute(request: $_model.ModifyInstanceAttributeRequest): Promise<$_model.ModifyInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies a lifecycle hook. If an existing lifecycle hook does not meet your business requirements anymore, you can call the ModifyLifecycleHook operation to modify the information such as the scaling event, timeout period, and default action of the lifecycle hook. Before you modify a lifecycle hook, you can locate the lifecycle hook by its ID, name, or scaling group.
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
   * Modifies a lifecycle hook. If an existing lifecycle hook does not meet your business requirements anymore, you can call the ModifyLifecycleHook operation to modify the information such as the scaling event, timeout period, and default action of the lifecycle hook. Before you modify a lifecycle hook, you can locate the lifecycle hook by its ID, name, or scaling group.
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
   * If a scaling configuration does not meet your business needs, you can call the ModifyScalingConfiguration operation to modify the scaling configuration. A scaling configuration is a template for creating ECS instances during scale-out events.
   * 
   * @remarks
   * - Scaling configurations in the same scaling group cannot have the same name.
   * - You can configure the primary elastic network interface (ENI) in one of the following ways. You can use only one method in a single API call. If you use both methods, the call fails and an error message is returned. When you modify the ENI configuration, using one method clears any configuration set by the other method.
   *   - Directly set the configuration of the primary ENI using parameters such as \\`SecurityGroupId\\`, \\`SecurityGroupIds\\`, and \\`Ipv6AddressCount\\`.
   *   - Set the configuration of the primary and secondary ENIs using the \\`NetworkInterfaces\\` parameter. When you use this parameter, you must configure the primary ENI. To specify the primary ENI, set \\`NetworkInterface.InstanceType\\` to \\`Primary\\`. To specify a secondary ENI, set \\`NetworkInterface.InstanceType\\` to \\`Secondary\\` or leave the parameter empty.
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
   * If a scaling configuration does not meet your business needs, you can call the ModifyScalingConfiguration operation to modify the scaling configuration. A scaling configuration is a template for creating ECS instances during scale-out events.
   * 
   * @remarks
   * - Scaling configurations in the same scaling group cannot have the same name.
   * - You can configure the primary elastic network interface (ENI) in one of the following ways. You can use only one method in a single API call. If you use both methods, the call fails and an error message is returned. When you modify the ENI configuration, using one method clears any configuration set by the other method.
   *   - Directly set the configuration of the primary ENI using parameters such as \\`SecurityGroupId\\`, \\`SecurityGroupIds\\`, and \\`Ipv6AddressCount\\`.
   *   - Set the configuration of the primary and secondary ENIs using the \\`NetworkInterfaces\\` parameter. When you use this parameter, you must configure the primary ENI. To specify the primary ENI, set \\`NetworkInterface.InstanceType\\` to \\`Primary\\`. To specify a secondary ENI, set \\`NetworkInterface.InstanceType\\` to \\`Secondary\\` or leave the parameter empty.
   * 
   * @param request - ModifyScalingConfigurationRequest
   * @returns ModifyScalingConfigurationResponse
   */
  async modifyScalingConfiguration(request: $_model.ModifyScalingConfigurationRequest): Promise<$_model.ModifyScalingConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyScalingConfigurationWithOptions(request, runtime);
  }

  /**
   * Modifies a scaling group. If you want to enable policy-based automatic addition or removal of instances of a specific type to meet evolving business requirements, you can modify scaling groups to adjust your computing power with ease. The computing power refers to the instances that provide the computing capability. When your scaling group cannot meet your business requirements, you can call the ModifyScalingGroup operation to modify scaling group attributes such as the maximum, minimum, and expected numbers of instances. This prevents repeated creation and configuration of scaling groups, which saves you a lot of time and resource costs.
   * 
   * @remarks
   * - The following parameters cannot be modified:
   *      - RegionId
   *     - LoadBalancerId
   *     > To modify an SLB instance, use the AttachLoadBalancers and DetachLoadBalancers APIs.
   *     - DBInstanceId
   *     > To modify an RDS instance, use the AttachDBInstances and DetachDBInstances APIs.
   * - You can invoke this API only when the scaling group status is `Active` or `Inactive`.
   * - Enabling a new scaling configuration does not affect ECS instances or ECI instances that were created using an earlier scaling configuration and are currently running.
   * - If MaxSize is modified such that the current number of ECS or ECI instances in the scaling group exceeds MaxSize, the scaling group automatically removes ECS or ECI instances until the instance count equals MaxSize.
   * - If MinSize is modified such that the current number of ECS or ECI instances in the scaling group falls below MinSize, the scaling group automatically adds ECS or ECI instances until the instance count equals MinSize.
   * - If DesiredCapacity is set for the scaling group and then modified such that the current number of ECS or ECI instances differs from the new DesiredCapacity, the scaling group automatically adds or removes ECS or ECI instances until the instance count equals DesiredCapacity.
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
   * Modifies a scaling group. If you want to enable policy-based automatic addition or removal of instances of a specific type to meet evolving business requirements, you can modify scaling groups to adjust your computing power with ease. The computing power refers to the instances that provide the computing capability. When your scaling group cannot meet your business requirements, you can call the ModifyScalingGroup operation to modify scaling group attributes such as the maximum, minimum, and expected numbers of instances. This prevents repeated creation and configuration of scaling groups, which saves you a lot of time and resource costs.
   * 
   * @remarks
   * - The following parameters cannot be modified:
   *      - RegionId
   *     - LoadBalancerId
   *     > To modify an SLB instance, use the AttachLoadBalancers and DetachLoadBalancers APIs.
   *     - DBInstanceId
   *     > To modify an RDS instance, use the AttachDBInstances and DetachDBInstances APIs.
   * - You can invoke this API only when the scaling group status is `Active` or `Inactive`.
   * - Enabling a new scaling configuration does not affect ECS instances or ECI instances that were created using an earlier scaling configuration and are currently running.
   * - If MaxSize is modified such that the current number of ECS or ECI instances in the scaling group exceeds MaxSize, the scaling group automatically removes ECS or ECI instances until the instance count equals MaxSize.
   * - If MinSize is modified such that the current number of ECS or ECI instances in the scaling group falls below MinSize, the scaling group automatically adds ECS or ECI instances until the instance count equals MinSize.
   * - If DesiredCapacity is set for the scaling group and then modified such that the current number of ECS or ECI instances differs from the new DesiredCapacity, the scaling group automatically adds or removes ECS or ECI instances until the instance count equals DesiredCapacity.
   * 
   * @param request - ModifyScalingGroupRequest
   * @returns ModifyScalingGroupResponse
   */
  async modifyScalingGroup(request: $_model.ModifyScalingGroupRequest): Promise<$_model.ModifyScalingGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyScalingGroupWithOptions(request, runtime);
  }

  /**
   * Modifies a scaling rule. If an existing scaling rule cannot meet your business requirements, you can call the ModifyScalingRule operation to modify the scaling rule, without the need to create a new one. This streamlines your workflow, enhancing operational efficiency while also contributing to cost optimization by avoiding redundant steps.
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
   * Modifies a scaling rule. If an existing scaling rule cannot meet your business requirements, you can call the ModifyScalingRule operation to modify the scaling rule, without the need to create a new one. This streamlines your workflow, enhancing operational efficiency while also contributing to cost optimization by avoiding redundant steps.
   * 
   * @param request - ModifyScalingRuleRequest
   * @returns ModifyScalingRuleResponse
   */
  async modifyScalingRule(request: $_model.ModifyScalingRuleRequest): Promise<$_model.ModifyScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyScalingRuleWithOptions(request, runtime);
  }

  /**
   * Modifies a scheduled task. If an existing scheduled task cannot meet your business requirements, you can call the ModifyScheduledTask operation to adjust its parameter settings including the scaling rule to execute and the boundary values of your scaling group, without the need to create a new scheduled task. This operation provides a flexible way to optimize scheduled tasks.
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
   * Modifies a scheduled task. If an existing scheduled task cannot meet your business requirements, you can call the ModifyScheduledTask operation to adjust its parameter settings including the scaling rule to execute and the boundary values of your scaling group, without the need to create a new scheduled task. This operation provides a flexible way to optimize scheduled tasks.
   * 
   * @param request - ModifyScheduledTaskRequest
   * @returns ModifyScheduledTaskResponse
   */
  async modifyScheduledTask(request: $_model.ModifyScheduledTaskRequest): Promise<$_model.ModifyScheduledTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyScheduledTaskWithOptions(request, runtime);
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
   * Queries predicted monitoring data.
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
   * Queries predicted monitoring data.
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
   * Rebalances the distribution of Elastic Compute Service (ECS) instances across zones. If ECS instances are unevenly distributed across multiple zones, you can call the RebalanceInstances operation to rebalance the distribution of the ECS instances across the zones.
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
   * Rebalances the distribution of Elastic Compute Service (ECS) instances across zones. If ECS instances are unevenly distributed across multiple zones, you can call the RebalanceInstances operation to rebalance the distribution of the ECS instances across the zones.
   * 
   * @param request - RebalanceInstancesRequest
   * @returns RebalanceInstancesResponse
   */
  async rebalanceInstances(request: $_model.RebalanceInstancesRequest): Promise<$_model.RebalanceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebalanceInstancesWithOptions(request, runtime);
  }

  /**
   * Extends the time window during which Elastic Compute Service (ECS) instances stay in a Pending state. If the current time window during which an ECS instance stays in a Pending state is not sufficient for you to complete custom operations on the ECS instance, you can call the RecordLifecycleActionHeartbeat operation to extend the time window. When you call this operation, you can specify lifecycleHookId, lifecycleActionToken, and heartbeatTimeout to extend the time window for the desired ECS instance.
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
   * Extends the time window during which Elastic Compute Service (ECS) instances stay in a Pending state. If the current time window during which an ECS instance stays in a Pending state is not sufficient for you to complete custom operations on the ECS instance, you can call the RecordLifecycleActionHeartbeat operation to extend the time window. When you call this operation, you can specify lifecycleHookId, lifecycleActionToken, and heartbeatTimeout to extend the time window for the desired ECS instance.
   * 
   * @param request - RecordLifecycleActionHeartbeatRequest
   * @returns RecordLifecycleActionHeartbeatResponse
   */
  async recordLifecycleActionHeartbeat(request: $_model.RecordLifecycleActionHeartbeatRequest): Promise<$_model.RecordLifecycleActionHeartbeatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recordLifecycleActionHeartbeatWithOptions(request, runtime);
  }

  /**
   * If a scaling group is enabled and has no ongoing scaling activities, you can call the RemoveInstances API to remove one or more instances from the group.
   * 
   * @remarks
   * - Ensure the following conditions are met before you call this API:
   *   - The scaling group is in the Active state.
   *   - The scaling group has no scaling activities in progress.
   * > This API can bypass the cooldown (`DefaultCooldown`) if the scaling group has no ongoing scaling activities.
   * - If an ECS instance is automatically created by Auto Scaling, or is manually added and managed by the scaling group, removing the instance from the scaling group places it in Economical Mode or releases it.
   * - If an ECS instance is manually added and not managed by the scaling group, removing the instance from the group does not stop or release it.
   * - The call fails if the number of remaining instances would fall below the minimum number of instances (`MinSize`).
   * A successful response confirms the Auto Scaling service has accepted the request, but does not guarantee the scaling activity will succeed. You must use the returned `ScalingActivityId` to check the execution status of the scaling activity.
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
   * If a scaling group is enabled and has no ongoing scaling activities, you can call the RemoveInstances API to remove one or more instances from the group.
   * 
   * @remarks
   * - Ensure the following conditions are met before you call this API:
   *   - The scaling group is in the Active state.
   *   - The scaling group has no scaling activities in progress.
   * > This API can bypass the cooldown (`DefaultCooldown`) if the scaling group has no ongoing scaling activities.
   * - If an ECS instance is automatically created by Auto Scaling, or is manually added and managed by the scaling group, removing the instance from the scaling group places it in Economical Mode or releases it.
   * - If an ECS instance is manually added and not managed by the scaling group, removing the instance from the group does not stop or release it.
   * - The call fails if the number of remaining instances would fall below the minimum number of instances (`MinSize`).
   * A successful response confirms the Auto Scaling service has accepted the request, but does not guarantee the scaling activity will succeed. You must use the returned `ScalingActivityId` to check the execution status of the scaling activity.
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
   * Resumes suspended processes in a scaling group. This operation allows Auto Scaling to proceed with executing these processes according to their predefined rules and logic. For example, if you resume the health check process in your scaling group, Auto Scaling automatically detects and removes any instances deemed unhealthy from the scaling group.
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
   * Resumes suspended processes in a scaling group. This operation allows Auto Scaling to proceed with executing these processes according to their predefined rules and logic. For example, if you resume the health check process in your scaling group, Auto Scaling automatically detects and removes any instances deemed unhealthy from the scaling group.
   * 
   * @param request - ResumeProcessesRequest
   * @returns ResumeProcessesResponse
   */
  async resumeProcesses(request: $_model.ResumeProcessesRequest): Promise<$_model.ResumeProcessesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeProcessesWithOptions(request, runtime);
  }

  /**
   * Rolls back an instance refresh task. If an instance refresh task cannot meet your business requirements, you can call the RollbackInstanceRefresh operation. When you roll back an instance refresh task, Auto Scaling creates new instances based on the active scaling configuration to replace the instances whose configurations are already updated by running the task.
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
   * Rolls back an instance refresh task. If an instance refresh task cannot meet your business requirements, you can call the RollbackInstanceRefresh operation. When you roll back an instance refresh task, Auto Scaling creates new instances based on the active scaling configuration to replace the instances whose configurations are already updated by running the task.
   * 
   * @param request - RollbackInstanceRefreshRequest
   * @returns RollbackInstanceRefreshResponse
   */
  async rollbackInstanceRefresh(request: $_model.RollbackInstanceRefreshRequest): Promise<$_model.RollbackInstanceRefreshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackInstanceRefreshWithOptions(request, runtime);
  }

  /**
   * Unlike the ExecuteScalingRule API, you can use the ScaleWithAdjustment API to trigger elastic scaling based on a specified adjustment rule, without first creating a scaling rule.
   * 
   * @remarks
   * - Ensure the following conditions are met before calling this operation:
   *   - The scaling group is in the Active state.
   *   - No scaling activities are in progress in the scaling group.
   * - This operation bypasses the cooldown to immediately execute a scaling activity, provided no other scaling activities are in progress.
   * - If adding the specified ECS instances would cause the total capacity to exceed the maximum size, Auto Scaling sets the total capacity to the maximum size.
   * - If removing the specified ECS instances would reduce the total capacity below the minimum size, Auto Scaling sets the total capacity to the minimum size.
   * A successful response indicates that the API request was accepted, but this does not guarantee that the scaling activity will succeed. You must use the returned `ScalingActivityId` to check the status of the scaling activity.
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
   * Unlike the ExecuteScalingRule API, you can use the ScaleWithAdjustment API to trigger elastic scaling based on a specified adjustment rule, without first creating a scaling rule.
   * 
   * @remarks
   * - Ensure the following conditions are met before calling this operation:
   *   - The scaling group is in the Active state.
   *   - No scaling activities are in progress in the scaling group.
   * - This operation bypasses the cooldown to immediately execute a scaling activity, provided no other scaling activities are in progress.
   * - If adding the specified ECS instances would cause the total capacity to exceed the maximum size, Auto Scaling sets the total capacity to the maximum size.
   * - If removing the specified ECS instances would reduce the total capacity below the minimum size, Auto Scaling sets the total capacity to the minimum size.
   * A successful response indicates that the API request was accepted, but this does not guarantee that the scaling activity will succeed. You must use the returned `ScalingActivityId` to check the status of the scaling activity.
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
   * Sets instance health. At times, the automatic health check system might not sufficiently determine the precise health status of your Elastic Compute Service (ECS) instances or elastic container instances. To overcome this, you can call the SetInstanceHealth operation to swiftly pinpoint problematic instances and resolve issues. This operation is designed to more precisely align with real-world business requirements and tackle O\\\\\\&M hurdles efficiently.
   * 
   * @remarks
   * 伸缩组会检测并移出处于不健康状态的ECS实例或ECI实例，如果您需要保留指定的ECS实例或ECI实例，请将ECS实例或ECI实例转入备用或者保护状态，更多信息，请参见[EnterStandby](https://help.aliyun.com/document_detail/459345.html)和[SetInstancesProtection](https://help.aliyun.com/document_detail/459342.html)。
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
   * Sets instance health. At times, the automatic health check system might not sufficiently determine the precise health status of your Elastic Compute Service (ECS) instances or elastic container instances. To overcome this, you can call the SetInstanceHealth operation to swiftly pinpoint problematic instances and resolve issues. This operation is designed to more precisely align with real-world business requirements and tackle O\\\\\\&M hurdles efficiently.
   * 
   * @remarks
   * 伸缩组会检测并移出处于不健康状态的ECS实例或ECI实例，如果您需要保留指定的ECS实例或ECI实例，请将ECS实例或ECI实例转入备用或者保护状态，更多信息，请参见[EnterStandby](https://help.aliyun.com/document_detail/459345.html)和[SetInstancesProtection](https://help.aliyun.com/document_detail/459342.html)。
   * 
   * @param request - SetInstanceHealthRequest
   * @returns SetInstanceHealthResponse
   */
  async setInstanceHealth(request: $_model.SetInstanceHealthRequest): Promise<$_model.SetInstanceHealthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setInstanceHealthWithOptions(request, runtime);
  }

  /**
   * Puts or removes Elastic Compute Service (ECS) instances into or from the Protected state. After you put an ECS instance into the Protected state, the ECS instance will not be stopped or released when a scale-in event is triggered. In this case, you can manually delete the ECS instance in the Auto Scaling console or by calling the RemoveInstances operation.
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
   * Puts or removes Elastic Compute Service (ECS) instances into or from the Protected state. After you put an ECS instance into the Protected state, the ECS instance will not be stopped or released when a scale-in event is triggered. In this case, you can manually delete the ECS instance in the Auto Scaling console or by calling the RemoveInstances operation.
   * 
   * @param request - SetInstancesProtectionRequest
   * @returns SetInstancesProtectionResponse
   */
  async setInstancesProtection(request: $_model.SetInstancesProtectionRequest): Promise<$_model.SetInstancesProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setInstancesProtectionWithOptions(request, runtime);
  }

  /**
   * Refreshes instances in a scaling group when you need to apply a new scaling configuration or update the image used by instances in the scaling group.
   * 
   * @remarks
   * - Only one instance refresh node can run in a scaling group at a time.
   * - This feature is supported only for ECS scaling groups whose scale-out policy is set to **Priority Policy**. Scaling groups that use **vCPU-based capacity calculation** and scaling groups whose instance revoke pattern is set to **Shutdown and Revoke Pattern** or **Forced Shutdown and Revoke Pattern** do not support this feature.
   * - During an instance refresh, normal scale-out and scale-in operations can proceed. However, scale-out operations use the desired configuration specified in the instance refresh node.
   * - Instances that are manually added to the scaling group, or instances in the standby state or protection status, are ignored by the instance refresh node and do not participate in the refresh.
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
   * Refreshes instances in a scaling group when you need to apply a new scaling configuration or update the image used by instances in the scaling group.
   * 
   * @remarks
   * - Only one instance refresh node can run in a scaling group at a time.
   * - This feature is supported only for ECS scaling groups whose scale-out policy is set to **Priority Policy**. Scaling groups that use **vCPU-based capacity calculation** and scaling groups whose instance revoke pattern is set to **Shutdown and Revoke Pattern** or **Forced Shutdown and Revoke Pattern** do not support this feature.
   * - During an instance refresh, normal scale-out and scale-in operations can proceed. However, scale-out operations use the desired configuration specified in the instance refresh node.
   * - Instances that are manually added to the scaling group, or instances in the standby state or protection status, are ignored by the instance refresh node and do not participate in the refresh.
   * 
   * @param request - StartInstanceRefreshRequest
   * @returns StartInstanceRefreshResponse
   */
  async startInstanceRefresh(request: $_model.StartInstanceRefreshRequest): Promise<$_model.StartInstanceRefreshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startInstanceRefreshWithOptions(request, runtime);
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
   * Checks whether the specified Alibaba Cloud account assumes the AliyunServiceRoleForAutoScaling service-linked role. An account can be used to operate Elastic Compute Service (ECS) instances and elastic container instances only after it assumes the service-linked role.
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
   * Checks whether the specified Alibaba Cloud account assumes the AliyunServiceRoleForAutoScaling service-linked role. An account can be used to operate Elastic Compute Service (ECS) instances and elastic container instances only after it assumes the service-linked role.
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
