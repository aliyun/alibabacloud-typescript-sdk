// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveAIProduceRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * AppName
   */
  app?: string;
  /**
   * @remarks
   * The description of the subtitle rule. The description can be up to 128 characters in length and can contain letters, digits, and special characters.
   * 
   * @example
   * live AI subtitle template
   */
  description?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * Specifies whether to generate live subtitles when stream pulling starts. Valid values:
   * 
   * *   true: generates live subtitles when stream pulling starts and stops generating live subtitles when no streams are pulled for 5 minutes. When stream pulling restarts, live subtitles are generated again.
   * *   false: generates live subtitles when stream ingest starts.
   * 
   * @example
   * true
   */
  isLazy?: boolean;
  /**
   * @remarks
   * The specification of the output subtitles. Valid values:
   * 
   * *   `lp_ld`: 360p (640 × 360)
   * *   `lp_ld_v`: 360p (360 × 640)
   * *   `lp_sd`: 480p (854 × 480)
   * *   `lp_sd_v`: 480p (480 × 854)
   * *   `lp_hd`: 720p (1280 × 720)
   * *   `lp_hd_v`: 720p (720 × 1280)
   * *   `lp_ud`: 1080p (1920 × 1080)
   * *   `lp_ud_v`: 1080p (1080 × 1920)
   * 
   * @example
   * lp_ld
   */
  liveTemplate?: string;
  ownerId?: number;
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
   * The name of the virtual background template.
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
   * The name of the subtitle template.
   * 
   * @example
   * sub01
   */
  subtitleName?: string;
  /**
   * @remarks
   * The suffix to match.
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

