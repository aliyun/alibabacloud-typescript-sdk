// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyProcDetailResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 1
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
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

export class DescribePropertyProcDetailResponseBodyPropertys extends $dara.Model {
  /**
   * @remarks
   * The startup parameter of the process.
   * 
   * @example
   * ./8888
   */
  cmdline?: string;
  /**
   * @remarks
   * The timestamp of last data collection. Unit: milliseconds.
   * 
   * @example
   * 1565686951000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The permission that is required to run the process.
   * 
   * @example
   * root
   */
  euidName?: string;
  fileHash?: string;
  /**
   * @remarks
   * The ID of the server that is associated with the process.
   * 
   * @example
   * i-hp35tftuh52wbp1g****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server that is associated with the process.
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
   * 192.168.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * Indicates whether the process is a package installation process. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  isPackage?: number;
  /**
   * @remarks
   * The MD5 hash value of the process file.
   * 
   * @example
   * 842644ea3d88bd7f7e14c1c089ef****
   */
  md5?: string;
  /**
   * @remarks
   * The name of the process.
   * 
   * @example
   * agetty
   */
  name?: string;
  /**
   * @remarks
   * The path of the process.
   */
  path?: string;
  /**
   * @remarks
   * The ID of the process.
   * 
   * @example
   * 12826
   */
  pid?: string;
  /**
   * @remarks
   * The name of the parent process to which the process belongs.
   * 
   * @example
   * start***.s
   */
  pname?: string;
  /**
   * @remarks
   * The time when the process starts.
   * 
   * @example
   * 2019-08-07 10:09:05
   */
  startTime?: string;
  /**
   * @remarks
   * The timestamp when the process starts. Unit: milliseconds.
   * 
   * @example
   * 1648783107000
   */
  startTimeDt?: number;
  /**
   * @remarks
   * The status of the process.
   * 
   * @example
   * sleeping
   */
  state?: string;
  /**
   * @remarks
   * The user who runs the process.
   * 
   * @example
   * root
   */
  user?: string;
  /**
   * @remarks
   * The UUID of the server that is associated with the process.
   * 
   * @example
   * 162eb349-c2d9-4f8b-805c-75b43d4c****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      cmdline: 'Cmdline',
      createTimestamp: 'CreateTimestamp',
      euidName: 'EuidName',
      fileHash: 'FileHash',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      isPackage: 'IsPackage',
      md5: 'Md5',
      name: 'Name',
      path: 'Path',
      pid: 'Pid',
      pname: 'Pname',
      startTime: 'StartTime',
      startTimeDt: 'StartTimeDt',
      state: 'State',
      user: 'User',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmdline: 'string',
      createTimestamp: 'number',
      euidName: 'string',
      fileHash: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      isPackage: 'number',
      md5: 'string',
      name: 'string',
      path: 'string',
      pid: 'string',
      pname: 'string',
      startTime: 'string',
      startTimeDt: 'number',
      state: 'string',
      user: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyProcDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribePropertyProcDetailResponseBodyPageInfo;
  /**
   * @remarks
   * An array that consists of the fingerprints of the processes.
   */
  propertys?: DescribePropertyProcDetailResponseBodyPropertys[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * AA47D46F-10DE-138C-BBB4-8A0003F75CD7
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
      pageInfo: DescribePropertyProcDetailResponseBodyPageInfo,
      propertys: { 'type': 'array', 'itemType': DescribePropertyProcDetailResponseBodyPropertys },
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

