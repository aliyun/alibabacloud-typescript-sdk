// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCacheTagRequest extends $dara.Model {
  caseInsensitive?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  siteVersion?: number;
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

