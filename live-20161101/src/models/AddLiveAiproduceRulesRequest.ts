// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveAIProduceRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the live streaming application. The name can be up to 256 characters long and can contain digits, uppercase and lowercase letters, hyphens (-), and underscores (_). The AppName must match the AppName in the ingest URL for the template to take effect.
   * 
   * This parameter is required.
   * 
   * @example
   * AppName
   */
  app?: string;
  /**
   * @remarks
   * The description of the subtitle rule. The description can contain Chinese and English characters, digits, and special characters. It can be up to 128 characters in length.
   * 
   * @example
   * live AI subtitle template
   */
  description?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * Specifies whether the rule is triggered by stream pulling. Valid values:
   * 
   * - true: Subtitles are generated when stream pulling starts. If no stream is pulled for 5 minutes, subtitle generation stops. Subtitle generation resumes when stream pulling starts again.
   * 
   * - false: Subtitles are generated when stream ingest starts, regardless of whether a stream is being pulled.
   * 
   * @example
   * true
   */
  isLazy?: boolean;
  /**
   * @remarks
   * The specifications of the output subtitles. Valid values:
   * 
   * - Landscape low definition 360p (640 × 360): `lp_ld`
   * 
   * - Portrait low definition 360p (360 × 640): `lp_ld_v`
   * 
   * - Landscape standard definition 480p (854 × 480): `lp_sd`
   * 
   * - Portrait standard definition 480p (480 × 854): `lp_sd_v`
   * 
   * - Landscape high definition 720p (1280 × 720): `lp_hd`
   * 
   * - Portrait high definition 720p (720 × 1280): `lp_hd_v`
   * 
   * - Landscape ultra high definition 1080p (1920 × 1080): `lp_ud`
   * 
   * - Portrait ultra high definition 1080p (1080 × 1920): `lp_ud_v`
   * 
   * This parameter is required.
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
   * The name of the virtual background template.
   * 
   * @example
   * sub02
   */
  studioName?: string;
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
      studioName: 'StudioName',
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
      studioName: 'string',
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

