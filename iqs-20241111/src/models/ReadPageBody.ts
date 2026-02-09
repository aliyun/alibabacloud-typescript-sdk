// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadPageBodyReadability extends $dara.Model {
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

export class ReadPageBody extends $dara.Model {
  formats?: string[];
  location?: string;
  /**
   * @example
   * 1296000
   */
  maxAge?: number;
  /**
   * @example
   * 10000
   */
  pageTimeout?: number;
  readability?: ReadPageBodyReadability;
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

