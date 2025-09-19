// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckSummaryResponseBodyOverallItemStatistic extends $dara.Model {
  /**
   * @remarks
   * The number of check items supported by the system.
   * 
   * @example
   * 620
   */
  releaseCount?: number;
  /**
   * @remarks
   * The number of check items available to you.
   * 
   * @example
   * 25
   */
  resultCount?: number;
  static names(): { [key: string]: string } {
    return {
      releaseCount: 'ReleaseCount',
      resultCount: 'ResultCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      releaseCount: 'number',
      resultCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckSummaryResponseBodyOverallStatistic extends $dara.Model {
  /**
   * @remarks
   * The number of unchecked check items.
   * 
   * @example
   * 3
   */
  notCheckCount?: number;
  /**
   * @remarks
   * The number of unchecked high-risk check items.
   * 
   * @example
   * 1
   */
  notCheckHighCount?: number;
  /**
   * @remarks
   * The number of unchecked low-risk check items.
   * 
   * @example
   * 1
   */
  notCheckLowCount?: number;
  /**
   * @remarks
   * The number of unchecked medium-risk check items.
   * 
   * @example
   * 1
   */
  notCheckMediumCount?: number;
  /**
   * @remarks
   * The number of check items that failed to pass the check.
   * 
   * @example
   * 3
   */
  notPassCount?: number;
  /**
   * @remarks
   * The number of high-risk check items that failed to pass the check.
   * 
   * @example
   * 1
   */
  notPassHighCount?: number;
  /**
   * @remarks
   * The number of low-risk check items that failed to pass the check.
   * 
   * @example
   * 1
   */
  notPassLowCount?: number;
  /**
   * @remarks
   * The number of medium-risk check items that failed to pass the check.
   * 
   * @example
   * 1
   */
  notPassMediumCount?: number;
  /**
   * @remarks
   * The number of check items that pass the check.
   * 
   * @example
   * 3
   */
  passCount?: number;
  /**
   * @remarks
   * The number of high-risk check items that pass the check.
   * 
   * @example
   * 1
   */
  passHighCount?: number;
  /**
   * @remarks
   * The number of low-risk check items that pass the check.
   * 
   * @example
   * 1
   */
  passLowCount?: number;
  /**
   * @remarks
   * The number of medium-risk check items that pass the check.
   * 
   * @example
   * 1
   */
  passMediumCount?: number;
  static names(): { [key: string]: string } {
    return {
      notCheckCount: 'NotCheckCount',
      notCheckHighCount: 'NotCheckHighCount',
      notCheckLowCount: 'NotCheckLowCount',
      notCheckMediumCount: 'NotCheckMediumCount',
      notPassCount: 'NotPassCount',
      notPassHighCount: 'NotPassHighCount',
      notPassLowCount: 'NotPassLowCount',
      notPassMediumCount: 'NotPassMediumCount',
      passCount: 'PassCount',
      passHighCount: 'PassHighCount',
      passLowCount: 'PassLowCount',
      passMediumCount: 'PassMediumCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notCheckCount: 'number',
      notCheckHighCount: 'number',
      notCheckLowCount: 'number',
      notCheckMediumCount: 'number',
      notPassCount: 'number',
      notPassHighCount: 'number',
      notPassLowCount: 'number',
      notPassMediumCount: 'number',
      passCount: 'number',
      passHighCount: 'number',
      passLowCount: 'number',
      passMediumCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckSummaryResponseBodySummarysStandardsStandardStatistic extends $dara.Model {
  /**
   * @remarks
   * The number of unchecked check items.
   * 
   * @example
   * 3
   */
  notCheckCount?: number;
  /**
   * @remarks
   * The number of unchecked high-risk check items.
   * 
   * @example
   * 1
   */
  notCheckHighCount?: number;
  /**
   * @remarks
   * The number of unchecked low-risk check items.
   * 
   * @example
   * 1
   */
  notCheckLowCount?: number;
  /**
   * @remarks
   * The number of unchecked medium-risk check items.
   * 
   * @example
   * 1
   */
  notCheckMediumCount?: number;
  /**
   * @remarks
   * The number of check items that failed to pass the check.
   * 
   * @example
   * 3
   */
  notPassCount?: number;
  /**
   * @remarks
   * The number of high-risk check items that failed to pass the check.
   * 
   * @example
   * 1
   */
  notPassHighCount?: number;
  /**
   * @remarks
   * The number of low-risk check items that failed to pass the check.
   * 
   * @example
   * 1
   */
  notPassLowCount?: number;
  /**
   * @remarks
   * The number of medium-risk check items that failed to pass the check.
   * 
   * @example
   * 1
   */
  notPassMediumCount?: number;
  /**
   * @remarks
   * The number of check items that pass the check.
   * 
   * @example
   * 3
   */
  passCount?: number;
  /**
   * @remarks
   * The number of high-risk check items that pass the check.
   * 
   * @example
   * 1
   */
  passHighCount?: number;
  /**
   * @remarks
   * The number of low-risk check items that pass the check.
   * 
   * @example
   * 1
   */
  passLowCount?: number;
  /**
   * @remarks
   * The number of medium-risk check items that pass the check.
   * 
   * @example
   * 1
   */
  passMediumCount?: number;
  static names(): { [key: string]: string } {
    return {
      notCheckCount: 'NotCheckCount',
      notCheckHighCount: 'NotCheckHighCount',
      notCheckLowCount: 'NotCheckLowCount',
      notCheckMediumCount: 'NotCheckMediumCount',
      notPassCount: 'NotPassCount',
      notPassHighCount: 'NotPassHighCount',
      notPassLowCount: 'NotPassLowCount',
      notPassMediumCount: 'NotPassMediumCount',
      passCount: 'PassCount',
      passHighCount: 'PassHighCount',
      passLowCount: 'PassLowCount',
      passMediumCount: 'PassMediumCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notCheckCount: 'number',
      notCheckHighCount: 'number',
      notCheckLowCount: 'number',
      notCheckMediumCount: 'number',
      notPassCount: 'number',
      notPassHighCount: 'number',
      notPassLowCount: 'number',
      notPassMediumCount: 'number',
      passCount: 'number',
      passHighCount: 'number',
      passLowCount: 'number',
      passMediumCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckSummaryResponseBodySummarysStandards extends $dara.Model {
  /**
   * @remarks
   * The number of check items that failed to pass the check.
   * 
   * @example
   * 1
   */
  failCount?: number;
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The number of check items that pass the check.
   * 
   * @example
   * 1
   */
  passCount?: number;
  /**
   * @remarks
   * The number of **high-risk** items.
   * 
   * @example
   * 1
   */
  riskLevelHighCount?: number;
  /**
   * @remarks
   * The number of **low-risk** items.
   * 
   * @example
   * 1
   */
  riskLevelLowCount?: number;
  /**
   * @remarks
   * The number of **medium-risk** items.
   * 
   * @example
   * 1
   */
  riskLevelMediumCount?: number;
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * Identity and permission management
   */
  showName?: string;
  /**
   * @remarks
   * The standard statistics of the check items.
   */
  standardStatistic?: GetCheckSummaryResponseBodySummarysStandardsStandardStatistic;
  static names(): { [key: string]: string } {
    return {
      failCount: 'FailCount',
      id: 'Id',
      passCount: 'PassCount',
      riskLevelHighCount: 'RiskLevelHighCount',
      riskLevelLowCount: 'RiskLevelLowCount',
      riskLevelMediumCount: 'RiskLevelMediumCount',
      showName: 'ShowName',
      standardStatistic: 'StandardStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      id: 'number',
      passCount: 'number',
      riskLevelHighCount: 'number',
      riskLevelLowCount: 'number',
      riskLevelMediumCount: 'number',
      showName: 'string',
      standardStatistic: GetCheckSummaryResponseBodySummarysStandardsStandardStatistic,
    };
  }

  validate() {
    if(this.standardStatistic && typeof (this.standardStatistic as any).validate === 'function') {
      (this.standardStatistic as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckSummaryResponseBodySummarysTypeStatistic extends $dara.Model {
  /**
   * @remarks
   * The number of unchecked check items.
   * 
   * @example
   * 3
   */
  notCheckCount?: number;
  /**
   * @remarks
   * The number of unchecked high-risk check items.
   * 
   * @example
   * 1
   */
  notCheckHighCount?: number;
  /**
   * @remarks
   * The number of unchecked low-risk check items.
   * 
   * @example
   * 1
   */
  notCheckLowCount?: number;
  /**
   * @remarks
   * The number of unchecked medium-risk check items.
   * 
   * @example
   * 1
   */
  notCheckMediumCount?: number;
  /**
   * @remarks
   * The number of check items that failed to pass the check.
   * 
   * @example
   * 3
   */
  notPassCount?: number;
  /**
   * @remarks
   * The number of high-risk check items that failed to pass the check.
   * 
   * @example
   * 1
   */
  notPassHighCount?: number;
  /**
   * @remarks
   * The number of low-risk check items that failed to pass the check.
   * 
   * @example
   * 1
   */
  notPassLowCount?: number;
  /**
   * @remarks
   * The number of medium-risk check items that failed to pass the check.
   * 
   * @example
   * 1
   */
  notPassMediumCount?: number;
  /**
   * @remarks
   * The number of check items that pass the check.
   * 
   * @example
   * 3
   */
  passCount?: number;
  /**
   * @remarks
   * The number of high-risk check items that pass the check.
   * 
   * @example
   * 1
   */
  passHighCount?: number;
  /**
   * @remarks
   * The number of low-risk check items that pass the check.
   * 
   * @example
   * 1
   */
  passLowCount?: number;
  /**
   * @remarks
   * The number of medium-risk check items that pass the check.
   * 
   * @example
   * 1
   */
  passMediumCount?: number;
  static names(): { [key: string]: string } {
    return {
      notCheckCount: 'NotCheckCount',
      notCheckHighCount: 'NotCheckHighCount',
      notCheckLowCount: 'NotCheckLowCount',
      notCheckMediumCount: 'NotCheckMediumCount',
      notPassCount: 'NotPassCount',
      notPassHighCount: 'NotPassHighCount',
      notPassLowCount: 'NotPassLowCount',
      notPassMediumCount: 'NotPassMediumCount',
      passCount: 'PassCount',
      passHighCount: 'PassHighCount',
      passLowCount: 'PassLowCount',
      passMediumCount: 'PassMediumCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notCheckCount: 'number',
      notCheckHighCount: 'number',
      notCheckLowCount: 'number',
      notCheckMediumCount: 'number',
      notPassCount: 'number',
      notPassHighCount: 'number',
      notPassLowCount: 'number',
      notPassMediumCount: 'number',
      passCount: 'number',
      passHighCount: 'number',
      passLowCount: 'number',
      passMediumCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckSummaryResponseBodySummarys extends $dara.Model {
  /**
   * @remarks
   * The number of detected risk items.
   * 
   * @example
   * 5
   */
  failCount?: number;
  /**
   * @remarks
   * The number of check items that pass the check.
   * 
   * @example
   * 10
   */
  passCount?: number;
  /**
   * @remarks
   * The information about the check items.
   */
  standards?: GetCheckSummaryResponseBodySummarysStandards[];
  /**
   * @remarks
   * The type of the check item. Valid values:
   * 
   * *   **COMPLIANCE**
   * *   **RISK**
   * *   **IDENTITY_PERMISSION**
   * 
   * @example
   * IDENTITY_PERMISSION
   */
  type?: string;
  /**
   * @remarks
   * The risk statistics by type.
   */
  typeStatistic?: GetCheckSummaryResponseBodySummarysTypeStatistic;
  static names(): { [key: string]: string } {
    return {
      failCount: 'FailCount',
      passCount: 'PassCount',
      standards: 'Standards',
      type: 'Type',
      typeStatistic: 'TypeStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      passCount: 'number',
      standards: { 'type': 'array', 'itemType': GetCheckSummaryResponseBodySummarysStandards },
      type: 'string',
      typeStatistic: GetCheckSummaryResponseBodySummarysTypeStatistic,
    };
  }

  validate() {
    if(Array.isArray(this.standards)) {
      $dara.Model.validateArray(this.standards);
    }
    if(this.typeStatistic && typeof (this.typeStatistic as any).validate === 'function') {
      (this.typeStatistic as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics about the number of check items.
   */
  overallItemStatistic?: GetCheckSummaryResponseBodyOverallItemStatistic;
  /**
   * @remarks
   * The overall risk statistics.
   */
  overallStatistic?: GetCheckSummaryResponseBodyOverallStatistic;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 843E4805-****-7EE12FA8DBFD
   */
  requestId?: string;
  /**
   * @remarks
   * The summary information about the configuration checks on cloud services.
   */
  summarys?: GetCheckSummaryResponseBodySummarys[];
  static names(): { [key: string]: string } {
    return {
      overallItemStatistic: 'OverallItemStatistic',
      overallStatistic: 'OverallStatistic',
      requestId: 'RequestId',
      summarys: 'Summarys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overallItemStatistic: GetCheckSummaryResponseBodyOverallItemStatistic,
      overallStatistic: GetCheckSummaryResponseBodyOverallStatistic,
      requestId: 'string',
      summarys: { 'type': 'array', 'itemType': GetCheckSummaryResponseBodySummarys },
    };
  }

  validate() {
    if(this.overallItemStatistic && typeof (this.overallItemStatistic as any).validate === 'function') {
      (this.overallItemStatistic as any).validate();
    }
    if(this.overallStatistic && typeof (this.overallStatistic as any).validate === 'function') {
      (this.overallStatistic as any).validate();
    }
    if(Array.isArray(this.summarys)) {
      $dara.Model.validateArray(this.summarys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

