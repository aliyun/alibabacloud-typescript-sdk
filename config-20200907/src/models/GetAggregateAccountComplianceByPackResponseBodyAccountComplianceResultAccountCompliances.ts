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

