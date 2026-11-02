// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAdInsertionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to pass through ad markers. Valid values: ON and OFF. Default value: OFF.
   * 
   * @example
   * ON
   */
  adMarkerPassthrough?: string;
  /**
   * @remarks
   * The URL of the ad decision server. HTTP and HTTPS protocols are supported. The maximum length is 2,048 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * http://ads.com/ad1?param1=[palyer_params.p1]
   */
  adsUrl?: string;
  /**
   * @remarks
   * The CDN prefix for ad segments. HTTP and HTTPS protocols are supported. The maximum length is 512 characters.
   * 
   * @example
   * http://cdn.com/
   */
  cdnAdSegmentUrlPrefix?: string;
  /**
   * @remarks
   * The CDN prefix for video content segments. HTTP and HTTPS protocols are supported. The maximum length is 512 characters.
   * 
   * @example
   * http://cdn.com/
   */
  cdnContentSegmentUrlPrefix?: string;
  /**
   * @remarks
   * The aliases for dynamic configurations. The value is a JSON string. You can add up to 20 player_params.{name} entries. The name part is limited to 150 characters. Under each player_params.xxx, you can add up to 50 key-value pairs. The key is limited to 150 characters, and the value is limited to 500 characters. Example: { "player_params.{name}": { "{key}": "{value}" } }
   * 
   * @example
   * { "player_params.p1": { "1": "abc" } }
   */
  configAliases?: string;
  /**
   * @remarks
   * The prefix of the content URL. HTTP and HTTPS protocols are supported. The maximum length is 512 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * https://source.com/
   */
  contentUrlPrefix?: string;
  /**
   * @remarks
   * The name of the configuration. This parameter cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * my_ad
   */
  name?: string;
  /**
   * @remarks
   * The threshold for personalization configuration, in seconds. Default value: 8.
   * 
   * @example
   * 5
   */
  personalizationThreshold?: number;
  /**
   * @remarks
   * The URL of the slate ad. HTTP and HTTPS protocols are supported. Only MP4 files (.mp4) are supported. The maximum length is 2,048 characters.
   * 
   * @example
   * http://storage.com/slate1.mp4
   */
  slateAdUrl?: string;
  static names(): { [key: string]: string } {
    return {
      adMarkerPassthrough: 'AdMarkerPassthrough',
      adsUrl: 'AdsUrl',
      cdnAdSegmentUrlPrefix: 'CdnAdSegmentUrlPrefix',
      cdnContentSegmentUrlPrefix: 'CdnContentSegmentUrlPrefix',
      configAliases: 'ConfigAliases',
      contentUrlPrefix: 'ContentUrlPrefix',
      name: 'Name',
      personalizationThreshold: 'PersonalizationThreshold',
      slateAdUrl: 'SlateAdUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adMarkerPassthrough: 'string',
      adsUrl: 'string',
      cdnAdSegmentUrlPrefix: 'string',
      cdnContentSegmentUrlPrefix: 'string',
      configAliases: 'string',
      contentUrlPrefix: 'string',
      name: 'string',
      personalizationThreshold: 'number',
      slateAdUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

