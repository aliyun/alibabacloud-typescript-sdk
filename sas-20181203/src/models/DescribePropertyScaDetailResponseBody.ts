// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyScaDetailResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page in a paged query.
   * 
   * @example
   * 2
   */
  count?: number;
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
   * The NextToken value returned when the NextToken method is used.
   * 
   * @example
   * B60***
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of Asset Fingerprints entries per page in a paged query. Default value: **10**, which indicates that 10 Asset Fingerprints entries are displayed per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of Asset Fingerprints entries returned.
   * 
   * @example
   * 2
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

export class DescribePropertyScaDetailResponseBodyPropertys extends $dara.Model {
  /**
   * @remarks
   * The type of the middleware, database, or web service. Valid values:
   * - **system_service**: system service
   * - **software_library**: software library
   * - **docker_component**: container component
   * - **database**: database
   * - **web_container**: web container
   * - **jar**: JAR package
   * - **web_framework**: web framework.
   * 
   * @example
   * software_library
   */
  bizType?: string;
  /**
   * @remarks
   * The display name of the middleware, database, or web service type. Valid values:
   * <props="china">
   * - 系统服务
   * - 软件库
   * - 容器组件
   * - 数据库
   * - Web容器
   * - Jar包
   * - Web框架
   * 
   * <props="intl">
   * - System Service
   * - Software Library
   * - Docker Component
   * - Database
   * - Web Container
   * - Jar
   * - Web Framework
   * .
   * 
   * @example
   * System Service
   */
  bizTypeDispaly?: string;
  /**
   * @remarks
   * The command line of the process.
   * 
   * @example
   * /sbin/dhclient -H iz2zeflhhbtk8gtxzt087az -1 -q -lf /var/lib/dhclient/dhclient--eth0.lease -pf /var/run/dhclient-eth0.pid eth0
   */
  cmdline?: string;
  /**
   * @remarks
   * The path of the configuration file.
   * 
   * @example
   * /etc/my.cnf
   */
  configPath?: string;
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
   * The timestamp of the latest scan, which is the most recent time when Security Center collected middleware, database, or web service information. Unit: milliseconds.
   * 
   * @example
   * 1597987834000
   */
  createTimestamp?: number;
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
   * The instance ID of the server on which the middleware, database, or web service is deployed.
   * 
   * @example
   * i-2zeclqj7ti****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server on which the middleware, database, or web service is deployed.
   * 
   * @example
   * Test01
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server on which the middleware, database, or web service is deployed.
   * 
   * @example
   * 47.42.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server on which the middleware, database, or web service is deployed.
   * 
   * @example
   * 192.210.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The public IP address of the server on which the middleware, database, or web service is deployed.
   * 
   * @example
   * 47.42.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The IP address on which the process listens.
   * 
   * @example
   * 0.0.XX.XX
   */
  listenIp?: string;
  /**
   * @remarks
   * The protocol on which the process listens. Valid values:
   * - **UDP**
   * - **TCP**.
   * 
   * @example
   * UDP
   */
  listenProtocol?: string;
  /**
   * @remarks
   * The listening status of the process. Valid values:
   * - **NONE**: Not listening.
   * - **LISTEN**: Listening.
   * 
   * @example
   * NONE
   */
  listenStatus?: string;
  /**
   * @remarks
   * The name of the middleware, database, or web service.
   * 
   * @example
   * openssl
   */
  name?: string;
  /**
   * @remarks
   * The path of the middleware, database, or web service.
   * 
   * @example
   * /usr/lib64/libssl.so.1.0.2k
   */
  path?: string;
  /**
   * @remarks
   * The process ID.
   * 
   * @example
   * 756
   */
  pid?: string;
  /**
   * @remarks
   * The pod name.
   * 
   * @example
   * hello-pod
   */
  podName?: string;
  /**
   * @remarks
   * The service port of the middleware, database, or web service.
   * 
   * @example
   * 68
   */
  port?: string;
  /**
   * @remarks
   * The parent process ID.
   * 
   * @example
   * 1
   */
  ppid?: string;
  /**
   * @remarks
   * The timestamp when the process started. Unit: seconds.
   * 
   * @example
   * 1596539788
   */
  processStarted?: number;
  /**
   * @remarks
   * The username of the user that runs the process.
   * 
   * @example
   * root
   */
  processUser?: string;
  /**
   * @remarks
   * The version verification information of the middleware, database, or web service.
   * 
   * @example
   * /usr/lib64/libssl.so.1.0.2k
   */
  proof?: string;
  /**
   * @remarks
   * The runtime environment version.
   * > For example, the JDK version of the Java process runtime environment.
   * 
   * @example
   * 1.8.0_144
   */
  runtimeEnvVersion?: string;
  /**
   * @remarks
   * The type of the middleware, database, or web service.
   * 
   * @example
   * library
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the server on which the middleware, database, or web service is deployed.
   * 
   * @example
   * uuid-02ebabe7-1c19-a****
   */
  uuid?: string;
  /**
   * @remarks
   * The version of the middleware, database, or web service.
   * 
   * @example
   * 1.0.2k
   */
  version?: string;
  /**
   * @remarks
   * The web directory.
   * 
   * @example
   * /usr/share/nginx/html
   */
  webPath?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      bizTypeDispaly: 'BizTypeDispaly',
      cmdline: 'Cmdline',
      configPath: 'ConfigPath',
      containerName: 'ContainerName',
      createTimestamp: 'CreateTimestamp',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      listenIp: 'ListenIp',
      listenProtocol: 'ListenProtocol',
      listenStatus: 'ListenStatus',
      name: 'Name',
      path: 'Path',
      pid: 'Pid',
      podName: 'PodName',
      port: 'Port',
      ppid: 'Ppid',
      processStarted: 'ProcessStarted',
      processUser: 'ProcessUser',
      proof: 'Proof',
      runtimeEnvVersion: 'RuntimeEnvVersion',
      type: 'Type',
      uuid: 'Uuid',
      version: 'Version',
      webPath: 'WebPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      bizTypeDispaly: 'string',
      cmdline: 'string',
      configPath: 'string',
      containerName: 'string',
      createTimestamp: 'number',
      imageName: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      listenIp: 'string',
      listenProtocol: 'string',
      listenStatus: 'string',
      name: 'string',
      path: 'string',
      pid: 'string',
      podName: 'string',
      port: 'string',
      ppid: 'string',
      processStarted: 'number',
      processUser: 'string',
      proof: 'string',
      runtimeEnvVersion: 'string',
      type: 'string',
      uuid: 'string',
      version: 'string',
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

export class DescribePropertyScaDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribePropertyScaDetailResponseBodyPageInfo;
  /**
   * @remarks
   * The details of the Asset Fingerprints list.
   */
  propertys?: DescribePropertyScaDetailResponseBodyPropertys[];
  /**
   * @remarks
   * The ID of the request, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * F9146867-16C8-4AAB-BB4FB8C2A4
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
      pageInfo: DescribePropertyScaDetailResponseBodyPageInfo,
      propertys: { 'type': 'array', 'itemType': DescribePropertyScaDetailResponseBodyPropertys },
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

