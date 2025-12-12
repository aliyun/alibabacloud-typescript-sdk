// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyCronDetailResponseBodyPageInfo extends $dara.Model {
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
  nextToken?: string;
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

export class DescribePropertyCronDetailResponseBodyPropertys extends $dara.Model {
  /**
   * @remarks
   * The command that is used to run the scheduled task.
   * 
   * @example
   * /usr/lib64/sa/sa1 1 1
   */
  cmd?: string;
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
   * The MD5 hash value of the path to the scheduled task.
   * 
   * @example
   * 4cc8f97c2bf9cbabb2c2be2erqw****
   */
  md5?: string;
  /**
   * @remarks
   * The interval at which the scheduled task is performed.
   */
  period?: string;
  /**
   * @remarks
   * The path to the scheduled task.
   * 
   * @example
   * /etc/cron.d/root
   */
  source?: string;
  /**
   * @remarks
   * The username of the account that runs the scheduled task.
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
  static names(): { [key: string]: string } {
    return {
      cmd: 'Cmd',
      createTimestamp: 'CreateTimestamp',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      md5: 'Md5',
      period: 'Period',
      source: 'Source',
      user: 'User',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmd: 'string',
      createTimestamp: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      md5: 'string',
      period: 'string',
      source: 'string',
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

export class DescribePropertyCronDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribePropertyCronDetailResponseBodyPageInfo;
  /**
   * @remarks
   * The details of the scheduled tasks.
   */
  propertys?: DescribePropertyCronDetailResponseBodyPropertys[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * B0C4E12E-CCE1-109D-9E62-7B95CBBAEF8C
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
      pageInfo: DescribePropertyCronDetailResponseBodyPageInfo,
      propertys: { 'type': 'array', 'itemType': DescribePropertyCronDetailResponseBodyPropertys },
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

