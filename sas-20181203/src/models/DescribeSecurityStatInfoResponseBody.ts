// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityStatInfoResponseBodyAttackEvent extends $dara.Model {
  /**
   * @remarks
   * The statistical time points in the trend chart of attacks.
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
   * The numbers of attacks at each statistical time point.
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
   * The statistical time points in the trend chart of baseline check issues.
   */
  dateArray?: string[];
  /**
   * @remarks
   * The number of high-risk baseline check issues on the current day.
   * 
   * @example
   * 10
   */
  highCount?: number;
  /**
   * @remarks
   * The numbers of high-risk baseline check issues at each statistical time point.
   */
  highList?: string[];
  /**
   * @remarks
   * The risk levels of baseline check issues included in the statistics.
   */
  levelsOn?: string[];
  /**
   * @remarks
   * The number of low-risk baseline check issues on the current day.
   * 
   * @example
   * 0
   */
  lowCount?: number;
  /**
   * @remarks
   * The numbers of low-risk baseline check issues that occurred at each statistical time point.
   */
  lowList?: string[];
  /**
   * @remarks
   * The number of medium-risk baseline check issues on the current day.
   * 
   * @example
   * 21
   */
  mediumCount?: number;
  /**
   * @remarks
   * The numbers of medium-risk baseline check issues that occurred at each statistical time point.
   */
  mediumList?: string[];
  /**
   * @remarks
   * The statistical time periods for baseline check issues.
   */
  timeArray?: string[];
  /**
   * @remarks
   * The total number of baseline check issues on the current day.
   * 
   * @example
   * 32
   */
  totalCount?: number;
  /**
   * @remarks
   * The total numbers of baseline check issues at each statistical time point.
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
   * The statistical time points in the trend chart of pending alerts.
   */
  dateArray?: string[];
  /**
   * @remarks
   * The severity levels of pending alerts included in the statistics.
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
   * The numbers of alerts with the Reminder severity level that occurred at each statistical time point.
   */
  remindList?: string[];
  /**
   * @remarks
   * The number of alerts with the **Urgent** severity level that occurred on the current day.
   * 
   * @example
   * 404
   */
  seriousCount?: number;
  /**
   * @remarks
   * The numbers of alert events with the Urgent severity level that occurred at each statistical time point.
   */
  seriousList?: string[];
  /**
   * @remarks
   * The number of alerts with the **Suspicious** severity level that occurred on the current day.
   * 
   * @example
   * 148
   */
  suspiciousCount?: number;
  /**
   * @remarks
   * The numbers of alert events with the Suspicious severity level that occurred at each statistical time point.
   */
  suspiciousList?: string[];
  /**
   * @remarks
   * The statistical time periods for the same alerts.
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
   * The numbers of pending alerts at each statistical time point.
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
   * The number of vulnerabilities to be fixed with the **High** priority on the current day.
   * 
   * @example
   * 109
   */
  asapCount?: number;
  /**
   * @remarks
   * The numbers of vulnerabilities to be fixed with the High priority at each statistical time point.
   */
  asapList?: string[];
  /**
   * @remarks
   * The statistical time points in the trend chart of vulnerabilities to be fixed.
   */
  dateArray?: string[];
  /**
   * @remarks
   * The number of vulnerabilities to be fixed with the **Medium** priority on the current day.
   * 
   * @example
   * 275
   */
  laterCount?: number;
  /**
   * @remarks
   * The numbers of vulnerabilities to be fixed with the Medium priority at each statistical time point.
   */
  laterList?: string[];
  /**
   * @remarks
   * The priorities of vulnerabilities to be fixed included in the statistics.
   */
  levelsOn?: string[];
  /**
   * @remarks
   * The number of vulnerabilities to be fixed with the **Low** priority on the current day.
   * 
   * @example
   * 0
   */
  nntfCount?: number;
  /**
   * @remarks
   * The numbers of vulnerabilities to be fixed with the Low priority at each statistical time point.
   */
  nntfList?: string[];
  /**
   * @remarks
   * The statistical time periods for vulnerabilities to be fixed.
   */
  timeArray?: string[];
  /**
   * @remarks
   * The total number of vulnerabilities to be fixed on the current day.
   * 
   * @example
   * 384
   */
  totalCount?: number;
  /**
   * @remarks
   * The numbers of vulnerabilities to be fixed at each statistical time point.
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
   * The statistical details of attacks.
   */
  attackEvent?: DescribeSecurityStatInfoResponseBodyAttackEvent;
  /**
   * @remarks
   * The statistical details of baseline check issues.
   */
  healthCheck?: DescribeSecurityStatInfoResponseBodyHealthCheck;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A3E61730-85E2-4789-8017-B9B1B70F0568
   */
  requestId?: string;
  /**
   * @remarks
   * The statistical details of pending alerts.
   */
  securityEvent?: DescribeSecurityStatInfoResponseBodySecurityEvent;
  /**
   * @remarks
   * Indicates whether the query was successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The statistics information of vulnerabilities to be fixed.
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

