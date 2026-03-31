// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReportTemplatesResponseBodyReportTemplateListReportScope extends $dara.Model {
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

export class ListReportTemplatesResponseBodyReportTemplateList extends $dara.Model {
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
  reportScope?: ListReportTemplatesResponseBodyReportTemplateListReportScope[];
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
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * aVCjqNaSy0Ps7zSMGu25****
   */
  nextToken?: string;
  reportTemplateList?: ListReportTemplatesResponseBodyReportTemplateList[];
  /**
   * @example
   * 8195B664-9565-4685-89AC-8B5F04B44B92
   */
  requestId?: string;
  /**
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

