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
    this._endpoint = this.getEndpoint("eci", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates an asynchronous task to store a specified container in an elastic container instance as an image and pushes the image to an image repository of Alibaba Cloud Container Registry.
   * 
   * @remarks
   * You must specify the Alibaba Cloud Resource Name (ARN) of the RAM role of the Container Registry Enterprise Edition instance to grant the elastic container instance to assume the RAM role to push images.
   * 
   * @param request - CommitContainerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CommitContainerResponse
   */
  async commitContainerWithOptions(request: $_model.CommitContainerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CommitContainerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acrRegistryInfo)) {
      query["AcrRegistryInfo"] = request.acrRegistryInfo;
    }

    if (!$dara.isNull(request.arn)) {
      query["Arn"] = request.arn;
    }

    if (!$dara.isNull(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!$dara.isNull(request.containerName)) {
      query["ContainerName"] = request.containerName;
    }

    if (!$dara.isNull(request.image)) {
      query["Image"] = request.image;
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
      action: "CommitContainer",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CommitContainerResponse>(await this.callApi(params, req, runtime), new $_model.CommitContainerResponse({}));
  }

  /**
   * Creates an asynchronous task to store a specified container in an elastic container instance as an image and pushes the image to an image repository of Alibaba Cloud Container Registry.
   * 
   * @remarks
   * You must specify the Alibaba Cloud Resource Name (ARN) of the RAM role of the Container Registry Enterprise Edition instance to grant the elastic container instance to assume the RAM role to push images.
   * 
   * @param request - CommitContainerRequest
   * @returns CommitContainerResponse
   */
  async commitContainer(request: $_model.CommitContainerRequest): Promise<$_model.CommitContainerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.commitContainerWithOptions(request, runtime);
  }

  /**
   * Copies a DataCache from one region to another region.
   * 
   * @remarks
   * You cannot directly use a DataCache across regions. You can call this operation to copy a DataCache from one region to another region. This operation is suitable for the following scenarios:
   * *   If you want to use a DataCache across regions and the DataCache exists in Region A, you can call this operation to quickly copy the DataCache to Region B.
   * *   If you directly pull data from a region outside China to a region inside the Chinese mainland when you create a DataCache, the data may be pulled at a slow speed due to network limits. In this case, you can create a DataCache in a region outside the Chinese mainland but inside China, such as the China (Hong Kong) region, and call this operation to copy the data to the region inside the Chinese mainland.
   * > The process of copying a DataCache is equivalent to copying a snapshot. You are charged for the traffic generated during the copy process and the storage of the generated DataCache.
   * 
   * @param request - CopyDataCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyDataCacheResponse
   */
  async copyDataCacheWithOptions(request: $_model.CopyDataCacheRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyDataCacheResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataCacheId)) {
      query["DataCacheId"] = request.dataCacheId;
    }

    if (!$dara.isNull(request.destinationRegionId)) {
      query["DestinationRegionId"] = request.destinationRegionId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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

    if (!$dara.isNull(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyDataCache",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyDataCacheResponse>(await this.callApi(params, req, runtime), new $_model.CopyDataCacheResponse({}));
  }

  /**
   * Copies a DataCache from one region to another region.
   * 
   * @remarks
   * You cannot directly use a DataCache across regions. You can call this operation to copy a DataCache from one region to another region. This operation is suitable for the following scenarios:
   * *   If you want to use a DataCache across regions and the DataCache exists in Region A, you can call this operation to quickly copy the DataCache to Region B.
   * *   If you directly pull data from a region outside China to a region inside the Chinese mainland when you create a DataCache, the data may be pulled at a slow speed due to network limits. In this case, you can create a DataCache in a region outside the Chinese mainland but inside China, such as the China (Hong Kong) region, and call this operation to copy the data to the region inside the Chinese mainland.
   * > The process of copying a DataCache is equivalent to copying a snapshot. You are charged for the traffic generated during the copy process and the storage of the generated DataCache.
   * 
   * @param request - CopyDataCacheRequest
   * @returns CopyDataCacheResponse
   */
  async copyDataCache(request: $_model.CopyDataCacheRequest): Promise<$_model.CopyDataCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyDataCacheWithOptions(request, runtime);
  }

  /**
   * Creates an elastic container instance.
   * 
   * @remarks
   * When you call the CreateContainerGroup operation to create an elastic container instance, the system automatically creates a service-linked role named AliyunServiceRoleForECI. You can assume the service-linked role to access relevant cloud services such as Elastic Compute Service (ECS) and Virtual Private Cloud (VPC). For more information, see [Elastic Container Instance service-linked role](https://help.aliyun.com/document_detail/212914.html).
   * When you create an elastic container instance, you can configure features that are related to instances, images, and storage based on your business requirements. For information about parameters configured for the features and the description of the parameters, see the following documents:
   * **Instances**
   * You can use one of the following methods to create an elastic container instance:
   * *   [Specify the number of vCPUs and memory size to create an elastic container instance](https://help.aliyun.com/document_detail/114662.html)
   * *   [Specify ECS instance types to create an elastic container instance](https://help.aliyun.com/document_detail/114664.html)
   * Both the preceding creation methods support the following features:
   * *   [Create a preemptible elastic container instance](https://help.aliyun.com/document_detail/157759.html)
   * *   [Configure multiple zones](https://help.aliyun.com/document_detail/157290.html)
   * *   [Configure multiple specifications](https://help.aliyun.com/document_detail/146468.html)
   * *   [Use tags to manage elastic container instances](https://help.aliyun.com/document_detail/146608.html)
   * **Images**
   * *   [Configure a container image](https://help.aliyun.com/document_detail/461311.html)
   * *   [Use the image cache feature to accelerate the creation of an elastic container instance](https://help.aliyun.com/document_detail/141281.html)
   * *   [Specify a Container Registry Enterprise Edition instance](https://help.aliyun.com/document_detail/194250.html)
   * *   [Use self-managed image repositories](https://help.aliyun.com/document_detail/378059.html)
   * **Networking**
   * *   [Create and Associate an EIP](https://help.aliyun.com/document_detail/99146.html)
   * *   [Assign a security group](https://help.aliyun.com/document_detail/176237.html)
   * *   [Assign an IPv6 address to an elastic container instance](https://help.aliyun.com/document_detail/451282.html)
   * *   [Configure maximum bandwidth](https://help.aliyun.com/document_detail/190635.html)
   * **Storage**
   * *   [Mount a disk volume](https://help.aliyun.com/document_detail/144571.html)
   * *   [Mount a NAS volume](https://help.aliyun.com/document_detail/464075.html)
   * *   [Mount an OSS bucket to an elastic container instance as a volume](https://help.aliyun.com/document_detail/464076.html)
   * *   [Mount an emptyDir volume](https://help.aliyun.com/document_detail/464078.html)
   * *   [Mount a ConfigFile volume](https://help.aliyun.com/document_detail/464080.html)
   * *   [Increase the size of the temporary storage space](https://help.aliyun.com/document_detail/204066.html)
   * **Container configuration**
   * *   [Configure startup commands and arguments for a container](https://help.aliyun.com/document_detail/94593.html)
   * *   [Use probes to perform health checks on a container](https://help.aliyun.com/document_detail/99053.html)
   * *   [Obtain metadata by using environment variables](https://help.aliyun.com/document_detail/141788.html)
   * *   [Configure a security context for an elastic container instance or a container](https://help.aliyun.com/document_detail/462313.html)
   * *   [Configure the NTP service](https://help.aliyun.com/document_detail/462768.html)
   * **Logging and O\\&M**
   * *   [Use environment variables to configure log collection](https://help.aliyun.com/document_detail/121973.html)
   * *   [Save core files to volumes](https://help.aliyun.com/document_detail/167801.html)
   * 
   * @param request - CreateContainerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateContainerGroupResponse
   */
  async createContainerGroupWithOptions(request: $_model.CreateContainerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateContainerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acrRegistryInfo)) {
      query["AcrRegistryInfo"] = request.acrRegistryInfo;
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

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.computeCategory)) {
      query["ComputeCategory"] = request.computeCategory;
    }

    if (!$dara.isNull(request.container)) {
      query["Container"] = request.container;
    }

    if (!$dara.isNull(request.containerGroupName)) {
      query["ContainerGroupName"] = request.containerGroupName;
    }

    if (!$dara.isNull(request.containerResourceView)) {
      query["ContainerResourceView"] = request.containerResourceView;
    }

    if (!$dara.isNull(request.corePattern)) {
      query["CorePattern"] = request.corePattern;
    }

    if (!$dara.isNull(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.cpuArchitecture)) {
      query["CpuArchitecture"] = request.cpuArchitecture;
    }

    if (!$dara.isNull(request.cpuOptionsCore)) {
      query["CpuOptionsCore"] = request.cpuOptionsCore;
    }

    if (!$dara.isNull(request.cpuOptionsNuma)) {
      query["CpuOptionsNuma"] = request.cpuOptionsNuma;
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

    if (!$dara.isNull(request.dnsPolicy)) {
      query["DnsPolicy"] = request.dnsPolicy;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.egressBandwidth)) {
      query["EgressBandwidth"] = request.egressBandwidth;
    }

    if (!$dara.isNull(request.eipBandwidth)) {
      query["EipBandwidth"] = request.eipBandwidth;
    }

    if (!$dara.isNull(request.eipCommonBandwidthPackage)) {
      query["EipCommonBandwidthPackage"] = request.eipCommonBandwidthPackage;
    }

    if (!$dara.isNull(request.eipISP)) {
      query["EipISP"] = request.eipISP;
    }

    if (!$dara.isNull(request.eipInstanceId)) {
      query["EipInstanceId"] = request.eipInstanceId;
    }

    if (!$dara.isNull(request.ephemeralStorage)) {
      query["EphemeralStorage"] = request.ephemeralStorage;
    }

    if (!$dara.isNull(request.fixedIp)) {
      query["FixedIp"] = request.fixedIp;
    }

    if (!$dara.isNull(request.fixedIpRetainHour)) {
      query["FixedIpRetainHour"] = request.fixedIpRetainHour;
    }

    if (!$dara.isNull(request.gpuDriverVersion)) {
      query["GpuDriverVersion"] = request.gpuDriverVersion;
    }

    if (!$dara.isNull(request.hostAliase)) {
      query["HostAliase"] = request.hostAliase;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.imageAccelerateMode)) {
      query["ImageAccelerateMode"] = request.imageAccelerateMode;
    }

    if (!$dara.isNull(request.imageRegistryCredential)) {
      query["ImageRegistryCredential"] = request.imageRegistryCredential;
    }

    if (!$dara.isNull(request.imageSnapshotId)) {
      query["ImageSnapshotId"] = request.imageSnapshotId;
    }

    if (!$dara.isNull(request.ingressBandwidth)) {
      query["IngressBandwidth"] = request.ingressBandwidth;
    }

    if (!$dara.isNull(request.initContainer)) {
      query["InitContainer"] = request.initContainer;
    }

    if (!$dara.isNull(request.insecureRegistry)) {
      query["InsecureRegistry"] = request.insecureRegistry;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.ipv6AddressCount)) {
      query["Ipv6AddressCount"] = request.ipv6AddressCount;
    }

    if (!$dara.isNull(request.ipv6GatewayBandwidth)) {
      query["Ipv6GatewayBandwidth"] = request.ipv6GatewayBandwidth;
    }

    if (!$dara.isNull(request.ipv6GatewayBandwidthEnable)) {
      query["Ipv6GatewayBandwidthEnable"] = request.ipv6GatewayBandwidthEnable;
    }

    if (!$dara.isNull(request.maxPendingMinute)) {
      query["MaxPendingMinute"] = request.maxPendingMinute;
    }

    if (!$dara.isNull(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.ntpServer)) {
      query["NtpServer"] = request.ntpServer;
    }

    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.plainHttpRegistry)) {
      query["PlainHttpRegistry"] = request.plainHttpRegistry;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.ramRoleName)) {
      query["RamRoleName"] = request.ramRoleName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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

    if (!$dara.isNull(request.restartPolicy)) {
      query["RestartPolicy"] = request.restartPolicy;
    }

    if (!$dara.isNull(request.scheduleStrategy)) {
      query["ScheduleStrategy"] = request.scheduleStrategy;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.shareProcessNamespace)) {
      query["ShareProcessNamespace"] = request.shareProcessNamespace;
    }

    if (!$dara.isNull(request.spotDuration)) {
      query["SpotDuration"] = request.spotDuration;
    }

    if (!$dara.isNull(request.spotPriceLimit)) {
      query["SpotPriceLimit"] = request.spotPriceLimit;
    }

    if (!$dara.isNull(request.spotStrategy)) {
      query["SpotStrategy"] = request.spotStrategy;
    }

    if (!$dara.isNull(request.strictSpot)) {
      query["StrictSpot"] = request.strictSpot;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.terminationGracePeriodSeconds)) {
      query["TerminationGracePeriodSeconds"] = request.terminationGracePeriodSeconds;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.volume)) {
      query["Volume"] = request.volume;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    if (!$dara.isNull(request.dnsConfig)) {
      query["DnsConfig"] = request.dnsConfig;
    }

    if (!$dara.isNull(request.hostSecurityContext)) {
      query["HostSecurityContext"] = request.hostSecurityContext;
    }

    if (!$dara.isNull(request.securityContext)) {
      query["SecurityContext"] = request.securityContext;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateContainerGroup",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateContainerGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateContainerGroupResponse({}));
  }

  /**
   * Creates an elastic container instance.
   * 
   * @remarks
   * When you call the CreateContainerGroup operation to create an elastic container instance, the system automatically creates a service-linked role named AliyunServiceRoleForECI. You can assume the service-linked role to access relevant cloud services such as Elastic Compute Service (ECS) and Virtual Private Cloud (VPC). For more information, see [Elastic Container Instance service-linked role](https://help.aliyun.com/document_detail/212914.html).
   * When you create an elastic container instance, you can configure features that are related to instances, images, and storage based on your business requirements. For information about parameters configured for the features and the description of the parameters, see the following documents:
   * **Instances**
   * You can use one of the following methods to create an elastic container instance:
   * *   [Specify the number of vCPUs and memory size to create an elastic container instance](https://help.aliyun.com/document_detail/114662.html)
   * *   [Specify ECS instance types to create an elastic container instance](https://help.aliyun.com/document_detail/114664.html)
   * Both the preceding creation methods support the following features:
   * *   [Create a preemptible elastic container instance](https://help.aliyun.com/document_detail/157759.html)
   * *   [Configure multiple zones](https://help.aliyun.com/document_detail/157290.html)
   * *   [Configure multiple specifications](https://help.aliyun.com/document_detail/146468.html)
   * *   [Use tags to manage elastic container instances](https://help.aliyun.com/document_detail/146608.html)
   * **Images**
   * *   [Configure a container image](https://help.aliyun.com/document_detail/461311.html)
   * *   [Use the image cache feature to accelerate the creation of an elastic container instance](https://help.aliyun.com/document_detail/141281.html)
   * *   [Specify a Container Registry Enterprise Edition instance](https://help.aliyun.com/document_detail/194250.html)
   * *   [Use self-managed image repositories](https://help.aliyun.com/document_detail/378059.html)
   * **Networking**
   * *   [Create and Associate an EIP](https://help.aliyun.com/document_detail/99146.html)
   * *   [Assign a security group](https://help.aliyun.com/document_detail/176237.html)
   * *   [Assign an IPv6 address to an elastic container instance](https://help.aliyun.com/document_detail/451282.html)
   * *   [Configure maximum bandwidth](https://help.aliyun.com/document_detail/190635.html)
   * **Storage**
   * *   [Mount a disk volume](https://help.aliyun.com/document_detail/144571.html)
   * *   [Mount a NAS volume](https://help.aliyun.com/document_detail/464075.html)
   * *   [Mount an OSS bucket to an elastic container instance as a volume](https://help.aliyun.com/document_detail/464076.html)
   * *   [Mount an emptyDir volume](https://help.aliyun.com/document_detail/464078.html)
   * *   [Mount a ConfigFile volume](https://help.aliyun.com/document_detail/464080.html)
   * *   [Increase the size of the temporary storage space](https://help.aliyun.com/document_detail/204066.html)
   * **Container configuration**
   * *   [Configure startup commands and arguments for a container](https://help.aliyun.com/document_detail/94593.html)
   * *   [Use probes to perform health checks on a container](https://help.aliyun.com/document_detail/99053.html)
   * *   [Obtain metadata by using environment variables](https://help.aliyun.com/document_detail/141788.html)
   * *   [Configure a security context for an elastic container instance or a container](https://help.aliyun.com/document_detail/462313.html)
   * *   [Configure the NTP service](https://help.aliyun.com/document_detail/462768.html)
   * **Logging and O\\&M**
   * *   [Use environment variables to configure log collection](https://help.aliyun.com/document_detail/121973.html)
   * *   [Save core files to volumes](https://help.aliyun.com/document_detail/167801.html)
   * 
   * @param request - CreateContainerGroupRequest
   * @returns CreateContainerGroupResponse
   */
  async createContainerGroup(request: $_model.CreateContainerGroupRequest): Promise<$_model.CreateContainerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createContainerGroupWithOptions(request, runtime);
  }

  /**
   * Creates a DataCache.
   * 
   * @remarks
   *   You are charged for the creation of image caches. We recommend that you learn the relevant billing information in advance. For more information, see [DataCaches](https://help.aliyun.com/document_detail/2503093.html).
   * *   Before you create an image cache, you must evaluate the size of the data to be cached. If the size of the data exceeds the specified cache size, the image cache fails to be created.
   * *   When a data cache is being created, the system automatically creates a temporary elastic container instance (ECI) and an enhanced SSD (ESSD) for the data cache. During the creation, do not delete the ECI and ESSD. Otherwise, the data cache fails to be created.
   * *   When a data cache is being created, a snapshot is generated for the data cache. Do not delete the snapshot. Otherwise, the data cache becomes invalid.
   * 
   * @param request - CreateDataCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataCacheResponse
   */
  async createDataCacheWithOptions(request: $_model.CreateDataCacheRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataCacheResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataSource)) {
      query["DataSource"] = request.dataSource;
    }

    if (!$dara.isNull(request.eipCreateParam)) {
      query["EipCreateParam"] = request.eipCreateParam;
    }

    if (!$dara.isNull(request.eipInstanceId)) {
      query["EipInstanceId"] = request.eipInstanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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

    if (!$dara.isNull(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
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
      action: "CreateDataCache",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataCacheResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataCacheResponse({}));
  }

  /**
   * Creates a DataCache.
   * 
   * @remarks
   *   You are charged for the creation of image caches. We recommend that you learn the relevant billing information in advance. For more information, see [DataCaches](https://help.aliyun.com/document_detail/2503093.html).
   * *   Before you create an image cache, you must evaluate the size of the data to be cached. If the size of the data exceeds the specified cache size, the image cache fails to be created.
   * *   When a data cache is being created, the system automatically creates a temporary elastic container instance (ECI) and an enhanced SSD (ESSD) for the data cache. During the creation, do not delete the ECI and ESSD. Otherwise, the data cache fails to be created.
   * *   When a data cache is being created, a snapshot is generated for the data cache. Do not delete the snapshot. Otherwise, the data cache becomes invalid.
   * 
   * @param request - CreateDataCacheRequest
   * @returns CreateDataCacheResponse
   */
  async createDataCache(request: $_model.CreateDataCacheRequest): Promise<$_model.CreateDataCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataCacheWithOptions(request, runtime);
  }

  /**
   * Creates an image cache. The image cache can accelerate image pulling and reduce the instance startup time when you create an elastic container instance later.
   * 
   * @remarks
   *   **Precautions**
   *     *   You are charged for creation of image caches. We recommend that you learn the relevant billing information in advance. For more information about billing of image caches, see [Image caches](https://help.aliyun.com/document_detail/447682.html).
   *     *   Before you create an image cache, you must estimate the total size of the images that you want to cache. If the total size of the images exceeds the specified cache size, the image cache cannot be created.
   *     *   When an image cache is being created, the system creates an intermediate elastic container instance and an intermediate enhanced SSD (ESSD) at performance level 1 (PL1). Do not delete the intermediate instance and the ESSD while the image cache is being created. If you delete the intermediate instance or the ESSD, the image cache cannot be created.
   *     *   A temporary local snapshot and a specific number of regular snapshots are generated during the creation of the image cache. Do not delete these snapshots. If you delete these snapshots, the image cache becomes invalid.
   *     *   If you use SDKs, SDK for Java 1.0.10 or later and SDK for Python 1.0.7 or later are supported.
   * *   **Usage notes**
   *     *   For images that are created based on Container Registry Enterprise Edition instances and use custom domain names, if you want to configure password-free access to the image caches, you must use AcrRegistryInfo-related parameters to specify Container Registry instances. When you configure AcrRegistryInfo-related parameters, you must set the AcrRegistryInfo.N.InstanceId parameter.
   *     *   If the image cache that you created will be used to create more than 1,000 elastic container instances at a time, we recommend that you use the StandardCopyCount and FlashCopyCount parameters to create multiple temporary local snapshots and regular snapshots of the image. The multiple snapshots are billed based on incremental data. If no incremental data exists on the multiple snapshots, you are not charged for the multiple snapshots.
   * >  When you call the CreateImageCache operation to create an image cache, the system automatically creates a service-linked role named AliyunServiceRoleForECI. The role is used to access other Alibaba Cloud services such as Elastic Compute Service (ECS) and Virtual Private Cloud (VPC). For more information, see [Elastic Container Instance service-linked role](https://help.aliyun.com/document_detail/212914.html).
   * 
   * @param request - CreateImageCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageCacheResponse
   */
  async createImageCacheWithOptions(request: $_model.CreateImageCacheRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImageCacheResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acrRegistryInfo)) {
      query["AcrRegistryInfo"] = request.acrRegistryInfo;
    }

    if (!$dara.isNull(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!$dara.isNull(request.autoMatchImageCache)) {
      query["AutoMatchImageCache"] = request.autoMatchImageCache;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.eipInstanceId)) {
      query["EipInstanceId"] = request.eipInstanceId;
    }

    if (!$dara.isNull(request.eliminationStrategy)) {
      query["EliminationStrategy"] = request.eliminationStrategy;
    }

    if (!$dara.isNull(request.flash)) {
      query["Flash"] = request.flash;
    }

    if (!$dara.isNull(request.flashCopyCount)) {
      query["FlashCopyCount"] = request.flashCopyCount;
    }

    if (!$dara.isNull(request.image)) {
      query["Image"] = request.image;
    }

    if (!$dara.isNull(request.imageCacheName)) {
      query["ImageCacheName"] = request.imageCacheName;
    }

    if (!$dara.isNull(request.imageCacheSize)) {
      query["ImageCacheSize"] = request.imageCacheSize;
    }

    if (!$dara.isNull(request.imageRegistryCredential)) {
      query["ImageRegistryCredential"] = request.imageRegistryCredential;
    }

    if (!$dara.isNull(request.insecureRegistry)) {
      query["InsecureRegistry"] = request.insecureRegistry;
    }

    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.plainHttpRegistry)) {
      query["PlainHttpRegistry"] = request.plainHttpRegistry;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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

    if (!$dara.isNull(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.standardCopyCount)) {
      query["StandardCopyCount"] = request.standardCopyCount;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateImageCache",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateImageCacheResponse>(await this.callApi(params, req, runtime), new $_model.CreateImageCacheResponse({}));
  }

  /**
   * Creates an image cache. The image cache can accelerate image pulling and reduce the instance startup time when you create an elastic container instance later.
   * 
   * @remarks
   *   **Precautions**
   *     *   You are charged for creation of image caches. We recommend that you learn the relevant billing information in advance. For more information about billing of image caches, see [Image caches](https://help.aliyun.com/document_detail/447682.html).
   *     *   Before you create an image cache, you must estimate the total size of the images that you want to cache. If the total size of the images exceeds the specified cache size, the image cache cannot be created.
   *     *   When an image cache is being created, the system creates an intermediate elastic container instance and an intermediate enhanced SSD (ESSD) at performance level 1 (PL1). Do not delete the intermediate instance and the ESSD while the image cache is being created. If you delete the intermediate instance or the ESSD, the image cache cannot be created.
   *     *   A temporary local snapshot and a specific number of regular snapshots are generated during the creation of the image cache. Do not delete these snapshots. If you delete these snapshots, the image cache becomes invalid.
   *     *   If you use SDKs, SDK for Java 1.0.10 or later and SDK for Python 1.0.7 or later are supported.
   * *   **Usage notes**
   *     *   For images that are created based on Container Registry Enterprise Edition instances and use custom domain names, if you want to configure password-free access to the image caches, you must use AcrRegistryInfo-related parameters to specify Container Registry instances. When you configure AcrRegistryInfo-related parameters, you must set the AcrRegistryInfo.N.InstanceId parameter.
   *     *   If the image cache that you created will be used to create more than 1,000 elastic container instances at a time, we recommend that you use the StandardCopyCount and FlashCopyCount parameters to create multiple temporary local snapshots and regular snapshots of the image. The multiple snapshots are billed based on incremental data. If no incremental data exists on the multiple snapshots, you are not charged for the multiple snapshots.
   * >  When you call the CreateImageCache operation to create an image cache, the system automatically creates a service-linked role named AliyunServiceRoleForECI. The role is used to access other Alibaba Cloud services such as Elastic Compute Service (ECS) and Virtual Private Cloud (VPC). For more information, see [Elastic Container Instance service-linked role](https://help.aliyun.com/document_detail/212914.html).
   * 
   * @param request - CreateImageCacheRequest
   * @returns CreateImageCacheResponse
   */
  async createImageCache(request: $_model.CreateImageCacheRequest): Promise<$_model.CreateImageCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createImageCacheWithOptions(request, runtime);
  }

  /**
   * Creates an O&M task.
   * 
   * @remarks
   * O&M tasks are classified into:
   * *   coredump: After you enable coredump, the system generates a core dump file when a container unexpectedly stops. You can use the core dump file to analyze the exception and find out the cause of the problem. For more information, see [Enable coredump](https://help.aliyun.com/document_detail/167801.html).
   * *   tcpdump: After you enable tcpdump, the system captures network packets when a container unexpectedly stops. You can analyze the packets and locate network problems. For more information, see Enable [tcpdump](https://help.aliyun.com/document_detail/429749.html).
   * 
   * @param request - CreateInstanceOpsTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceOpsTaskResponse
   */
  async createInstanceOpsTaskWithOptions(request: $_model.CreateInstanceOpsTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceOpsTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!$dara.isNull(request.opsType)) {
      query["OpsType"] = request.opsType;
    }

    if (!$dara.isNull(request.opsValue)) {
      query["OpsValue"] = request.opsValue;
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
      action: "CreateInstanceOpsTask",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceOpsTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceOpsTaskResponse({}));
  }

  /**
   * Creates an O&M task.
   * 
   * @remarks
   * O&M tasks are classified into:
   * *   coredump: After you enable coredump, the system generates a core dump file when a container unexpectedly stops. You can use the core dump file to analyze the exception and find out the cause of the problem. For more information, see [Enable coredump](https://help.aliyun.com/document_detail/167801.html).
   * *   tcpdump: After you enable tcpdump, the system captures network packets when a container unexpectedly stops. You can analyze the packets and locate network problems. For more information, see Enable [tcpdump](https://help.aliyun.com/document_detail/429749.html).
   * 
   * @param request - CreateInstanceOpsTaskRequest
   * @returns CreateInstanceOpsTaskResponse
   */
  async createInstanceOpsTask(request: $_model.CreateInstanceOpsTaskRequest): Promise<$_model.CreateInstanceOpsTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceOpsTaskWithOptions(request, runtime);
  }

  /**
   * Creates a VNode to connect self-managed Kubernetes clusters to elastic container instances.
   * 
   * @remarks
   *   When you call this operation to create a virtual node, the system automatically creates a service-linked role AliyunServiceRoleForECIVnode. This way, you can use the service-linked role to access relevant cloud services such as Elastic Container Instance, Elastic Compute Service (ECS), and Virtual Private Cloud (VPC). For more information, see [Service-linked role for virtual nodes](https://help.aliyun.com/document_detail/311014.html).
   * *   You are charged for virtual nodes based on number of virtual nodes that you use. Each virtual node has a resident node, which is equivalent to an ECI instance with 2 vCPU cores and 8 GiB memory. You are charged for virtual nodes based on elastic container instances.
   * 
   * @param request - CreateVirtualNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVirtualNodeResponse
   */
  async createVirtualNodeWithOptions(request: $_model.CreateVirtualNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVirtualNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterDNS)) {
      query["ClusterDNS"] = request.clusterDNS;
    }

    if (!$dara.isNull(request.clusterDomain)) {
      query["ClusterDomain"] = request.clusterDomain;
    }

    if (!$dara.isNull(request.customResources)) {
      query["CustomResources"] = request.customResources;
    }

    if (!$dara.isNull(request.eipInstanceId)) {
      query["EipInstanceId"] = request.eipInstanceId;
    }

    if (!$dara.isNull(request.enablePublicNetwork)) {
      query["EnablePublicNetwork"] = request.enablePublicNetwork;
    }

    if (!$dara.isNull(request.kubeConfig)) {
      query["KubeConfig"] = request.kubeConfig;
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

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.taint)) {
      query["Taint"] = request.taint;
    }

    if (!$dara.isNull(request.tlsBootstrapEnabled)) {
      query["TlsBootstrapEnabled"] = request.tlsBootstrapEnabled;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.virtualNodeName)) {
      query["VirtualNodeName"] = request.virtualNodeName;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVirtualNode",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVirtualNodeResponse>(await this.callApi(params, req, runtime), new $_model.CreateVirtualNodeResponse({}));
  }

  /**
   * Creates a VNode to connect self-managed Kubernetes clusters to elastic container instances.
   * 
   * @remarks
   *   When you call this operation to create a virtual node, the system automatically creates a service-linked role AliyunServiceRoleForECIVnode. This way, you can use the service-linked role to access relevant cloud services such as Elastic Container Instance, Elastic Compute Service (ECS), and Virtual Private Cloud (VPC). For more information, see [Service-linked role for virtual nodes](https://help.aliyun.com/document_detail/311014.html).
   * *   You are charged for virtual nodes based on number of virtual nodes that you use. Each virtual node has a resident node, which is equivalent to an ECI instance with 2 vCPU cores and 8 GiB memory. You are charged for virtual nodes based on elastic container instances.
   * 
   * @param request - CreateVirtualNodeRequest
   * @returns CreateVirtualNodeResponse
   */
  async createVirtualNode(request: $_model.CreateVirtualNodeRequest): Promise<$_model.CreateVirtualNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVirtualNodeWithOptions(request, runtime);
  }

  /**
   * Deletes a container group.
   * 
   * @remarks
   * You can delete a container group that you no longer need. Before you delete a container group, make sure that you understand the lifecycle of container groups. For more information, see [Lifecycle of an elastic container instance](https://help.aliyun.com/document_detail/122385.html).
   * 
   * @param request - DeleteContainerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContainerGroupResponse
   */
  async deleteContainerGroupWithOptions(request: $_model.DeleteContainerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContainerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
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
      action: "DeleteContainerGroup",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContainerGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContainerGroupResponse({}));
  }

  /**
   * Deletes a container group.
   * 
   * @remarks
   * You can delete a container group that you no longer need. Before you delete a container group, make sure that you understand the lifecycle of container groups. For more information, see [Lifecycle of an elastic container instance](https://help.aliyun.com/document_detail/122385.html).
   * 
   * @param request - DeleteContainerGroupRequest
   * @returns DeleteContainerGroupResponse
   */
  async deleteContainerGroup(request: $_model.DeleteContainerGroupRequest): Promise<$_model.DeleteContainerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContainerGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a DataCache.
   * 
   * @param request - DeleteDataCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataCacheResponse
   */
  async deleteDataCacheWithOptions(request: $_model.DeleteDataCacheRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataCacheResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataCacheId)) {
      query["DataCacheId"] = request.dataCacheId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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
      action: "DeleteDataCache",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataCacheResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataCacheResponse({}));
  }

  /**
   * Deletes a DataCache.
   * 
   * @param request - DeleteDataCacheRequest
   * @returns DeleteDataCacheResponse
   */
  async deleteDataCache(request: $_model.DeleteDataCacheRequest): Promise<$_model.DeleteDataCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataCacheWithOptions(request, runtime);
  }

  /**
   * Deletes an image cache.
   * 
   * @param request - DeleteImageCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteImageCacheResponse
   */
  async deleteImageCacheWithOptions(request: $_model.DeleteImageCacheRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteImageCacheResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.imageCacheId)) {
      query["ImageCacheId"] = request.imageCacheId;
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
      action: "DeleteImageCache",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteImageCacheResponse>(await this.callApi(params, req, runtime), new $_model.DeleteImageCacheResponse({}));
  }

  /**
   * Deletes an image cache.
   * 
   * @param request - DeleteImageCacheRequest
   * @returns DeleteImageCacheResponse
   */
  async deleteImageCache(request: $_model.DeleteImageCacheRequest): Promise<$_model.DeleteImageCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteImageCacheWithOptions(request, runtime);
  }

  /**
   * Deletes a virtual node.
   * 
   * @param request - DeleteVirtualNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVirtualNodeResponse
   */
  async deleteVirtualNodeWithOptions(request: $_model.DeleteVirtualNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVirtualNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.virtualNodeId)) {
      query["VirtualNodeId"] = request.virtualNodeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVirtualNode",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVirtualNodeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVirtualNodeResponse({}));
  }

  /**
   * Deletes a virtual node.
   * 
   * @param request - DeleteVirtualNodeRequest
   * @returns DeleteVirtualNodeResponse
   */
  async deleteVirtualNode(request: $_model.DeleteVirtualNodeRequest): Promise<$_model.DeleteVirtualNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVirtualNodeWithOptions(request, runtime);
  }

  /**
   * Queries the Elastic Compute Service (ECS) instance families that are available in a specified region and zone.
   * 
   * @remarks
   * When you call the CreateContainerGroup operation to create an elastic container instance, you can use the InstanceType parameter to specify ECS instance types that fit your specific needs. To ensure that the elastic container instance can be created, you can call the DescribeAvailableResource operation to query which ECS instance types and instance families are available in the specified region and zone before you create the elastic container instance.
   * 
   * @param request - DescribeAvailableResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResourceWithOptions(request: $_model.DescribeAvailableResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destinationResource)) {
      query["DestinationResource"] = request.destinationResource;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.spotResource)) {
      query["SpotResource"] = request.spotResource;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAvailableResource",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAvailableResourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAvailableResourceResponse({}));
  }

  /**
   * Queries the Elastic Compute Service (ECS) instance families that are available in a specified region and zone.
   * 
   * @remarks
   * When you call the CreateContainerGroup operation to create an elastic container instance, you can use the InstanceType parameter to specify ECS instance types that fit your specific needs. To ensure that the elastic container instance can be created, you can call the DescribeAvailableResource operation to query which ECS instance types and instance families are available in the specified region and zone before you create the elastic container instance.
   * 
   * @param request - DescribeAvailableResourceRequest
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResource(request: $_model.DescribeAvailableResourceRequest): Promise<$_model.DescribeAvailableResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  /**
   * Queries the details of a CommitContainer task.
   * 
   * @param request - DescribeCommitContainerTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCommitContainerTaskResponse
   */
  async describeCommitContainerTaskWithOptions(request: $_model.DescribeCommitContainerTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCommitContainerTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskStatus)) {
      query["TaskStatus"] = request.taskStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCommitContainerTask",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCommitContainerTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCommitContainerTaskResponse({}));
  }

  /**
   * Queries the details of a CommitContainer task.
   * 
   * @param request - DescribeCommitContainerTaskRequest
   * @returns DescribeCommitContainerTaskResponse
   */
  async describeCommitContainerTask(request: $_model.DescribeCommitContainerTaskRequest): Promise<$_model.DescribeCommitContainerTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCommitContainerTaskWithOptions(request, runtime);
  }

  /**
   * Queries event information about multiple container groups at a time.
   * 
   * @remarks
   * You can call this operation to query the event information about multiple elastic container instances at a time. By default, the most recent 50 entries of events of each elastic container instance are returned.
   * 
   * @param request - DescribeContainerGroupEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeContainerGroupEventsResponse
   */
  async describeContainerGroupEventsWithOptions(request: $_model.DescribeContainerGroupEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeContainerGroupEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.containerGroupIds)) {
      query["ContainerGroupIds"] = request.containerGroupIds;
    }

    if (!$dara.isNull(request.eventSource)) {
      query["EventSource"] = request.eventSource;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sinceSecond)) {
      query["SinceSecond"] = request.sinceSecond;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeContainerGroupEvents",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeContainerGroupEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeContainerGroupEventsResponse({}));
  }

  /**
   * Queries event information about multiple container groups at a time.
   * 
   * @remarks
   * You can call this operation to query the event information about multiple elastic container instances at a time. By default, the most recent 50 entries of events of each elastic container instance are returned.
   * 
   * @param request - DescribeContainerGroupEventsRequest
   * @returns DescribeContainerGroupEventsResponse
   */
  async describeContainerGroupEvents(request: $_model.DescribeContainerGroupEventsRequest): Promise<$_model.DescribeContainerGroupEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeContainerGroupEventsWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring data of an elastic container instance.
   * 
   * @remarks
   *   A maximum of 50 monitoring data entries can be returned. If the number of monitoring data entries exceeds this limit, an error message is returned.
   * *   You can query real-time monitoring data (data generated within the last 5 minutes) and historical data (data generated more than 5 minutes ago). If the time range to query starts or ends later than the current time, historical monitoring data generated more than 5 minutes ago is returned.
   * *   The elastic container instance whose monitoring data you want to query must be created after April 3, 2019, 15:00 UTC+8.
   * 
   * @param request - DescribeContainerGroupMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeContainerGroupMetricResponse
   */
  async describeContainerGroupMetricWithOptions(request: $_model.DescribeContainerGroupMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeContainerGroupMetricResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
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
      action: "DescribeContainerGroupMetric",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeContainerGroupMetricResponse>(await this.callApi(params, req, runtime), new $_model.DescribeContainerGroupMetricResponse({}));
  }

  /**
   * Queries the monitoring data of an elastic container instance.
   * 
   * @remarks
   *   A maximum of 50 monitoring data entries can be returned. If the number of monitoring data entries exceeds this limit, an error message is returned.
   * *   You can query real-time monitoring data (data generated within the last 5 minutes) and historical data (data generated more than 5 minutes ago). If the time range to query starts or ends later than the current time, historical monitoring data generated more than 5 minutes ago is returned.
   * *   The elastic container instance whose monitoring data you want to query must be created after April 3, 2019, 15:00 UTC+8.
   * 
   * @param request - DescribeContainerGroupMetricRequest
   * @returns DescribeContainerGroupMetricResponse
   */
  async describeContainerGroupMetric(request: $_model.DescribeContainerGroupMetricRequest): Promise<$_model.DescribeContainerGroupMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeContainerGroupMetricWithOptions(request, runtime);
  }

  /**
   * Queries the price of an elastic container instance.
   * 
   * @remarks
   *   When you call this operation, you cannot use resource groups to control the permissions of a RAM user.
   * *   You can create an elastic container instance by specifying vCPU and memory resource specifications or by specifying ECS instance types. When you call this operation to query the prices of elastic container instances, pass in specifications of the elastic container instances.
   *     *   [vCPU and memory specifications](https://help.aliyun.com/document_detail/114662.html).
   *     *   [ECS instance types that are supported by Elastic Container Instance](https://help.aliyun.com/document_detail/114664.html).
   * 
   * @param request - DescribeContainerGroupPriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeContainerGroupPriceResponse
   */
  async describeContainerGroupPriceWithOptions(request: $_model.DescribeContainerGroupPriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeContainerGroupPriceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.computeCategory)) {
      query["ComputeCategory"] = request.computeCategory;
    }

    if (!$dara.isNull(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.ephemeralStorage)) {
      query["EphemeralStorage"] = request.ephemeralStorage;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.memory)) {
      query["Memory"] = request.memory;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.spotDuration)) {
      query["SpotDuration"] = request.spotDuration;
    }

    if (!$dara.isNull(request.spotPriceLimit)) {
      query["SpotPriceLimit"] = request.spotPriceLimit;
    }

    if (!$dara.isNull(request.spotStrategy)) {
      query["SpotStrategy"] = request.spotStrategy;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeContainerGroupPrice",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeContainerGroupPriceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeContainerGroupPriceResponse({}));
  }

  /**
   * Queries the price of an elastic container instance.
   * 
   * @remarks
   *   When you call this operation, you cannot use resource groups to control the permissions of a RAM user.
   * *   You can create an elastic container instance by specifying vCPU and memory resource specifications or by specifying ECS instance types. When you call this operation to query the prices of elastic container instances, pass in specifications of the elastic container instances.
   *     *   [vCPU and memory specifications](https://help.aliyun.com/document_detail/114662.html).
   *     *   [ECS instance types that are supported by Elastic Container Instance](https://help.aliyun.com/document_detail/114664.html).
   * 
   * @param request - DescribeContainerGroupPriceRequest
   * @returns DescribeContainerGroupPriceResponse
   */
  async describeContainerGroupPrice(request: $_model.DescribeContainerGroupPriceRequest): Promise<$_model.DescribeContainerGroupPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeContainerGroupPriceWithOptions(request, runtime);
  }

  /**
   * Queries the statuses of multiple container groups at a time.
   * 
   * @param request - DescribeContainerGroupStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeContainerGroupStatusResponse
   */
  async describeContainerGroupStatusWithOptions(request: $_model.DescribeContainerGroupStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeContainerGroupStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.containerGroupIds)) {
      query["ContainerGroupIds"] = request.containerGroupIds;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sinceSecond)) {
      query["SinceSecond"] = request.sinceSecond;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeContainerGroupStatus",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeContainerGroupStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeContainerGroupStatusResponse({}));
  }

  /**
   * Queries the statuses of multiple container groups at a time.
   * 
   * @param request - DescribeContainerGroupStatusRequest
   * @returns DescribeContainerGroupStatusResponse
   */
  async describeContainerGroupStatus(request: $_model.DescribeContainerGroupStatusRequest): Promise<$_model.DescribeContainerGroupStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeContainerGroupStatusWithOptions(request, runtime);
  }

  /**
   * Queries information about multiple elastic container instances at a time.
   * 
   * @remarks
   *   After an elastic container instance is terminated, its underlying computing resources are recycled. By default, other resources, such as elastic IP addresses (EIPs), that are created together with the instance are released together with the instance.
   * *   The metadata of an instance in the final status (Failed, Succeeded, or Expired) is retained based on the following rules:
   *     *   All metadata information is retained within 1 hour since the instance enters the final status.
   *     *   One hour after the instance enters the final status, only the latest 100 entries of metadata information in each region are retained.
   * 
   * @param request - DescribeContainerGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeContainerGroupsResponse
   */
  async describeContainerGroupsWithOptions(request: $_model.DescribeContainerGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeContainerGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.computeCategory)) {
      query["ComputeCategory"] = request.computeCategory;
    }

    if (!$dara.isNull(request.containerGroupIds)) {
      query["ContainerGroupIds"] = request.containerGroupIds;
    }

    if (!$dara.isNull(request.containerGroupName)) {
      query["ContainerGroupName"] = request.containerGroupName;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
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

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.withEvent)) {
      query["WithEvent"] = request.withEvent;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeContainerGroups",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeContainerGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeContainerGroupsResponse({}));
  }

  /**
   * Queries information about multiple elastic container instances at a time.
   * 
   * @remarks
   *   After an elastic container instance is terminated, its underlying computing resources are recycled. By default, other resources, such as elastic IP addresses (EIPs), that are created together with the instance are released together with the instance.
   * *   The metadata of an instance in the final status (Failed, Succeeded, or Expired) is retained based on the following rules:
   *     *   All metadata information is retained within 1 hour since the instance enters the final status.
   *     *   One hour after the instance enters the final status, only the latest 100 entries of metadata information in each region are retained.
   * 
   * @param request - DescribeContainerGroupsRequest
   * @returns DescribeContainerGroupsResponse
   */
  async describeContainerGroups(request: $_model.DescribeContainerGroupsRequest): Promise<$_model.DescribeContainerGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeContainerGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the logs of a container in a container group.
   * 
   * @param request - DescribeContainerLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeContainerLogResponse
   */
  async describeContainerLogWithOptions(request: $_model.DescribeContainerLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeContainerLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!$dara.isNull(request.containerName)) {
      query["ContainerName"] = request.containerName;
    }

    if (!$dara.isNull(request.lastTime)) {
      query["LastTime"] = request.lastTime;
    }

    if (!$dara.isNull(request.limitBytes)) {
      query["LimitBytes"] = request.limitBytes;
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

    if (!$dara.isNull(request.sinceSeconds)) {
      query["SinceSeconds"] = request.sinceSeconds;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tail)) {
      query["Tail"] = request.tail;
    }

    if (!$dara.isNull(request.timestamps)) {
      query["Timestamps"] = request.timestamps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeContainerLog",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeContainerLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeContainerLogResponse({}));
  }

  /**
   * Queries the logs of a container in a container group.
   * 
   * @param request - DescribeContainerLogRequest
   * @returns DescribeContainerLogResponse
   */
  async describeContainerLog(request: $_model.DescribeContainerLogRequest): Promise<$_model.DescribeContainerLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeContainerLogWithOptions(request, runtime);
  }

  /**
   * Queries the information about data caches.
   * 
   * @param request - DescribeDataCachesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataCachesResponse
   */
  async describeDataCachesWithOptions(request: $_model.DescribeDataCachesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataCachesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!$dara.isNull(request.dataCacheId)) {
      query["DataCacheId"] = request.dataCacheId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
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

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataCaches",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataCachesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataCachesResponse({}));
  }

  /**
   * Queries the information about data caches.
   * 
   * @param request - DescribeDataCachesRequest
   * @returns DescribeDataCachesResponse
   */
  async describeDataCaches(request: $_model.DescribeDataCachesRequest): Promise<$_model.DescribeDataCachesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataCachesWithOptions(request, runtime);
  }

  /**
   * Queries information about image caches.
   * 
   * @param request - DescribeImageCachesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImageCachesResponse
   */
  async describeImageCachesWithOptions(request: $_model.DescribeImageCachesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeImageCachesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.image)) {
      query["Image"] = request.image;
    }

    if (!$dara.isNull(request.imageCacheId)) {
      query["ImageCacheId"] = request.imageCacheId;
    }

    if (!$dara.isNull(request.imageCacheName)) {
      query["ImageCacheName"] = request.imageCacheName;
    }

    if (!$dara.isNull(request.imageFullMatch)) {
      query["ImageFullMatch"] = request.imageFullMatch;
    }

    if (!$dara.isNull(request.imageMatchCountRequest)) {
      query["ImageMatchCountRequest"] = request.imageMatchCountRequest;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.matchImage)) {
      query["MatchImage"] = request.matchImage;
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

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImageCaches",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeImageCachesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeImageCachesResponse({}));
  }

  /**
   * Queries information about image caches.
   * 
   * @param request - DescribeImageCachesRequest
   * @returns DescribeImageCachesResponse
   */
  async describeImageCaches(request: $_model.DescribeImageCachesRequest): Promise<$_model.DescribeImageCachesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImageCachesWithOptions(request, runtime);
  }

  /**
   * Queries the information about operations and maintenance tasks of an elastic container instance.
   * 
   * @param request - DescribeInstanceOpsRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceOpsRecordsResponse
   */
  async describeInstanceOpsRecordsWithOptions(request: $_model.DescribeInstanceOpsRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceOpsRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!$dara.isNull(request.opsType)) {
      query["OpsType"] = request.opsType;
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
      action: "DescribeInstanceOpsRecords",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceOpsRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceOpsRecordsResponse({}));
  }

  /**
   * Queries the information about operations and maintenance tasks of an elastic container instance.
   * 
   * @param request - DescribeInstanceOpsRecordsRequest
   * @returns DescribeInstanceOpsRecordsResponse
   */
  async describeInstanceOpsRecords(request: $_model.DescribeInstanceOpsRecordsRequest): Promise<$_model.DescribeInstanceOpsRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceOpsRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring data of elastic container instances.
   * 
   * @remarks
   *   Only the latest entry of monitoring data of each elastic container instance is returned.
   * *   You can query only the monitoring data of elastic container instances that are created after April 3, 2019 15:00:00 UTC+8.
   * 
   * @param request - DescribeMultiContainerGroupMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMultiContainerGroupMetricResponse
   */
  async describeMultiContainerGroupMetricWithOptions(request: $_model.DescribeMultiContainerGroupMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMultiContainerGroupMetricResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.containerGroupIds)) {
      query["ContainerGroupIds"] = request.containerGroupIds;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      action: "DescribeMultiContainerGroupMetric",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMultiContainerGroupMetricResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMultiContainerGroupMetricResponse({}));
  }

  /**
   * Queries the monitoring data of elastic container instances.
   * 
   * @remarks
   *   Only the latest entry of monitoring data of each elastic container instance is returned.
   * *   You can query only the monitoring data of elastic container instances that are created after April 3, 2019 15:00:00 UTC+8.
   * 
   * @param request - DescribeMultiContainerGroupMetricRequest
   * @returns DescribeMultiContainerGroupMetricResponse
   */
  async describeMultiContainerGroupMetric(request: $_model.DescribeMultiContainerGroupMetricRequest): Promise<$_model.DescribeMultiContainerGroupMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMultiContainerGroupMetricWithOptions(request, runtime);
  }

  /**
   * Queries the regions and zones in which Elastic Container Instance is available.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
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
      action: "DescribeRegions",
      version: "2018-08-08",
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
   * Queries the regions and zones in which Elastic Container Instance is available.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries information about virtual nodes.
   * 
   * @param request - DescribeVirtualNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVirtualNodesResponse
   */
  async describeVirtualNodesWithOptions(request: $_model.DescribeVirtualNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVirtualNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
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

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.virtualNodeIds)) {
      query["VirtualNodeIds"] = request.virtualNodeIds;
    }

    if (!$dara.isNull(request.virtualNodeName)) {
      query["VirtualNodeName"] = request.virtualNodeName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVirtualNodes",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVirtualNodesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVirtualNodesResponse({}));
  }

  /**
   * Queries information about virtual nodes.
   * 
   * @param request - DescribeVirtualNodesRequest
   * @returns DescribeVirtualNodesResponse
   */
  async describeVirtualNodes(request: $_model.DescribeVirtualNodesRequest): Promise<$_model.DescribeVirtualNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVirtualNodesWithOptions(request, runtime);
  }

  /**
   * Runs commands in a container.
   * 
   * @param request - ExecContainerCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecContainerCommandResponse
   */
  async execContainerCommandWithOptions(request: $_model.ExecContainerCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecContainerCommandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.command)) {
      query["Command"] = request.command;
    }

    if (!$dara.isNull(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!$dara.isNull(request.containerName)) {
      query["ContainerName"] = request.containerName;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.stdin)) {
      query["Stdin"] = request.stdin;
    }

    if (!$dara.isNull(request.sync)) {
      query["Sync"] = request.sync;
    }

    if (!$dara.isNull(request.TTY)) {
      query["TTY"] = request.TTY;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecContainerCommand",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecContainerCommandResponse>(await this.callApi(params, req, runtime), new $_model.ExecContainerCommandResponse({}));
  }

  /**
   * Runs commands in a container.
   * 
   * @param request - ExecContainerCommandRequest
   * @returns ExecContainerCommandResponse
   */
  async execContainerCommand(request: $_model.ExecContainerCommandRequest): Promise<$_model.ExecContainerCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.execContainerCommandWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to an Elastic Container Instance resource.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      version: "2018-08-08",
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
   * Queries the tags that are added to an Elastic Container Instance resource.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the used amounts and upper limits of privileges and quotas that you have in a specified region.
   * 
   * @remarks
   * This operation does not support resource group authentication.
   * 
   * @param request - ListUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsageResponse
   */
  async listUsageWithOptions(request: $_model.ListUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsageResponse> {
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
      action: "ListUsage",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsageResponse>(await this.callApi(params, req, runtime), new $_model.ListUsageResponse({}));
  }

  /**
   * Queries the used amounts and upper limits of privileges and quotas that you have in a specified region.
   * 
   * @remarks
   * This operation does not support resource group authentication.
   * 
   * @param request - ListUsageRequest
   * @returns ListUsageResponse
   */
  async listUsage(request: $_model.ListUsageRequest): Promise<$_model.ListUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsageWithOptions(request, runtime);
  }

  /**
   * Scales up a disk volume that is mounted to an elastic container instance.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   You can scale up volumes by calling this operation. You cannot scale down volumes by calling this operation.
   * *   Only volumes of the disk type can be scaled up. Volumes of other types cannot be scaled up.
   * 
   * @param request - ResizeContainerGroupVolumeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResizeContainerGroupVolumeResponse
   */
  async resizeContainerGroupVolumeWithOptions(request: $_model.ResizeContainerGroupVolumeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResizeContainerGroupVolumeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!$dara.isNull(request.newSize)) {
      query["NewSize"] = request.newSize;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.volumeName)) {
      query["VolumeName"] = request.volumeName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResizeContainerGroupVolume",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResizeContainerGroupVolumeResponse>(await this.callApi(params, req, runtime), new $_model.ResizeContainerGroupVolumeResponse({}));
  }

  /**
   * Scales up a disk volume that is mounted to an elastic container instance.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   You can scale up volumes by calling this operation. You cannot scale down volumes by calling this operation.
   * *   Only volumes of the disk type can be scaled up. Volumes of other types cannot be scaled up.
   * 
   * @param request - ResizeContainerGroupVolumeRequest
   * @returns ResizeContainerGroupVolumeResponse
   */
  async resizeContainerGroupVolume(request: $_model.ResizeContainerGroupVolumeRequest): Promise<$_model.ResizeContainerGroupVolumeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resizeContainerGroupVolumeWithOptions(request, runtime);
  }

  /**
   * Restarts an elastic container instance.
   * 
   * @remarks
   *   Only elastic container instances that are in the Pending or Running state can be restarted. Instances that are in the Succeeded or Failed state cannot be restarted.
   * *   Elastic container instances that were created before 15:00:00 on March 7, 2019 cannot be restarted.
   * *   When an elastic container instance is being restarted, its status changes into Restarting.
   * 
   * @param request - RestartContainerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartContainerGroupResponse
   */
  async restartContainerGroupWithOptions(request: $_model.RestartContainerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartContainerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
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
      action: "RestartContainerGroup",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartContainerGroupResponse>(await this.callApi(params, req, runtime), new $_model.RestartContainerGroupResponse({}));
  }

  /**
   * Restarts an elastic container instance.
   * 
   * @remarks
   *   Only elastic container instances that are in the Pending or Running state can be restarted. Instances that are in the Succeeded or Failed state cannot be restarted.
   * *   Elastic container instances that were created before 15:00:00 on March 7, 2019 cannot be restarted.
   * *   When an elastic container instance is being restarted, its status changes into Restarting.
   * 
   * @param request - RestartContainerGroupRequest
   * @returns RestartContainerGroupResponse
   */
  async restartContainerGroup(request: $_model.RestartContainerGroupRequest): Promise<$_model.RestartContainerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartContainerGroupWithOptions(request, runtime);
  }

  /**
   * Adds tags to an Elastic Container Instance resource.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      version: "2018-08-08",
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
   * Adds tags to an Elastic Container Instance resource.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from an Elastic Container Instance resource.
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

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      version: "2018-08-08",
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
   * Removes tags from an Elastic Container Instance resource.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates an elastic container instance.
   * 
   * @remarks
   *   Only elastic container instances that are in the Pending or Running state can be updated. After you call this operation to update an elastic container instance, the instance enters the Updating state.
   * *   If the RestartPolicy parameter is set to Never for the elastic container instance that you are updating, the containers of the instance may fail. Exercise caution if you want to update the kind of instances.
   * 
   * @param request - UpdateContainerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateContainerGroupResponse
   */
  async updateContainerGroupWithOptions(request: $_model.UpdateContainerGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContainerGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acrRegistryInfo)) {
      query["AcrRegistryInfo"] = request.acrRegistryInfo;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.container)) {
      query["Container"] = request.container;
    }

    if (!$dara.isNull(request.containerGroupId)) {
      query["ContainerGroupId"] = request.containerGroupId;
    }

    if (!$dara.isNull(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.imageRegistryCredential)) {
      query["ImageRegistryCredential"] = request.imageRegistryCredential;
    }

    if (!$dara.isNull(request.initContainer)) {
      query["InitContainer"] = request.initContainer;
    }

    if (!$dara.isNull(request.memory)) {
      query["Memory"] = request.memory;
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

    if (!$dara.isNull(request.restartPolicy)) {
      query["RestartPolicy"] = request.restartPolicy;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.updateType)) {
      query["UpdateType"] = request.updateType;
    }

    if (!$dara.isNull(request.volume)) {
      query["Volume"] = request.volume;
    }

    if (!$dara.isNull(request.dnsConfig)) {
      query["DnsConfig"] = request.dnsConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateContainerGroup",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateContainerGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateContainerGroupResponse({}));
  }

  /**
   * Updates an elastic container instance.
   * 
   * @remarks
   *   Only elastic container instances that are in the Pending or Running state can be updated. After you call this operation to update an elastic container instance, the instance enters the Updating state.
   * *   If the RestartPolicy parameter is set to Never for the elastic container instance that you are updating, the containers of the instance may fail. Exercise caution if you want to update the kind of instances.
   * 
   * @param request - UpdateContainerGroupRequest
   * @returns UpdateContainerGroupResponse
   */
  async updateContainerGroup(request: $_model.UpdateContainerGroupRequest): Promise<$_model.UpdateContainerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateContainerGroupWithOptions(request, runtime);
  }

  /**
   * Updates a data cache.
   * 
   * @param request - UpdateDataCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataCacheResponse
   */
  async updateDataCacheWithOptions(request: $_model.UpdateDataCacheRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataCacheResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataCacheId)) {
      query["DataCacheId"] = request.dataCacheId;
    }

    if (!$dara.isNull(request.dataSource)) {
      query["DataSource"] = request.dataSource;
    }

    if (!$dara.isNull(request.eipCreateParam)) {
      query["EipCreateParam"] = request.eipCreateParam;
    }

    if (!$dara.isNull(request.eipInstanceId)) {
      query["EipInstanceId"] = request.eipInstanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
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
      action: "UpdateDataCache",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataCacheResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataCacheResponse({}));
  }

  /**
   * Updates a data cache.
   * 
   * @param request - UpdateDataCacheRequest
   * @returns UpdateDataCacheResponse
   */
  async updateDataCache(request: $_model.UpdateDataCacheRequest): Promise<$_model.UpdateDataCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataCacheWithOptions(request, runtime);
  }

  /**
   * Updates an image cache.
   * 
   * @remarks
   * Only image caches that are in the Ready or UpdateFailed state can be updated.
   * 
   * @param request - UpdateImageCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateImageCacheResponse
   */
  async updateImageCacheWithOptions(request: $_model.UpdateImageCacheRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateImageCacheResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acrRegistryInfo)) {
      query["AcrRegistryInfo"] = request.acrRegistryInfo;
    }

    if (!$dara.isNull(request.autoMatchImageCache)) {
      query["AutoMatchImageCache"] = request.autoMatchImageCache;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.eipInstanceId)) {
      query["EipInstanceId"] = request.eipInstanceId;
    }

    if (!$dara.isNull(request.eliminationStrategy)) {
      query["EliminationStrategy"] = request.eliminationStrategy;
    }

    if (!$dara.isNull(request.flash)) {
      query["Flash"] = request.flash;
    }

    if (!$dara.isNull(request.flashCopyCount)) {
      query["FlashCopyCount"] = request.flashCopyCount;
    }

    if (!$dara.isNull(request.image)) {
      query["Image"] = request.image;
    }

    if (!$dara.isNull(request.imageCacheId)) {
      query["ImageCacheId"] = request.imageCacheId;
    }

    if (!$dara.isNull(request.imageCacheName)) {
      query["ImageCacheName"] = request.imageCacheName;
    }

    if (!$dara.isNull(request.imageCacheSize)) {
      query["ImageCacheSize"] = request.imageCacheSize;
    }

    if (!$dara.isNull(request.imageRegistryCredential)) {
      query["ImageRegistryCredential"] = request.imageRegistryCredential;
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

    if (!$dara.isNull(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.standardCopyCount)) {
      query["StandardCopyCount"] = request.standardCopyCount;
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
      action: "UpdateImageCache",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateImageCacheResponse>(await this.callApi(params, req, runtime), new $_model.UpdateImageCacheResponse({}));
  }

  /**
   * Updates an image cache.
   * 
   * @remarks
   * Only image caches that are in the Ready or UpdateFailed state can be updated.
   * 
   * @param request - UpdateImageCacheRequest
   * @returns UpdateImageCacheResponse
   */
  async updateImageCache(request: $_model.UpdateImageCacheRequest): Promise<$_model.UpdateImageCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateImageCacheWithOptions(request, runtime);
  }

  /**
   * Updates attributes of a virtual node.
   * 
   * @remarks
   * ## Usage notes
   * Only virtual nodes that are in the Ready state can be updated.
   * 
   * @param request - UpdateVirtualNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVirtualNodeResponse
   */
  async updateVirtualNodeWithOptions(request: $_model.UpdateVirtualNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVirtualNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterDNS)) {
      query["ClusterDNS"] = request.clusterDNS;
    }

    if (!$dara.isNull(request.clusterDomain)) {
      query["ClusterDomain"] = request.clusterDomain;
    }

    if (!$dara.isNull(request.customResources)) {
      query["CustomResources"] = request.customResources;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.virtualNodeId)) {
      query["VirtualNodeId"] = request.virtualNodeId;
    }

    if (!$dara.isNull(request.virtualNodeName)) {
      query["VirtualNodeName"] = request.virtualNodeName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVirtualNode",
      version: "2018-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVirtualNodeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVirtualNodeResponse({}));
  }

  /**
   * Updates attributes of a virtual node.
   * 
   * @remarks
   * ## Usage notes
   * Only virtual nodes that are in the Ready state can be updated.
   * 
   * @param request - UpdateVirtualNodeRequest
   * @returns UpdateVirtualNodeResponse
   */
  async updateVirtualNode(request: $_model.UpdateVirtualNodeRequest): Promise<$_model.UpdateVirtualNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateVirtualNodeWithOptions(request, runtime);
  }

}
