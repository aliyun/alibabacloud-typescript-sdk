// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReportTemplatesResponseBodyReportTemplateListReportScope extends $dara.Model {
  /**
   * @remarks
   * The key for the report scope. Supported values:
   * 
   * - AggregatorId
   * 
   * - CompliancePackId
   * 
   * - RuleId
   * 
   * @example
   * RuleId
   */
  key?: string;
  /**
   * @remarks
   * The matching logic. Only In is supported.
   * 
   * @example
   * In
   */
  matchType?: string;
  /**
   * @remarks
   * The value for the report scope. For multiple values of the same type — such as multiple rule IDs — separate them with commas (,).
   * 
   * @example
   * cr-1,cr-2
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      matchType: 'MatchType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      matchType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReportTemplatesResponseBodyReportTemplateList extends $dara.Model {
  /**
   * @remarks
   * The format of the report. Only Excel is supported.
   * 
   * @example
   * excel
   */
  reportFileFormats?: string;
  /**
   * @remarks
   * The aggregation granularity of the report.
   * 
   * From the management account perspective, the following options are supported:
   * 
   * - AllInOne: Aggregate all accounts in the template scope into one report.
   * 
   * - GroupByAggregator: Generate reports by aggregator group. Output as one compressed file.
   * 
   * - GroupByAccount: Generate separate reports for each account (default). Output as one compressed file.
   * 
   * Member accounts support only GroupByAccount.
   * 
   * @example
   * AllInOne
   */
  reportGranularity?: string;
  /**
   * @remarks
   * The language of the report. Valid values: zh-CN and en-US. Default value: en-US.
   * 
   * @example
   * en-US
   */
  reportLanguage?: string;
  /**
   * @remarks
   * An array that defines which rules appear in the audit report. Each ReportScope object uses OR logic (additive logic).
   * 
   * > For example, if the array has two items — the first specifies RuleId cr-1 and the second specifies RuleId cr-2 — then the report covers both cr-1 and cr-2.
   */
  reportScope?: ListReportTemplatesResponseBodyReportTemplateListReportScope[];
  /**
   * @remarks
   * The description of the report template.
   * 
   * @example
   * test-description
   */
  reportTemplateDescription?: string;
  /**
   * @remarks
   * The ID of the report template.
   * 
   * @example
   * crt-xxx
   */
  reportTemplateId?: string;
  /**
   * @remarks
   * The name of the report template.
   * 
   * @example
   * test-name
   */
  reportTemplateName?: string;
  /**
   * @remarks
   * The subscription frequency of the report. If this parameter is specified, it must be a Quartz-formatted cron expression.
   * 
   * The format is: second minute hour day month weekday. Common examples:
   * 
   * - Run daily at 00:00: 0 0 0 \\* \\* ?
   * 
   * - Run every Monday at 15:30: 0 30 15 ? \\* MON
   * 
   * - Run on the first day of each month at 02:00: 0 0 2 1 \\* ?
   * 
   * Where:
   * 
   * - "\\*" means any value.
   * 
   * - "?" means no specific value for day or weekday.
   * 
   * - "MON" means Monday.
   * 
   * > Times are in UTC+8. Adjust your cron expression based on your local time zone.
   * 
   * > The system tries to run reports at the scheduled time, but delays may occur due to report generation. Each template can trigger at most one notification per day.
   * 
   * > In Quartz, weekdays are numbered starting from Sunday: 1 = Sunday, 2 = Monday, 3 = Tuesday, 4 = Wednesday, 5 = Thursday, 6 = Friday, 7 = Saturday.
   * 
   * @example
   * 0 0 13 * * ?
   */
  subscriptionFrequency?: string;
  static names(): { [key: string]: string } {
    return {
      reportFileFormats: 'ReportFileFormats',
      reportGranularity: 'ReportGranularity',
      reportLanguage: 'ReportLanguage',
      reportScope: 'ReportScope',
      reportTemplateDescription: 'ReportTemplateDescription',
      reportTemplateId: 'ReportTemplateId',
      reportTemplateName: 'ReportTemplateName',
      subscriptionFrequency: 'SubscriptionFrequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportFileFormats: 'string',
      reportGranularity: 'string',
      reportLanguage: 'string',
      reportScope: { 'type': 'array', 'itemType': ListReportTemplatesResponseBodyReportTemplateListReportScope },
      reportTemplateDescription: 'string',
      reportTemplateId: 'string',
      reportTemplateName: 'string',
      subscriptionFrequency: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reportScope)) {
      $dara.Model.validateArray(this.reportScope);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReportTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return per page. Valid values: 1 to 50. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * If the response is truncated, use NextToken to send another request and get results after the truncation point.
   * 
   * @example
   * aVCjqNaSy0Ps7zSMGu25****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of report templates.
   */
  reportTemplateList?: ListReportTemplatesResponseBodyReportTemplateList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8195B664-9565-4685-89AC-8B5F04B44B92
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of templates.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      reportTemplateList: 'ReportTemplateList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      reportTemplateList: { 'type': 'array', 'itemType': ListReportTemplatesResponseBodyReportTemplateList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.reportTemplateList)) {
      $dara.Model.validateArray(this.reportTemplateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

