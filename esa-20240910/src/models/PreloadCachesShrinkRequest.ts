// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreloadCachesShrinkRequest extends $dara.Model {
  contentShrink?: string;
  headersShrink?: string;
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      contentShrink: 'Content',
      headersShrink: 'Headers',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentShrink: 'string',
      headersShrink: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

