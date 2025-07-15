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
  /**
   * @remarks
   * The ID of the background material.
   * 
   * @example
   * d0eb493192c771efba644531858c0102
   */
  backgroundResourceId?: string;
  /**
   * @remarks
   * The URL of the background material. Make sure that the URL is accessible over the Internet. Either this parameter or the BackgroundResourceId parameter is returned.
   * 
   * @example
   * https://testbucket.xx.com/2.jpg
   */
  backgroundResourceUrl?: string;
  /**
   * @remarks
   * The type of the background material. Valid values:
   * 
   * *   VOD: a video in ApsaraVideo VOD
   * *   PIC: an image
   * *   LIVE: a live stream
   * 
   * @example
   * VOD
   */
  backgroundType?: string;
  /**
   * @remarks
   * The custom description.
   * 
   * @example
   * user defined description
   */
  description?: string;
  /**
   * @remarks
   * The preview height. Unit: pixels.
   * 
   * The following preview specifications (width × height) are supported:
   * 
   * *   Landscape low definition 360p (640×360)
   * *   Portrait low definition 360p (360×640)
   * *   Landscape standard definition 480p (854×480)
   * *   Portrait standard definition 480p (480×854)
   * *   Landscape high definition 720p (1280×720)
   * *   Portrait high definition 720p (720×1280)
   * *   Landscape ultra-high definition 1080p (1920×1080)
   * *   Portrait ultra-high definition 1080p (1080×1920)
   * 
   * @example
   * 1080
   */
  height?: string;
  /**
   * @remarks
   * The layout information of the multimedia material.
   * 
   * @example
   * "{\\"positionY\\":\\"0.0\\",\\"positionX\\":\\"0.0\\",\\"heightNormalized\\":\\"0.5\\"}"
   */
  mattingLayout?: string;
  /**
   * @remarks
   * The type of chroma key that is performed on ingested streams. Valid values:
   * 
   * *   green: green-key chroma key
   * *   blue: blue-screen chroma key
   * *   complex: background replacement
   * 
   * @example
   * complex
   */
  mattingType?: string;
  /**
   * @remarks
   * LIVE, live streaming
   * 
   * @example
   * "{\\"positionY\\":\\"0.0\\",\\"positionX\\":\\"0.0\\",\\"heightNormalized\\":\\"0.5\\"}"
   */
  mediaLayout?: string;
  /**
   * @remarks
   * The ID of the multimedia material in ApsaraVideo VOD.
   * 
   * @example
   * d0eb493192c771efba644531858c0102
   */
  mediaResourceId?: string;
  /**
   * @remarks
   * The URL of the multimedia material.
   * 
   * @example
   * https://testbucket.xx.com/2.jpg
   */
  mediaResourceUrl?: string;
  /**
   * @remarks
   * The type of the multimedia material. Valid values:
   * 
   * *   VOD: a video in ApsaraVideo VOD
   * *   PIC: an image
   * *   LIVE: a live stream
   * 
   * @example
   * VOD
   */
  mediaType?: string;
  /**
   * @remarks
   * The IDs of the bound rules.
   */
  ruleIds?: DescribeLiveAIStudioResponseBodyStudioConfigsSubtitleConfigRuleIds;
  /**
   * @remarks
   * The ID of the virtual studio template.
   * 
   * @example
   * 24654384-f5ac-40ea-823b-74e85a61dd9f
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the virtual studio template. The name is the same as the value of the StudioName parameter that was specified when you called the CreateLiveAiStudio operation to create the virtual studio template.
   * 
   * @example
   * studio1
   */
  templateName?: string;
  /**
   * @remarks
   * The preview width.
   * 
   * @example
   * 1920
   */
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
  /**
   * @remarks
   * The virtual studio templates.
   */
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

