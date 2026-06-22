// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageGroupedVulListRequest extends $dara.Model {
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
   * The ID of the container cluster to query.
   * > Call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to obtain this parameter.
   * 
   * @example
   * c60b77fe62093480db6164a3c2fa5****
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number of the page to return in the query results. Default value: **1**, which indicates that the first page is returned.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The CVE ID of the vulnerability.
   * 
   * @example
   * CVE-2017-15420
   */
  cveId?: string;
  /**
   * @remarks
   * The ID of the asset group.
   * 
   * @example
   * 1311
   */
  groupId?: string;
  /**
   * @remarks
   * The SHA256 value of the image digest.
   * 
   * @example
   * w213412341dfsfasdfafadfasfasf
   */
  imageDigest?: string;
  /**
   * @remarks
   * The layer of the image.
   * 
   * @example
   * b1f5b9420803ad0657cf21566e3e20acc08581e7f22991249ef3aa80b8b1c587
   */
  imageLayer?: string;
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * oval
   */
  imageTag?: string;
  /**
   * @remarks
   * Specifies whether to query vulnerabilities of only the latest image. If this parameter is not set, vulnerabilities of all images are queried. Valid values:
   * 
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 0
   */
  isLatest?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
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
   * The priority level for fixing the vulnerability. Valid values:
   * - **asap**: high-priority vulnerability (typically a high-risk vulnerability)
   * - **later**: medium-priority vulnerability (typically a medium-risk vulnerability)
   * - **nntf**: low-priority vulnerability (typically a low-risk vulnerability).
   * 
   * @example
   * asap
   */
  necessity?: string;
  /**
   * @remarks
   * The number of image vulnerabilities to display on each page during a paging query. Default value: **20**, which indicates that 20 image vulnerabilities are displayed on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the vulnerability patch.
   * 
   * @example
   * 1341512412
   */
  patchId?: number;
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
   * The name of the image repository.
   * 
   * @example
   * libssh2
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace of the image repository.
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
   * The vulnerability tag. Valid values:
   * 
   *  - **AI**: vulnerabilities related to AI components.
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
   * The type of vulnerability to query. Valid values:
   * - **cve**: image system vulnerability
   * - **sca**: image application vulnerability.
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The list of unique IDs of asset instances. Separate multiple IDs with commas (,).
   * 
   * @example
   * uuid-13134124****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      clusterId: 'ClusterId',
      currentPage: 'CurrentPage',
      cveId: 'CveId',
      groupId: 'GroupId',
      imageDigest: 'ImageDigest',
      imageLayer: 'ImageLayer',
      imageTag: 'ImageTag',
      isLatest: 'IsLatest',
      lang: 'Lang',
      name: 'Name',
      necessity: 'Necessity',
      pageSize: 'PageSize',
      patchId: 'PatchId',
      repoId: 'RepoId',
      repoInstanceId: 'RepoInstanceId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoRegionId: 'RepoRegionId',
      ruleTag: 'RuleTag',
      scanRange: 'ScanRange',
      type: 'Type',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      clusterId: 'string',
      currentPage: 'number',
      cveId: 'string',
      groupId: 'string',
      imageDigest: 'string',
      imageLayer: 'string',
      imageTag: 'string',
      isLatest: 'number',
      lang: 'string',
      name: 'string',
      necessity: 'string',
      pageSize: 'number',
      patchId: 'number',
      repoId: 'string',
      repoInstanceId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoRegionId: 'string',
      ruleTag: 'string',
      scanRange: { 'type': 'array', 'itemType': 'string' },
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

