// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCanFixVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList extends $dara.Model {
  /**
   * @remarks
   * The full version number of the software package.
   * 
   * @example
   * 3.10.0-693.2.2.el7
   */
  fullVersion?: string;
  /**
   * @remarks
   * The SHA256 value of the container image layer digest.
   * 
   * @example
   * b1f5b9420803ad0657cf21566e3e20acc08581e7f22991249ef3aa80b8b1****
   */
  layer?: string;
  /**
   * @remarks
   * The details of the vulnerability match.
   * 
   * @example
   * python-perf version less than 0:3.10.0-693.21.1.el7
   */
  matchDetail?: string;
  /**
   * @remarks
   * The rule hits.
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
   * The path of the software that contains the vulnerability.
   * 
   * @example
   * /usr/lib64/python2.7/site-packages
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
   * The release version of the operating system corresponding to the container image.
   * 
   * @example
   * 10.9
   */
  osRelease?: string;
  /**
   * @remarks
   * The list of RPM packages.
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
   * Indicates whether the vulnerability can be fixed in the console. Valid values:
   * 
   * - **yes**: Fixable.
   * - **no**: Not fixable.
   * 
   * @example
   * yes
   */
  canFix?: string;
  /**
   * @remarks
   * Specifies whether the software package that causes the vulnerability can be upgraded through Security Center. Valid values:
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
   * The cluster ID.
   * 
   * @example
   * c08d5fc1a329a4b88950a253d082f1****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
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
   * The extended content of the vulnerability information.
   */
  extendContentJson?: DescribeCanFixVulListResponseBodyVulRecordsExtendContentJson;
  /**
   * @remarks
   * The timestamp when the vulnerability was first detected. Unit: milliseconds.
   * 
   * @example
   * 1620752053000
   */
  firstTs?: number;
  /**
   * @remarks
   * The image name.
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
   * 8f0fbdb41d3d1ade4ffdf21558443f4c03342010563bb8c43ccc09594d50****
   */
  imageDigest?: string;
  /**
   * @remarks
   * The instance name.
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
   * The timestamp when the vulnerability was last detected. Unit: milliseconds.
   * 
   * @example
   * 1620404763000
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
   * - **agentless**: Agentless detection.
   * - **image**: Image.
   * - **container**: Container.
   * 
   * @example
   * agentless
   */
  maliciousSource?: string;
  /**
   * @remarks
   * The timestamp when the vulnerability status was modified. Unit: milliseconds.
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
   * The priority level of the vulnerability fix. Valid values:
   * 
   * - **asap**: High.
   * - **later**: Medium.
   * - **nntf**: Low.
   * 
   * > Fix vulnerabilities with the **High** priority level as soon as possible.
   * 
   * @example
   * asap,later,nntf
   */
  necessity?: string;
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
   * The ID of the vulnerability.
   * 
   * @example
   * 782661
   */
  primaryId?: number;
  /**
   * @remarks
   * The list of CVEs associated with the vulnerability. Multiple values are separated by commas (,).
   * 
   * @example
   * CVE-2017-7518,CVE-2017-12188
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
   * 3rdparty
   */
  repoNamespace?: string;
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
   * - **1**: Unfixed.
   * - **4**: Being fixed.
   * - **7**: Fixed.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The tag of the container image.
   * 
   * @example
   * latest
   */
  tag?: string;
  /**
   * @remarks
   * The ID of the scan target.
   * 
   * @example
   * 300269
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
   * - **IMAGE**: Container image.
   * - **ECS_IMAGE**: Host image.
   * - **ECS_SNAPSHOT**: Snapshot.
   * 
   * @example
   * ECS_IMAGE
   */
  targetType?: string;
  /**
   * @remarks
   * The vulnerability type. Valid values:
   * - **cve**: system vulnerability
   * - **sca**: application vulnerability.
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
   * The vulnerability information returned.
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

