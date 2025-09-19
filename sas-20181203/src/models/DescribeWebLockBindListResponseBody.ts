// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebLockBindListResponseBodyBindList extends $dara.Model {
  /**
   * @remarks
   * The number of alerts.
   * 
   * @example
   * 2
   */
  auditCount?: string;
  /**
   * @remarks
   * The number of blocked tampering events.
   * 
   * @example
   * 10
   */
  blockCount?: string;
  /**
   * @remarks
   * The number of protected directories.
   * 
   * @example
   * 5
   */
  dirCount?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * testName
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 54.169.XX.XX
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
   * The operating system that the server runs.
   * 
   * @example
   * Linux
   */
  os?: string;
  /**
   * @remarks
   * The percentage of the starting progress of web tamper proofing. Valid values: 0 to 100.
   * 
   * @example
   * 99
   */
  percent?: number;
  /**
   * @remarks
   * The error code for web tamper proofing. Valid values:
   * 
   * *   **2001**: The Security Center agent is offline.
   * *   **9999**: The connection timed out.
   * 
   * @example
   * 2001
   */
  serviceCode?: string;
  /**
   * @remarks
   * The exception details of web tamper proofing. Valid values:
   * 
   * *   **client offline**: The Security Center agent is offline.
   * *   **timeout**: The connection timed out.
   * 
   * @example
   * client offline
   */
  serviceDetail?: string;
  /**
   * @remarks
   * The status of web tamper proofing on the server. Valid values:
   * 
   * *   **stop**: Web tamper proofing is disabled.
   * *   **initializing**: Web tamper proofing is being enabled.
   * *   **exception**: Web tamper proofing is not running as expected.
   * *   **running**: Web tamper proofing is running.
   * *   **closing**: Web tamper proofing is being disabled.
   * 
   * @example
   * stop
   */
  serviceStatus?: string;
  /**
   * @remarks
   * The protection status of the server. Valid values:
   * 
   * *   **on**: The server is protected.
   * *   **off**: The server is not protected.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * inet-12345****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      auditCount: 'AuditCount',
      blockCount: 'BlockCount',
      dirCount: 'DirCount',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      os: 'Os',
      percent: 'Percent',
      serviceCode: 'ServiceCode',
      serviceDetail: 'ServiceDetail',
      serviceStatus: 'ServiceStatus',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditCount: 'string',
      blockCount: 'string',
      dirCount: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      os: 'string',
      percent: 'number',
      serviceCode: 'string',
      serviceDetail: 'string',
      serviceStatus: 'string',
      status: 'string',
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

export class DescribeWebLockBindListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the servers that have web tamper proofing enabled.
   */
  bindList?: DescribeWebLockBindListResponseBodyBindList[];
  /**
   * @remarks
   * The page number of the returned page. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * D9354C1A-D709-4873-9AAE-41513327B247
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of servers that have web tamper proofing enabled.
   * 
   * @example
   * 11409
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bindList: 'BindList',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindList: { 'type': 'array', 'itemType': DescribeWebLockBindListResponseBodyBindList },
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bindList)) {
      $dara.Model.validateArray(this.bindList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

