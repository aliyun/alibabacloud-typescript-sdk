// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulTargetStatisticsResponseBodyTargetStatsTargets extends $dara.Model {
  /**
   * @remarks
   * The type of configuration effect. Valid values:
   * 
   * - **add**: The configuration takes effect on the server.
   * - **del**: The configuration does not take effect on the server.
   * 
   * @example
   * add
   */
  flag?: string;
  /**
   * @remarks
   * The group ID or UUID of the asset on which the configuration takes effect.
   * 
   * @example
   * 0011ea53-738c-4bff-93be-ce6a1cc9****
   */
  target?: string;
  /**
   * @remarks
   * The target type. Valid values:
   * 
   * - **uuid**: asset.
   * - **groupId**: server group.
   * 
   * @example
   * uuid
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      flag: 'Flag',
      target: 'Target',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flag: 'string',
      target: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulTargetStatisticsResponseBodyTargetStats extends $dara.Model {
  /**
   * @remarks
   * The list of target servers for the assets.
   */
  targets?: DescribeVulTargetStatisticsResponseBodyTargetStatsTargets[];
  /**
   * @remarks
   * The total number of assets returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of servers on which the configuration takes effect.
   * 
   * @example
   * 1
   */
  uuidCount?: number;
  /**
   * @remarks
   * The type of vulnerability to query. Valid values:
   * 
   * - cve: Linux software vulnerability
   * - sys: Windows system vulnerability
   * - cms: Web-CMS vulnerability
   * - emg: emergency vulnerability.
   * 
   * @example
   * cve
   */
  vulType?: string;
  static names(): { [key: string]: string } {
    return {
      targets: 'Targets',
      totalCount: 'TotalCount',
      uuidCount: 'UuidCount',
      vulType: 'VulType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targets: { 'type': 'array', 'itemType': DescribeVulTargetStatisticsResponseBodyTargetStatsTargets },
      totalCount: 'number',
      uuidCount: 'number',
      vulType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulTargetStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page when paging is used in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page when paging is used in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 23AD0BD2-8771-5647-819E-6BA51E212F80
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics of vulnerability configurations.
   */
  targetStats?: DescribeVulTargetStatisticsResponseBodyTargetStats[];
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
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      targetStats: 'TargetStats',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      targetStats: { 'type': 'array', 'itemType': DescribeVulTargetStatisticsResponseBodyTargetStats },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.targetStats)) {
      $dara.Model.validateArray(this.targetStats);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

