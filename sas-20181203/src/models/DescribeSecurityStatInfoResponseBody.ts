// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityStatInfoResponseBodyAttackEvent extends $dara.Model {
  /**
   * @remarks
   * The points in time when the number of attacks is collected in the trend chart.
   */
  dateArray?: string[];
  /**
   * @remarks
   * The total number of attacks on the current day.
   * 
   * @example
   * 1096
   */
  totalCount?: number;
  /**
   * @remarks
   * The numbers of attacks at all points in time.
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
   * The points in time when data of baseline risk items is collected in the trend chart.
   */
  dateArray?: string[];
  /**
   * @remarks
   * The number of baseline risk items that have the high-risk level on the current day.
   * 
   * @example
   * 10
   */
  highCount?: number;
  /**
   * @remarks
   * The numbers of baseline risk items that have the high-risk level at all points in time.
   */
  highList?: string[];
  /**
   * @remarks
   * The risk levels of baseline risk items.
   */
  levelsOn?: string[];
  /**
   * @remarks
   * The number of baseline risk items that have the low-risk level on the current day.
   * 
   * @example
   * 0
   */
  lowCount?: number;
  /**
   * @remarks
   * The numbers of baseline risk items that have the low-risk level at all points in time.
   */
  lowList?: string[];
  /**
   * @remarks
   * The number of baseline risk items that have the medium-risk level on the current day.
   * 
   * @example
   * 21
   */
  mediumCount?: number;
  /**
   * @remarks
   * The numbers of baseline risk items that have the medium-risk level at all points in time.
   */
  mediumList?: string[];
  /**
   * @remarks
   * The time periods during which data of baseline risk items is collected.
   */
  timeArray?: string[];
  /**
   * @remarks
   * The total number of baseline risk items on the current day.
   * 
   * @example
   * 32
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of baseline risk items at all points in time.
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
   * The points in time when data of unhandled alerts is collected in the trend chart.
   */
  dateArray?: string[];
  /**
   * @remarks
   * The risk levels of unhandled alerts.
   */
  levelsOn?: string[];
  /**
   * @remarks
   * The number of **remind** alerts on the current day.
   * 
   * @example
   * 0
   */
  remindCount?: number;
  /**
   * @remarks
   * The numbers of remind alerts at all points in time.
   */
  remindList?: string[];
  /**
   * @remarks
   * The number of **serious** alerts on the current day.
   * 
   * @example
   * 404
   */
  seriousCount?: number;
  /**
   * @remarks
   * The numbers of serious alerts at all points in time.
   */
  seriousList?: string[];
  /**
   * @remarks
   * The number of **suspicious** alerts on the current day.
   * 
   * @example
   * 148
   */
  suspiciousCount?: number;
  /**
   * @remarks
   * The numbers of suspicious alerts at all points in time.
   */
  suspiciousList?: string[];
  /**
   * @remarks
   * The time periods during which data of the same alert is collected.
   */
  timeArray?: string[];
  /**
   * @remarks
   * The total number of unhandled alerts on the current day.
   * 
   * @example
   * 552
   */
  totalCount?: number;
  /**
   * @remarks
   * The numbers of unhandled alerts at all points in time.
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
   * The number of **high-risk** unfixed vulnerabilities on the current day.
   * 
   * @example
   * 109
   */
  asapCount?: number;
  /**
   * @remarks
   * The numbers of high-risk unfixed vulnerabilities at all points in time.
   */
  asapList?: string[];
  /**
   * @remarks
   * The points in time when data of unfixed vulnerabilities is collected in the trend chart.
   */
  dateArray?: string[];
  /**
   * @remarks
   * The number of **medium-risk** unfixed vulnerabilities on the current day.
   * 
   * @example
   * 275
   */
  laterCount?: number;
  /**
   * @remarks
   * The numbers of medium-risk unfixed vulnerabilities at all points in time.
   */
  laterList?: string[];
  /**
   * @remarks
   * The risk levels of unfixed vulnerabilities.
   */
  levelsOn?: string[];
  /**
   * @remarks
   * The number of **low-risk** unfixed vulnerabilities on the current day.
   * 
   * @example
   * 0
   */
  nntfCount?: number;
  /**
   * @remarks
   * The numbers of low-risk unfixed vulnerabilities at all points in time.
   */
  nntfList?: string[];
  /**
   * @remarks
   * The time periods during which data of unfixed vulnerabilities is collected.
   */
  timeArray?: string[];
  /**
   * @remarks
   * The total number of unfixed vulnerabilities on the current day.
   * 
   * @example
   * 384
   */
  totalCount?: number;
  /**
   * @remarks
   * The numbers of unfixed vulnerabilities at all points in time.
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
   * The detailed statistics of attacks.
   */
  attackEvent?: DescribeSecurityStatInfoResponseBodyAttackEvent;
  /**
   * @remarks
   * The detailed statistics of baseline risk items.
   */
  healthCheck?: DescribeSecurityStatInfoResponseBodyHealthCheck;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * A3E61730-85E2-4789-8017-B9B1B70F0568
   */
  requestId?: string;
  /**
   * @remarks
   * The detailed statistics of unhandled alerts.
   */
  securityEvent?: DescribeSecurityStatInfoResponseBodySecurityEvent;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The detailed statistics of unfixed vulnerabilities.
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

