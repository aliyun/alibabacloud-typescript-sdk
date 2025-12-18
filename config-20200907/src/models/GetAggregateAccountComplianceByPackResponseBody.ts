// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResultAccountCompliances extends $dara.Model {
  /**
   * @remarks
   * The ID of the member account in the account group.
   * 
   * @example
   * 100931896542****
   */
  accountId?: number;
  /**
   * @remarks
   * The name of the member account in the account group.
   * 
   * @example
   * Alice
   */
  accountName?: string;
  /**
   * @remarks
   * The compliance evaluation result. Valid values:
   * 
   * *   COMPLIANT: The resource was evaluated as compliant.
   * *   NON_COMPLIANT: The resource was evaluated as incompliant.
   * *   NOT_APPLICABLE: The rule did not apply to your resource.
   * *   INSUFFICIENT_DATA: No resource data was available.
   * 
   * @example
   * COMPLIANT
   */
  complianceType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      complianceType: 'ComplianceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountName: 'string',
      complianceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResult extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation result of member accounts.
   */
  accountCompliances?: GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResultAccountCompliances[];
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
   * The number of non-compliant member accounts.
   * 
   * @example
   * 0
   */
  nonCompliantCount?: number;
  /**
   * @remarks
   * The total number of member accounts.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountCompliances: 'AccountCompliances',
      compliancePackId: 'CompliancePackId',
      nonCompliantCount: 'NonCompliantCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCompliances: { 'type': 'array', 'itemType': GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResultAccountCompliances },
      compliancePackId: 'string',
      nonCompliantCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accountCompliances)) {
      $dara.Model.validateArray(this.accountCompliances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateAccountComplianceByPackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation results of member accounts for which the compliance package takes effect in an account group.
   */
  accountComplianceResult?: GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB751
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountComplianceResult: 'AccountComplianceResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountComplianceResult: GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accountComplianceResult && typeof (this.accountComplianceResult as any).validate === 'function') {
      (this.accountComplianceResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

