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
   * The ID of the container cluster.
   * 
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the ID of the container cluster.
   * 
   * @example
   * c60b77fe62093480db6164a3c2fa5****
   */
  clusterId?: string;
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
   * The Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.
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
   * The SHA-256 value of the image digest.
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
   * Specifies whether to query the vulnerabilities in the latest images. If you do not specify this parameter, the vulnerabilities in all images are queried. Valid values:
   * 
   * *   **0**: does not query the vulnerabilities in the latest images.
   * *   **1**: queries the vulnerabilities in the latest images.
   * 
   * @example
   * 0
   */
  isLatest?: number;
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
   * The number of entries to return on each page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the patch that is used to fix the vulnerability.
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
   * An array consisting of the types of the assets that you want to scan.
   */
  scanRange?: string[];
  /**
   * @remarks
   * The type of the vulnerability that you want to query. Valid values:
   * 
   * *   **cve**: image system vulnerability
   * *   **sca**: image application vulnerability
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the asset. Separate multiple UUIDs with commas (,).
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

