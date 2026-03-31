// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReportTemplateResponseBodyReportTemplateReportScope extends $dara.Model {
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

export class GetReportTemplateResponseBodyReportTemplate extends $dara.Model {
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
  reportScope?: GetReportTemplateResponseBodyReportTemplateReportScope[];
  /**
   * @example
   * test-description
   */
  reportTemplateDescription?: string;
  /**
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
  reportTemplate?: GetReportTemplateResponseBodyReportTemplate;
  /**
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

