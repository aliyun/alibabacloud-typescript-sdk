// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReportTemplateRequestReportScope extends $dara.Model {
  /**
   * @example
   * RuleId
   */
  key?: string;
  /**
   * @example
   * In
   */
  matchType?: string;
  /**
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

export class CreateReportTemplateRequest extends $dara.Model {
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
  reportScope?: CreateReportTemplateRequestReportScope[];
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
      reportScope: 'ReportScope',
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
      reportScope: { 'type': 'array', 'itemType': CreateReportTemplateRequestReportScope },
      reportTemplateDescription: 'string',
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

