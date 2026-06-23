// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadPageBodyReadability extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to exclude all images.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  excludeAllImages?: boolean;
  /**
   * @remarks
   * Specifies whether to exclude all links.
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
   * Valid values:
   * - none: does not remove any information. Default value: none.
   * 
   * - normal: removes irrelevant information from the target page, such as headers, footers, and navigation elements, based on a proprietary algorithm.
   * 
   * - article: extracts the main body content of the website based on a proprietary algorithm. This mode is suitable for blogs and news websites, but not for directory or navigation pages.
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

export class ReadPageBody extends $dara.Model {
  /**
   * @remarks
   * The format of the parsing result.
   * - rawHtml: the HTML of the target website.
   * - html: the page content processed based on readabilityMode.
   * - markdown: the Markdown content converted from HTML.
   * - text: the text content extracted from HTML.
   */
  formats?: string[];
  /**
   * @remarks
   * You do not need to specify this parameter.
   * 
   * @example
   * null
   */
  location?: string;
  /**
   * @remarks
   * The maximum cache validity period. Unit: seconds. Default value: 1296000.
   * 
   * - If the cache duration is less than the value of maxAge, cached content is returned.
   * 
   * - If the value of maxAge is 0, caching is not used.
   * 
   * @example
   * 1296000
   */
  maxAge?: number;
  /**
   * @remarks
   * The URL read timeout period. The value of pageTimeout must be less than the value of timeout.
   * 
   * Default value: 10000.
   * 
   * @example
   * 10000
   */
  pageTimeout?: number;
  /**
   * @remarks
   * The readability configuration for the parsing result.
   */
  readability?: ReadPageBodyReadability;
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
   * The target URL to parse. The value must start with http:// or https://.
   * 
   * This parameter is required.
   * 
   * @example
   * https://help.aliyun.com/document_detail/2837301.html?spm=a2c4g.11186623.help-menu-2837261.d_0_0_0.59ed3e95CppOt2&scm=20140722.H_2837301._.OR_help-T_cn~zh-V_1
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
      readability: ReadPageBodyReadability,
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

