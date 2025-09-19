// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList extends $dara.Model {
  /**
   * @remarks
   * The complete version number of the package.
   * 
   * @example
   * 2.3.3-4
   */
  fullVersion?: string;
  /**
   * @remarks
   * The SHA-256 value of the digest of the image layer.
   * 
   * @example
   * b1f5b9420803ad0657cf21566e3e20acc08581e7f22991249ef3aa80b8b1c587
   */
  layer?: string;
  /**
   * @remarks
   * The reason why the vulnerability is detected.
   * 
   * @example
   * libseccomp2 version less than equals 2.3.3-4
   */
  matchDetail?: string;
  /**
   * @remarks
   * The details of the rule that is used to detect the vulnerability.
   * 
   * @example
   * ["libseccomp2 version less than equals 2.3.3-4"]
   */
  matchList?: string[];
  /**
   * @remarks
   * The name of the software package.
   * 
   * @example
   * libseccomp2
   */
  name?: string;
  /**
   * @remarks
   * The path of the software that has the vulnerability.
   * 
   * @example
   * /usr/lib64/libssh2.so.1
   */
  path?: string;
  /**
   * @remarks
   * The command that is used to fix the vulnerability.
   * 
   * @example
   * apt-get update && apt-get install libseccomp2  --only-upgrade
   */
  updateCmd?: string;
  /**
   * @remarks
   * The version number of the package.
   * 
   * @example
   * 2.3.3-4
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      fullVersion: 'FullVersion',
      layer: 'Layer',
      matchDetail: 'MatchDetail',
      matchList: 'MatchList',
      name: 'Name',
      path: 'Path',
      updateCmd: 'UpdateCmd',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullVersion: 'string',
      layer: 'string',
      matchDetail: 'string',
      matchList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      path: 'string',
      updateCmd: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.matchList)) {
      $dara.Model.validateArray(this.matchList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageVulListResponseBodyVulRecordsExtendContentJson extends $dara.Model {
  /**
   * @remarks
   * The name of the operating system.
   * 
   * @example
   * debian
   */
  os?: string;
  /**
   * @remarks
   * The version of the operating system in the image.
   * 
   * @example
   * 10.9
   */
  osRelease?: string;
  /**
   * @remarks
   * The details of the package of the software that has the vulnerability.
   */
  rpmEntityList?: DescribeImageVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList[];
  static names(): { [key: string]: string } {
    return {
      os: 'Os',
      osRelease: 'OsRelease',
      rpmEntityList: 'RpmEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      os: 'string',
      osRelease: 'string',
      rpmEntityList: { 'type': 'array', 'itemType': DescribeImageVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList },
    };
  }

  validate() {
    if(Array.isArray(this.rpmEntityList)) {
      $dara.Model.validateArray(this.rpmEntityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageVulListResponseBodyVulRecords extends $dara.Model {
  /**
   * @remarks
   * The alias of the vulnerability.
   * 
   * @example
   * CVE-2018-25010:libwebp up to 1.0.0 ApplyFilter out-of-bounds read
   */
  aliasName?: string;
  /**
   * @remarks
   * Indicates whether the vulnerability can be fixed in the Security Center console. Valid values:
   * 
   * *   **yes**: yes
   * *   **no**: no
   * 
   * @example
   * yes
   */
  canFix?: string;
  /**
   * @remarks
   * Indicates whether the package of the software that has the vulnerability can be upgraded by using Security Center. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  canUpdate?: boolean;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c08d5fc1a329a4b88950a253d082f1****
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
   * 04d20e98c8e2c93b7b864372084320a15a58c8671e53c972ce3a71d9c163****
   */
  containerId?: string;
  /**
   * @remarks
   * The extended information about the vulnerability.
   */
  extendContentJson?: DescribeImageVulListResponseBodyVulRecordsExtendContentJson;
  /**
   * @remarks
   * The timestamp when the first scan was performed. Unit: milliseconds.
   * 
   * @example
   * 1620752053000
   */
  firstTs?: number;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * registry.cn-wulanchabu.aliyuncs.com/sas_test/huxin-test-001:nuxeo6-conta****
   */
  image?: string;
  /**
   * @remarks
   * The digest of the image.
   * 
   * @example
   * 8f0fbdb41d3d1ade4ffdf21558443f4c03342010563bb8c43ccc09594d507012
   */
  imageDigest?: string;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * testInstance
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 1.2.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 172.19.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The timestamp when the last scan was performed. Unit: milliseconds.
   * 
   * @example
   * 1631779996000
   */
  lastTs?: number;
  /**
   * @remarks
   * The image layers.
   */
  layers?: string[];
  /**
   * @remarks
   * The source of the malicious file. Valid values:
   * 
   * *   **agentless**: agentless detection
   * *   **image**: image
   * *   **container**: container
   * 
   * @example
   * agentless
   */
  maliciousSource?: string;
  /**
   * @remarks
   * The timestamp when the information about the vulnerability was updated. Unit: milliseconds.
   * 
   * @example
   * 1580808765000
   */
  modifyTs?: number;
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
   * The pod.
   * 
   * @example
   * 22222-7xsqq
   */
  pod?: string;
  /**
   * @remarks
   * The ID of the vulnerability.
   * 
   * @example
   * 782661
   */
  primaryId?: number;
  /**
   * @remarks
   * The Common Vulnerabilities and Exposures (CVE) ID of the associated vulnerability.
   * 
   * @example
   * CVE-2019-9893
   */
  related?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * varnish
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace to which the image repository belongs.
   * 
   * @example
   * default
   */
  repoNamespace?: string;
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
   * The time at which the scan was performed. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1649814050000
   */
  scanTime?: number;
  /**
   * @remarks
   * The status of the vulnerability. Valid values:
   * 
   * *   **1**: unfixed
   * *   **7**: fixed
   * 
   * @example
   * 1
   */
  status?: number;
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
   * The ID of the asset on which the vulnerability is detected.
   * 
   * @example
   * m-bp17m0pc0xprzbwo****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the asset on which the vulnerability is detected.
   * 
   * @example
   * source-test-obj-XM0Ma
   */
  targetName?: string;
  /**
   * @remarks
   * The type of the asset on which the vulnerability is detected. Valid values:
   * 
   * *   **ECS_SNAPSHOT**: snapshot
   * *   **ECS_IMAGE**: image
   * 
   * @example
   * ECS_IMAGE
   */
  targetType?: string;
  /**
   * @remarks
   * The type of the vulnerability. The value is fixed as CVE, which indicates image vulnerabilities.
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 0004a32a0305a7f6ab5ff9600d47****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      canFix: 'CanFix',
      canUpdate: 'CanUpdate',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      containerId: 'ContainerId',
      extendContentJson: 'ExtendContentJson',
      firstTs: 'FirstTs',
      image: 'Image',
      imageDigest: 'ImageDigest',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      lastTs: 'LastTs',
      layers: 'Layers',
      maliciousSource: 'MaliciousSource',
      modifyTs: 'ModifyTs',
      name: 'Name',
      namespace: 'Namespace',
      necessity: 'Necessity',
      pod: 'Pod',
      primaryId: 'PrimaryId',
      related: 'Related',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      ruleTag: 'RuleTag',
      scanTime: 'ScanTime',
      status: 'Status',
      tag: 'Tag',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetType: 'TargetType',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      canFix: 'string',
      canUpdate: 'boolean',
      clusterId: 'string',
      clusterName: 'string',
      containerId: 'string',
      extendContentJson: DescribeImageVulListResponseBodyVulRecordsExtendContentJson,
      firstTs: 'number',
      image: 'string',
      imageDigest: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      lastTs: 'number',
      layers: { 'type': 'array', 'itemType': 'string' },
      maliciousSource: 'string',
      modifyTs: 'number',
      name: 'string',
      namespace: 'string',
      necessity: 'string',
      pod: 'string',
      primaryId: 'number',
      related: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      ruleTag: 'string',
      scanTime: 'number',
      status: 'number',
      tag: 'string',
      targetId: 'string',
      targetName: 'string',
      targetType: 'string',
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(this.extendContentJson && typeof (this.extendContentJson as any).validate === 'function') {
      (this.extendContentJson as any).validate();
    }
    if(Array.isArray(this.layers)) {
      $dara.Model.validateArray(this.layers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageVulListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * D6B20156-49B0-5CF0-B14D-7ECA4B50DAAB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of vulnerabilities returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * An array that consists of the vulnerabilities.
   */
  vulRecords?: DescribeImageVulListResponseBodyVulRecords[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vulRecords: 'VulRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vulRecords: { 'type': 'array', 'itemType': DescribeImageVulListResponseBodyVulRecords },
    };
  }

  validate() {
    if(Array.isArray(this.vulRecords)) {
      $dara.Model.validateArray(this.vulRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

