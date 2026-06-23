// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadPageScrapeBodyReadability extends $dara.Model {
  /**
   * @remarks
   * 是否剔除所有图片
   * 
   * 默认值：false
   * 
   * @example
   * false
   */
  excludeAllImages?: boolean;
  /**
   * @remarks
   * 是否剔除所有链接
   * 
   * 默认值：false
   * 
   * @example
   * false
   */
  excludeAllLinks?: boolean;
  /**
   * @remarks
   * 指定排除的标签
   */
  excludedTags?: string[];
  /**
   * @remarks
   * none：不删除信息，默认为 none
   * 
   * normal: 基于自研算法，剔除目标页面无关信息（页头/页脚，导航等）
   * 
   * article: 基于自研算法，获取站点主要正文内容(适用于博客、新闻站点，不适用于目录页、导航页)
   * 
   * @example
   * none
   */
  readabilityMode?: string;
  static names(): { [key: string]: string } {
    return {
      excludeAllImages: 'excludeAllImages',
      excludeAllLinks: 'excludeAllLinks',
      excludedTags: 'excludedTags',
      readabilityMode: 'readabilityMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeAllImages: 'boolean',
      excludeAllLinks: 'boolean',
      excludedTags: { 'type': 'array', 'itemType': 'string' },
      readabilityMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.excludedTags)) {
      $dara.Model.validateArray(this.excludedTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadPageScrapeBody extends $dara.Model {
  /**
   * @remarks
   * The format of the parsing result.
   * 
   * - rawHtml: the HTML of the target site.
   * - html: the page content processed based on readabilityMode.
   * - markdown: the Markdown content converted from the HTML.
   * - text: the text content extracted from the HTML.
   * - screenshot: a screenshot of the target site.
   */
  formats?: string[];
  /**
   * @remarks
   * This parameter does not need to be specified.
   * 
   * @example
   * null
   */
  location?: string;
  /**
   * @remarks
   * The maximum cache validity period. Unit: seconds. Default value: 1296000.
   * 1. If the cache duration is less than the value of maxAge, cached content is returned.
   * 2. If maxAge is set to 0, caching is not used.
   * 
   * @example
   * 1296000
   */
  maxAge?: number;
  /**
   * @remarks
   * The timeout period for waiting for the target site resources to fully load. The value of pageTimeout must be less than the value of timeout.
   * 
   * Default value: 15000.
   * 
   * @example
   * 15000
   */
  pageTimeout?: number;
  /**
   * @remarks
   * The readability configuration for the parsing result.
   */
  readability?: ReadPageScrapeBodyReadability;
  /**
   * @remarks
   * The end-to-end processing timeout period. Unit: ms.
   * 
   * Valid values: [0, 180000].
   * 
   * Default value: 60000.
   * 
   * @example
   * 60000
   */
  timeout?: number;
  /**
   * @remarks
   * The target URL to parse. The URL must start with http:// or https://.
   * 
   * This parameter is required.
   * 
   * @example
   * https://www.example.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      formats: 'formats',
      location: 'location',
      maxAge: 'maxAge',
      pageTimeout: 'pageTimeout',
      readability: 'readability',
      timeout: 'timeout',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formats: { 'type': 'array', 'itemType': 'string' },
      location: 'string',
      maxAge: 'number',
      pageTimeout: 'number',
      readability: ReadPageScrapeBodyReadability,
      timeout: 'number',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.formats)) {
      $dara.Model.validateArray(this.formats);
    }
    if(this.readability && typeof (this.readability as any).validate === 'function') {
      (this.readability as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

