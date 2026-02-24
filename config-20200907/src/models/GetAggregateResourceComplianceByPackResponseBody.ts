// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateResourceComplianceByPackResponseBodyResourceComplianceResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the compliance package.
   * 
   * @example
   * cp-fdc8626622af00f9****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The total number of compliant resources.
   * 
   * @example
   * 1
   */
  compliantCount?: number;
  /**
   * @remarks
   * The total number of ignored resources.
   * 
   * @example
   * 1
   */
  ignoredCount?: number;
  /**
   * @remarks
   * The total number of resources for which the evaluation data is insufficient.
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
   * The total number of resources that are not applicable.
   * 
   * @example
   * 1
   */
  notApplicableCount?: number;
  /**
   * @remarks
   * The total number of resources evaluated by the compliance package.
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

export class GetAggregateResourceComplianceByPackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB751
   */
  requestId?: string;
  /**
   * @remarks
   * The compliance results of the resources in the compliance package.
   */
  resourceComplianceResult?: GetAggregateResourceComplianceByPackResponseBodyResourceComplianceResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceComplianceResult: 'ResourceComplianceResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceComplianceResult: GetAggregateResourceComplianceByPackResponseBodyResourceComplianceResult,
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

