// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCanFixVulListRequest extends $dara.Model {
  /**
   * @remarks
   * The alias of the vulnerability that is specified in Common Vulnerabilities and Exposures (CVE).
   * 
   * @example
   * RHSA-2017:0184-Important: mysql security update
   */
  aliasName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of clusters.
   * 
   * @example
   * c80f79959fd724a888e1187779b13****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * sas-test-cnnf
   */
  clusterName?: string;
  /**
   * @remarks
   * The container ID.
   * 
   * @example
   * 48a6d9a92435a13ad573372c3f3c63b7e04d106458141df9f92155709d5a****
   */
  containerId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether the vulnerability is handled. Valid values:
   * 
   * **y**: The vulnerability is handled. **n**: The vulnerability is not handled.
   * 
   * @example
   * n
   */
  dealed?: string;
  /**
   * @remarks
   * The unique identifier of the image.
   * 
   * @example
   * 8f0fbdb41d3d1ade4ffdf21558443f4c03342010563bb8c43ccc09594d50****
   */
  digest?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * registry.cn-wulanchabu.aliyuncs.com/sas_test/huxin-test-001:nuxeo6-****
   */
  image?: string;
  /**
   * @remarks
   * The ID of the container image.
   * 
   * >  You can call the [ListRepository](https://help.aliyun.com/document_detail/451339.html) operation of Container Registry and obtain the ID of the container image from **InstanceId** in the response.
   * 
   * @example
   * cri-rv4nvbv8iju4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * scan:AVD-2022-953356
   */
  name?: string;
  /**
   * @remarks
   * The namespace of the cluster.
   * 
   * >  You can call the [GetOpaClusterNamespaceList](~~GetOpaClusterNamespaceList~~) operation to query the namespaces of clusters.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The priority to fix the vulnerability. Separate multiple priorities with commas (,). Valid values:
   * 
   * *   **asap**: high
   * *   **later**: medium
   * *   **nntf**: low
   * 
   * @example
   * asap,later,nntf
   */
  necessity?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the container group.
   * 
   * @example
   * 22222-7xsqq
   */
  pod?: string;
  /**
   * @remarks
   * The region ID of the image repository. Valid values:
   * 
   * *   **cn-beijing**: China (Beijing)
   * *   **cn-zhangjiakou**: China (Zhangjiakou)
   * *   **cn-hangzhou**: China (Hangzhou)
   * *   **cn-shanghai**: China (Shanghai)
   * *   **cn-shenzhen**: China (Shenzhen)
   * *   **cn-hongkong**: China (Hong Kong)
   * *   **ap-southeast-1**: Singapore
   * *   **ap-southeast-5**: Indonesia (Jakarta)
   * *   **us-east-1**: US (Virginia)
   * *   **us-west-1**: US (Silicon Valley)
   * *   **eu-central-1**: Germany (Frankfurt)
   * *   **eu-west-1**: UK (London)
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * >  You can call the [ListRepository](https://help.aliyun.com/document_detail/145293.html) operation of Container Registry and obtain the ID of the image repository from **RepoId** in the response.
   * 
   * @example
   * crr-avo7qp02simz2njo
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the container image.
   * 
   * >  You can call the [ListRepository](https://help.aliyun.com/document_detail/451339.html) operation of Container Registry and obtain the ID of the container image from **InstanceId** in the response.
   * 
   * @example
   * cri-rv4nvbv8iju4****
   */
  repoInstanceId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * >  Fuzzy match is supported.
   * 
   * @example
   * digital-account
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace to which the image repository belongs.
   * 
   * >  Fuzzy match is supported.
   * 
   * @example
   * ns-digital-dev
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The region ID of the image repository. Valid values:
   * 
   * *   **cn-beijing**: China (Beijing)
   * *   **cn-zhangjiakou**: China (Zhangjiakou)
   * *   **cn-hangzhou**: China (Hangzhou)
   * *   **cn-shanghai**: China (Shanghai)
   * *   **cn-shenzhen**: China (Shenzhen)
   * *   **cn-hongkong**: China (Hong Kong)
   * *   **ap-southeast-1**: Singapore
   * *   **ap-southeast-5**: Indonesia (Jakarta)
   * *   **us-east-1**: US (Virginia)
   * *   **us-west-1**: US (Silicon Valley)
   * *   **eu-central-1**: Germany (Frankfurt)
   * *   **eu-west-1**: UK (London)
   * 
   * @example
   * cn-hangzhou
   */
  repoRegionId?: string;
  /**
   * @remarks
   * The type of the asset that you want to scan. Valid values:
   * 
   * *   **image**
   * *   **container**
   */
  scanRange?: string[];
  /**
   * @remarks
   * The status of the vulnerability. Valid values:
   * 
   * *   **1**: The vulnerability is unfixed.
   * *   **4**: The vulnerability is being fixed.
   * *   **7**:The vulnerability is fixed.
   * 
   * @example
   * 1
   */
  statusList?: string;
  /**
   * @remarks
   * The tag to add to the image.
   * 
   * @example
   * 0.1.0
   */
  tag?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   **cve**: system vulnerability
   * *   **sca**: application vulnerability
   * 
   * This parameter is required.
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the image. Separate multiple UUIDs with commas (,).
   * 
   * @example
   * d15df12472809c1c3b158606c0f1****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      containerId: 'ContainerId',
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      digest: 'Digest',
      image: 'Image',
      instanceId: 'InstanceId',
      name: 'Name',
      namespace: 'Namespace',
      necessity: 'Necessity',
      pageSize: 'PageSize',
      pod: 'Pod',
      regionId: 'RegionId',
      repoId: 'RepoId',
      repoInstanceId: 'RepoInstanceId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoRegionId: 'RepoRegionId',
      scanRange: 'ScanRange',
      statusList: 'StatusList',
      tag: 'Tag',
      type: 'Type',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      clusterId: 'string',
      clusterName: 'string',
      containerId: 'string',
      currentPage: 'number',
      dealed: 'string',
      digest: 'string',
      image: 'string',
      instanceId: 'string',
      name: 'string',
      namespace: 'string',
      necessity: 'string',
      pageSize: 'number',
      pod: 'string',
      regionId: 'string',
      repoId: 'string',
      repoInstanceId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoRegionId: 'string',
      scanRange: { 'type': 'array', 'itemType': 'string' },
      statusList: 'string',
      tag: 'string',
      type: 'string',
      uuids: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scanRange)) {
      $dara.Model.validateArray(this.scanRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

