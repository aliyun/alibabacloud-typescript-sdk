// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetIqsUsageResultRecords extends $dara.Model {
  api?: string;
  billingQps?: number;
  date?: string;
  engineType?: string;
  failedCalls?: number;
  ladderType?: string;
  mainAccountId?: string;
  subAccountId?: string;
  successCalls?: number;
  totalCalls?: number;
  valueAddedAdvanced?: number;
  valueAddedSummary?: number;
  static names(): { [key: string]: string } {
    return {
      api: 'api',
      billingQps: 'billingQps',
      date: 'date',
      engineType: 'engineType',
      failedCalls: 'failedCalls',
      ladderType: 'ladderType',
      mainAccountId: 'mainAccountId',
      subAccountId: 'subAccountId',
      successCalls: 'successCalls',
      totalCalls: 'totalCalls',
      valueAddedAdvanced: 'valueAddedAdvanced',
      valueAddedSummary: 'valueAddedSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      billingQps: 'number',
      date: 'string',
      engineType: 'string',
      failedCalls: 'number',
      ladderType: 'string',
      mainAccountId: 'string',
      subAccountId: 'string',
      successCalls: 'number',
      totalCalls: 'number',
      valueAddedAdvanced: 'number',
      valueAddedSummary: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIqsUsageResult extends $dara.Model {
  records?: GetIqsUsageResultRecords[];
  static names(): { [key: string]: string } {
    return {
      records: 'records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': GetIqsUsageResultRecords },
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

