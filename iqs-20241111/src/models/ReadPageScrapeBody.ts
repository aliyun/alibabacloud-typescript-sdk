// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadPageScrapeBodyReadability extends $dara.Model {
  /**
   * @example
   * false
   */
  excludeAllImages?: boolean;
  /**
   * @example
   * false
   */
  excludeAllLinks?: boolean;
  excludedTags?: string[];
  /**
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
  formats?: string[];
  /**
   * @example
   * null
   */
  location?: string;
  /**
   * @example
   * 1296000
   */
  maxAge?: number;
  /**
   * @example
   * 15000
   */
  pageTimeout?: number;
  readability?: ReadPageScrapeBodyReadability;
  /**
   * @example
   * 60000
   */
  timeout?: number;
  /**
   * @remarks
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

