// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIdcProbeScanResultListResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The online status of the probe instance client. Valid values:
   * 
   * - **online**: The Agent client on the asset is enabled.
   * - **offline**: The Agent client on the asset is disabled.
   * 
   * @example
   * online
   */
  clientStatus?: string;
  /**
   * @remarks
   * The name of the IDC server room.
   * 
   * @example
   * 3K机房广州
   */
  idcName?: string;
  /**
   * @remarks
   * The IP segment list.
   * 
   * @example
   * 192.168.2.0/24
   */
  ipSegment?: string;
  /**
   * @remarks
   * The timestamp of the latest scan, in milliseconds.
   * 
   * @example
   * 1720006818000
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The operating system type of the asset. Valid values:
   * - **windows**
   * - **linux**.
   * 
   * @example
   * Linux
   */
  os?: string;
  /**
   * @remarks
   * The public IP address of the associated machine instance.
   * 
   * @example
   * 42.121.*.*
   */
  probeInternetIp?: string;
  /**
   * @remarks
   * The private IP address of the associated machine instance.
   * 
   * @example
   * 192.168.*.*
   */
  probeIntranetIp?: string;
  /**
   * @remarks
   * The name of the associated machine instance.
   * 
   * @example
   * i-xxxx
   */
  probeMachineName?: string;
  /**
   * @remarks
   * The UUID of the associated machine instance.
   * 
   * @example
   * 11C96623-E106-59C9-866D-A6C82911****
   */
  probeUuid?: string;
  /**
   * @remarks
   * The scan result ID.
   * 
   * @example
   * 1231
   */
  scanResultId?: number;
  /**
   * @remarks
   * The scanned IP address.
   * 
   * @example
   * 192.168.*.*
   */
  scannedIp?: string;
  /**
   * @remarks
   * The scanned port.
   * 
   * @example
   * 22
   */
  validPort?: string;
  static names(): { [key: string]: string } {
    return {
      clientStatus: 'ClientStatus',
      idcName: 'IdcName',
      ipSegment: 'IpSegment',
      lastScanTime: 'LastScanTime',
      os: 'Os',
      probeInternetIp: 'ProbeInternetIp',
      probeIntranetIp: 'ProbeIntranetIp',
      probeMachineName: 'ProbeMachineName',
      probeUuid: 'ProbeUuid',
      scanResultId: 'ScanResultId',
      scannedIp: 'ScannedIp',
      validPort: 'ValidPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientStatus: 'string',
      idcName: 'string',
      ipSegment: 'string',
      lastScanTime: 'number',
      os: 'string',
      probeInternetIp: 'string',
      probeIntranetIp: 'string',
      probeMachineName: 'string',
      probeUuid: 'string',
      scanResultId: 'number',
      scannedIp: 'string',
      validPort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIdcProbeScanResultListResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 9
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
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
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

export class DescribeIdcProbeScanResultListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of instances.
   */
  instances?: DescribeIdcProbeScanResultListResponseBodyInstances[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeIdcProbeScanResultListResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each API request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * A3D7C47D-3F11-57BB-90E8-E5C20C61****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeIdcProbeScanResultListResponseBodyInstances },
      pageInfo: DescribeIdcProbeScanResultListResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
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

