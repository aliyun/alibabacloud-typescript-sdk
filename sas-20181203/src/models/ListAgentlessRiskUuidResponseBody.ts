// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentlessRiskUuidResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The number of baseline risks.
   * 
   * @example
   * 1
   */
  baselineCount?: number;
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * @example
   * s-bp1g6wxdwps7s9dz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name of the asset.
   * 
   * @example
   * sql-test-0****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 8.210.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 172.25.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The number of malicious samples.
   * 
   * @example
   * 1
   */
  maliciousCount?: number;
  /**
   * @remarks
   * The timestamp of the detection. Unit: milliseconds.
   * 
   * @example
   * 168257753****
   */
  scanTime?: number;
  /**
   * @remarks
   * The ID of the asset that is detected.
   * 
   * @example
   * 30****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the asset that is detected.
   * 
   * @example
   * test****
   */
  targetName?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 49e25e0f-bb51-4a5a-a1b3-13a4ddaa****
   */
  uuid?: string;
  /**
   * @remarks
   * The number of detected vulnerabilities.
   * 
   * @example
   * 1
   */
  vulCount?: number;
  static names(): { [key: string]: string } {
    return {
      baselineCount: 'BaselineCount',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      maliciousCount: 'MaliciousCount',
      scanTime: 'ScanTime',
      targetId: 'TargetId',
      targetName: 'TargetName',
      uuid: 'Uuid',
      vulCount: 'VulCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineCount: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      maliciousCount: 'number',
      scanTime: 'number',
      targetId: 'string',
      targetName: 'string',
      uuid: 'string',
      vulCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentlessRiskUuidResponseBodyPageInfo extends $dara.Model {
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
   * 69
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListAgentlessRiskUuidResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the hosts.
   */
  list?: ListAgentlessRiskUuidResponseBodyList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListAgentlessRiskUuidResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05AE6B16-741A-5A75-9BF0-BC747DD9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListAgentlessRiskUuidResponseBodyList },
      pageInfo: ListAgentlessRiskUuidResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

