// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadPageScrapeBodyReadability extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all images.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  excludeAllImages?: boolean;
  /**
   * @remarks
   * Specifies whether to remove all links.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  excludeAllLinks?: boolean;
  /**
   * @remarks
   * The tags to exclude.
   */
  excludedTags?: string[];
  /**
   * @remarks
   * The readability mode. Valid values:
   * - none: Does not remove any information. This is the default value.
   * - normal: Removes irrelevant information from the target page, such as headers, footers, and navigation elements, based on a proprietary algorithm.
   * - article: Extracts the main body content of the site based on a proprietary algorithm. This mode is suitable for blogs and news sites, but not for directory or navigation pages.
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
   * The formats of the parsed result. Valid values:
   * - rawHtml: The HTML of the target site.
   * - html: The page content processed based on the readabilityMode.
   * - markdown: The Markdown content converted from the HTML.
   * - text: The text content in the HTML.
   * - screenshot: The screenshot of the target site.
   */
  formats?: string[];
  /**
   * @remarks
   * This parameter is not required.
   * 
   * @example
   * null
   */
  location?: string;
  /**
   * @remarks
   * The maximum cache duration, in seconds.
   * - If the cache duration is less than the maxAge value, the cached content is returned.
   * - If the maxAge value is set to 0, the cache is not used.
   * 
   * Default value: 1296000.
   * 
   * @example
   * 1296000
   */
  maxAge?: number;
  /**
   * @remarks
   * The timeout period for waiting for the resources of the target site to fully load. The pageTimeout value must be less than the timeout value.
   * 
   * Default value: 15000.
   * 
   * @example
   * 15000
   */
  pageTimeout?: number;
  /**
   * @remarks
   * The readability configuration of the parsed result.
   */
  readability?: ReadPageScrapeBodyReadability;
  /**
   * @remarks
   * The end-to-end processing timeout period, in milliseconds.
   * 
   * Valid values: 0 to 180000.
   * 
   * Default value: 60000.
   * 
   * @example
   * 60000
   */
  timeout?: number;
  /**
   * @remarks
   * The target URL to parse. It must start with http:// or https://.
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

