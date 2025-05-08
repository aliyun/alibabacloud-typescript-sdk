// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreloadCachesRequest extends $dara.Model {
  /**
   * @remarks
   * The files to be prefetched.
   */
  content?: string[];
  /**
   * @remarks
   * By default, prefetch requests include the Accept-Encoding:gzip header. If you want a prefetch request to include other headers or implement multi-replica prefetch, you can specify a custom prefetch header by configuring the Headers parameter.
   */
  headers?: { [key: string]: string };
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
      content: 'Content',
      headers: 'Headers',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': 'string' },
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      siteId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

