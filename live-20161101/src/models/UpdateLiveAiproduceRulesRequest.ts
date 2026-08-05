// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveAIProduceRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the live stream application.
   * 
   * This parameter is required.
   * 
   * @example
   * AppName
   */
  app?: string;
  /**
   * @remarks
   * The description of the subtitle rule. The description can contain letters, digits, Chinese characters, and special characters, and can be up to 128 characters in length.
   * 
   * @example
   * live AI subtitle template
   */
  description?: string;
  /**
   * @remarks
   * The primary streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * Specifies whether subtitles are triggered by stream pulling. Valid values:
   * - true: Subtitles start when a stream is pulled. If no stream is pulled within 5 minutes, the subtitles stop. Subtitles restart when a stream is pulled again.
   * - false: Subtitles start as long as stream ingest is active, regardless of whether a stream is being pulled.
   * 
   * @example
   * true
   */
  isLazy?: boolean;
  /**
   * @remarks
   * The output specification of the subtitle. Valid values:
   * - Landscape low definition 360P 640 × 360: `lp_ld`
   * - Portrait low definition 360P 360 × 640: `lp_ld_v`
   * - Landscape standard definition 480P 854 × 480: `lp_sd`
   * - Portrait standard definition 480P 480 × 854: `lp_sd_v`
   * - Landscape high definition 720P 1280 × 720: `lp_hd`
   * - Portrait high definition 720P 720 × 1280: `lp_hd_v`
   * - Landscape ultra-high definition 1080P 1920 × 1080: `lp_ud`
   * - Portrait ultra-high definition 1080P 1080 × 1920: `lp_ud_v`
   * 
   * @example
   * lp_ld
   */
  liveTemplate?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the subtitle rule.
   * 
   * @example
   * 445409ec-7eaa-461d -8f29-4bec2eb9****
   */
  rulesId?: string;
  /**
   * @remarks
   * The name of the virtual background template. You must specify at least one of SubtitleName and StudioName. Otherwise, a MissingParameter error is returned.
   * 
   * @example
   * sub02
   */
  studioName?: string;
  /**
   * @remarks
   * The ID of the subtitle template.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  subtitleId?: string;
  /**
   * @remarks
   * The name of the subtitle template. You must specify at least one of SubtitleName and StudioName. Otherwise, a MissingParameter error is returned.
   * 
   * @example
   * sub01
   */
  subtitleName?: string;
  /**
   * @remarks
   * The suffix match.
   * 
   * @example
   * test01
   */
  suffix?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      description: 'Description',
      domain: 'Domain',
      isLazy: 'IsLazy',
      liveTemplate: 'LiveTemplate',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      rulesId: 'RulesId',
      studioName: 'StudioName',
      subtitleId: 'SubtitleId',
      subtitleName: 'SubtitleName',
      suffix: 'Suffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      description: 'string',
      domain: 'string',
      isLazy: 'boolean',
      liveTemplate: 'string',
      ownerId: 'number',
      regionId: 'string',
      rulesId: 'string',
      studioName: 'string',
      subtitleId: 'string',
      subtitleName: 'string',
      suffix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

