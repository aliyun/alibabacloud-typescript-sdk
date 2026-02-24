// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResultAccountCompliances extends $dara.Model {
  accountId?: number;
  accountName?: string;
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
  accountCompliances?: GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResultAccountCompliances[];
  compliancePackId?: string;
  nonCompliantCount?: number;
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
  accountComplianceResult?: GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResult;
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

