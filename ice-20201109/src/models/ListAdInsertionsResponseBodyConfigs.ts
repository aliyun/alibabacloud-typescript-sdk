// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAdInsertionsResponseBodyConfigsCdnConfig } from "./ListAdInsertionsResponseBodyConfigsCdnConfig";
import { ListAdInsertionsResponseBodyConfigsManifestEndpointConfig } from "./ListAdInsertionsResponseBodyConfigsManifestEndpointConfig";


export class ListAdInsertionsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * Indicates whether ad marker passthrough is enabled.
   * 
   * @example
   * ON
   */
  adMarkerPassthrough?: string;
  /**
   * @remarks
   * The request URL of the ad decision server (ADS).
   * 
   * @example
   * http://ads.com/ad1?param1=[palyer_params.p1]
   */
  adsUrl?: string;
  /**
   * @remarks
   * The CDN configurations.
   */
  cdnConfig?: ListAdInsertionsResponseBodyConfigsCdnConfig;
  /**
   * @remarks
   * The player parameter variables and aliases.
   * 
   * @example
   * {
   *       "player_params.p1": {
   *             "1": "abc"
   *       }
   * }
   */
  configAliases?: string;
  /**
   * @remarks
   * The URL prefix for the source content.
   * 
   * @example
   * https://source.com/
   */
  contentUrlPrefix?: string;
  /**
   * @remarks
   * The time when the configuration was created.
   * 
   * @example
   * 2024-06-13T08:26:09Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the configuration was last modified.
   * 
   * @example
   * 2024-06-13T08:26:09Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The playback endpoint configuration.
   */
  manifestEndpointConfig?: ListAdInsertionsResponseBodyConfigsManifestEndpointConfig;
  /**
   * @remarks
   * The name of the ad insertion configuration.
   * 
   * @example
   * my_ad
   */
  name?: string;
  /**
   * @remarks
   * The personalization threshold that defines the maximum duration of underfilled time allowed in an ad break.
   * 
   * @example
   * 5
   */
  personalizationThreshold?: number;
  /**
   * @remarks
   * The URL of the slate ad.
   * 
   * @example
   * http://storage.com/slate1.mp4
   */
  slateAdUrl?: string;
  static names(): { [key: string]: string } {
    return {
      adMarkerPassthrough: 'AdMarkerPassthrough',
      adsUrl: 'AdsUrl',
      cdnConfig: 'CdnConfig',
      configAliases: 'ConfigAliases',
      contentUrlPrefix: 'ContentUrlPrefix',
      createTime: 'CreateTime',
      lastModified: 'LastModified',
      manifestEndpointConfig: 'ManifestEndpointConfig',
      name: 'Name',
      personalizationThreshold: 'PersonalizationThreshold',
      slateAdUrl: 'SlateAdUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adMarkerPassthrough: 'string',
      adsUrl: 'string',
      cdnConfig: ListAdInsertionsResponseBodyConfigsCdnConfig,
      configAliases: 'string',
      contentUrlPrefix: 'string',
      createTime: 'string',
      lastModified: 'string',
      manifestEndpointConfig: ListAdInsertionsResponseBodyConfigsManifestEndpointConfig,
      name: 'string',
      personalizationThreshold: 'number',
      slateAdUrl: 'string',
    };
  }

  validate() {
    if(this.cdnConfig && typeof (this.cdnConfig as any).validate === 'function') {
      (this.cdnConfig as any).validate();
    }
    if(this.manifestEndpointConfig && typeof (this.manifestEndpointConfig as any).validate === 'function') {
      (this.manifestEndpointConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

