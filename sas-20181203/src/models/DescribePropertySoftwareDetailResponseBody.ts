// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertySoftwareDetailResponseBodyPageInfo extends $dara.Model {
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
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
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

export class DescribePropertySoftwareDetailResponseBodyPropertys extends $dara.Model {
  /**
   * @remarks
   * The timestamp generated when the last asset fingerprint collection is performed. Unit: milliseconds.
   * 
   * @example
   * 1649149566000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The time at which the software is installed.
   * 
   * @example
   * 2022-04-07 10:54:49
   */
  installTime?: string;
  /**
   * @remarks
   * The timestamp generated when the software is installed. Unit: milliseconds.
   * 
   * @example
   * 1649066826000
   */
  installTimeDt?: number;
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
   * 192.168.XX.XX
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
   * The IP addresses of the server.
   * 
   * @example
   * 192.168.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The name of the software.
   * 
   * @example
   * aaa_base
   */
  name?: string;
  /**
   * @remarks
   * The installation path of the software.
   * 
   * @example
   * /etc/test
   */
  path?: string;
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
   * The version of the software.
   * 
   * @example
   * 3.10.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'CreateTimestamp',
      installTime: 'InstallTime',
      installTimeDt: 'InstallTimeDt',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      name: 'Name',
      path: 'Path',
      uuid: 'Uuid',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      installTime: 'string',
      installTimeDt: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      name: 'string',
      path: 'string',
      uuid: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertySoftwareDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribePropertySoftwareDetailResponseBodyPageInfo;
  /**
   * @remarks
   * The details of the software asset.
   */
  propertys?: DescribePropertySoftwareDetailResponseBodyPropertys[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6AEE7412-0065-1135-B790-AE2C38BA68FB
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
      pageInfo: DescribePropertySoftwareDetailResponseBodyPageInfo,
      propertys: { 'type': 'array', 'itemType': DescribePropertySoftwareDetailResponseBodyPropertys },
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

