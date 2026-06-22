// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckSummaryResponseBodyOverallItemStatistic extends $dara.Model {
  /**
   * @remarks
   * The number of check items published by the system.
   * 
   * @example
   * 620
   */
  releaseCount?: number;
  /**
   * @remarks
   * The number of check items currently owned by the user.
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
   * The number of unchecked check items with a high risk level.
   * 
   * @example
   * 1
   */
  notCheckHighCount?: number;
  /**
   * @remarks
   * The number of unchecked check items with a low risk level.
   * 
   * @example
   * 1
   */
  notCheckLowCount?: number;
  /**
   * @remarks
   * The number of unchecked check items with a medium risk level.
   * 
   * @example
   * 1
   */
  notCheckMediumCount?: number;
  /**
   * @remarks
   * The number of check items that failed.
   * 
   * @example
   * 3
   */
  notPassCount?: number;
  /**
   * @remarks
   * The number of failed check items with a high risk level.
   * 
   * @example
   * 1
   */
  notPassHighCount?: number;
  /**
   * @remarks
   * The number of failed check items with a low risk level.
   * 
   * @example
   * 1
   */
  notPassLowCount?: number;
  /**
   * @remarks
   * The number of failed check items with a medium risk level.
   * 
   * @example
   * 1
   */
  notPassMediumCount?: number;
  /**
   * @remarks
   * The number of check items that passed.
   * 
   * @example
   * 3
   */
  passCount?: number;
  /**
   * @remarks
   * The number of passed check items with a high risk level.
   * 
   * @example
   * 1
   */
  passHighCount?: number;
  /**
   * @remarks
   * The number of passed check items with a low risk level.
   * 
   * @example
   * 1
   */
  passLowCount?: number;
  /**
   * @remarks
   * The number of passed check items with a medium risk level.
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
   * The number of unchecked check items with a high risk level.
   * 
   * @example
   * 1
   */
  notCheckHighCount?: number;
  /**
   * @remarks
   * The number of unchecked check items with a low risk level.
   * 
   * @example
   * 1
   */
  notCheckLowCount?: number;
  /**
   * @remarks
   * The number of unchecked check items with a medium risk level.
   * 
   * @example
   * 1
   */
  notCheckMediumCount?: number;
  /**
   * @remarks
   * The number of check items that failed.
   * 
   * @example
   * 3
   */
  notPassCount?: number;
  /**
   * @remarks
   * The number of failed check items with a high risk level.
   * 
   * @example
   * 1
   */
  notPassHighCount?: number;
  /**
   * @remarks
   * The number of failed check items with a low risk level.
   * 
   * @example
   * 1
   */
  notPassLowCount?: number;
  /**
   * @remarks
   * The number of failed check items with a medium risk level.
   * 
   * @example
   * 1
   */
  notPassMediumCount?: number;
  /**
   * @remarks
   * The number of check items that passed.
   * 
   * @example
   * 3
   */
  passCount?: number;
  /**
   * @remarks
   * The number of passed check items with a high risk level.
   * 
   * @example
   * 1
   */
  passHighCount?: number;
  /**
   * @remarks
   * The number of passed check items with a low risk level.
   * 
   * @example
   * 1
   */
  passLowCount?: number;
  /**
   * @remarks
   * The number of passed check items with a medium risk level.
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
   * The number of check items that failed.
   * 
   * @example
   * 1
   */
  failCount?: number;
  /**
   * @remarks
   * The check item ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The number of check items that passed.
   * 
   * @example
   * 1
   */
  passCount?: number;
  /**
   * @remarks
   * The number of check items with a **high** risk level.
   * 
   * @example
   * 1
   */
  riskLevelHighCount?: number;
  /**
   * @remarks
   * The number of check items with a **low** risk level.
   * 
   * @example
   * 1
   */
  riskLevelLowCount?: number;
  /**
   * @remarks
   * The number of check items with a **medium** risk level.
   * 
   * @example
   * 1
   */
  riskLevelMediumCount?: number;
  /**
   * @remarks
   * The check item name.
   * 
   * @example
   * 身份权限管理
   */
  showName?: string;
  /**
   * @remarks
   * The risk statistics information for the standard.
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
   * The number of unchecked check items with a high risk level.
   * 
   * @example
   * 1
   */
  notCheckHighCount?: number;
  /**
   * @remarks
   * The number of unchecked check items with a low risk level.
   * 
   * @example
   * 1
   */
  notCheckLowCount?: number;
  /**
   * @remarks
   * The number of unchecked check items with a medium risk level.
   * 
   * @example
   * 1
   */
  notCheckMediumCount?: number;
  /**
   * @remarks
   * The number of check items that failed.
   * 
   * @example
   * 3
   */
  notPassCount?: number;
  /**
   * @remarks
   * The number of failed check items with a high risk level.
   * 
   * @example
   * 1
   */
  notPassHighCount?: number;
  /**
   * @remarks
   * The number of failed check items with a low risk level.
   * 
   * @example
   * 1
   */
  notPassLowCount?: number;
  /**
   * @remarks
   * The number of failed check items with a medium risk level.
   * 
   * @example
   * 1
   */
  notPassMediumCount?: number;
  /**
   * @remarks
   * The number of check items that passed.
   * 
   * @example
   * 3
   */
  passCount?: number;
  /**
   * @remarks
   * The number of passed check items with a high risk level.
   * 
   * @example
   * 1
   */
  passHighCount?: number;
  /**
   * @remarks
   * The number of passed check items with a low risk level.
   * 
   * @example
   * 1
   */
  passLowCount?: number;
  /**
   * @remarks
   * The number of passed check items with a medium risk level.
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
   * The number of risk items detected.
   * 
   * @example
   * 5
   */
  failCount?: number;
  /**
   * @remarks
   * The number of check items that passed the check.
   * 
   * @example
   * 10
   */
  passCount?: number;
  /**
   * @remarks
   * The standard output of check items.
   */
  standards?: GetCheckSummaryResponseBodySummarysStandards[];
  /**
   * @remarks
   * The check item type. Valid values:
   * 
   * - **COMPLIANCE**: Compliance.
   * - **RISK**: Security risk.
   * - **IDENTITY_PERMISSION**: Identity and access management.
   * 
   * @example
   * IDENTITY_PERMISSION
   */
  type?: string;
  /**
   * @remarks
   * The risk statistics information for the risk category.
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
   * The statistics information related to the number of check items.
   */
  overallItemStatistic?: GetCheckSummaryResponseBodyOverallItemStatistic;
  /**
   * @remarks
   * The overall risk statistics information.
   */
  overallStatistic?: GetCheckSummaryResponseBodyOverallStatistic;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 843E4805-****-7EE12FA8DBFD
   */
  requestId?: string;
  /**
   * @remarks
   * The overview results.
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

