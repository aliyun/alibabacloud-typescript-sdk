// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCanFixVulListRequest extends $dara.Model {
  /**
   * @remarks
   * The alias in the vulnerability advisory.
   * 
   * @example
   * RHSA-2017:0184-Important: mysql security update
   */
  aliasName?: string;
  /**
   * @remarks
   * The ID of the container cluster.
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to obtain this parameter.
   * 
   * @example
   * c80f79959fd724a888e1187779b13****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the container cluster.
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
   * The page number of the current page in a paging query. The value starts from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether the vulnerability is handled. Valid values:
   * 
   * **y**: Handled.
   * **n**: Not handled.
   * 
   * @example
   * n
   */
  dealed?: string;
  /**
   * @remarks
   * The unique identifier of the container image.
   * 
   * @example
   * 8f0fbdb41d3d1ade4ffdf21558443f4c03342010563bb8c43ccc09594d50****
   */
  digest?: string;
  /**
   * @remarks
   * The name of the container image.
   * 
   * @example
   * registry.cn-wulanchabu.aliyuncs.com/sas_test/huxin-test-001:nuxeo6-****
   */
  image?: string;
  /**
   * @remarks
   * The container image instance ID.
   * > Invoke the [ListRepository](https://help.aliyun.com/document_detail/451339.html) operation of Container Registry and obtain the container image instance ID from the **InstanceId** response parameter.
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
   * The cluster namespace.
   * > You can call the [GetOpaClusterNamespaceList](~~GetOpaClusterNamespaceList~~) operation to query this value.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The priority levels of vulnerabilities to query. Separate multiple levels with commas (,). Valid values:
   * 
   * - **asap**: high
   * - **later**: medium
   * - **nntf**: low.
   * 
   * @example
   * asap,later,nntf
   */
  necessity?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the pod.
   * 
   * @example
   * 22222-7xsqq
   */
  pod?: string;
  /**
   * @remarks
   * The region ID of the image repository. Valid values:
   * - **cn-beijing**: China (Beijing)
   * - **cn-zhangjiakou**: China (Zhangjiakou)
   * - **cn-hangzhou**: China (Hangzhou)
   * - **cn-shanghai**: China (Shanghai)
   * - **cn-shenzhen**: China (Shenzhen)
   * - **cn-hongkong**: Hong Kong (China)
   * - **ap-southeast-1**: Singapore
   * - **ap-southeast-5**: Indonesia (Jakarta)
   * - **us-east-1**: US (Virginia)
   * - **us-west-1**: US (Silicon Valley)
   * - **eu-central-1**: Germany (Frankfurt)
   * - **eu-west-1**: UK (London).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * > Call the [ListRepository](https://help.aliyun.com/document_detail/145293.html) operation of Container Registry and obtain the value of the **RepoId** response parameter.
   * 
   * @example
   * crr-avo7qp02simz2njo
   */
  repoId?: string;
  /**
   * @remarks
   * The container image instance ID.
   * > Invoke the [ListRepository](https://help.aliyun.com/document_detail/451339.html) operation of Container Registry and obtain the container image instance ID from the **InstanceId** response parameter.
   * 
   * @example
   * cri-rv4nvbv8iju4****
   */
  repoInstanceId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * > Fuzzy match is supported.
   * 
   * @example
   * digital-account
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace of the image repository.
   * > Fuzzy match is supported.
   * 
   * @example
   * ns-digital-dev
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The region ID of the image repository. Valid values:
   * - **cn-beijing**: China (Beijing)
   * - **cn-zhangjiakou**: China (Zhangjiakou)
   * - **cn-hangzhou**: China (Hangzhou)
   * - **cn-shanghai**: China (Shanghai)
   * - **cn-shenzhen**: China (Shenzhen)
   * - **cn-hongkong**: Hong Kong (China)
   * - **ap-southeast-1**: Singapore
   * - **ap-southeast-5**: Indonesia (Jakarta)
   * - **us-east-1**: US (Virginia)
   * - **us-west-1**: US (Silicon Valley)
   * - **eu-central-1**: Germany (Frankfurt)
   * - **eu-west-1**: UK (London).
   * 
   * @example
   * cn-hangzhou
   */
  repoRegionId?: string;
  /**
   * @remarks
   * The scan scope. Valid values:
   * 
   * - **image**: Image.
   * - **container**: Container.
   */
  scanRange?: string[];
  /**
   * @remarks
   * The fix status of the vulnerability. Valid values:
   * - **1**: Unfixed.
   * - **4**: Being fixed.
   * - **7**: Fixed.
   * 
   * @example
   * 1
   */
  statusList?: string;
  /**
   * @remarks
   * The tag of the container image.
   * 
   * @example
   * 0.1.0
   */
  tag?: string;
  /**
   * @remarks
   * The vulnerability type. Valid values:
   * - **cve**: system vulnerability
   * - **sca**: application vulnerability.
   * 
   * This parameter is required.
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The UUIDs of images. Separate multiple UUIDs with commas (,).
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

