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
   * The CDN prefix for video content segments.
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
   * The prefix of the DASH manifest endpoint.
   */
  dashPrefix?: string;
  /**
   * @remarks
   * The prefix of the HLS manifest endpoint.
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
   * The ad marker passthrough settings.
   * 
   * @example
   * ON
   */
  adMarkerPassthrough?: string;
  /**
   * @remarks
   * The URL of the ad decision server.
   * 
   * @example
   * http://ads.com/ad1?param1=[palyer_params.p1]
   */
  adsUrl?: string;
  /**
   * @remarks
   * The CDN configuration.
   */
  cdnConfig?: ListAdInsertionsResponseBodyConfigsCdnConfig;
  /**
   * @remarks
   * The aliases of the dynamic configuration.
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
   * The prefix of the content URL.
   * 
   * @example
   * https://source.com/
   */
  contentUrlPrefix?: string;
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard in UTC (ending with Z).
   * 
   * @example
   * 2024-06-13T08:26:09Z
   */
  createTime?: string;
  /**
   * @remarks
   * The last modified time.
   * 
   * @example
   * 2024-06-13T08:26:09Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The manifest endpoint configuration.
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
   * The threshold for personalization configuration.
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
   * The list of ad insertion configurations.
   */
  configs?: ListAdInsertionsResponseBodyConfigs[];
  /**
   * @remarks
   * The maximum number of entries to return for the next page of results. When this parameter is specified, pagination parameters are ignored.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to retrieve the next page of results. When this parameter is specified, pagination parameters are ignored.
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
   * Id of the request
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The sort order. Valid values: asc (ascending order by creation time) and desc (descending order by creation time).
   * 
   * @example
   * asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The total number of entries.
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

