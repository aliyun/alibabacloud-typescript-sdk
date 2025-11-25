// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetsPropertyDetailResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
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
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
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
   * The name of the container.
   * 
   * @example
   * 5-rce_web_1
   */
  containerName?: string;
  /**
   * @remarks
   * The timestamp of the last fingerprint collection. Unit: milliseconds.
   * 
   * @example
   * 1649149566000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The domain name of the website.
   * 
   * > This parameter is returned only when **Biz** is set to **web_server**.
   * 
   * @example
   * localhost
   */
  domain?: string;
  /**
   * @remarks
   * LLM service endpoint
   * 
   * @example
   * dashscope.aliyuncs.com
   */
  endPoint?: string;
  /**
   * @remarks
   * File path for requesting the LLM service.
   * 
   * @example
   * /root/llm.py
   */
  file?: string;
  /**
   * @remarks
   * The path to the kernel module file.
   * 
   * > This parameter is returned only when **Biz** is set to **lkm**.
   * 
   * @example
   * /lib/modules/4****
   */
  filepath?: string;
  /**
   * @remarks
   * The name of the image.
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
   * The ID of the server.
   * 
   * @example
   * i-hp35tftuh52wbp1g****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server.
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
   * The listening protocol that the website uses.
   * 
   * > This parameter is returned only when **Biz** is set to **web_server**.
   * 
   * @example
   * tcp
   */
  listenProtocol?: string;
  /**
   * @remarks
   * AI tool name.
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
   * Name of the LLM vendor.
   * 
   * @example
   * OpenAI
   */
  modelName?: string;
  /**
   * @remarks
   * The name of the module.
   * 
   * > This parameter is returned only when **Biz** is set to **lkm**.
   * 
   * @example
   * alihids
   */
  moduleName?: string;
  /**
   * @remarks
   * The path. The value of this parameter varies based on the value of **Biz**.
   * 
   * *   If **Biz** is set to **web_server**, the value of this parameter indicates the path to the website root directory.
   * *   If **Biz** is set to **autorun**, the value of this parameter indicates the path to the startup item.
   * 
   * @example
   * /lib/systemd/system****
   */
  path?: string;
  /**
   * @remarks
   * The permissions on the root directory of the website.
   * 
   * > This parameter is returned only when **Biz** is set to **web_server**.
   * 
   * @example
   * 755
   */
  pathMode?: string;
  /**
   * @remarks
   * The process ID (PID) of the process that runs the website service.
   * 
   * > This parameter is returned only when **Biz** is set to **web_server**.
   * 
   * @example
   * 813
   */
  pid?: string;
  /**
   * @remarks
   * The port of the website.
   * 
   * > This parameter is returned only when **Biz** is set to **web_server**.
   * 
   * @example
   * 80
   */
  port?: string;
  /**
   * @remarks
   * The timestamp generated when the process was started. Unit: milliseconds.
   * 
   * > This parameter is returned only when **Biz** is set to **web_server**.
   * 
   * @example
   * 1671186801000
   */
  processStarted?: number;
  /**
   * @remarks
   * The ID of the region in which the server resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the website.
   * 
   * > This parameter is returned only when **Biz** is set to **web_server**.
   * 
   * @example
   * nginx
   */
  serverType?: string;
  /**
   * @remarks
   * The size of the kernel module.
   * 
   * > This parameter is returned only when **Biz** is set to **lkm**.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * The number of times that the kernel module is referenced.
   * 
   * > This parameter is returned only when **Biz** is set to **lkm**.
   * 
   * @example
   * 0
   */
  usedByCount?: number;
  /**
   * @remarks
   * The user who started the process of the website.
   * 
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
   * The path to the root directory of the website.
   * 
   * > This parameter is returned only when **Biz** is set to **web_server**.
   * 
   * @example
   * /usr/share/nginx/html
   */
  webPath?: string;
  static names(): { [key: string]: string } {
    return {
      containerName: 'ContainerName',
      createTimestamp: 'CreateTimestamp',
      domain: 'Domain',
      endPoint: 'EndPoint',
      file: 'File',
      filepath: 'Filepath',
      imageName: 'ImageName',
      installationPath: 'InstallationPath',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      listenProtocol: 'ListenProtocol',
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
      serverType: 'ServerType',
      size: 'Size',
      usedByCount: 'UsedByCount',
      user: 'User',
      uuid: 'Uuid',
      webPath: 'WebPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerName: 'string',
      createTimestamp: 'number',
      domain: 'string',
      endPoint: 'string',
      file: 'string',
      filepath: 'string',
      imageName: 'string',
      installationPath: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      listenProtocol: 'string',
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
      serverType: 'string',
      size: 'number',
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
   * The pagination information.
   */
  pageInfo?: GetAssetsPropertyDetailResponseBodyPageInfo;
  /**
   * @remarks
   * An array that consists of the details about the asset fingerprints.
   */
  propertys?: GetAssetsPropertyDetailResponseBodyPropertys[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
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

