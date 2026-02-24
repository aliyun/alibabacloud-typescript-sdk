// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceComplianceByPackResponseBodyResourceComplianceResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the compliance package.
   * 
   * @example
   * cp-541e626622af0087****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The number of compliant resources.
   * 
   * > Note: A resource is counted each time a rule evaluates it as compliant. For example, if a resource is evaluated as compliant by two rules, it is counted twice.
   * 
   * @example
   * 1
   */
  compliantCount?: number;
  /**
   * @remarks
   * The number of resources whose evaluation results are ignored.
   * 
   * @example
   * 1
   */
  ignoredCount?: number;
  /**
   * @remarks
   * The total number of resources that the rules in the compliance package evaluate as Insufficient Data.
   * 
   * @example
   * 1
   */
  insufficientDataCount?: number;
  /**
   * @remarks
   * The number of non-compliant resources.
   * 
   * @example
   * 7
   */
  nonCompliantCount?: number;
  /**
   * @remarks
   * The number of resources that are not applicable.
   * 
   * > Note: A resource is counted each time a rule evaluates it as not applicable. For example, if a resource is evaluated as not applicable by two rules, it is counted twice.
   * 
   * @example
   * 1
   */
  notApplicableCount?: number;
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      compliantCount: 'CompliantCount',
      ignoredCount: 'IgnoredCount',
      insufficientDataCount: 'InsufficientDataCount',
      nonCompliantCount: 'NonCompliantCount',
      notApplicableCount: 'NotApplicableCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      compliantCount: 'number',
      ignoredCount: 'number',
      insufficientDataCount: 'number',
      nonCompliantCount: 'number',
      notApplicableCount: 'number',
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

export class GetResourceComplianceByPackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB751
   */
  requestId?: string;
  /**
   * @remarks
   * The compliance results of the resources in the compliance package.
   */
  resourceComplianceResult?: GetResourceComplianceByPackResponseBodyResourceComplianceResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceComplianceResult: 'ResourceComplianceResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceComplianceResult: GetResourceComplianceByPackResponseBodyResourceComplianceResult,
    };
  }

  validate() {
    if(this.resourceComplianceResult && typeof (this.resourceComplianceResult as any).validate === 'function') {
      (this.resourceComplianceResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

