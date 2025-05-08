// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPurgeQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The website ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the ID.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The type of the purge task. Valid values:
   * 
   * *   **file** (default): purges the cache by file.
   * *   **cachetag**: purges the cache by cache tag.
   * *   **directory**: purges the cache by directory.
   * *   **ignoreParams**: purges the cache by URL with specific parameters ignored.
   * *   **hostname**: purges the cache by hostname.
   * *   **purgeall**: purges all cache.
   * 
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      siteId: 'SiteId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      siteId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

