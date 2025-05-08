// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCacheTagRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to ignore case sensitivity. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  caseInsensitive?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 5407498413****
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the website configurations. You can use this parameter to specify a version of your website to apply the feature settings. By default, version 0 is used.
   * 
   * @example
   * 1
   */
  siteVersion?: number;
  /**
   * @remarks
   * The name of the custom cache tag.
   * 
   * @example
   * example
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      caseInsensitive: 'CaseInsensitive',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseInsensitive: 'string',
      siteId: 'number',
      siteVersion: 'number',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

