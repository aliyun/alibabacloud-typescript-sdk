// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreloadCachesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The files to be prefetched.
   */
  contentShrink?: string;
  /**
   * @remarks
   * By default, prefetch requests include the Accept-Encoding:gzip header. If you want a prefetch request to include other headers or implement multi-replica prefetch, you can specify a custom prefetch header by configuring the Headers parameter.
   */
  headersShrink?: string;
  /**
   * @remarks
   * The website ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the ID.
   * 
   * @example
   * 123456789****
   */
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

