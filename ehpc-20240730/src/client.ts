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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ehpc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds Elastic Compute Service (ECS) instances as compute nodes to Elastic High Performance Computing (E-HPC) clusters.
   * 
   * @remarks
   * The ECS instances must meet the following requirements:
   * *   The ECS instances do not belong to any E-HPC cluster.
   * *   The ECS instances reside in the same virtual private cloud (VPC) as the cluster.
   * *   The ECS instances are in the Stopped state.
   * Take of the following limits:
   * *   You can specify multiple instance IDs to add them at a time. However, the instances must be of the same type.
   * *   When an instance is added to the cluster, [the system disk is reset](https://help.aliyun.com/zh/ecs/user-guide/re-initialize-a-system-disk) by using the image specified by the input parameters.
   * *   If the instance has data disks, they are not automatically created and mounted after the instance is added.
   * *   The hostname of the instance remains the same. Therefore, you must ensure that the hostname of the instance to be added is different from the hostname of an existing node in the cluster.
   * 
   * @param tmpReq - AttachNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachNodesResponse
   */
  async attachNodesWithOptions(tmpReq: $_model.AttachNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachNodesResponse> {
    tmpReq.validate();
    let request = new $_model.AttachNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.computeNode)) {
      request.computeNodeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.computeNode, "ComputeNode", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.computeNodeShrink)) {
      query["ComputeNode"] = request.computeNodeShrink;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachNodes",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachNodesResponse>(await this.callApi(params, req, runtime), new $_model.AttachNodesResponse({}));
  }

  /**
   * Adds Elastic Compute Service (ECS) instances as compute nodes to Elastic High Performance Computing (E-HPC) clusters.
   * 
   * @remarks
   * The ECS instances must meet the following requirements:
   * *   The ECS instances do not belong to any E-HPC cluster.
   * *   The ECS instances reside in the same virtual private cloud (VPC) as the cluster.
   * *   The ECS instances are in the Stopped state.
   * Take of the following limits:
   * *   You can specify multiple instance IDs to add them at a time. However, the instances must be of the same type.
   * *   When an instance is added to the cluster, [the system disk is reset](https://help.aliyun.com/zh/ecs/user-guide/re-initialize-a-system-disk) by using the image specified by the input parameters.
   * *   If the instance has data disks, they are not automatically created and mounted after the instance is added.
   * *   The hostname of the instance remains the same. Therefore, you must ensure that the hostname of the instance to be added is different from the hostname of an existing node in the cluster.
   * 
   * @param request - AttachNodesRequest
   * @returns AttachNodesResponse
   */
  async attachNodes(request: $_model.AttachNodesRequest): Promise<$_model.AttachNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachNodesWithOptions(request, runtime);
  }

  /**
   * Attaches shared storage to an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * When you call this operation, take note of the following items:
   * *   The file system that you want to attach must be created in advance in the same virtual private cloud (VPC) as the destination cluster. For more information, see [Create a file system](https://help.aliyun.com/document_detail/27530.html) and [Manage mount targets](https://help.aliyun.com/document_detail/27531.html).
   * *   E-HPC clusters support Apsara File Storage NAS file systems.
   * 
   * @param tmpReq - AttachSharedStoragesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachSharedStoragesResponse
   */
  async attachSharedStoragesWithOptions(tmpReq: $_model.AttachSharedStoragesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachSharedStoragesResponse> {
    tmpReq.validate();
    let request = new $_model.AttachSharedStoragesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sharedStorages)) {
      request.sharedStoragesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sharedStorages, "SharedStorages", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.sharedStoragesShrink)) {
      query["SharedStorages"] = request.sharedStoragesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachSharedStorages",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachSharedStoragesResponse>(await this.callApi(params, req, runtime), new $_model.AttachSharedStoragesResponse({}));
  }

  /**
   * Attaches shared storage to an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * When you call this operation, take note of the following items:
   * *   The file system that you want to attach must be created in advance in the same virtual private cloud (VPC) as the destination cluster. For more information, see [Create a file system](https://help.aliyun.com/document_detail/27530.html) and [Manage mount targets](https://help.aliyun.com/document_detail/27531.html).
   * *   E-HPC clusters support Apsara File Storage NAS file systems.
   * 
   * @param request - AttachSharedStoragesRequest
   * @returns AttachSharedStoragesResponse
   */
  async attachSharedStorages(request: $_model.AttachSharedStoragesRequest): Promise<$_model.AttachSharedStoragesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachSharedStoragesWithOptions(request, runtime);
  }

  /**
   * Creates a pay-as-you-go or subscription Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you call this operation, make sure that you are familiar with the billing and pricing of E-HPC. For more information, see [Overview](https://help.aliyun.com/document_detail/2842985.html).
   * 
   * @param tmpReq - CreateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(tmpReq: $_model.CreateClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClusterResponse> {
    tmpReq.validate();
    let request = new $_model.CreateClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.additionalPackages)) {
      request.additionalPackagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.additionalPackages, "AdditionalPackages", "json");
    }

    if (!$dara.isNull(tmpReq.addons)) {
      request.addonsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addons, "Addons", "json");
    }

    if (!$dara.isNull(tmpReq.clusterCredentials)) {
      request.clusterCredentialsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clusterCredentials, "ClusterCredentials", "json");
    }

    if (!$dara.isNull(tmpReq.clusterCustomConfiguration)) {
      request.clusterCustomConfigurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clusterCustomConfiguration, "ClusterCustomConfiguration", "json");
    }

    if (!$dara.isNull(tmpReq.manager)) {
      request.managerShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.manager, "Manager", "json");
    }

    if (!$dara.isNull(tmpReq.queues)) {
      request.queuesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queues, "Queues", "json");
    }

    if (!$dara.isNull(tmpReq.sharedStorages)) {
      request.sharedStoragesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sharedStorages, "SharedStorages", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.additionalPackagesShrink)) {
      query["AdditionalPackages"] = request.additionalPackagesShrink;
    }

    if (!$dara.isNull(request.addonsShrink)) {
      query["Addons"] = request.addonsShrink;
    }

    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.clusterCategory)) {
      query["ClusterCategory"] = request.clusterCategory;
    }

    if (!$dara.isNull(request.clusterCredentialsShrink)) {
      query["ClusterCredentials"] = request.clusterCredentialsShrink;
    }

    if (!$dara.isNull(request.clusterCustomConfigurationShrink)) {
      query["ClusterCustomConfiguration"] = request.clusterCustomConfigurationShrink;
    }

    if (!$dara.isNull(request.clusterDescription)) {
      query["ClusterDescription"] = request.clusterDescription;
    }

    if (!$dara.isNull(request.clusterMode)) {
      query["ClusterMode"] = request.clusterMode;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.clusterVSwitchId)) {
      query["ClusterVSwitchId"] = request.clusterVSwitchId;
    }

    if (!$dara.isNull(request.clusterVpcId)) {
      query["ClusterVpcId"] = request.clusterVpcId;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.isEnterpriseSecurityGroup)) {
      query["IsEnterpriseSecurityGroup"] = request.isEnterpriseSecurityGroup;
    }

    if (!$dara.isNull(request.managerShrink)) {
      query["Manager"] = request.managerShrink;
    }

    if (!$dara.isNull(request.maxCoreCount)) {
      query["MaxCoreCount"] = request.maxCoreCount;
    }

    if (!$dara.isNull(request.maxCount)) {
      query["MaxCount"] = request.maxCount;
    }

    if (!$dara.isNull(request.queuesShrink)) {
      query["Queues"] = request.queuesShrink;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.sharedStoragesShrink)) {
      query["SharedStorages"] = request.sharedStoragesShrink;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCluster",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClusterResponse>(await this.callApi(params, req, runtime), new $_model.CreateClusterResponse({}));
  }

  /**
   * Creates a pay-as-you-go or subscription Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you call this operation, make sure that you are familiar with the billing and pricing of E-HPC. For more information, see [Overview](https://help.aliyun.com/document_detail/2842985.html).
   * 
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: $_model.CreateClusterRequest): Promise<$_model.CreateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * Creates a job for a cluster.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing and [pricing](https://www.aliyun.com/price/product#/ecs/detail) of E-HPC.
   * 
   * @param tmpReq - CreateJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobResponse
   */
  async createJobWithOptions(tmpReq: $_model.CreateJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateJobResponse> {
    tmpReq.validate();
    let request = new $_model.CreateJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.jobSpec)) {
      request.jobSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobSpec, "JobSpec", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.jobSpecShrink)) {
      query["JobSpec"] = request.jobSpecShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJob",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateJobResponse({}));
  }

  /**
   * Creates a job for a cluster.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing and [pricing](https://www.aliyun.com/price/product#/ecs/detail) of E-HPC.
   * 
   * @param request - CreateJobRequest
   * @returns CreateJobResponse
   */
  async createJob(request: $_model.CreateJobRequest): Promise<$_model.CreateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createJobWithOptions(request, runtime);
  }

  /**
   * Creates compute nodes for an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)
   * 
   * @param tmpReq - CreateNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNodesResponse
   */
  async createNodesWithOptions(tmpReq: $_model.CreateNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNodesResponse> {
    tmpReq.validate();
    let request = new $_model.CreateNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.computeNode)) {
      request.computeNodeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.computeNode, "ComputeNode", "json");
    }

    if (!$dara.isNull(tmpReq.hostnames)) {
      request.hostnamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hostnames, "Hostnames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.computeNodeShrink)) {
      query["ComputeNode"] = request.computeNodeShrink;
    }

    if (!$dara.isNull(request.count)) {
      query["Count"] = request.count;
    }

    if (!$dara.isNull(request.deploymentSetId)) {
      query["DeploymentSetId"] = request.deploymentSetId;
    }

    if (!$dara.isNull(request.HPCInterConnect)) {
      query["HPCInterConnect"] = request.HPCInterConnect;
    }

    if (!$dara.isNull(request.hostnamePrefix)) {
      query["HostnamePrefix"] = request.hostnamePrefix;
    }

    if (!$dara.isNull(request.hostnameSuffix)) {
      query["HostnameSuffix"] = request.hostnameSuffix;
    }

    if (!$dara.isNull(request.hostnamesShrink)) {
      query["Hostnames"] = request.hostnamesShrink;
    }

    if (!$dara.isNull(request.keepAlive)) {
      query["KeepAlive"] = request.keepAlive;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!$dara.isNull(request.ramRole)) {
      query["RamRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.reservedNodePoolId)) {
      query["ReservedNodePoolId"] = request.reservedNodePoolId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNodes",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNodesResponse>(await this.callApi(params, req, runtime), new $_model.CreateNodesResponse({}));
  }

  /**
   * Creates compute nodes for an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)
   * 
   * @param request - CreateNodesRequest
   * @returns CreateNodesResponse
   */
  async createNodes(request: $_model.CreateNodesRequest): Promise<$_model.CreateNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNodesWithOptions(request, runtime);
  }

  /**
   * Creates a queue for an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @param tmpReq - CreateQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQueueResponse
   */
  async createQueueWithOptions(tmpReq: $_model.CreateQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQueueResponse> {
    tmpReq.validate();
    let request = new $_model.CreateQueueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queue)) {
      request.queueShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queue, "Queue", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.queueShrink)) {
      query["Queue"] = request.queueShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQueue",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQueueResponse>(await this.callApi(params, req, runtime), new $_model.CreateQueueResponse({}));
  }

  /**
   * Creates a queue for an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @param request - CreateQueueRequest
   * @returns CreateQueueResponse
   */
  async createQueue(request: $_model.CreateQueueRequest): Promise<$_model.CreateQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQueueWithOptions(request, runtime);
  }

  /**
   * Adds users to an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param tmpReq - CreateUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUsersResponse
   */
  async createUsersWithOptions(tmpReq: $_model.CreateUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUsersResponse> {
    tmpReq.validate();
    let request = new $_model.CreateUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.user)) {
      request.userShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.user, "User", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.userShrink)) {
      query["User"] = request.userShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUsers",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUsersResponse>(await this.callApi(params, req, runtime), new $_model.CreateUsersResponse({}));
  }

  /**
   * Adds users to an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - CreateUsersRequest
   * @returns CreateUsersResponse
   */
  async createUsers(request: $_model.CreateUsersRequest): Promise<$_model.CreateUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUsersWithOptions(request, runtime);
  }

  /**
   * Releases an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Make sure that data of the cluster to be deleted is backed up before you call this operation.
   * > After a cluster is released, you cannot restore the data stored in the cluster. Exercise caution when you release a cluster.
   * 
   * @param request - DeleteClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterResponse
   */
  async deleteClusterWithOptions(request: $_model.DeleteClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCluster",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClusterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClusterResponse({}));
  }

  /**
   * Releases an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Make sure that data of the cluster to be deleted is backed up before you call this operation.
   * > After a cluster is released, you cannot restore the data stored in the cluster. Exercise caution when you release a cluster.
   * 
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(request: $_model.DeleteClusterRequest): Promise<$_model.DeleteClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  /**
   * Deletes compute nodes from an Enterprise High Performance Computing (E-HPC) cluster at a time.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you delete a compute node, we recommend that you export all job data from the node to prevent data loss.
   * 
   * @param tmpReq - DeleteNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNodesResponse
   */
  async deleteNodesWithOptions(tmpReq: $_model.DeleteNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNodesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNodes",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNodesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNodesResponse({}));
  }

  /**
   * Deletes compute nodes from an Enterprise High Performance Computing (E-HPC) cluster at a time.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you delete a compute node, we recommend that you export all job data from the node to prevent data loss.
   * 
   * @param request - DeleteNodesRequest
   * @returns DeleteNodesResponse
   */
  async deleteNodes(request: $_model.DeleteNodesRequest): Promise<$_model.DeleteNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNodesWithOptions(request, runtime);
  }

  /**
   * Deletes queues from an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you delete a queue, you must delete all compute nodes in the queue.
   * 
   * @param tmpReq - DeleteQueuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQueuesResponse
   */
  async deleteQueuesWithOptions(tmpReq: $_model.DeleteQueuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQueuesResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteQueuesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queueNames)) {
      request.queueNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queueNames, "QueueNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.queueNamesShrink)) {
      query["QueueNames"] = request.queueNamesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQueues",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQueuesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQueuesResponse({}));
  }

  /**
   * Deletes queues from an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you delete a queue, you must delete all compute nodes in the queue.
   * 
   * @param request - DeleteQueuesRequest
   * @returns DeleteQueuesResponse
   */
  async deleteQueues(request: $_model.DeleteQueuesRequest): Promise<$_model.DeleteQueuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQueuesWithOptions(request, runtime);
  }

  /**
   * Deletes users from a cluster.
   * 
   * @param tmpReq - DeleteUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUsersResponse
   */
  async deleteUsersWithOptions(tmpReq: $_model.DeleteUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUsersResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.user)) {
      request.userShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.user, "User", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUsers",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUsersResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUsersResponse({}));
  }

  /**
   * Deletes users from a cluster.
   * 
   * @param request - DeleteUsersRequest
   * @returns DeleteUsersResponse
   */
  async deleteUsers(request: $_model.DeleteUsersRequest): Promise<$_model.DeleteUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUsersWithOptions(request, runtime);
  }

  /**
   * Queries the details of an addon template.
   * 
   * @param request - DescribeAddonTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAddonTemplateResponse
   */
  async describeAddonTemplateWithOptions(request: $_model.DescribeAddonTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAddonTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addonName)) {
      query["AddonName"] = request.addonName;
    }

    if (!$dara.isNull(request.addonVersion)) {
      query["AddonVersion"] = request.addonVersion;
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

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAddonTemplate",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAddonTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAddonTemplateResponse({}));
  }

  /**
   * Queries the details of an addon template.
   * 
   * @param request - DescribeAddonTemplateRequest
   * @returns DescribeAddonTemplateResponse
   */
  async describeAddonTemplate(request: $_model.DescribeAddonTemplateRequest): Promise<$_model.DescribeAddonTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAddonTemplateWithOptions(request, runtime);
  }

  /**
   * Unmounts shared storage from the mount directory of a cluster.
   * 
   * @param tmpReq - DetachSharedStoragesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachSharedStoragesResponse
   */
  async detachSharedStoragesWithOptions(tmpReq: $_model.DetachSharedStoragesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachSharedStoragesResponse> {
    tmpReq.validate();
    let request = new $_model.DetachSharedStoragesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sharedStorages)) {
      request.sharedStoragesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sharedStorages, "SharedStorages", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.sharedStoragesShrink)) {
      query["SharedStorages"] = request.sharedStoragesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachSharedStorages",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachSharedStoragesResponse>(await this.callApi(params, req, runtime), new $_model.DetachSharedStoragesResponse({}));
  }

  /**
   * Unmounts shared storage from the mount directory of a cluster.
   * 
   * @param request - DetachSharedStoragesRequest
   * @returns DetachSharedStoragesResponse
   */
  async detachSharedStorages(request: $_model.DetachSharedStoragesRequest): Promise<$_model.DetachSharedStoragesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachSharedStoragesWithOptions(request, runtime);
  }

  /**
   * Queries the details of an installed addon.
   * 
   * @param request - GetAddonRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAddonResponse
   */
  async getAddonWithOptions(request: $_model.GetAddonRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAddonResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addonId)) {
      query["AddonId"] = request.addonId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAddon",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAddonResponse>(await this.callApi(params, req, runtime), new $_model.GetAddonResponse({}));
  }

  /**
   * Queries the details of an installed addon.
   * 
   * @param request - GetAddonRequest
   * @returns GetAddonResponse
   */
  async getAddon(request: $_model.GetAddonRequest): Promise<$_model.GetAddonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAddonWithOptions(request, runtime);
  }

  /**
   * Queries information about an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - GetClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterResponse
   */
  async getClusterWithOptions(request: $_model.GetClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCluster",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClusterResponse>(await this.callApi(params, req, runtime), new $_model.GetClusterResponse({}));
  }

  /**
   * Queries information about an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - GetClusterRequest
   * @returns GetClusterResponse
   */
  async getCluster(request: $_model.GetClusterRequest): Promise<$_model.GetClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClusterWithOptions(request, runtime);
  }

  /**
   * Query logs based on a request ID. Logs for specific actions can be queried thanks to an Action-Stage-Method three-layer log splitting structure.
   * 
   * @param request - GetCommonLogDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCommonLogDetailResponse
   */
  async getCommonLogDetailWithOptions(request: $_model.GetCommonLogDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCommonLogDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.from)) {
      query["From"] = request.from;
    }

    if (!$dara.isNull(request.hiddenProcess)) {
      query["HiddenProcess"] = request.hiddenProcess;
    }

    if (!$dara.isNull(request.logRequestId)) {
      query["LogRequestId"] = request.logRequestId;
    }

    if (!$dara.isNull(request.to)) {
      query["To"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCommonLogDetail",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCommonLogDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetCommonLogDetailResponse({}));
  }

  /**
   * Query logs based on a request ID. Logs for specific actions can be queried thanks to an Action-Stage-Method three-layer log splitting structure.
   * 
   * @param request - GetCommonLogDetailRequest
   * @returns GetCommonLogDetailResponse
   */
  async getCommonLogDetail(request: $_model.GetCommonLogDetailRequest): Promise<$_model.GetCommonLogDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCommonLogDetailWithOptions(request, runtime);
  }

  /**
   * Obtains the details of a job.
   * 
   * @param request - GetJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobResponse
   */
  async getJobWithOptions(request: $_model.GetJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJob",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobResponse>(await this.callApi(params, req, runtime), new $_model.GetJobResponse({}));
  }

  /**
   * Obtains the details of a job.
   * 
   * @param request - GetJobRequest
   * @returns GetJobResponse
   */
  async getJob(request: $_model.GetJobRequest): Promise<$_model.GetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobWithOptions(request, runtime);
  }

  /**
   * Queries the output logs of a job, including standard output logs and error output logs.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Currently, only Slurm and PBS Pro schedulers for Standard Edition clusters are supported.
   * 
   * @param request - GetJobLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobLogResponse
   */
  async getJobLogWithOptions(request: $_model.GetJobLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobLog",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobLogResponse>(await this.callApi(params, req, runtime), new $_model.GetJobLogResponse({}));
  }

  /**
   * Queries the output logs of a job, including standard output logs and error output logs.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Currently, only Slurm and PBS Pro schedulers for Standard Edition clusters are supported.
   * 
   * @param request - GetJobLogRequest
   * @returns GetJobLogResponse
   */
  async getJobLog(request: $_model.GetJobLogRequest): Promise<$_model.GetJobLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobLogWithOptions(request, runtime);
  }

  /**
   * Queries the details of a queue in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - GetQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueueResponse
   */
  async getQueueWithOptions(request: $_model.GetQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQueueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQueue",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQueueResponse>(await this.callApi(params, req, runtime), new $_model.GetQueueResponse({}));
  }

  /**
   * Queries the details of a queue in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - GetQueueRequest
   * @returns GetQueueResponse
   */
  async getQueue(request: $_model.GetQueueRequest): Promise<$_model.GetQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQueueWithOptions(request, runtime);
  }

  /**
   * Installs an addon.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Take note of the following items when you call this operation:
   * *   The cluster must be in the `Running` state.
   * *   Clusters fall into two types:
   *     *   Regular clusters on Alibaba Cloud Public Cloud
   *     *   Managed clusters on Alibaba Cloud Public Cloud
   * 
   * @param request - InstallAddonRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallAddonResponse
   */
  async installAddonWithOptions(request: $_model.InstallAddonRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstallAddonResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addonName)) {
      query["AddonName"] = request.addonName;
    }

    if (!$dara.isNull(request.addonVersion)) {
      query["AddonVersion"] = request.addonVersion;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.resourcesSpec)) {
      query["ResourcesSpec"] = request.resourcesSpec;
    }

    if (!$dara.isNull(request.servicesSpec)) {
      query["ServicesSpec"] = request.servicesSpec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallAddon",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallAddonResponse>(await this.callApi(params, req, runtime), new $_model.InstallAddonResponse({}));
  }

  /**
   * Installs an addon.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Take note of the following items when you call this operation:
   * *   The cluster must be in the `Running` state.
   * *   Clusters fall into two types:
   *     *   Regular clusters on Alibaba Cloud Public Cloud
   *     *   Managed clusters on Alibaba Cloud Public Cloud
   * 
   * @param request - InstallAddonRequest
   * @returns InstallAddonResponse
   */
  async installAddon(request: $_model.InstallAddonRequest): Promise<$_model.InstallAddonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installAddonWithOptions(request, runtime);
  }

  /**
   * Install software for the specified cluster.
   * 
   * @remarks
   * ## Interface Description
   * When calling this interface, please note the following:
   * - The cluster status must be `Running`. 
   * - If the cluster series is `Serverless`, ensure that there is at least one login node or compute node in the cluster; otherwise, software cannot be added to the target cluster.
   * 
   * @param tmpReq - InstallSoftwaresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallSoftwaresResponse
   */
  async installSoftwaresWithOptions(tmpReq: $_model.InstallSoftwaresRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstallSoftwaresResponse> {
    tmpReq.validate();
    let request = new $_model.InstallSoftwaresShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.additionalPackages)) {
      request.additionalPackagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.additionalPackages, "AdditionalPackages", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallSoftwares",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallSoftwaresResponse>(await this.callApi(params, req, runtime), new $_model.InstallSoftwaresResponse({}));
  }

  /**
   * Install software for the specified cluster.
   * 
   * @remarks
   * ## Interface Description
   * When calling this interface, please note the following:
   * - The cluster status must be `Running`. 
   * - If the cluster series is `Serverless`, ensure that there is at least one login node or compute node in the cluster; otherwise, software cannot be added to the target cluster.
   * 
   * @param request - InstallSoftwaresRequest
   * @returns InstallSoftwaresResponse
   */
  async installSoftwares(request: $_model.InstallSoftwaresRequest): Promise<$_model.InstallSoftwaresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installSoftwaresWithOptions(request, runtime);
  }

  /**
   * Queries supported addon templates.
   * 
   * @param request - ListAddonTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAddonTemplatesResponse
   */
  async listAddonTemplatesWithOptions(request: $_model.ListAddonTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAddonTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addonNames)) {
      query["AddonNames"] = request.addonNames;
    }

    if (!$dara.isNull(request.clusterCategory)) {
      query["ClusterCategory"] = request.clusterCategory;
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
      action: "ListAddonTemplates",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAddonTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListAddonTemplatesResponse({}));
  }

  /**
   * Queries supported addon templates.
   * 
   * @param request - ListAddonTemplatesRequest
   * @returns ListAddonTemplatesResponse
   */
  async listAddonTemplates(request: $_model.ListAddonTemplatesRequest): Promise<$_model.ListAddonTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAddonTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries installed addons of an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param tmpReq - ListAddonsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAddonsResponse
   */
  async listAddonsWithOptions(tmpReq: $_model.ListAddonsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAddonsResponse> {
    tmpReq.validate();
    let request = new $_model.ListAddonsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.addonIds)) {
      request.addonIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addonIds, "AddonIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.addonIdsShrink)) {
      query["AddonIds"] = request.addonIdsShrink;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAddons",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAddonsResponse>(await this.callApi(params, req, runtime), new $_model.ListAddonsResponse({}));
  }

  /**
   * Queries installed addons of an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - ListAddonsRequest
   * @returns ListAddonsResponse
   */
  async listAddons(request: $_model.ListAddonsRequest): Promise<$_model.ListAddonsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAddonsWithOptions(request, runtime);
  }

  /**
   * Queries the file systems that can be attached in a region.
   * 
   * @param request - ListAvailableFileSystemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvailableFileSystemsResponse
   */
  async listAvailableFileSystemsWithOptions(request: $_model.ListAvailableFileSystemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAvailableFileSystemsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAvailableFileSystems",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAvailableFileSystemsResponse>(await this.callApi(params, req, runtime), new $_model.ListAvailableFileSystemsResponse({}));
  }

  /**
   * Queries the file systems that can be attached in a region.
   * 
   * @param request - ListAvailableFileSystemsRequest
   * @returns ListAvailableFileSystemsResponse
   */
  async listAvailableFileSystems(request: $_model.ListAvailableFileSystemsRequest): Promise<$_model.ListAvailableFileSystemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAvailableFileSystemsWithOptions(request, runtime);
  }

  /**
   * Queries images that are available for Elastic High Performance Computing (E-HPC) clusters.
   * 
   * @param tmpReq - ListAvailableImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvailableImagesResponse
   */
  async listAvailableImagesWithOptions(tmpReq: $_model.ListAvailableImagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAvailableImagesResponse> {
    tmpReq.validate();
    let request = new $_model.ListAvailableImagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.directoryService)) {
      request.directoryServiceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.directoryService, "DirectoryService", "json");
    }

    if (!$dara.isNull(tmpReq.scheduler)) {
      request.schedulerShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduler, "Scheduler", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAvailableImages",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAvailableImagesResponse>(await this.callApi(params, req, runtime), new $_model.ListAvailableImagesResponse({}));
  }

  /**
   * Queries images that are available for Elastic High Performance Computing (E-HPC) clusters.
   * 
   * @param request - ListAvailableImagesRequest
   * @returns ListAvailableImagesResponse
   */
  async listAvailableImages(request: $_model.ListAvailableImagesRequest): Promise<$_model.ListAvailableImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAvailableImagesWithOptions(request, runtime);
  }

  /**
   * Queries all clusters of a user in each region.
   * 
   * @param tmpReq - ListClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClustersResponse
   */
  async listClustersWithOptions(tmpReq: $_model.ListClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClustersResponse> {
    tmpReq.validate();
    let request = new $_model.ListClustersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clusterIds)) {
      request.clusterIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clusterIds, "ClusterIds", "json");
    }

    if (!$dara.isNull(tmpReq.clusterNames)) {
      request.clusterNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clusterNames, "ClusterNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterIdsShrink)) {
      query["ClusterIds"] = request.clusterIdsShrink;
    }

    if (!$dara.isNull(request.clusterNamesShrink)) {
      query["ClusterNames"] = request.clusterNamesShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusters",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClustersResponse>(await this.callApi(params, req, runtime), new $_model.ListClustersResponse({}));
  }

  /**
   * Queries all clusters of a user in each region.
   * 
   * @param request - ListClustersRequest
   * @returns ListClustersResponse
   */
  async listClusters(request: $_model.ListClustersRequest): Promise<$_model.ListClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  /**
   * Queries the logs of a cluster that are generated within a time range.
   * 
   * @param tmpReq - ListCommonLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCommonLogsResponse
   */
  async listCommonLogsWithOptions(tmpReq: $_model.ListCommonLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCommonLogsResponse> {
    tmpReq.validate();
    let request = new $_model.ListCommonLogsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.actionName)) {
      request.actionNameShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actionName, "ActionName", "json");
    }

    let query = { };
    if (!$dara.isNull(request.actionNameShrink)) {
      query["ActionName"] = request.actionNameShrink;
    }

    if (!$dara.isNull(request.actionStatus)) {
      query["ActionStatus"] = request.actionStatus;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.from)) {
      query["From"] = request.from;
    }

    if (!$dara.isNull(request.isReverse)) {
      query["IsReverse"] = request.isReverse;
    }

    if (!$dara.isNull(request.logRequestId)) {
      query["LogRequestId"] = request.logRequestId;
    }

    if (!$dara.isNull(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!$dara.isNull(request.operatorUid)) {
      query["OperatorUid"] = request.operatorUid;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.to)) {
      query["To"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCommonLogs",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCommonLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListCommonLogsResponse({}));
  }

  /**
   * Queries the logs of a cluster that are generated within a time range.
   * 
   * @param request - ListCommonLogsRequest
   * @returns ListCommonLogsResponse
   */
  async listCommonLogs(request: $_model.ListCommonLogsRequest): Promise<$_model.ListCommonLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCommonLogsWithOptions(request, runtime);
  }

  /**
   * Queries the installed software of a cluster.
   * 
   * @param request - ListInstalledSoftwaresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstalledSoftwaresResponse
   */
  async listInstalledSoftwaresWithOptions(request: $_model.ListInstalledSoftwaresRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstalledSoftwaresResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstalledSoftwares",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstalledSoftwaresResponse>(await this.callApi(params, req, runtime), new $_model.ListInstalledSoftwaresResponse({}));
  }

  /**
   * Queries the installed software of a cluster.
   * 
   * @param request - ListInstalledSoftwaresRequest
   * @returns ListInstalledSoftwaresResponse
   */
  async listInstalledSoftwares(request: $_model.ListInstalledSoftwaresRequest): Promise<$_model.ListInstalledSoftwaresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstalledSoftwaresWithOptions(request, runtime);
  }

  /**
   * Queries the jobs in a cluster.
   * 
   * @param tmpReq - ListJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsResponse
   */
  async listJobsWithOptions(tmpReq: $_model.ListJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobsResponse> {
    tmpReq.validate();
    let request = new $_model.ListJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.jobFilter)) {
      request.jobFilterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobFilter, "JobFilter", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobFilterShrink)) {
      query["JobFilter"] = request.jobFilterShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobs",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListJobsResponse({}));
  }

  /**
   * Queries the jobs in a cluster.
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(request: $_model.ListJobsRequest): Promise<$_model.ListJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listJobsWithOptions(request, runtime);
  }

  /**
   * Queries the nodes of an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param tmpReq - ListNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesResponse
   */
  async listNodesWithOptions(tmpReq: $_model.ListNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNodesResponse> {
    tmpReq.validate();
    let request = new $_model.ListNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hostnames)) {
      request.hostnamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hostnames, "Hostnames", "json");
    }

    if (!$dara.isNull(tmpReq.privateIpAddress)) {
      request.privateIpAddressShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.privateIpAddress, "PrivateIpAddress", "json");
    }

    if (!$dara.isNull(tmpReq.queueNames)) {
      request.queueNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queueNames, "QueueNames", "json");
    }

    if (!$dara.isNull(tmpReq.status)) {
      request.statusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.status, "Status", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.hostnamesShrink)) {
      query["Hostnames"] = request.hostnamesShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.privateIpAddressShrink)) {
      query["PrivateIpAddress"] = request.privateIpAddressShrink;
    }

    if (!$dara.isNull(request.queueNamesShrink)) {
      query["QueueNames"] = request.queueNamesShrink;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.statusShrink)) {
      query["Status"] = request.statusShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodes",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNodesResponse>(await this.callApi(params, req, runtime), new $_model.ListNodesResponse({}));
  }

  /**
   * Queries the nodes of an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - ListNodesRequest
   * @returns ListNodesResponse
   */
  async listNodes(request: $_model.ListNodesRequest): Promise<$_model.ListNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  /**
   * Queries queues in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param tmpReq - ListQueuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueuesResponse
   */
  async listQueuesWithOptions(tmpReq: $_model.ListQueuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQueuesResponse> {
    tmpReq.validate();
    let request = new $_model.ListQueuesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queueNames)) {
      request.queueNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queueNames, "QueueNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.queueNamesShrink)) {
      query["QueueNames"] = request.queueNamesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQueues",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQueuesResponse>(await this.callApi(params, req, runtime), new $_model.ListQueuesResponse({}));
  }

  /**
   * Queries queues in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - ListQueuesRequest
   * @returns ListQueuesResponse
   */
  async listQueues(request: $_model.ListQueuesRequest): Promise<$_model.ListQueuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQueuesWithOptions(request, runtime);
  }

  /**
   * 查询产品支持的地域列表。
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

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.specCode)) {
      query["SpecCode"] = request.specCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRegions",
      version: "2024-07-30",
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
   * 查询产品支持的地域列表。
   * 
   * @param request - ListRegionsRequest
   * @returns ListRegionsResponse
   */
  async listRegions(request: $_model.ListRegionsRequest): Promise<$_model.ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the shared storage that is attached to a cluster.
   * 
   * @param request - ListSharedStoragesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSharedStoragesResponse
   */
  async listSharedStoragesWithOptions(request: $_model.ListSharedStoragesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSharedStoragesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!$dara.isNull(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSharedStorages",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSharedStoragesResponse>(await this.callApi(params, req, runtime), new $_model.ListSharedStoragesResponse({}));
  }

  /**
   * Queries the shared storage that is attached to a cluster.
   * 
   * @param request - ListSharedStoragesRequest
   * @returns ListSharedStoragesResponse
   */
  async listSharedStorages(request: $_model.ListSharedStoragesRequest): Promise<$_model.ListSharedStoragesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSharedStoragesWithOptions(request, runtime);
  }

  /**
   * Queries the software that can be installed in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - ListSoftwaresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSoftwaresResponse
   */
  async listSoftwaresWithOptions(request: $_model.ListSoftwaresRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSoftwaresResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSoftwares",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSoftwaresResponse>(await this.callApi(params, req, runtime), new $_model.ListSoftwaresResponse({}));
  }

  /**
   * Queries the software that can be installed in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - ListSoftwaresRequest
   * @returns ListSoftwaresResponse
   */
  async listSoftwares(request: $_model.ListSoftwaresRequest): Promise<$_model.ListSoftwaresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSoftwaresWithOptions(request, runtime);
  }

  /**
   * Queries the users of a cluster.
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: $_model.ListUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListUsersResponse({}));
  }

  /**
   * Queries the users of a cluster.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * Stops uncompleted jobs in a batch in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param tmpReq - StopJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopJobsResponse
   */
  async stopJobsWithOptions(tmpReq: $_model.StopJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopJobsResponse> {
    tmpReq.validate();
    let request = new $_model.StopJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.jobIds)) {
      request.jobIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobIds, "JobIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.jobIdsShrink)) {
      query["JobIds"] = request.jobIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopJobs",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopJobsResponse>(await this.callApi(params, req, runtime), new $_model.StopJobsResponse({}));
  }

  /**
   * Stops uncompleted jobs in a batch in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - StopJobsRequest
   * @returns StopJobsResponse
   */
  async stopJobs(request: $_model.StopJobsRequest): Promise<$_model.StopJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopJobsWithOptions(request, runtime);
  }

  /**
   * Uninstalls an addon.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Take note of the following items when you call this operation:
   * *   The cluster must be in the `Running` state.
   * *   Clusters fall into the following types:
   *     *   Regular clusters on Alibaba Cloud Public Cloud
   *     *   Managed clusters on Alibaba Cloud Public Cloud
   * 
   * @param request - UnInstallAddonRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnInstallAddonResponse
   */
  async unInstallAddonWithOptions(request: $_model.UnInstallAddonRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnInstallAddonResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addonId)) {
      query["AddonId"] = request.addonId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnInstallAddon",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnInstallAddonResponse>(await this.callApi(params, req, runtime), new $_model.UnInstallAddonResponse({}));
  }

  /**
   * Uninstalls an addon.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Take note of the following items when you call this operation:
   * *   The cluster must be in the `Running` state.
   * *   Clusters fall into the following types:
   *     *   Regular clusters on Alibaba Cloud Public Cloud
   *     *   Managed clusters on Alibaba Cloud Public Cloud
   * 
   * @param request - UnInstallAddonRequest
   * @returns UnInstallAddonResponse
   */
  async unInstallAddon(request: $_model.UnInstallAddonRequest): Promise<$_model.UnInstallAddonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unInstallAddonWithOptions(request, runtime);
  }

  /**
   * Uninstalls software systems from an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## Interface Description
   * When calling this interface, please note:
   * The cluster status must be `Running`.
   * 
   * @param tmpReq - UninstallSoftwaresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallSoftwaresResponse
   */
  async uninstallSoftwaresWithOptions(tmpReq: $_model.UninstallSoftwaresRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UninstallSoftwaresResponse> {
    tmpReq.validate();
    let request = new $_model.UninstallSoftwaresShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.additionalPackages)) {
      request.additionalPackagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.additionalPackages, "AdditionalPackages", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallSoftwares",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UninstallSoftwaresResponse>(await this.callApi(params, req, runtime), new $_model.UninstallSoftwaresResponse({}));
  }

  /**
   * Uninstalls software systems from an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## Interface Description
   * When calling this interface, please note:
   * The cluster status must be `Running`.
   * 
   * @param request - UninstallSoftwaresRequest
   * @returns UninstallSoftwaresResponse
   */
  async uninstallSoftwares(request: $_model.UninstallSoftwaresRequest): Promise<$_model.UninstallSoftwaresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uninstallSoftwaresWithOptions(request, runtime);
  }

  /**
   * Modify the basic information of a specified cluster.
   * 
   * @param tmpReq - UpdateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClusterResponse
   */
  async updateClusterWithOptions(tmpReq: $_model.UpdateClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateClusterResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clusterCustomConfiguration)) {
      request.clusterCustomConfigurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clusterCustomConfiguration, "ClusterCustomConfiguration", "json");
    }

    if (!$dara.isNull(tmpReq.monitorSpec)) {
      request.monitorSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.monitorSpec, "MonitorSpec", "json");
    }

    if (!$dara.isNull(tmpReq.schedulerSpec)) {
      request.schedulerSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.schedulerSpec, "SchedulerSpec", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!$dara.isNull(request.clusterCustomConfigurationShrink)) {
      query["ClusterCustomConfiguration"] = request.clusterCustomConfigurationShrink;
    }

    if (!$dara.isNull(request.clusterDescription)) {
      query["ClusterDescription"] = request.clusterDescription;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.enableScaleIn)) {
      query["EnableScaleIn"] = request.enableScaleIn;
    }

    if (!$dara.isNull(request.enableScaleOut)) {
      query["EnableScaleOut"] = request.enableScaleOut;
    }

    if (!$dara.isNull(request.growInterval)) {
      query["GrowInterval"] = request.growInterval;
    }

    if (!$dara.isNull(request.idleInterval)) {
      query["IdleInterval"] = request.idleInterval;
    }

    if (!$dara.isNull(request.maxCoreCount)) {
      query["MaxCoreCount"] = request.maxCoreCount;
    }

    if (!$dara.isNull(request.maxCount)) {
      query["MaxCount"] = request.maxCount;
    }

    if (!$dara.isNull(request.monitorSpecShrink)) {
      query["MonitorSpec"] = request.monitorSpecShrink;
    }

    if (!$dara.isNull(request.schedulerSpecShrink)) {
      query["SchedulerSpec"] = request.schedulerSpecShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCluster",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateClusterResponse>(await this.callApi(params, req, runtime), new $_model.UpdateClusterResponse({}));
  }

  /**
   * Modify the basic information of a specified cluster.
   * 
   * @param request - UpdateClusterRequest
   * @returns UpdateClusterResponse
   */
  async updateCluster(request: $_model.UpdateClusterRequest): Promise<$_model.UpdateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateClusterWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of compute nodes in an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you delete a compute node, we recommend that you export all job data from the node to prevent data loss.
   * 
   * @param tmpReq - UpdateNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNodesResponse
   */
  async updateNodesWithOptions(tmpReq: $_model.UpdateNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNodesResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instances)) {
      request.instancesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instances, "Instances", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instancesShrink)) {
      query["Instances"] = request.instancesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNodes",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNodesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNodesResponse({}));
  }

  /**
   * Updates the configurations of compute nodes in an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you delete a compute node, we recommend that you export all job data from the node to prevent data loss.
   * 
   * @param request - UpdateNodesRequest
   * @returns UpdateNodesResponse
   */
  async updateNodes(request: $_model.UpdateNodesRequest): Promise<$_model.UpdateNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNodesWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a queue in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param tmpReq - UpdateQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQueueResponse
   */
  async updateQueueWithOptions(tmpReq: $_model.UpdateQueueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateQueueResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateQueueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queue)) {
      request.queueShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queue, "Queue", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.queueShrink)) {
      query["Queue"] = request.queueShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQueue",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateQueueResponse>(await this.callApi(params, req, runtime), new $_model.UpdateQueueResponse({}));
  }

  /**
   * Modifies the configurations of a queue in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - UpdateQueueRequest
   * @returns UpdateQueueResponse
   */
  async updateQueue(request: $_model.UpdateQueueRequest): Promise<$_model.UpdateQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateQueueWithOptions(request, runtime);
  }

  /**
   * Updates the information of a user in an Elastic High Performance Computing (E-HPC) cluster, including the user group and password.
   * 
   * @param request - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(request: $_model.UpdateUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.group)) {
      query["Group"] = request.group;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUser",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserResponse({}));
  }

  /**
   * Updates the information of a user in an Elastic High Performance Computing (E-HPC) cluster, including the user group and password.
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

}
