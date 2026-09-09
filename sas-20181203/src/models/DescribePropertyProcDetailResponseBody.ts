// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyProcDetailResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of process Asset Fingerprints entries displayed on the current page.
   * 
   * @example
   * 1
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
   * B604532DEF982B875E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: **10**, which indicates that 10 entries of process Asset Fingerprints information are displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of process Asset Fingerprints entries returned.
   * 
   * @example
   * 1
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

export class DescribePropertyProcDetailResponseBodyPropertys extends $dara.Model {
  /**
   * @remarks
   * The startup parameters of the process.
   * 
   * @example
   * ./8888
   */
  cmdline?: string;
  /**
   * @remarks
   * The timestamp of the most recent data collection. Unit: milliseconds.
   * 
   * @example
   * 1565686951000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The running permission of the process.
   * 
   * @example
   * root
   */
  euidName?: string;
  /**
   * @remarks
   * The file hash of the process.
   * 
   * @example
   * 935c1861df1f4018d698e8b65abfa02d7e9037d8f68ca3c2065b6ca165d4****
   */
  fileHash?: string;
  /**
   * @remarks
   * The instance ID of the server associated with the process.
   * 
   * @example
   * i-hp35tftuh52wbp1g****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server associated with the process.
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
   * The private IP address of the asset.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * Indicates whether the process is an installation package process. Valid values:
   * 
   * - **1**: Yes.
   * - **0**: No.
   * 
   * @example
   * 1
   */
  isPackage?: number;
  /**
   * @remarks
   * The MD5 hash of the process file.
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
   * The process ID.
   * 
   * @example
   * 12826
   */
  pid?: string;
  /**
   * @remarks
   * The name of the parent process.
   * 
   * @example
   * start***.s
   */
  pname?: string;
  /**
   * @remarks
   * The time when the process started. The value is in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2019-08-07 10:09:05
   */
  startTime?: string;
  /**
   * @remarks
   * The timestamp when the process started. Unit: milliseconds.
   * 
   * @example
   * 1648783107000
   */
  startTimeDt?: number;
  /**
   * @remarks
   * The running state of the process.
   * 
   * @example
   * sleeping
   */
  state?: string;
  /**
   * @remarks
   * The user that runs the process.
   * 
   * @example
   * root
   */
  user?: string;
  /**
   * @remarks
   * The UUID of the server associated with the process.
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
   * The pagination information of the query result.
   */
  pageInfo?: DescribePropertyProcDetailResponseBodyPageInfo;
  /**
   * @remarks
   * The details of the process Asset Fingerprints information returned.
   */
  propertys?: DescribePropertyProcDetailResponseBodyPropertys[];
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
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

