// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetsPropertyDetailResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of asset fingerprint details displayed on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page when performing a paginated query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The NextToken value returned when using the NextToken method.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6k+AtdhNE3kgQEK36GujZ5on+tWdc+4WoaoMP/kUNxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of asset fingerprint details displayed per page when performing a paginated query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of detailed asset fingerprint information queried.
   * 
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      nextToken: 'string',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetsPropertyDetailResponseBodyPropertys extends $dara.Model {
  agent?: string;
  /**
   * @remarks
   * Container name.
   * 
   * @example
   * 5-rce_web_1
   */
  containerName?: string;
  /**
   * @remarks
   * The timestamp of the latest asset fingerprint scan, in milliseconds.
   * 
   * @example
   * 1649149566000
   */
  createTimestamp?: number;
  description?: string;
  /**
   * @remarks
   * Web site domain. 
   * > Only returned when **Biz** is **web_server**.
   * 
   * @example
   * localhost
   */
  domain?: string;
  /**
   * @remarks
   * Large model service request interface address.
   * 
   * @example
   * dashscope.aliyuncs.com
   */
  endPoint?: string;
  /**
   * @remarks
   * File path for requesting the large model service.
   * 
   * @example
   * /root/llm.py
   */
  file?: string;
  /**
   * @remarks
   * Kernel module file path.
   * > Returned only when **Biz** is **lkm**.
   * 
   * @example
   * /lib/modules/4****
   */
  filepath?: string;
  /**
   * @example
   * ImageDigest
   */
  imageDigest?: string;
  /**
   * @remarks
   * Image name.
   * 
   * @example
   * registry-vpc.cn-beijing.aliyuncs.com/acs/aliyun-ingress-controller****
   */
  imageName?: string;
  /**
   * @remarks
   * AI tool installation path
   * 
   * @example
   * /etc/pip3/env/vllm
   */
  installationPath?: string;
  /**
   * @remarks
   * The instance ID of the server.
   * 
   * @example
   * i-hp35tftuh52wbp1g****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server instance.
   * 
   * @example
   * hc-host-****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 47.42.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 100.104.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The IP address of the server.
   * 
   * @example
   * 47.42.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * Web site process listening protocol. 
   * >Only returned when **Biz** is **web_server**.
   * 
   * @example
   * tcp
   */
  listenProtocol?: string;
  mcpName?: string;
  /**
   * @remarks
   * AI tool name
   * 
   * @example
   * vllm
   */
  middlewareName?: string;
  /**
   * @remarks
   * AI tool version.
   * 
   * @example
   * 1.0.1
   */
  middlewareVersion?: string;
  /**
   * @remarks
   * Name of the large model vendor
   * 
   * @example
   * OpenAI
   */
  modelName?: string;
  /**
   * @remarks
   * Module name.
   * > Returned only when **Biz** is **lkm**.
   * 
   * @example
   * alihids
   */
  moduleName?: string;
  /**
   * @remarks
   * The meaning varies based on the value of **Biz**:
   * - When **Biz** is **web_server**, it represents the Web root path
   * - When **Biz** is **autorun**, it represents the startup item path
   * 
   * @example
   * /lib/systemd/system****
   */
  path?: string;
  /**
   * @remarks
   * Web site directory permissions. 
   * > Only returned when **Biz** is **web_server**.
   * 
   * @example
   * 755
   */
  pathMode?: string;
  /**
   * @remarks
   * Web site process Pid. 
   * > Only returned when **Biz** is **web_server**.
   * 
   * @example
   * 813
   */
  pid?: string;
  /**
   * @remarks
   * Web site port.
   * > Returned only when **Biz** is **web_server**.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * Timestamp of the web site process startup, in milliseconds.  
   * > Only returned when **Biz** is **web_server**.
   * 
   * @example
   * 1671186801000
   */
  processStarted?: number;
  /**
   * @remarks
   * The ID of the region where the instance is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * ACR-Example
   */
  repoName?: string;
  /**
   * @example
   * Default
   */
  repoNamespace?: string;
  /**
   * @remarks
   * Web site type.
   * > Returned only when **Biz** is **web_server**.
   * 
   * @example
   * nginx
   */
  serverType?: string;
  /**
   * @remarks
   * Kernel module size.
   * > Returned only when **Biz** is **lkm**.
   * 
   * @example
   * 10
   */
  size?: number;
  skillsName?: string;
  /**
   * @example
   * AI
   */
  tag?: string;
  transportName?: string;
  /**
   * @remarks
   * Number of dependencies for the kernel module.
   * > Returned only when **Biz** is **lkm**.
   * 
   * @example
   * 0
   */
  usedByCount?: number;
  /**
   * @remarks
   * Web site user. 
   * > Only returned when **Biz** is **web_server**.
   * 
   * @example
   * root
   */
  user?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 162eb349-c2d9-4f8b-805c-75b43d4c****
   */
  uuid?: string;
  /**
   * @remarks
   * Web site web path. 
   * > Only returned when **Biz** is **web_server**.
   * 
   * @example
   * /usr/share/nginx/html
   */
  webPath?: string;
  static names(): { [key: string]: string } {
    return {
      agent: 'Agent',
      containerName: 'ContainerName',
      createTimestamp: 'CreateTimestamp',
      description: 'Description',
      domain: 'Domain',
      endPoint: 'EndPoint',
      file: 'File',
      filepath: 'Filepath',
      imageDigest: 'ImageDigest',
      imageName: 'ImageName',
      installationPath: 'InstallationPath',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      listenProtocol: 'ListenProtocol',
      mcpName: 'McpName',
      middlewareName: 'MiddlewareName',
      middlewareVersion: 'MiddlewareVersion',
      modelName: 'ModelName',
      moduleName: 'ModuleName',
      path: 'Path',
      pathMode: 'PathMode',
      pid: 'Pid',
      port: 'Port',
      processStarted: 'ProcessStarted',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      serverType: 'ServerType',
      size: 'Size',
      skillsName: 'SkillsName',
      tag: 'Tag',
      transportName: 'TransportName',
      usedByCount: 'UsedByCount',
      user: 'User',
      uuid: 'Uuid',
      webPath: 'WebPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agent: 'string',
      containerName: 'string',
      createTimestamp: 'number',
      description: 'string',
      domain: 'string',
      endPoint: 'string',
      file: 'string',
      filepath: 'string',
      imageDigest: 'string',
      imageName: 'string',
      installationPath: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      listenProtocol: 'string',
      mcpName: 'string',
      middlewareName: 'string',
      middlewareVersion: 'string',
      modelName: 'string',
      moduleName: 'string',
      path: 'string',
      pathMode: 'string',
      pid: 'string',
      port: 'string',
      processStarted: 'number',
      regionId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      serverType: 'string',
      size: 'number',
      skillsName: 'string',
      tag: 'string',
      transportName: 'string',
      usedByCount: 'number',
      user: 'string',
      uuid: 'string',
      webPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetsPropertyDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Information displayed on the page when performing a paginated query.
   */
  pageInfo?: GetAssetsPropertyDetailResponseBodyPageInfo;
  /**
   * @remarks
   * Collection of asset fingerprint details.
   */
  propertys?: GetAssetsPropertyDetailResponseBodyPropertys[];
  /**
   * @remarks
   * The ID of this call request, a unique identifier generated by Alibaba Cloud for the request, which can be used to troubleshoot and locate issues.
   * 
   * @example
   * 4C1AE3F3-18FA-4108-BBB9-AFA1A032****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      propertys: 'Propertys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: GetAssetsPropertyDetailResponseBodyPageInfo,
      propertys: { 'type': 'array', 'itemType': GetAssetsPropertyDetailResponseBodyPropertys },
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.propertys)) {
      $dara.Model.validateArray(this.propertys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

