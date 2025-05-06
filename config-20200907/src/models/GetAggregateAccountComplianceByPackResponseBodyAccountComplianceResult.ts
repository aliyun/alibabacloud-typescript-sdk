// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResultAccountCompliances } from "./GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResultAccountCompliances";


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

