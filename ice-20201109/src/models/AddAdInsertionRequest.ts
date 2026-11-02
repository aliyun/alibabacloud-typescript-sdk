// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAdInsertionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to pass through ad markers. Default value: OFF.
   * 
   * @example
   * ON
   */
  adMarkerPassthrough?: string;
  /**
   * @remarks
   * The URL of the ad decision server. The URL supports the HTTP and HTTPS protocols. It can be up to 2,048 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * http://ads.com/ad1?param1=[palyer_params.p1]
   */
  adsUrl?: string;
  /**
   * @remarks
   * The CDN prefix for ad segments. The URL supports the HTTP and HTTPS protocols. It can be up to 512 characters in length.
   * 
   * @example
   * http://cdn.com/
   */
  cdnAdSegmentUrlPrefix?: string;
  /**
   * @remarks
   * The CDN prefix for video content segments. The URL supports the HTTP and HTTPS protocols. It can be up to 512 characters in length.
   * 
   * @example
   * http://cdn.com/
   */
  cdnContentSegmentUrlPrefix?: string;
  /**
   * @remarks
   * The client token that is used to ensure idempotence. The token must be unique for each request to prevent duplicate submissions. It can be up to 200 characters in length.
   * 
   * @example
   * ****0311a423d11a5f7dee713535****
   */
  clientToken?: string;
  /**
   * @remarks
   * The dynamic configuration aliases. The value is a JSON string. You can add up to 20 player_params.{name} entries. The name part can be up to 150 characters in length. Under each player_params.xxx, you can add up to 50 key-value pairs. The key can be up to 150 characters in length, and the value can be up to 500 characters in length. Example:
   * {
   *   "player_params.{name}": {
   *     "{key}": "{value}"
   *   }
   * }
   * 
   * @example
   * { "player_params.p1": { "1": "abc" } }
   */
  configAliases?: string;
  /**
   * @remarks
   * The prefix of the content URL. The URL supports the HTTP and HTTPS protocols. It can be up to 512 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * https://source.com/
   */
  contentUrlPrefix?: string;
  /**
   * @remarks
   * The name of the configuration. The name must be unique within the same account. It can be up to 128 characters in length and must match the regular expression [A-Za-z0-9_-]+.
   * 
   * This parameter is required.
   * 
   * @example
   * my_ad
   */
  name?: string;
  /**
   * @remarks
   * The personalization threshold. Unit: seconds. Default value: 8.
   * 
   * @example
   * 5
   */
  personalizationThreshold?: number;
  /**
   * @remarks
   * The URL of the slate ad. The URL supports the HTTP and HTTPS protocols and only MP4 files (.mp4). It can be up to 2,048 characters in length.
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
      clientToken: 'ClientToken',
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
      clientToken: 'string',
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

