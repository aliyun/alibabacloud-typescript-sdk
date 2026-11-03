// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMOTokenUsageSummaryResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The API key used.
   * 
   * @example
   * sk-rds-ds5jjo08hyz1g9orhs3y56l5cy3l3shm
   */
  apiKey?: string;
  /**
   * @remarks
   * The number of input tokens that hit the cache.
   * 
   * @example
   * 8000
   */
  cacheTokens?: number;
  /**
   * @remarks
   * The date, accurate to the day.
   * 
   * @example
   * 2026-04-21
   */
  date?: string;
  /**
   * @remarks
   * The input token usage.
   * 
   * @example
   * 10000
   */
  inputTokens?: number;
  /**
   * @remarks
   * The API key name.
   * 
   * @example
   * qcy-apikey
   */
  keyName?: string;
  /**
   * @remarks
   * The model called.
   * 
   * @example
   * qwen-flash
   */
  model?: string;
  /**
   * @remarks
   * The output token usage.
   * 
   * @example
   * 10000
   */
  outputTokens?: number;
  /**
   * @remarks
   * The number of requests.
   * 
   * @example
   * 100
   */
  requestCount?: number;
  /**
   * @remarks
   * The total number of tokens.
   * 
   * @example
   * 100000
   */
  totalTokens?: number;
  /**
   * @remarks
   * The query type.
   * 
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
   * @remarks
   * The number of input tokens that hit the cache.
   * 
   * @example
   * 9000
   */
  cacheTokens?: number;
  /**
   * @remarks
   * The input token usage.
   * 
   * @example
   * 10000
   */
  inputTokens?: number;
  /**
   * @remarks
   * The output token usage.
   * 
   * @example
   * 1000
   */
  outputTokens?: number;
  /**
   * @remarks
   * The total number of tokens.
   * 
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
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The token usage records.
   */
  records?: DescribeMOTokenUsageSummaryResponseBodyRecords[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @remarks
   * The request result.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The usage summary information.
   */
  summary?: DescribeMOTokenUsageSummaryResponseBodySummary;
  /**
   * @remarks
   * The type.
   * 
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

