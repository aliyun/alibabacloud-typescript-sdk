// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCacheTagResponseBody extends $dara.Model {
  caseInsensitive?: string;
  requestId?: string;
  siteVersion?: number;
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

