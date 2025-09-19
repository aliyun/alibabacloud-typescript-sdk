// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCanFixVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList extends $dara.Model {
  /**
   * @remarks
   * The complete version number of the software package.
   * 
   * @example
   * 3.10.0-693.2.2.el7
   */
  fullVersion?: string;
  /**
   * @remarks
   * The SHA-256 value of the digest of the image layer.
   * 
   * @example
   * b1f5b9420803ad0657cf21566e3e20acc08581e7f22991249ef3aa80b8b1****
   */
  layer?: string;
  /**
   * @remarks
   * The information about the detected vulnerability.
   * 
   * @example
   * python-perf version less than 0:3.10.0-693.21.1.el7
   */
  matchDetail?: string;
  /**
   * @remarks
   * The rule that is used to detect the vulnerability.
   */
  matchList?: string[];
  /**
   * @remarks
   * The name of the software package.
   * 
   * @example
   * python-perf
   */
  name?: string;
  /**
   * @remarks
   * The path of the software that has the vulnerability.
   * 
   * @example
   * /usr/lib64/python2.7/site-packages
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
   * The version number of the software package.
   * 
   * @example
   * 3.10.0
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

export class DescribeCanFixVulListResponseBodyVulRecordsExtendContentJson extends $dara.Model {
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
   * The RPM packages.
   */
  rpmEntityList?: DescribeCanFixVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList[];
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
      rpmEntityList: { 'type': 'array', 'itemType': DescribeCanFixVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList },
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

export class DescribeCanFixVulListResponseBodyVulRecords extends $dara.Model {
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
   * *   **yes**
   * *   **no**
   * 
   * @example
   * yes
   */
  canFix?: string;
  /**
   * @remarks
   * Indicates whether the packages of the software that has the vulnerability can be upgraded by using Security Center. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  canUpdate?: boolean;
  /**
   * @remarks
   * The cluster ID.
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
   * The container ID.
   * 
   * @example
   * 04d20e98c8e2c93b7b864372084320a15a58c8671e53c972ce3a71d9c163****
   */
  containerId?: string;
  /**
   * @remarks
   * The extended information about the vulnerability.
   */
  extendContentJson?: DescribeCanFixVulListResponseBodyVulRecordsExtendContentJson;
  /**
   * @remarks
   * The timestamp generated when the vulnerability was first detected. Unit: milliseconds.
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
   * The unique identifier of the image.
   * 
   * @example
   * 8f0fbdb41d3d1ade4ffdf21558443f4c03342010563bb8c43ccc09594d50****
   */
  imageDigest?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * The name must be 3 to 64 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * testInstance
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the asset.
   * 
   * @example
   * 1.2.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the asset.
   * 
   * @example
   * 172.19.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The timestamp generated when the vulnerability was last detected. Unit: milliseconds.
   * 
   * @example
   * 1620404763000
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
   * *   **agentless**
   * *   **image**
   * *   **container**
   * 
   * @example
   * agentless
   */
  maliciousSource?: string;
  /**
   * @remarks
   * The timestamp generated when the vulnerability status was modified. Unit: milliseconds.
   * 
   * @example
   * 1620404763000
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
   * *   **asap**: high
   * *   **later**: medium
   * *   **nntf**: low
   * 
   * >  We recommend that you fix high-level vulnerabilities as soon as possible.
   * 
   * @example
   * asap,later,nntf
   */
  necessity?: string;
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
   * The vulnerability ID.
   * 
   * @example
   * 782661
   */
  primaryId?: number;
  /**
   * @remarks
   * The CVE IDs related to the vulnerability. Multiple CVE IDs are separated by commas (,).
   * 
   * @example
   * CVE-2017-7518,CVE-2017-12188
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
   * 3rdparty
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The timestamp generated when the scan task was performed. Unit: milliseconds.
   * 
   * @example
   * 1649814050000
   */
  scanTime?: number;
  /**
   * @remarks
   * The status of the vulnerability. Valid values:
   * 
   * *   **1**: The vulnerability is unfixed.
   * *   **4**: The vulnerability is being fixed.
   * *   **7**: The vulnerability is fixed.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The tag that is added to the image.
   * 
   * @example
   * latest
   */
  tag?: string;
  /**
   * @remarks
   * The ID of the asset that is scanned.
   * 
   * @example
   * 300269
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the asset that is scanned.
   * 
   * @example
   * source-test-obj-XM0Ma
   */
  targetName?: string;
  /**
   * @remarks
   * The type of the asset that is scanned. Valid values:
   * 
   * *   **IMAGE**
   * *   **ECS_IMAGE**
   * *   **ECS_SNAPSHOT**
   * 
   * @example
   * ECS_IMAGE
   */
  targetType?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   **cve**: system vulnerability
   * *   **sca**: application vulnerability
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the container image.
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
      extendContentJson: DescribeCanFixVulListResponseBodyVulRecordsExtendContentJson,
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

export class DescribeCanFixVulListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1408FDB3-46F4-513C-9918-FE7D356DF048
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the vulnerability.
   */
  vulRecords?: DescribeCanFixVulListResponseBodyVulRecords[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vulRecords: 'VulRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vulRecords: { 'type': 'array', 'itemType': DescribeCanFixVulListResponseBodyVulRecords },
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

