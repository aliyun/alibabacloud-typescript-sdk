// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageVulListRequest extends $dara.Model {
  /**
   * @remarks
   * The alias of the vulnerability to query.
   * 
   * @example
   * High severity vulnerability that affects org.eclipse.jetty:jetty-server
   */
  aliasName?: string;
  /**
   * @remarks
   * The ID of the container cluster.
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
   * The page number of the page to return in a paginated query. Default value: **1**, which indicates the first page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether the vulnerability has been handled. Valid values:
   * - **y**: handled
   * - **n**: not handled.
   * 
   * @example
   * y
   */
  dealed?: string;
  /**
   * @remarks
   * The unique identifier of the container image.
   * 
   * @example
   * 8f0fbdb41d3d1ade4ffdf21558443f4c03342010563bb8c43ccc09594d507012
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
   * The ID of the asset instance.
   * 
   * @example
   * 1-qeqewqw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language type of the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the vulnerability to query.
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
   * The priority level of vulnerability fixing. Valid values:
   * - **asap**: high-priority vulnerability
   * - **later**: medium-priority vulnerability
   * - **nntf**: low-priority vulnerability.
   * 
   * @example
   * asap
   */
  necessity?: string;
  /**
   * @remarks
   * Settings for the number of vulnerabilities to display on each page in a paged query. Default value: **10**, which indicates that 10 vulnerabilities are displayed on each page.
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
   * The ID of the container image repository.
   * 
   * @example
   * qew****
   */
  repoId?: string;
  /**
   * @remarks
   * The instance ID of the container image repository.
   * 
   * @example
   * i-qewqrqcsadf****
   */
  repoInstanceId?: string;
  /**
   * @remarks
   * The name of the container image repository.
   * 
   * @example
   * libssh2
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace of the container image repository.
   * 
   * @example
   * libssh2
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The region ID of the container image repository.
   * 
   * @example
   * cn-hangzhou
   */
  repoRegionId?: string;
  /**
   * @remarks
   * The vulnerability tag. Valid values:
   * 
   * - **AI**: vulnerability related to AI components.
   * 
   * @example
   * AI
   */
  ruleTag?: string;
  /**
   * @remarks
   * The collection of scan ranges.
   */
  scanRange?: string[];
  /**
   * @remarks
   * The fix status of the vulnerability. Valid values:
   * - **1**: unfixed
   * - **4**: being fixed
   * - **7**: fixed.
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
   * oval
   */
  tag?: string;
  /**
   * @remarks
   * The type of vulnerability to query. Set the value to **cve**, which indicates container image vulnerabilities.
   * 
   * This parameter is required.
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The UUIDs of asset instances. Separate multiple UUIDs with commas (,).
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

