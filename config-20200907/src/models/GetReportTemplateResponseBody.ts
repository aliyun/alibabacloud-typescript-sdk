// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReportTemplateResponseBodyReportTemplateReportScope extends $dara.Model {
  /**
   * @remarks
   * Key for the report scope. Supported keys:
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
   * Matching logic. Only In is supported.
   * 
   * @example
   * In
   */
  matchType?: string;
  /**
   * @remarks
   * Value for the report scope. For multiple values of the same type, such as multiple rule IDs, separate them with commas.
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

export class GetReportTemplateResponseBodyReportTemplate extends $dara.Model {
  /**
   * @remarks
   * Report file format.
   * 
   * @example
   * excel
   */
  reportFileFormats?: string;
  /**
   * @remarks
   * Aggregation granularity of the report.
   * 
   * @example
   * AllInOne
   */
  reportGranularity?: string;
  /**
   * @remarks
   * Report language. Valid values: zh-CN and en-US. Default is en-US if empty.
   * 
   * @example
   * en-US
   */
  reportLanguage?: string;
  /**
   * @remarks
   * Array of report scopes. Each scope defines a set of rules included in the audit report. Scopes use OR logic. That is, rules from all scopes are combined.
   * 
   * > If the array has two items, and the first specifies RuleId cr-1 while the second specifies RuleId cr-2, then the report covers both cr-1 and cr-2.
   */
  reportScope?: GetReportTemplateResponseBodyReportTemplateReportScope[];
  /**
   * @remarks
   * Description of the report template.
   * 
   * @example
   * test-description
   */
  reportTemplateDescription?: string;
  /**
   * @remarks
   * ID of the report template.
   * 
   * @example
   * crt-xxx
   */
  reportTemplateId?: string;
  /**
   * @remarks
   * Name of the report template.
   * 
   * @example
   * test-name
   */
  reportTemplateName?: string;
  /**
   * @remarks
   * Subscription frequency for the report. If this field is not empty, it contains a Quartz-formatted cron expression that triggers notifications.
   * 
   * The format is: seconds minutes hours day-of-month month day-of-week. Common examples include the following:
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
   * - "?" means no specific value for the day-of-month or day-of-week field.
   * 
   * - MON means Monday.
   * 
   * > Trigger times are in UTC+8. Adjust your cron expression based on your time zone.
   * 
   * > The system tries to trigger notifications as close as possible to the scheduled time. Delays may occur due to report generation status. A single template can trigger at most one notification per day.
   * 
   * > In Quartz, days of the week are numbered: 1 = Sunday, 2 = Monday, 3 = Tuesday, 4 = Wednesday, 5 = Thursday, 6 = Friday, 7 = Saturday.
   * 
   * @example
   * 0 0 0 * * ?
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
      reportScope: { 'type': 'array', 'itemType': GetReportTemplateResponseBodyReportTemplateReportScope },
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

export class GetReportTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Report template.
   */
  reportTemplate?: GetReportTemplateResponseBodyReportTemplate;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A7A0FFF8-0B44-40C6-8BBF-3A185EFDF3F7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      reportTemplate: 'ReportTemplate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportTemplate: GetReportTemplateResponseBodyReportTemplate,
      requestId: 'string',
    };
  }

  validate() {
    if(this.reportTemplate && typeof (this.reportTemplate as any).validate === 'function') {
      (this.reportTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

