// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityStatInfoResponseBodyAttackEvent extends $dara.Model {
  /**
   * @remarks
   * The collection of statistical time points in the attack count trend chart.
   */
  dateArray?: string[];
  /**
   * @remarks
   * The number of attacks on the current day.
   * 
   * @example
   * 1096
   */
  totalCount?: number;
  /**
   * @remarks
   * The collection of attack counts at each statistical time point.
   */
  valueArray?: string[];
  static names(): { [key: string]: string } {
    return {
      dateArray: 'DateArray',
      totalCount: 'TotalCount',
      valueArray: 'ValueArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateArray: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
      valueArray: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dateArray)) {
      $dara.Model.validateArray(this.dateArray);
    }
    if(Array.isArray(this.valueArray)) {
      $dara.Model.validateArray(this.valueArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityStatInfoResponseBodyHealthCheck extends $dara.Model {
  /**
   * @remarks
   * The collection of statistical time points in the baseline issue trend chart.
   */
  dateArray?: string[];
  /**
   * @remarks
   * The number of high-risk baseline issues on the current day.
   * 
   * @example
   * 10
   */
  highCount?: number;
  /**
   * @remarks
   * The collection of high-risk baseline counts at each statistical time point.
   */
  highList?: string[];
  /**
   * @remarks
   * The collection of baseline risk levels included in the statistics.
   */
  levelsOn?: string[];
  /**
   * @remarks
   * The number of low-risk baseline issues on the current day.
   * 
   * @example
   * 0
   */
  lowCount?: number;
  /**
   * @remarks
   * The collection of low-risk baseline issue counts at each statistical time point.
   */
  lowList?: string[];
  /**
   * @remarks
   * The number of medium-risk baseline issues on the current day.
   * 
   * @example
   * 21
   */
  mediumCount?: number;
  /**
   * @remarks
   * The collection of medium-risk baseline issue counts at each statistical time point.
   */
  mediumList?: string[];
  /**
   * @remarks
   * The collection of statistical time periods for baselines.
   */
  timeArray?: string[];
  /**
   * @remarks
   * The total number of baseline issues on the current day.
   * 
   * @example
   * 32
   */
  totalCount?: number;
  /**
   * @remarks
   * The collection of total baseline counts at each statistical time point.
   */
  valueArray?: string[];
  static names(): { [key: string]: string } {
    return {
      dateArray: 'DateArray',
      highCount: 'HighCount',
      highList: 'HighList',
      levelsOn: 'LevelsOn',
      lowCount: 'LowCount',
      lowList: 'LowList',
      mediumCount: 'MediumCount',
      mediumList: 'MediumList',
      timeArray: 'TimeArray',
      totalCount: 'TotalCount',
      valueArray: 'ValueArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateArray: { 'type': 'array', 'itemType': 'string' },
      highCount: 'number',
      highList: { 'type': 'array', 'itemType': 'string' },
      levelsOn: { 'type': 'array', 'itemType': 'string' },
      lowCount: 'number',
      lowList: { 'type': 'array', 'itemType': 'string' },
      mediumCount: 'number',
      mediumList: { 'type': 'array', 'itemType': 'string' },
      timeArray: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
      valueArray: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dateArray)) {
      $dara.Model.validateArray(this.dateArray);
    }
    if(Array.isArray(this.highList)) {
      $dara.Model.validateArray(this.highList);
    }
    if(Array.isArray(this.levelsOn)) {
      $dara.Model.validateArray(this.levelsOn);
    }
    if(Array.isArray(this.lowList)) {
      $dara.Model.validateArray(this.lowList);
    }
    if(Array.isArray(this.mediumList)) {
      $dara.Model.validateArray(this.mediumList);
    }
    if(Array.isArray(this.timeArray)) {
      $dara.Model.validateArray(this.timeArray);
    }
    if(Array.isArray(this.valueArray)) {
      $dara.Model.validateArray(this.valueArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityStatInfoResponseBodySecurityEvent extends $dara.Model {
  /**
   * @remarks
   * The collection of statistical time points in the pending alert trend chart.
   */
  dateArray?: string[];
  /**
   * @remarks
   * The collection of alert severity levels included in the statistics for pending alerts.
   */
  levelsOn?: string[];
  /**
   * @remarks
   * The number of alerts with the **Reminder** severity level detected on the current day.
   * 
   * @example
   * 0
   */
  remindCount?: number;
  /**
   * @remarks
   * The collection of Reminder-level alert counts at each statistical time point.
   */
  remindList?: string[];
  /**
   * @remarks
   * The number of alerts with the **Urgent** severity level on the current day.
   * 
   * @example
   * 404
   */
  seriousCount?: number;
  /**
   * @remarks
   * The collection of Urgent-level alert counts at each statistical time point.
   */
  seriousList?: string[];
  /**
   * @remarks
   * The number of alerts with the **Suspicious** severity level on the current day.
   * 
   * @example
   * 148
   */
  suspiciousCount?: number;
  /**
   * @remarks
   * The collection of Suspicious-level alert counts at each statistical time point.
   */
  suspiciousList?: string[];
  /**
   * @remarks
   * The collection of statistical time periods for alerts.
   */
  timeArray?: string[];
  /**
   * @remarks
   * The total number of pending alerts on the current day.
   * 
   * @example
   * 552
   */
  totalCount?: number;
  /**
   * @remarks
   * The collection of pending alert counts at each statistical time point.
   */
  valueArray?: string[];
  static names(): { [key: string]: string } {
    return {
      dateArray: 'DateArray',
      levelsOn: 'LevelsOn',
      remindCount: 'RemindCount',
      remindList: 'RemindList',
      seriousCount: 'SeriousCount',
      seriousList: 'SeriousList',
      suspiciousCount: 'SuspiciousCount',
      suspiciousList: 'SuspiciousList',
      timeArray: 'TimeArray',
      totalCount: 'TotalCount',
      valueArray: 'ValueArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateArray: { 'type': 'array', 'itemType': 'string' },
      levelsOn: { 'type': 'array', 'itemType': 'string' },
      remindCount: 'number',
      remindList: { 'type': 'array', 'itemType': 'string' },
      seriousCount: 'number',
      seriousList: { 'type': 'array', 'itemType': 'string' },
      suspiciousCount: 'number',
      suspiciousList: { 'type': 'array', 'itemType': 'string' },
      timeArray: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
      valueArray: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dateArray)) {
      $dara.Model.validateArray(this.dateArray);
    }
    if(Array.isArray(this.levelsOn)) {
      $dara.Model.validateArray(this.levelsOn);
    }
    if(Array.isArray(this.remindList)) {
      $dara.Model.validateArray(this.remindList);
    }
    if(Array.isArray(this.seriousList)) {
      $dara.Model.validateArray(this.seriousList);
    }
    if(Array.isArray(this.suspiciousList)) {
      $dara.Model.validateArray(this.suspiciousList);
    }
    if(Array.isArray(this.timeArray)) {
      $dara.Model.validateArray(this.timeArray);
    }
    if(Array.isArray(this.valueArray)) {
      $dara.Model.validateArray(this.valueArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityStatInfoResponseBodyVulnerability extends $dara.Model {
  /**
   * @remarks
   * The number of unfixed vulnerabilities with **high** priority on the current day.
   * 
   * @example
   * 109
   */
  asapCount?: number;
  /**
   * @remarks
   * The collection of high-priority unfixed vulnerability counts at each statistical time point.
   */
  asapList?: string[];
  /**
   * @remarks
   * The collection of statistical time points in the unfixed vulnerability trend chart.
   */
  dateArray?: string[];
  /**
   * @remarks
   * The number of unfixed vulnerabilities with **medium** priority on the current day.
   * 
   * @example
   * 275
   */
  laterCount?: number;
  /**
   * @remarks
   * The collection of medium-priority unfixed vulnerability counts at each statistical time point.
   */
  laterList?: string[];
  /**
   * @remarks
   * The collection of vulnerability priority levels included in the statistics for unfixed vulnerabilities.
   */
  levelsOn?: string[];
  /**
   * @remarks
   * The number of unfixed vulnerabilities with **low** priority on the current day.
   * 
   * @example
   * 0
   */
  nntfCount?: number;
  /**
   * @remarks
   * The collection of low-priority unfixed vulnerability counts at each statistical time point.
   */
  nntfList?: string[];
  /**
   * @remarks
   * The collection of statistical time periods for unfixed vulnerabilities.
   */
  timeArray?: string[];
  /**
   * @remarks
   * The number of unfixed vulnerabilities on the current day.
   * 
   * @example
   * 384
   */
  totalCount?: number;
  /**
   * @remarks
   * The collection of unfixed vulnerability counts at each statistical time point.
   */
  valueArray?: string[];
  static names(): { [key: string]: string } {
    return {
      asapCount: 'AsapCount',
      asapList: 'AsapList',
      dateArray: 'DateArray',
      laterCount: 'LaterCount',
      laterList: 'LaterList',
      levelsOn: 'LevelsOn',
      nntfCount: 'NntfCount',
      nntfList: 'NntfList',
      timeArray: 'TimeArray',
      totalCount: 'TotalCount',
      valueArray: 'ValueArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asapCount: 'number',
      asapList: { 'type': 'array', 'itemType': 'string' },
      dateArray: { 'type': 'array', 'itemType': 'string' },
      laterCount: 'number',
      laterList: { 'type': 'array', 'itemType': 'string' },
      levelsOn: { 'type': 'array', 'itemType': 'string' },
      nntfCount: 'number',
      nntfList: { 'type': 'array', 'itemType': 'string' },
      timeArray: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
      valueArray: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.asapList)) {
      $dara.Model.validateArray(this.asapList);
    }
    if(Array.isArray(this.dateArray)) {
      $dara.Model.validateArray(this.dateArray);
    }
    if(Array.isArray(this.laterList)) {
      $dara.Model.validateArray(this.laterList);
    }
    if(Array.isArray(this.levelsOn)) {
      $dara.Model.validateArray(this.levelsOn);
    }
    if(Array.isArray(this.nntfList)) {
      $dara.Model.validateArray(this.nntfList);
    }
    if(Array.isArray(this.timeArray)) {
      $dara.Model.validateArray(this.timeArray);
    }
    if(Array.isArray(this.valueArray)) {
      $dara.Model.validateArray(this.valueArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityStatInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics of attack events.
   */
  attackEvent?: DescribeSecurityStatInfoResponseBodyAttackEvent;
  /**
   * @remarks
   * The statistics of baseline issues.
   */
  healthCheck?: DescribeSecurityStatInfoResponseBodyHealthCheck;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * A3E61730-85E2-4789-8017-B9B1B70F0568
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics of pending security alerts.
   */
  securityEvent?: DescribeSecurityStatInfoResponseBodySecurityEvent;
  /**
   * @remarks
   * Indicates whether the query is successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The statistics information of unfixed vulnerabilities.
   */
  vulnerability?: DescribeSecurityStatInfoResponseBodyVulnerability;
  static names(): { [key: string]: string } {
    return {
      attackEvent: 'AttackEvent',
      healthCheck: 'HealthCheck',
      requestId: 'RequestId',
      securityEvent: 'SecurityEvent',
      success: 'Success',
      vulnerability: 'Vulnerability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackEvent: DescribeSecurityStatInfoResponseBodyAttackEvent,
      healthCheck: DescribeSecurityStatInfoResponseBodyHealthCheck,
      requestId: 'string',
      securityEvent: DescribeSecurityStatInfoResponseBodySecurityEvent,
      success: 'boolean',
      vulnerability: DescribeSecurityStatInfoResponseBodyVulnerability,
    };
  }

  validate() {
    if(this.attackEvent && typeof (this.attackEvent as any).validate === 'function') {
      (this.attackEvent as any).validate();
    }
    if(this.healthCheck && typeof (this.healthCheck as any).validate === 'function') {
      (this.healthCheck as any).validate();
    }
    if(this.securityEvent && typeof (this.securityEvent as any).validate === 'function') {
      (this.securityEvent as any).validate();
    }
    if(this.vulnerability && typeof (this.vulnerability as any).validate === 'function') {
      (this.vulnerability as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

