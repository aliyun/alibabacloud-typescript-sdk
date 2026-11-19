// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetIqsUsageResultRecords extends $dara.Model {
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * UnifiedSearch
   */
  api?: string;
  /**
   * @remarks
   * The queries per second (QPS) for tiered billing.
   * 
   * @example
   * 30
   */
  billingQps?: number;
  /**
   * @remarks
   * The metering date in the YYYYMMDD format.
   * 
   * @example
   * 20250716
   */
  date?: string;
  /**
   * @remarks
   * The search engine type.
   * 
   * @example
   * Generic
   */
  engineType?: string;
  /**
   * @remarks
   * The number of failed calls.
   * 
   * @example
   * 0
   */
  failedCalls?: number;
  /**
   * @remarks
   * The matched metering tier. Valid values: 1001, 1002, 1003, and 1004.
   * 
   * @example
   * 1001
   */
  ladderType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 138608930******0
   */
  mainAccountId?: string;
  /**
   * @remarks
   * The sub-account that initiates the call (RAM user or API key identifier).
   * 
   * @example
   * 2193843763***9272
   */
  subAccountId?: string;
  /**
   * @remarks
   * The number of successful calls.
   * 
   * @example
   * 5
   */
  successCalls?: number;
  /**
   * @remarks
   * The total number of calls.
   * 
   * @example
   * 5
   */
  totalBillStatCalls?: number;
  /**
   * @remarks
   * The total number of calls.
   * 
   * @example
   * 5
   */
  totalCalls?: number;
  /**
   * @remarks
   * The value-added package usage for calling enhanced APIs.
   * 
   * @example
   * 5
   */
  valueAddedAdvanced?: number;
  /**
   * @remarks
   * The number of value-added package calls used for the summarization feature.
   * 
   * @example
   * 5
   */
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
      totalBillStatCalls: 'totalBillStatCalls',
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
      totalBillStatCalls: 'number',
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
  /**
   * @remarks
   * The daily call volume records.
   */
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

