// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReportTemplateShrinkRequest extends $dara.Model {
  /**
   * @example
   * excel
   */
  reportFileFormats?: string;
  /**
   * @example
   * ReportGranularity
   */
  reportGranularity?: string;
  /**
   * @example
   * zh-CN
   */
  reportLanguage?: string;
  reportScopeShrink?: string;
  /**
   * @example
   * test-report-description
   */
  reportTemplateDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-report-name
   */
  reportTemplateName?: string;
  /**
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

