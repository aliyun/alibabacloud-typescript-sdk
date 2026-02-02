// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateReportTemplateShrinkRequest extends $dara.Model {
  /**
   * @example
   * excel
   */
  reportFileFormats?: string;
  /**
   * @example
   * AllInOne
   */
  reportGranularity?: string;
  reportLanguage?: string;
  reportScopeShrink?: string;
  /**
   * @example
   * test-description
   */
  reportTemplateDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * crt-xxx
   */
  reportTemplateId?: string;
  /**
   * @example
   * test-name
   */
  reportTemplateName?: string;
  /**
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

