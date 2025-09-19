// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterHostSecuritySummaryResponseBodyClusterHostEventAlarmEvent extends $dara.Model {
  /**
   * @remarks
   * The number of alerts.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The alert level. Valid values:
   * 
   * *   **serious**
   * *   **suspicious**
   * *   **remind**
   * 
   * @example
   * remind
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      riskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterHostSecuritySummaryResponseBodyClusterHostEventBaselineEvent extends $dara.Model {
  /**
   * @remarks
   * The number of baselines.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The risk level of the baseline. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * medium
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      riskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterHostSecuritySummaryResponseBodyClusterHostEventVulEvent extends $dara.Model {
  /**
   * @remarks
   * The number of vulnerabilities.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The risk level of the vulnerability. Valid values:
   * 
   * *   **asap**: high. You must fix the vulnerability at the earliest opportunity.
   * *   **nntf**: medium. You can fix the vulnerability based on your business requirements.
   * *   **later**: low. You can ignore the vulnerability.
   * 
   * @example
   * later
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      riskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterHostSecuritySummaryResponseBodyClusterHostEvent extends $dara.Model {
  /**
   * @remarks
   * The alert details of the host.
   */
  alarmEvent?: DescribeClusterHostSecuritySummaryResponseBodyClusterHostEventAlarmEvent[];
  /**
   * @remarks
   * The baseline details of the host.
   */
  baselineEvent?: DescribeClusterHostSecuritySummaryResponseBodyClusterHostEventBaselineEvent[];
  /**
   * @remarks
   * The vulnerability details of the host.
   */
  vulEvent?: DescribeClusterHostSecuritySummaryResponseBodyClusterHostEventVulEvent[];
  static names(): { [key: string]: string } {
    return {
      alarmEvent: 'AlarmEvent',
      baselineEvent: 'BaselineEvent',
      vulEvent: 'VulEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEvent: { 'type': 'array', 'itemType': DescribeClusterHostSecuritySummaryResponseBodyClusterHostEventAlarmEvent },
      baselineEvent: { 'type': 'array', 'itemType': DescribeClusterHostSecuritySummaryResponseBodyClusterHostEventBaselineEvent },
      vulEvent: { 'type': 'array', 'itemType': DescribeClusterHostSecuritySummaryResponseBodyClusterHostEventVulEvent },
    };
  }

  validate() {
    if(Array.isArray(this.alarmEvent)) {
      $dara.Model.validateArray(this.alarmEvent);
    }
    if(Array.isArray(this.baselineEvent)) {
      $dara.Model.validateArray(this.baselineEvent);
    }
    if(Array.isArray(this.vulEvent)) {
      $dara.Model.validateArray(this.vulEvent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterHostSecuritySummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alert details of the hosts.
   */
  clusterHostEvent?: DescribeClusterHostSecuritySummaryResponseBodyClusterHostEvent;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B48AB3C-84FC-424D-A01D-B9270EF4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterHostEvent: 'ClusterHostEvent',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterHostEvent: DescribeClusterHostSecuritySummaryResponseBodyClusterHostEvent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.clusterHostEvent && typeof (this.clusterHostEvent as any).validate === 'function') {
      (this.clusterHostEvent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

