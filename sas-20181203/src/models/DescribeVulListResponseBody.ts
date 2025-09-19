// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulListResponseBodyVulRecordsExtendContentJsonNecessity extends $dara.Model {
  /**
   * @remarks
   * The asset importance score. Valid values:
   * 
   * *   **2**: important asset.
   * *   **1**: common asset.
   * *   **0**: test asset.
   * 
   * @example
   * 1
   */
  assetsFactor?: string;
  /**
   * @remarks
   * The Common Vulnerability Scoring System (CVSS) score.
   * 
   * @example
   * 7.8
   */
  cvssFactor?: string;
  /**
   * @remarks
   * The environment score.
   * 
   * @example
   * 1.0
   */
  enviromentFactor?: string;
  /**
   * @remarks
   * Indicates whether the vulnerability priority score is calculated. Valid values:
   * 
   * *   **0**: no.
   * *   **1**: yes.
   * 
   * @example
   * 1
   */
  isCalc?: string;
  /**
   * @remarks
   * The status of the vulnerability priority score. Valid values:
   * 
   * *   **none**: No score is generated.
   * *   **pending**: The score is pending calculation.
   * *   **normal**: The calculation is normal.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The time score.
   * 
   * @example
   * 1.0
   */
  timeFactor?: string;
  /**
   * @remarks
   * The vulnerability priority score.
   * 
   * The following list describes scores and related fixing suggestions:
   * 
   * *   If the score is from **13.5 to 15**, the vulnerability is a high-risk vulnerability. You must fix the vulnerability at the earliest opportunity.
   * *   If the score is **greater than or equal to 7 but less than 13.5**, the vulnerability is a medium-risk vulnerability. You can fix the vulnerability at your convenience.
   * *   If the score is **less than 7**, the vulnerability is a low-risk vulnerability. You can ignore the vulnerability.
   * 
   * @example
   * 7.8
   */
  totalScore?: string;
  static names(): { [key: string]: string } {
    return {
      assetsFactor: 'Assets_factor',
      cvssFactor: 'Cvss_factor',
      enviromentFactor: 'Enviroment_factor',
      isCalc: 'Is_calc',
      status: 'Status',
      timeFactor: 'Time_factor',
      totalScore: 'Total_score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsFactor: 'string',
      cvssFactor: 'string',
      enviromentFactor: 'string',
      isCalc: 'string',
      status: 'string',
      timeFactor: 'string',
      totalScore: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList extends $dara.Model {
  /**
   * @remarks
   * The name of the container.
   * 
   * @example
   * k8s_67895c4_xxx
   */
  containerName?: string;
  /**
   * @remarks
   * The extended information about the software package that has the vulnerability.
   * 
   * @example
   * {"msg_no_lookups_configured_CVE_2021_44228": "false", "jndi_class_not_exist": "false"}
   */
  extendField?: string;
  /**
   * @remarks
   * The complete version number.
   * 
   * @example
   * 3.10.0-693.2.2.el7
   */
  fullVersion?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * registry_387ytb_xxx
   */
  imageName?: string;
  /**
   * @remarks
   * The reason why the vulnerability is detected.
   * 
   * @example
   * python-perf version less than 0:3.10.0-693.21.1.el7
   */
  matchDetail?: string;
  /**
   * @remarks
   * The rules that are used to detect the vulnerability.
   */
  matchList?: string[];
  /**
   * @remarks
   * The name of the RPM package.
   * 
   * @example
   * python-perf
   */
  name?: string;
  /**
   * @remarks
   * The path to the software that has the vulnerability.
   * 
   * @example
   * /usr/lib64/python2.7/site-packages
   */
  path?: string;
  /**
   * @remarks
   * The process ID.
   * 
   * @example
   * 8664
   */
  pid?: string;
  /**
   * @remarks
   * The command that is used to fix the vulnerability.
   * 
   * @example
   * *** update python-perf
   */
  updateCmd?: string;
  /**
   * @remarks
   * The version number of the package of the software that has the vulnerability.
   * 
   * @example
   * 3.10.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      containerName: 'ContainerName',
      extendField: 'ExtendField',
      fullVersion: 'FullVersion',
      imageName: 'ImageName',
      matchDetail: 'MatchDetail',
      matchList: 'MatchList',
      name: 'Name',
      path: 'Path',
      pid: 'Pid',
      updateCmd: 'UpdateCmd',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerName: 'string',
      extendField: 'string',
      fullVersion: 'string',
      imageName: 'string',
      matchDetail: 'string',
      matchList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      path: 'string',
      pid: 'string',
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

export class DescribeVulListResponseBodyVulRecordsExtendContentJson extends $dara.Model {
  /**
   * @remarks
   * The path to the package of the software that has the vulnerability.
   * 
   * @example
   * /roo/www/web
   */
  absolutePath?: string;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * RHSA-2019:0230-Important: polkit security update
   */
  aliasName?: string;
  /**
   * @remarks
   * The description of the vulnerability.
   * 
   * @example
   * kernel version:5.10.84-10.2.al8.x86_64
   */
  description?: string;
  /**
   * @remarks
   * The returned message that indicates the urgent vulnerability.
   * 
   * @example
   * com.xxl.rpc.util.XxlRpcException: xxl-rpc request data is empty.\\n\\tat com.xxl.rpc.remoting.net.impl.servlet.serve"
   */
  emgProof?: string;
  /**
   * @remarks
   * The public IP address of the asset that is associated with the vulnerability.
   * 
   * @example
   * 1.2.XX.XX
   */
  ip?: string;
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
   * Indicates whether the vulnerability needs to be fixed.
   */
  necessity?: DescribeVulListResponseBodyVulRecordsExtendContentJsonNecessity;
  /**
   * @remarks
   * The name of the operating system.
   * 
   * @example
   * centos
   */
  os?: string;
  /**
   * @remarks
   * The information about the operating system version.
   * 
   * @example
   * 7
   */
  osRelease?: string;
  /**
   * @remarks
   * The ID of the vulnerability.
   * 
   * @example
   * 111
   */
  primaryId?: number;
  /**
   * @remarks
   * The information about RPM Package Manager (RPM) packages.
   */
  rpmEntityList?: DescribeVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList[];
  /**
   * @remarks
   * The status of the vulnerability. Valid values:
   * 
   * *   **1**: unfixed.
   * *   **2**: fix failed.
   * *   3: rollback failed.
   * *   **4**: being fixed.
   * *   **5**: being rolled back.
   * *   **6**: being verified.
   * *   **7**: fixed.
   * *   **8**: fixed and to be restarted.
   * *   **9**: rolled back.
   * *   **10**: ignored.
   * *   **11**: rolled back and to be restarted.
   * *   **12**: not found.
   * *   **20**: expired.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The tag that is added to the vulnerability.
   * 
   * @example
   * oval
   */
  tag?: string;
  /**
   * @remarks
   * The URL of the vulnerability.
   * 
   * @example
   * http://39.99.XX.XX:30005/toLogin
   */
  target?: string;
  /**
   * @remarks
   * The CVE list.
   */
  cveList?: string[];
  static names(): { [key: string]: string } {
    return {
      absolutePath: 'AbsolutePath',
      aliasName: 'AliasName',
      description: 'Description',
      emgProof: 'EmgProof',
      ip: 'Ip',
      lastTs: 'LastTs',
      necessity: 'Necessity',
      os: 'Os',
      osRelease: 'OsRelease',
      primaryId: 'PrimaryId',
      rpmEntityList: 'RpmEntityList',
      status: 'Status',
      tag: 'Tag',
      target: 'Target',
      cveList: 'cveList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absolutePath: 'string',
      aliasName: 'string',
      description: 'string',
      emgProof: 'string',
      ip: 'string',
      lastTs: 'number',
      necessity: DescribeVulListResponseBodyVulRecordsExtendContentJsonNecessity,
      os: 'string',
      osRelease: 'string',
      primaryId: 'number',
      rpmEntityList: { 'type': 'array', 'itemType': DescribeVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList },
      status: 'string',
      tag: 'string',
      target: 'string',
      cveList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.necessity && typeof (this.necessity as any).validate === 'function') {
      (this.necessity as any).validate();
    }
    if(Array.isArray(this.rpmEntityList)) {
      $dara.Model.validateArray(this.rpmEntityList);
    }
    if(Array.isArray(this.cveList)) {
      $dara.Model.validateArray(this.cveList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponseBodyVulRecords extends $dara.Model {
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * RHSA-2019:0230-Important: polkit security update
   */
  aliasName?: string;
  /**
   * @remarks
   * The edition of Security Center that is authorized to scan the asset. Valid values:
   * 
   * *   **1**: Basic.
   * *   **6**: Anti-virus.
   * *   **5**: Advanced.
   * *   **3**: Enterprise.
   * *   **7**: Ultimate.
   * *   **10**: Value-added Plan.
   * 
   * @example
   * 3
   */
  authVersion?: string;
  /**
   * @remarks
   * Indicates whether Security Center is authorized to scan the asset. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  bind?: boolean;
  /**
   * @remarks
   * The extended information about the vulnerability.
   */
  extendContentJson?: DescribeVulListResponseBodyVulRecordsExtendContentJson;
  /**
   * @remarks
   * The timestamp when the vulnerability was first detected. Unit: milliseconds.
   * 
   * @example
   * 1554189334000
   */
  firstTs?: number;
  /**
   * @remarks
   * The ID of the asset group.
   * 
   * @example
   * 281801
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * registry-cn-**-vpc.ack.**.com/acs/ack-node-problem-detector:v0.8.16-8ed7053-**
   */
  image?: string;
  /**
   * @remarks
   * The ID of the asset.
   * 
   * @example
   * i-bp18t***
   */
  instanceId?: string;
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
   * 1.2.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * >  The value of this parameter is returned only if you use the Ultimate edition of Security Center that can protect container assets.
   * 
   * @example
   * c863dc93bed3843de9934d4346dc4****
   */
  k8sClusterId?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * >  If you use the Ultimate edition of Security Center, the value of this parameter is queried from container assets. If you do not use the Ultimate edition, the value of this parameter is queried from the Security Center agent.
   * 
   * @example
   * default
   */
  k8sNamespace?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * >  The value of this parameter is returned only if you use the Ultimate edition of Security Center that can protect container assets.
   * 
   * @example
   * i-bp1ifm6suw9mnbsr****
   */
  k8sNodeId?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * >  The value of this parameter is returned only if you use the Ultimate edition of Security Center that can protect container assets.
   * 
   * @example
   * deployment-riskai-7b67d68975-m****
   */
  k8sNodeName?: string;
  /**
   * @remarks
   * The name of the pod.
   * 
   * >  The value of this parameter is returned only if you use the Ultimate edition of Security Center that can protect container assets.
   * 
   * @example
   * deployment-riskai-7b67d68975-m****
   */
  k8sPodName?: string;
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
   * oval:com.redhat.rhsa:def:20170574
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * kube-system
   */
  namespace?: string;
  /**
   * @remarks
   * The priority to fix the vulnerability. Valid values:
   * 
   * *   **asap**: high.
   * *   **later**: medium.
   * *   **nntf**: low.
   * 
   * >  We recommend that you fix **high-risk** vulnerabilities at the earliest opportunity.
   * 
   * @example
   * asap
   */
  necessity?: string;
  /**
   * @remarks
   * Indicates whether the Security Center agent on the asset is online. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The name of the operating system for your asset.
   * 
   * @example
   * CentOS 7.2 64-bit
   */
  osName?: string;
  /**
   * @remarks
   * The name of the operating system for your asset.
   * 
   * @example
   * linux
   */
  osVersion?: string;
  /**
   * @remarks
   * The ID of the vulnerability.
   * 
   * @example
   * 101162078
   */
  primaryId?: number;
  /**
   * @remarks
   * The progress of the vulnerability fixing.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * Indicates whether the application protection feature is supported. Valid values:
   * 
   * *   **0**: no.
   * *   **1**: yes.
   * 
   * >  If this parameter is not returned, the application protection feature is not supported.
   * 
   * @example
   * 1
   */
  raspDefend?: number;
  /**
   * @remarks
   * The protection mode of the application protection feature. Valid values:
   * 
   * *   **0**: unprotected.
   * *   **1**: the Monitor mode.
   * *   **2**: the Block mode.
   * *   **3**: disabled.
   * 
   * @example
   * 1
   */
  raspStatus?: number;
  /**
   * @remarks
   * Indicates whether the vulnerability is easily exploited. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  realRisk?: boolean;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Common Vulnerabilities and Exposures (CVE) IDs related to the vulnerability. Multiple CVE IDs are separated by commas (,).
   * 
   * @example
   * CVE-2017-7518,CVE-2017-12188
   */
  related?: string;
  /**
   * @remarks
   * The timestamp when the vulnerability was fixed. Unit: milliseconds. This parameter is returned only if you fix vulnerabilities in the Security Center console.
   * 
   * @example
   * 1541207563000
   */
  repairTs?: number;
  /**
   * @remarks
   * The code that indicates the vulnerability fixing result.
   * 
   * @example
   * 0
   */
  resultCode?: string;
  /**
   * @remarks
   * The message that indicates the vulnerability fixing result.
   * 
   * @example
   * timeout
   */
  resultMessage?: string;
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
   * The status of the vulnerability. Valid values:
   * 
   * *   **1**: unfixed.
   * *   **2**: fix failed.
   * *   **3**: rollback failed.
   * *   **4**: being fixed.
   * *   **5**: being rolled back.
   * *   **6**: being verified.
   * *   **7**: fixed.
   * *   **8**: fixed and to be restarted.
   * *   **9**: rolled back.
   * *   **10**: ignored.
   * *   **11**: rolled back and to be restarted.
   * *   **12**: not found.
   * *   **20**: expired.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The tag that is added to the vulnerability.
   * 
   * @example
   * oval
   */
  tag?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   **cve**: Linux software vulnerability.
   * *   **sys**: Windows system vulnerability.
   * *   **cms**: Web-CMS vulnerability.
   * *   **emg**: urgent vulnerability.
   * *   **app**: application vulnerability.
   * *   **sca**: application vulnerability that is detected by using software component analysis.
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the asset.
   * 
   * @example
   * 04c56617-23fc-43a5-ab9b-****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      authVersion: 'AuthVersion',
      bind: 'Bind',
      extendContentJson: 'ExtendContentJson',
      firstTs: 'FirstTs',
      groupId: 'GroupId',
      image: 'Image',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      k8sClusterId: 'K8sClusterId',
      k8sNamespace: 'K8sNamespace',
      k8sNodeId: 'K8sNodeId',
      k8sNodeName: 'K8sNodeName',
      k8sPodName: 'K8sPodName',
      lastTs: 'LastTs',
      modifyTs: 'ModifyTs',
      name: 'Name',
      namespace: 'Namespace',
      necessity: 'Necessity',
      online: 'Online',
      osName: 'OsName',
      osVersion: 'OsVersion',
      primaryId: 'PrimaryId',
      progress: 'Progress',
      raspDefend: 'RaspDefend',
      raspStatus: 'RaspStatus',
      realRisk: 'RealRisk',
      regionId: 'RegionId',
      related: 'Related',
      repairTs: 'RepairTs',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      ruleTag: 'RuleTag',
      status: 'Status',
      tag: 'Tag',
      type: 'Type',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      authVersion: 'string',
      bind: 'boolean',
      extendContentJson: DescribeVulListResponseBodyVulRecordsExtendContentJson,
      firstTs: 'number',
      groupId: 'number',
      image: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      k8sClusterId: 'string',
      k8sNamespace: 'string',
      k8sNodeId: 'string',
      k8sNodeName: 'string',
      k8sPodName: 'string',
      lastTs: 'number',
      modifyTs: 'number',
      name: 'string',
      namespace: 'string',
      necessity: 'string',
      online: 'boolean',
      osName: 'string',
      osVersion: 'string',
      primaryId: 'number',
      progress: 'number',
      raspDefend: 'number',
      raspStatus: 'number',
      realRisk: 'boolean',
      regionId: 'string',
      related: 'string',
      repairTs: 'number',
      resultCode: 'string',
      resultMessage: 'string',
      ruleTag: 'string',
      status: 'number',
      tag: 'string',
      type: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(this.extendContentJson && typeof (this.extendContentJson as any).validate === 'function') {
      (this.extendContentJson as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponseBody extends $dara.Model {
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
   * The value of NextToken that is returned when the NextToken method is used.
   * 
   * @example
   * E17B501887A2D3AA5E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 2F26AB2A-1075-488F-8472-40E5DB486ACC
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of vulnerabilities returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about the vulnerability.
   */
  vulRecords?: DescribeVulListResponseBodyVulRecords[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vulRecords: 'VulRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      nextToken: 'string',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vulRecords: { 'type': 'array', 'itemType': DescribeVulListResponseBodyVulRecords },
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

