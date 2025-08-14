// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAdInsertionResponseBodyConfigCdnConfig extends $dara.Model {
  /**
   * @remarks
   * The CDN prefix for accessing ad segments.
   * 
   * @example
   * http://cdn.com/
   */
  adSegmentUrlPrefix?: string;
  /**
   * @remarks
   * The CDN prefix for accessing content segments.
   * 
   * @example
   * http://cdn.com/
   */
  contentSegmentUrlPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      adSegmentUrlPrefix: 'AdSegmentUrlPrefix',
      contentSegmentUrlPrefix: 'ContentSegmentUrlPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adSegmentUrlPrefix: 'string',
      contentSegmentUrlPrefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdInsertionResponseBodyConfigManifestEndpointConfig extends $dara.Model {
  /**
   * @remarks
   * DASH清单播放端点前缀
   */
  dashPrefix?: string;
  /**
   * @remarks
   * The playback endpoint prefix for accessing HLS manifests.
   */
  hlsPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      dashPrefix: 'DashPrefix',
      hlsPrefix: 'HlsPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashPrefix: 'string',
      hlsPrefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAdInsertionResponseBodyConfig extends $dara.Model {
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
   * The URL of the ad decision server (ADS).
   * 
   * @example
   * http://ads.com/ad1?param1=[palyer_params.p1]
   */
  adsUrl?: string;
  /**
   * @remarks
   * The CDN configurations.
   */
  cdnConfig?: GetAdInsertionResponseBodyConfigCdnConfig;
  /**
   * @remarks
   * The aliases for dynamic variable replacement.
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
   * The prefix of the source URL.
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
   * The playback endpoint prefix for accessing manifests.
   */
  manifestEndpointConfig?: GetAdInsertionResponseBodyConfigManifestEndpointConfig;
  /**
   * @remarks
   * The name of the configuration.
   * 
   * @example
   * my_ad
   */
  name?: string;
  /**
   * @remarks
   * The personalization threshold.
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
      cdnConfig: GetAdInsertionResponseBodyConfigCdnConfig,
      configAliases: 'string',
      contentUrlPrefix: 'string',
      createTime: 'string',
      lastModified: 'string',
      manifestEndpointConfig: GetAdInsertionResponseBodyConfigManifestEndpointConfig,
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

export class GetAdInsertionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ad insertion configuration.
   */
  config?: GetAdInsertionResponseBodyConfig;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: GetAdInsertionResponseBodyConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

