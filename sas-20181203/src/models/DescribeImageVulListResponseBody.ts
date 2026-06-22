// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList extends $dara.Model {
  /**
   * @remarks
   * The full version number of the software package.
   * 
   * @example
   * 2.3.3-4
   */
  fullVersion?: string;
  /**
   * @remarks
   * The SHA256 value of the container image layer digest.
   * 
   * @example
   * b1f5b9420803ad0657cf21566e3e20acc08581e7f22991249ef3aa80b8b1c587
   */
  layer?: string;
  /**
   * @remarks
   * The details of the vulnerability match.
   * 
   * @example
   * libseccomp2 version less than equals 2.3.3-4
   */
  matchDetail?: string;
  /**
   * @remarks
   * The list of matched rule details.
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
   * The path of the software that contains the vulnerability.
   * 
   * @example
   * /usr/lib64/libssh2.so.1
   */
  path?: string;
  /**
   * @remarks
   * The command to fix the vulnerability.
   * 
   * @example
   * apt-get update && apt-get install libseccomp2  --only-upgrade
   */
  updateCmd?: string;
  /**
   * @remarks
   * The version number of the software package.
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
   * The release version of the operating system corresponding to the container image.
   * 
   * @example
   * 10.9
   */
  osRelease?: string;
  /**
   * @remarks
   * The list of software packages that cause the vulnerability.
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
   * Indicates whether the vulnerability can be fixed from the console. Valid values:
   * 
   * - **yes**: can be fixed
   * - **no**: cannot be fixed.
   * 
   * @example
   * yes
   */
  canFix?: string;
  /**
   * @remarks
   * Indicates whether the software package that causes the vulnerability can be upgraded through Security Center. Valid values:
   * 
   * - **true**: Supported.
   * - **false**: Not supported.
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
   * The extended content of the vulnerability information.
   */
  extendContentJson?: DescribeImageVulListResponseBodyVulRecordsExtendContentJson;
  /**
   * @remarks
   * The timestamp of the first scan. Unit: milliseconds.
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
   * The unique identifier of the container image.
   * 
   * @example
   * 8f0fbdb41d3d1ade4ffdf21558443f4c03342010563bb8c43ccc09594d507012
   */
  imageDigest?: string;
  /**
   * @remarks
   * The name of the asset instance.
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
   * The timestamp of the latest scan. Unit: milliseconds.
   * 
   * @example
   * 1631779996000
   */
  lastTs?: number;
  /**
   * @remarks
   * The list of container image layers.
   */
  layers?: string[];
  /**
   * @remarks
   * The source of the malicious file. Valid values:
   * 
   * - **agentless**: agentless detection
   * - **image**: image
   * - **container**: container.
   * 
   * @example
   * agentless
   */
  maliciousSource?: string;
  /**
   * @remarks
   * The timestamp when the vulnerability record was last updated. Unit: milliseconds.
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
   * The details of the related vulnerability.
   * 
   * @example
   * CVE-2019-9893
   */
  related?: string;
  /**
   * @remarks
   * The name of the container image repository.
   * 
   * @example
   * varnish
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace of the container image repository.
   * 
   * @example
   * default
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The vulnerability tag. Valid values:
   * 
   *  - **AI**: vulnerability related to AI components.
   * 
   * @example
   * AI
   */
  ruleTag?: string;
  /**
   * @remarks
   * The timestamp of the scan. Unit: milliseconds.
   * 
   * @example
   * 1649814050000
   */
  scanTime?: number;
  /**
   * @remarks
   * The fix status of the vulnerability. Valid values:
   * - **1**: unfixed
   * - **7**: fixed.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The tag of the container image vulnerability.
   * 
   * @example
   * oval
   */
  tag?: string;
  /**
   * @remarks
   * The ID of the scan target.
   * 
   * @example
   * m-bp17m0pc0xprzbwo****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the scan target.
   * 
   * @example
   * source-test-obj-XM0Ma
   */
  targetName?: string;
  /**
   * @remarks
   * The object type of the scan target. Valid values:
   * 
   * - **ECS_IMAGE**: image.
   * - **ECS_SNAPSHOT**: snapshot.
   * 
   * @example
   * ECS_IMAGE
   */
  targetType?: string;
  /**
   * @remarks
   * The type of vulnerability queried. The value is fixed as cve, which indicates container image vulnerabilities.
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
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of vulnerabilities displayed on each page in a paged query. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
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
   * The list of vulnerability information.
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

