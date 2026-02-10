// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveAIStudioResponseBodyStudioConfigsSubtitleConfigRuleIds extends $dara.Model {
  ruleId?: string[];
  static names(): { [key: string]: string } {
    return {
      ruleId: 'ruleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleId)) {
      $dara.Model.validateArray(this.ruleId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAIStudioResponseBodyStudioConfigsSubtitleConfig extends $dara.Model {
  backgroundResourceId?: string;
  backgroundResourceUrl?: string;
  backgroundType?: string;
  description?: string;
  height?: string;
  mattingLayout?: string;
  mattingType?: string;
  mediaLayout?: string;
  mediaResourceId?: string;
  mediaResourceUrl?: string;
  mediaType?: string;
  ruleIds?: DescribeLiveAIStudioResponseBodyStudioConfigsSubtitleConfigRuleIds;
  templateId?: string;
  templateName?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      backgroundResourceId: 'BackgroundResourceId',
      backgroundResourceUrl: 'BackgroundResourceUrl',
      backgroundType: 'BackgroundType',
      description: 'Description',
      height: 'Height',
      mattingLayout: 'MattingLayout',
      mattingType: 'MattingType',
      mediaLayout: 'MediaLayout',
      mediaResourceId: 'MediaResourceId',
      mediaResourceUrl: 'MediaResourceUrl',
      mediaType: 'MediaType',
      ruleIds: 'RuleIds',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundResourceId: 'string',
      backgroundResourceUrl: 'string',
      backgroundType: 'string',
      description: 'string',
      height: 'string',
      mattingLayout: 'string',
      mattingType: 'string',
      mediaLayout: 'string',
      mediaResourceId: 'string',
      mediaResourceUrl: 'string',
      mediaType: 'string',
      ruleIds: DescribeLiveAIStudioResponseBodyStudioConfigsSubtitleConfigRuleIds,
      templateId: 'string',
      templateName: 'string',
      width: 'string',
    };
  }

  validate() {
    if(this.ruleIds && typeof (this.ruleIds as any).validate === 'function') {
      (this.ruleIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAIStudioResponseBodyStudioConfigs extends $dara.Model {
  subtitleConfig?: DescribeLiveAIStudioResponseBodyStudioConfigsSubtitleConfig[];
  static names(): { [key: string]: string } {
    return {
      subtitleConfig: 'SubtitleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleConfig: { 'type': 'array', 'itemType': DescribeLiveAIStudioResponseBodyStudioConfigsSubtitleConfig },
    };
  }

  validate() {
    if(Array.isArray(this.subtitleConfig)) {
      $dara.Model.validateArray(this.subtitleConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveAIStudioResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Valid values: 1 to 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  studioConfigs?: DescribeLiveAIStudioResponseBodyStudioConfigs;
  /**
   * @remarks
   * The total number of templates.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      studioConfigs: 'StudioConfigs',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      studioConfigs: DescribeLiveAIStudioResponseBodyStudioConfigs,
      total: 'number',
    };
  }

  validate() {
    if(this.studioConfigs && typeof (this.studioConfigs as any).validate === 'function') {
      (this.studioConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

