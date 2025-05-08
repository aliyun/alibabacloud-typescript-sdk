// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCacheTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * Whether to ignore case. Possible values:
   * - on: Enabled, ignores case.
   * - off: Disabled, does not ignore case.
   * 
   * @example
   * on
   */
  caseInsensitive?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 156A6B-677B1A-4297B7-9187B7-2B44792
   */
  requestId?: string;
  /**
   * @remarks
   * Version number of the site.
   * 
   * @example
   * 1
   */
  siteVersion?: number;
  /**
   * @remarks
   * Custom CacheTag name.
   * 
   * @example
   * example
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      caseInsensitive: 'CaseInsensitive',
      requestId: 'RequestId',
      siteVersion: 'SiteVersion',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseInsensitive: 'string',
      requestId: 'string',
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

