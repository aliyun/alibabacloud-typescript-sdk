// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAdInsertionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable ad marker passthrough. Default value: OFF.
   * 
   * Valid values:
   * 
   * *   OFF: Disable.
   * *   ON: Enable.
   * 
   * @example
   * ON
   */
  adMarkerPassthrough?: string;
  /**
   * @remarks
   * The request URL of the ad decision server (ADS). HTTP and HTTPS are supported. The maximum length is 2,048 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * http://ads.com/ad1?param1=[palyer_params.p1]
   */
  adsUrl?: string;
  /**
   * @remarks
   * The CDN prefix for ad segments. HTTP and HTTPS are supported. The maximum length is 512 characters.
   * 
   * @example
   * http://cdn.com/
   */
  cdnAdSegmentUrlPrefix?: string;
  /**
   * @remarks
   * The CDN prefix for content segments. HTTP and HTTPS are supported. The maximum length is 512 characters.
   * 
   * @example
   * http://cdn.com/
   */
  cdnContentSegmentUrlPrefix?: string;
  /**
   * @remarks
   * The idempotency key that is used to avoid repeated submission. The value can be up to 200 characters in length.
   * 
   * @example
   * ****0311a423d11a5f7dee713535****
   */
  clientToken?: string;
  /**
   * @remarks
   * A JSON string that specifies the player parameter variables and aliases. You can add up to 20 player_params.{name} entries. The name field can be up to 150 characters in length. Each player parameter can include up to 50 key-value pairs. A key can be up to 150 characters long, and a value can be up to 500 characters. Example: { "player_params.{name}": { "{key}": "{value}" } }
   * 
   * @example
   * { "player_params.p1": { "1": "abc" } }
   */
  configAliases?: string;
  /**
   * @remarks
   * The URL prefix for the source content. HTTP and HTTPS are supported. The maximum length is 512 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * https://source.com/
   */
  contentUrlPrefix?: string;
  /**
   * @remarks
   * The name of the configuration. The name must be unique and can be up to 128 characters in length. Letters, digits, underscores (_), and hyphens (-) are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * my_ad
   */
  name?: string;
  /**
   * @remarks
   * Specifies the maximum duration of underfilled time allowed in an ad break. Unit: seconds. Default value: 8 seconds.
   * 
   * @example
   * 5
   */
  personalizationThreshold?: number;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the slate ad. Only MP4 format is supported. The maximum length is 2,048 characters.
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

