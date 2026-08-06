// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMOTokenUsageSummaryResponseBodyRecords extends $dara.Model {
  /**
   * @example
   * sk-rds-ds5jjo08hyz1g9orhs3y56l5cy3l3shm
   */
  apiKey?: string;
  /**
   * @example
   * 8000
   */
  cacheTokens?: number;
  /**
   * @example
   * 2026-04-21
   */
  date?: string;
  /**
   * @example
   * 10000
   */
  inputTokens?: number;
  /**
   * @example
   * qcy-apikey
   */
  keyName?: string;
  /**
   * @example
   * qwen-flash
   */
  model?: string;
  /**
   * @example
   * 10000
   */
  outputTokens?: number;
  /**
   * @example
   * 100
   */
  requestCount?: number;
  /**
   * @example
   * 100000
   */
  totalTokens?: number;
  /**
   * @example
   * text
   */
  usageType?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      cacheTokens: 'CacheTokens',
      date: 'Date',
      inputTokens: 'InputTokens',
      keyName: 'KeyName',
      model: 'Model',
      outputTokens: 'OutputTokens',
      requestCount: 'RequestCount',
      totalTokens: 'TotalTokens',
      usageType: 'UsageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      cacheTokens: 'number',
      date: 'string',
      inputTokens: 'number',
      keyName: 'string',
      model: 'string',
      outputTokens: 'number',
      requestCount: 'number',
      totalTokens: 'number',
      usageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMOTokenUsageSummaryResponseBodySummary extends $dara.Model {
  /**
   * @example
   * 9000
   */
  cacheTokens?: number;
  /**
   * @example
   * 10000
   */
  inputTokens?: number;
  /**
   * @example
   * 1000
   */
  outputTokens?: number;
  /**
   * @example
   * 11000
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      cacheTokens: 'CacheTokens',
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheTokens: 'number',
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMOTokenUsageSummaryResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  records?: DescribeMOTokenUsageSummaryResponseBodyRecords[];
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  summary?: DescribeMOTokenUsageSummaryResponseBodySummary;
  /**
   * @example
   * text
   */
  usageType?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      records: 'Records',
      requestId: 'RequestId',
      success: 'Success',
      summary: 'Summary',
      usageType: 'UsageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      records: { 'type': 'array', 'itemType': DescribeMOTokenUsageSummaryResponseBodyRecords },
      requestId: 'string',
      success: 'boolean',
      summary: DescribeMOTokenUsageSummaryResponseBodySummary,
      usageType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

