// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReportTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Report format. Currently, only Excel is supported.
   * 
   * @example
   * excel
   */
  reportFileFormats?: string;
  /**
   * @remarks
   * Report aggregation granularity.
   * 
   * Supported for management accounts:
   * 
   * - AllInOne (All accounts within the template scope are aggregated into one report)
   * 
   * - GroupByAggregator (Reports are aggregated by account group, generating a compressed file)
   * 
   * - GroupByAccount (Each account generates a separate report (default), generating a compressed file)
   * 
   * Member accounts only support GroupByAccount.
   * 
   * @example
   * GroupByAccount
   */
  reportGranularity?: string;
  /**
   * @remarks
   * Report language. Supports zh-CN and en-US. If empty, the default is en-US.
   * 
   * @example
   * zh-CN
   */
  reportLanguage?: string;
  /**
   * @remarks
   * An array of report scopes, used to select the range of rules included in the audit report. The logic between each ReportScope in the array is OR, which means additive logic.
   * 
   * > For example, if the array size is 2, the first ReportScope specifies rule In cr-1, and the second ReportScope specifies rule In cr-2, then the rule scope defined by this report is cr-1 and cr-2.
   */
  reportScopeShrink?: string;
  /**
   * @remarks
   * Report template description
   * 
   * @example
   * test-report-description
   */
  reportTemplateDescription?: string;
  /**
   * @remarks
   * Report template name
   * 
   * This parameter is required.
   * 
   * @example
   * test-report-name
   */
  reportTemplateName?: string;
  /**
   * @remarks
   * Report subscription frequency. If this field is not empty, it is a Quartz-format Cron expression that triggers subscription notifications.
   * 
   * Format: second minute hour day month week. The following are common Cron expression examples:
   * 
   * - Execute at 0:00 every day: 0 0 0 \\* \\* ?
   * 
   * - Execute at 15:30 every Monday: 0 30 15 ? \\* MON
   * 
   * - Execute at 2:00 on the 1st of every month: 0 0 2 1 \\* ?
   * 
   * Where:
   * 
   * - "\\*" indicates any value
   * 
   * - "?" is used for day and week fields, indicating no specific value
   * 
   * - "MON" indicates Monday
   * 
   * > The trigger time is UTC+8. Adjust the Cron expression settings based on your time zone.
   * 
   * > We try to trigger notifications according to the Cron expression time, but there might be delays due to report generation status. A Cron expression limits the same template to trigger notifications at most once per day.
   * 
   * > 1 represents Sunday; 2 represents Monday; 3 represents Tuesday; 4 represents Wednesday; 5 represents Thursday; 6 represents Friday; 7 represents Saturday
   * 
   * @example
   * 0 0 9 * * ?
   */
  subscriptionFrequency?: string;
  static names(): { [key: string]: string } {
    return {
      reportFileFormats: 'ReportFileFormats',
      reportGranularity: 'ReportGranularity',
      reportLanguage: 'ReportLanguage',
      reportScopeShrink: 'ReportScope',
      reportTemplateDescription: 'ReportTemplateDescription',
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

