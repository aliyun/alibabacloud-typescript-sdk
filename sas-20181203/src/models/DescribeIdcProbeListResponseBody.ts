// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIdcProbeListResponseBodyIdcProbes extends $dara.Model {
  /**
   * @remarks
   * The name of the IDC.
   * 
   * @example
   * 3K IDC
   */
  idcName?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-hangzhou
   */
  idcRegion?: string;
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * @example
   * i-xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * oraclexxx
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 47.98.*.*
   */
  internetIp?: string;
  /**
   * @remarks
   * The scan interval.
   * 
   * @example
   * 16
   */
  intervalPeriod?: number;
  /**
   * @remarks
   * The private IP address of the instance.
   * 
   * @example
   * 10.68.*.*
   */
  intranetIp?: string;
  /**
   * @remarks
   * The IP address range.
   * 
   * @example
   * 192.168.1.0/24
   */
  ipSegments?: string;
  /**
   * @remarks
   * The Linux port.
   * 
   * @example
   * 22
   */
  linuxPort?: string;
  /**
   * @remarks
   * The unit of the scan interval. Valid values:
   * - **day**: Day.
   * - **hour**: Hour.
   * 
   * @example
   * day
   */
  periodUnit?: string;
  /**
   * @remarks
   * The service status of the probe. Valid values:
   * 
   * - **0**: Normal.
   * - **1**: Abnormal.
   * 
   * @example
   * 0
   */
  serviceStatus?: number;
  /**
   * @remarks
   * The status of the probe. Valid values:
   * 
   * - **0**: Enabled.
   * - **1**: Disabled.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * inet-eae02b9a-1dbd-44a6-844c-69072b27****
   */
  uuid?: string;
  /**
   * @remarks
   * The Windows port.
   * 
   * @example
   * 3389
   */
  winPort?: string;
  static names(): { [key: string]: string } {
    return {
      idcName: 'IdcName',
      idcRegion: 'IdcRegion',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intervalPeriod: 'IntervalPeriod',
      intranetIp: 'IntranetIp',
      ipSegments: 'IpSegments',
      linuxPort: 'LinuxPort',
      periodUnit: 'PeriodUnit',
      serviceStatus: 'ServiceStatus',
      status: 'Status',
      uuid: 'Uuid',
      winPort: 'WinPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idcName: 'string',
      idcRegion: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intervalPeriod: 'number',
      intranetIp: 'string',
      ipSegments: 'string',
      linuxPort: 'string',
      periodUnit: 'string',
      serviceStatus: 'number',
      status: 'number',
      uuid: 'string',
      winPort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIdcProbeListResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page in a paging query.
   * 
   * @example
   * 17
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries returned on each page in a paging query.
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
   * 30
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

export class DescribeIdcProbeListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of IDC probes.
   */
  idcProbes?: DescribeIdcProbeListResponseBodyIdcProbes[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeIdcProbeListResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0C8487EF-50C2-54BB-8634-10F8C35D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      idcProbes: 'IdcProbes',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idcProbes: { 'type': 'array', 'itemType': DescribeIdcProbeListResponseBodyIdcProbes },
      pageInfo: DescribeIdcProbeListResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.idcProbes)) {
      $dara.Model.validateArray(this.idcProbes);
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

