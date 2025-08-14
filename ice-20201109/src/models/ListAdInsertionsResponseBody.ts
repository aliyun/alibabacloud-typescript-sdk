// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAdInsertionsResponseBodyConfigsCdnConfig extends $dara.Model {
  /**
   * @remarks
   * The CDN prefix for ad segments.
   * 
   * @example
   * http://cdn.com/
   */
  adSegmentUrlPrefix?: string;
  /**
   * @remarks
   * The CDN prefix for content segments.
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

export class ListAdInsertionsResponseBodyConfigsManifestEndpointConfig extends $dara.Model {
  /**
   * @remarks
   * DASH清单播放端点前缀
   */
  dashPrefix?: string;
  /**
   * @remarks
   * The prefix of the playback endpoint for HLS manifests.
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

export class ListAdInsertionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Array
   */
  configs?: ListAdInsertionsResponseBodyConfigs[];
  /**
   * @remarks
   * The maximum number of entries to retrieve in a subsequent request. If this parameter is used, the pagination parameters become invalid.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used in the next request to retrieve a new page of results. If this parameter is used, the pagination parameters become invalid.
   * 
   * @example
   * ******8EqYpQbZ6Eh7+Zz8DxVYoQ*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The sorting order of the configurations by creation time. asc: ascending. desc: descending.
   * 
   * @example
   * asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListAdInsertionsResponseBodyConfigs },
      maxResults: 'number',
      nextToken: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      sortBy: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

