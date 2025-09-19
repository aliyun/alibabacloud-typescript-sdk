// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulTargetStatisticsResponseBodyTargetStatsTargets extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the configurations are applied to the server. Valid values:
   * 
   * *   **add**: yes
   * *   **del**: no
   * 
   * @example
   * add
   */
  flag?: string;
  /**
   * @remarks
   * The group ID or UUID of the server to which the configurations are applied.
   * 
   * @example
   * 0011ea53-738c-4bff-93be-ce6a1cc9****
   */
  target?: string;
  /**
   * @remarks
   * The condition by which the configurations are applied to the server. Valid values:
   * 
   * *   **uuid**: the UUID of the server
   * *   **groupId**: the ID of the server group
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
   * An array that consists of available servers.
   */
  targets?: DescribeVulTargetStatisticsResponseBodyTargetStatsTargets[];
  /**
   * @remarks
   * The total number of servers.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of servers to which the configurations are applied.
   * 
   * @example
   * 1
   */
  uuidCount?: number;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   cve: Linux software vulnerabilities
   * *   sys: Windows system vulnerabilities
   * *   cms: Web-CMS vulnerabilities
   * *   emg: urgent vulnerabilities
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
   * The page number.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 23AD0BD2-8771-5647-819E-6BA51E212F80
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the configurations of the vulnerability scan feature.
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

