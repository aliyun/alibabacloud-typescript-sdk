// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBruteForceRecordsResponseBodyMachineList extends $dara.Model {
  /**
   * @remarks
   * The status of the host network extension. Valid values:
   * 
   * *   **true**: online
   * *   **false**: offline
   * 
   * @example
   * false
   */
  aliNetOnline?: boolean;
  /**
   * @remarks
   * The timestamp when the block action on the IP address becomes invalid.
   * 
   * @example
   * 1671506882063
   */
  blockExpireDate?: number;
  /**
   * @remarks
   * The IP address that is blocked.
   * 
   * @example
   * 10.12.XX.XX
   */
  blockIp?: string;
  /**
   * @remarks
   * The blocking type. Valid values:
   * 
   * *   **group**: security group
   * *   **alinet**: host network extension
   * 
   * @example
   * alinet
   */
  blockType?: string;
  /**
   * @remarks
   * The error code returned when the defense rule fails to block the IP address.
   * 
   * @example
   * InstanceSecurityGroupLimitExceeded
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the primary key that is recorded in the defense rule.
   * 
   * @example
   * 112XX
   */
  id?: number;
  /**
   * @remarks
   * The instance name of the server.
   * 
   * @example
   * record-test-***
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 120.79.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The port that is attacked.
   * 
   * @example
   * 22/22
   */
  port?: string;
  /**
   * @remarks
   * The name of the defense rule.
   * 
   * @example
   * AntiRuleName
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the defense rule. Valid values:
   * 
   * *   **userRule**: custom rule
   * *   **blinkRule**: system rule
   * 
   * @example
   * userRule
   */
  source?: string;
  /**
   * @remarks
   * The status of the defense rule. Valid values:
   * 
   * *   **0**: invalid
   * *   **1**: enabled
   * *   **2**: failed
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The UUID of the server on which the defense rule takes effect.
   * 
   * @example
   * 6d5b361f-958d-48a8-a9d2-d6e82c1****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      aliNetOnline: 'AliNetOnline',
      blockExpireDate: 'BlockExpireDate',
      blockIp: 'BlockIp',
      blockType: 'BlockType',
      errorCode: 'ErrorCode',
      id: 'Id',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      port: 'Port',
      ruleName: 'RuleName',
      source: 'Source',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliNetOnline: 'boolean',
      blockExpireDate: 'number',
      blockIp: 'string',
      blockType: 'string',
      errorCode: 'string',
      id: 'number',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      port: 'string',
      ruleName: 'string',
      source: 'string',
      status: 'number',
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

export class DescribeBruteForceRecordsResponseBodyPageInfo extends $dara.Model {
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
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: **20**.
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
   * 263
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

export class DescribeBruteForceRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP addresses.
   */
  machineList?: DescribeBruteForceRecordsResponseBodyMachineList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeBruteForceRecordsResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92719F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      machineList: 'MachineList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineList: { 'type': 'array', 'itemType': DescribeBruteForceRecordsResponseBodyMachineList },
      pageInfo: DescribeBruteForceRecordsResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.machineList)) {
      $dara.Model.validateArray(this.machineList);
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

