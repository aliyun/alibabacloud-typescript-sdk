// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyScaDetailResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 2
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
   * The number of entries returned per page. Default value: **10**.
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
   * 2
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

export class DescribePropertyScaDetailResponseBodyPropertys extends $dara.Model {
  /**
   * @remarks
   * The type of the middleware, database, or web service. Valid values:
   * 
   * *   **system_service**: system service
   * *   **software_library**: software library
   * *   **docker_component**: container component
   * *   **database**: database
   * *   **web_container**: web container
   * *   **jar**: JAR package
   * *   **web_framework**: web framework
   * 
   * @example
   * software_library
   */
  bizType?: string;
  /**
   * @remarks
   * The display name of the type of the middleware, database, or web service . Valid values:
   * 
   * *   System service
   * *   Software library
   * *   Container component
   * *   Database
   * *   Web container
   * *   JAR package
   * *   Web framework
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
   * The path to the configuration file.
   * 
   * @example
   * /etc/my.cnf
   */
  configPath?: string;
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
   * The latest collection timestamp, which indicates the last timestamp when Security Center collected the information about the middleware, database, or web service. Unit: milliseconds.
   * 
   * @example
   * 1597987834000
   */
  createTimestamp?: number;
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
   * The ID of the server on which the middleware, database, or web service is run.
   * 
   * @example
   * i-2zeclqj7ti****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server on which the middleware, database, or web service is run.
   * 
   * @example
   * Test01
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server on which the middleware, database, or web service is run.
   * 
   * @example
   * 47.42.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server on which the middleware, database, or web service is run.
   * 
   * @example
   * 192.210.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The public IP address of the server on which the middleware, database, or web service is run.
   * 
   * @example
   * 47.42.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The IP address that the process monitors.
   * 
   * @example
   * 0.0.XX.XX
   */
  listenIp?: string;
  /**
   * @remarks
   * The protocol of the traffic on which the process listens. Valid values:
   * 
   * *   **UDP**
   * *   **TCP**
   * 
   * @example
   * UDP
   */
  listenProtocol?: string;
  /**
   * @remarks
   * The listening status of the process. Valid values:
   * 
   * *   **NONE**: not listening
   * *   **LISTEN**: listening
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
   * The PID.
   * 
   * @example
   * 756
   */
  pid?: string;
  /**
   * @remarks
   * The name of the Kubernetes pod.
   * 
   * @example
   * myapp-pod
   */
  podName?: string;
  /**
   * @remarks
   * The port of the middleware, database, or web service.
   * 
   * @example
   * 68
   */
  port?: string;
  /**
   * @remarks
   * The ID of the parent process.
   * 
   * @example
   * 1
   */
  ppid?: string;
  /**
   * @remarks
   * The timestamp when the process starts. Unit: milliseconds.
   * 
   * @example
   * 1596539788
   */
  processStarted?: number;
  /**
   * @remarks
   * The name of the user who runs the process.
   * 
   * @example
   * root
   */
  processUser?: string;
  /**
   * @remarks
   * The version verification information about the middleware, database, or web service.
   * 
   * @example
   * /usr/lib64/libssl.so.1.0.2k
   */
  proof?: string;
  /**
   * @remarks
   * The version of the runtime environment.
   * 
   * >  The value of this parameter can be the Java Development Kit (JDK) version of the runtime environment for a Java process.
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
   * The UUID of the server on which the middleware, database, or web service is run.
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
   * The details about the asset fingerprints returned.
   */
  propertys?: DescribePropertyScaDetailResponseBodyPropertys[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
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

