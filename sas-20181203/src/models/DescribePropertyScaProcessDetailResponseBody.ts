// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyScaProcessDetailResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
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
   * 69
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

export class DescribePropertyScaProcessDetailResponseBodyPropertys extends $dara.Model {
  /**
   * @remarks
   * The command line of the process.
   * 
   * @example
   * java -Xms128m -Xmx512m -DNACOS_URL=http://10.184.XX.XX:8848 -DNACOS_NAMESPACE=iam-sit -jar /opt/service/xxl-job/xxl-job-admin-2.3.0.jar
   */
  cmdline?: string;
  /**
   * @remarks
   * The timestamp at which the last asset fingerprint collection is performed. Unit: milliseconds.
   * 
   * @example
   * 1597987834000
   */
  createTimestamp?: number;
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
   * The instance name of the server.
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
   * 120.26.XX.XX
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
   * The name of the process.
   * 
   * @example
   * java
   */
  name?: string;
  /**
   * @remarks
   * The ID of the process.
   * 
   * @example
   * 522
   */
  pid?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 162eb349-c2d9-4f8b-805c-75b43d4c****
   */
  uuid?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      cmdline: 'Cmdline',
      createTimestamp: 'CreateTimestamp',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      name: 'Name',
      pid: 'Pid',
      uuid: 'Uuid',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmdline: 'string',
      createTimestamp: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      name: 'string',
      pid: 'string',
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

export class DescribePropertyScaProcessDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribePropertyScaProcessDetailResponseBodyPageInfo;
  /**
   * @remarks
   * The processes collected by the asset fingerprints feature.
   */
  propertys?: DescribePropertyScaProcessDetailResponseBodyPropertys[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ADE57832-9666-511C-9A80-B87DE2E8****
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
      pageInfo: DescribePropertyScaProcessDetailResponseBodyPageInfo,
      propertys: { 'type': 'array', 'itemType': DescribePropertyScaProcessDetailResponseBodyPropertys },
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

