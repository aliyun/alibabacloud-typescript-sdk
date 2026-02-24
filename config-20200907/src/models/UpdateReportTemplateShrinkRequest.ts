// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateReportTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The format of the report.
   * 
   * @example
   * excel
   */
  reportFileFormats?: string;
  /**
   * @remarks
   * The aggregation granularity of the report.
   * 
   * For a management account, the following values are supported:
   * 
   * - AllInOne: A single report is generated for all accounts within the template scope.
   * 
   * - GroupByAggregator: Reports are aggregated by account group. A compressed file is generated.
   * 
   * - GroupByAccount: A separate report is generated for each account. This is the default value. A compressed file is generated.
   * 
   * For a member account, only GroupByAccount is supported.
   * 
   * @example
   * AllInOne
   */
  reportGranularity?: string;
  /**
   * @remarks
   * The language of the report. Valid values: zh-CN and en-US. If you leave this parameter empty, the default value en-US is used.
   * 
   * @example
   * en-US
   */
  reportLanguage?: string;
  /**
   * @remarks
   * An array that specifies the report scope. It is used to select the range of rules to include in the audit report. The logical relationship between multiple ReportScope objects in the array is OR. This means the scopes are added together.
   * 
   * > For example, if the array contains two ReportScope objects, where the first specifies the rule In cr-1 and the second specifies the rule In cr-2, the report scope includes both cr-1 and cr-2.
   */
  reportScopeShrink?: string;
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
   * This parameter is required.
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
   * The frequency for subscribing to the report. If this parameter is not empty, it specifies a cron expression in the Quartz format that triggers a subscription notification.
   * 
   * The format is: Second Minute Hour Day Month Week. The following list provides common examples of cron expressions:
   * 
   * - To run at 00:00 every day: 0 0 0 \\* \\* ?
   * 
   * - To run at 15:30 every Monday: 0 30 15 ? \\* MON
   * 
   * - To run at 02:00 on the first day of every month: 0 0 2 1 \\* ?
   * 
   * Where:
   * 
   * - "\\*" indicates any value.
   * 
   * - ? is used in the Day and Week fields and indicates that no specific value is specified.
   * 
   * - MON indicates Monday.
   * 
   * > The trigger time is in UTC+8. You can convert the cron expression based on your time zone.
   * 
   * > The system attempts to trigger the notification at the time specified by the cron expression. However, a delay may occur due to the report generation status. The cron expression limits the notification for the same template to a maximum of once per day.
   * 
   * > In addition to using MON for Monday, you can also use numbers. In the Quartz framework, 1 represents Sunday, 2 represents Monday, 3 represents Tuesday, 4 represents Wednesday, 5 represents Thursday, 6 represents Friday, and 7 represents Saturday.
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
      reportScopeShrink: 'ReportScope',
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
      reportScopeShrink: 'string',
      reportTemplateDescription: 'string',
      reportTemplateId: 'string',
      reportTemplateName: 'string',
      subscriptionFrequency: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

