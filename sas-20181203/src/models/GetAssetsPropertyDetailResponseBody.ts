// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetsPropertyDetailResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of Asset Fingerprints detail entries on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The NextToken value returned when the NextToken method is used.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6k+AtdhNE3kgQEK36GujZ5on+tWdc+4WoaoMP/kUNxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of Asset Fingerprints details displayed per page in a paging query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of Asset Fingerprints detail entries returned.
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
  /**
   * @remarks
   * The agent.
   * 
   * @example
   * Mozilla/5.0 (Windows NT 10.0%3B Win64%3B x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0
   */
  agent?: string;
  /**
   * @remarks
   * The container name.
   * 
   * @example
   * 5-rce_web_1
   */
  containerName?: string;
  /**
   * @remarks
   * The timestamp of the latest Asset Fingerprints scan, in milliseconds.
   * 
   * @example
   * 1649149566000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The asset description.
   * 
   * @example
   * {\\"Type\\": \\"text\\", \\"Value\\": u\\"\\u786e\\u4fdd\\u7f51\\u5173\\u5b89\\u5168\\u9632\\u62a4\\u3002\\u8981\\u6c42\\uff1a\\u5f00\\u542fWAF\\u9632\\u706b\\u5899\\u9632\\u62a4\\u529f\\u80fd\\u3002\\"}
   */
  description?: string;
  /**
   * @remarks
   * The domain name of the web site.
   * > This parameter is returned only when **Biz** is set to **web_server**.
   * 
   * @example
   * localhost
   */
  domain?: string;
  /**
   * @remarks
   * The endpoint address of the large language model service.
   * 
   * @example
   * dashscope.aliyuncs.com
   */
  endPoint?: string;
  /**
   * @remarks
   * The file path for requesting the large language model service.
   * 
   * @example
   * /root/llm.py
   */
  file?: string;
  /**
   * @remarks
   * The file path of the kernel module.
   * > This parameter is returned only when **Biz** is set to **lkm**.
   * 
   * @example
   * /lib/modules/4****
   */
  filepath?: string;
  /**
   * @remarks
   * The digest of the image.
   * 
   * @example
   * ImageDigest
   */
  imageDigest?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * registry-vpc.cn-beijing.aliyuncs.com/acs/aliyun-ingress-controller****
   */
  imageName?: string;
  /**
   * @remarks
   * The installation path of the AI tool.
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
   * The listening protocol of the web site process.
   * > This parameter is returned only when **Biz** is set to **web_server**.
   * 
   * @example
   * tcp
   */
  listenProtocol?: string;
  /**
   * @remarks
   * The MCP name.
   * 
   * @example
   * @modelcontextprotocol/server-github
   */
  mcpName?: string;
  /**
   * @remarks
   * The name of the AI tool.
   * 
   * @example
   * vllm
   */
  middlewareName?: string;
  /**
   * @remarks
   * The version of the AI tool.
   * 
   * @example
   * 1.0.1
   */
  middlewareVersion?: string;
  /**
   * @remarks
   * The name of the large language model provider.
   * 
   * @example
   * 阿里云百炼
   */
  modelName?: string;
  /**
   * @remarks
   * The module name.
   * > This parameter is returned only when **Biz** is set to **lkm**.
   * 
   * @example
   * alihids
   */
  moduleName?: string;
  /**
   * @remarks
   * The meaning of this parameter varies based on the value of **Biz**:
   * - When **Biz** is set to **web_server**, this parameter indicates the web root path.
   * - When **Biz** is set to **autorun**, this parameter indicates the startup item path.
   * 
   * @example
   * /lib/systemd/system****
   */
  path?: string;
  /**
   * @remarks
   * The directory permissions of the web site.
   * > This parameter is returned only when **Biz** is set to **web_server**.
   * 
   * @example
   * 755
   */
  pathMode?: string;
  /**
   * @remarks
   * The PID of the web site process.
   * > This parameter is returned only when **Biz** is set to **web_server**.
   * 
   * @example
   * 813
   */
  pid?: string;
  /**
   * @remarks
   * The port of the web site.
   * > This parameter is returned only when **Biz** is set to **web_server**.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The timestamp when the web site process started, in milliseconds.
   * > This parameter is returned only when **Biz** is set to **web_server**.
   * 
   * @example
   * 1671186801000
   */
  processStarted?: number;
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
   * The RepoName of the image.
   * 
   * @example
   * ACR-Example
   */
  repoName?: string;
  /**
   * @remarks
   * The repo namespace of the image.
   * 
   * @example
   * Default
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The type of the web site.
   * > This parameter is returned only when **Biz** is set to **web_server**.
   * 
   * @example
   * nginx
   */
  serverType?: string;
  /**
   * @remarks
   * The size of the kernel module.
   * > This parameter is returned only when **Biz** is set to **lkm**.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * Analytics and Data Analysis
   */
  skillsName?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * AI
   */
  tag?: string;
  /**
   * @remarks
   * The transport name.
   * 
   * @example
   * test
   */
  transportName?: string;
  /**
   * @remarks
   * The number of dependencies on the kernel module.
   * > This parameter is returned only when **Biz** is set to **lkm**.
   * 
   * @example
   * 0
   */
  usedByCount?: number;
  /**
   * @remarks
   * The user of the web site.
   * > This parameter is returned only when **Biz** is set to **web_server**.
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
   * The web path of the web site.
   * > This parameter is returned only when **Biz** is set to **web_server**.
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
   * The paging information displayed on the page.
   */
  pageInfo?: GetAssetsPropertyDetailResponseBodyPageInfo;
  /**
   * @remarks
   * The collection of Asset Fingerprints details.
   */
  propertys?: GetAssetsPropertyDetailResponseBodyPropertys[];
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
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

