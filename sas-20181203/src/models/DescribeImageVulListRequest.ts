// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageVulListRequest extends $dara.Model {
  /**
   * @remarks
   * The alias of the vulnerability.
   * 
   * @example
   * High severity vulnerability that affects org.eclipse.jetty:jetty-server
   */
  aliasName?: string;
  /**
   * @remarks
   * The ID of the cluster to which the container belongs.
   * 
   * @example
   * cc20a1024011c44b6a8710d6f8b****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * docker-law
   */
  clusterName?: string;
  /**
   * @remarks
   * The ID of the container.
   * 
   * @example
   * c08d5fc1a329a4b88950a253d082f****
   */
  containerId?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether the vulnerability is handled. Valid values:
   * 
   * *   **y**: yes
   * *   **n**: no
   * 
   * @example
   * y
   */
  dealed?: string;
  /**
   * @remarks
   * The digest of the image.
   * 
   * @example
   * 8f0fbdb41d3d1ade4ffdf21558443f4c03342010563bb8c43ccc09594d507012
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
   * The instance ID of the asset.
   * 
   * @example
   * 1-qeqewqw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * debian:10:CVE-2019-9893
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * test-002
   */
  namespace?: string;
  /**
   * @remarks
   * The priority to fix the vulnerability. Valid values:
   * 
   * *   **asap**: high. You must fix the vulnerability at the earliest opportunity.
   * *   **later**: medium. You can fix the vulnerability based on your business requirements.
   * *   **nntf**: low. You can ignore the vulnerability.
   * 
   * @example
   * asap
   */
  necessity?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The pod.
   * 
   * @example
   * 22222-7xsqq
   */
  pod?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * qew****
   */
  repoId?: string;
  /**
   * @remarks
   * The instance ID of the image repository.
   * 
   * @example
   * i-qewqrqcsadf****
   */
  repoInstanceId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * libssh2
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace to which the image repository belongs.
   * 
   * @example
   * libssh2
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The region ID of the image repository.
   * 
   * @example
   * cn-hangzhou
   */
  repoRegionId?: string;
  /**
   * @remarks
   * The tag of this vulnerability. Valid values:
   * 
   * *   **AI**: AI-related components.
   * 
   * @example
   * AI
   */
  ruleTag?: string;
  /**
   * @remarks
   * The types of the assets that you want to scan.
   */
  scanRange?: string[];
  /**
   * @remarks
   * The status of the vulnerability. Valid values:
   * 
   * *   **1**: unfixed
   * *   **4**: being fixed
   * *   **7**: fixed
   * 
   * @example
   * 1
   */
  statusList?: string;
  /**
   * @remarks
   * The tag that is added to the image vulnerability.
   * 
   * @example
   * oval
   */
  tag?: string;
  /**
   * @remarks
   * The type of the vulnerability. Set the value to **cve**, which indicates image vulnerabilities.
   * 
   * This parameter is required.
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The UUIDs of the assets. Separate multiple UUIDs with commas (,).
   * 
   * @example
   * 0004a32a0305a7f6ab5ff9600d47****
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
      lang: 'Lang',
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
      ruleTag: 'RuleTag',
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
      lang: 'string',
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
      ruleTag: 'string',
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

