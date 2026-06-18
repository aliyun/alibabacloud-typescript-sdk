// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPurgeQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the site. You can obtain this ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The type of the purge task. Valid values:
   * 
   * - **file** (default): File purge.
   * 
   * - **cachetag**: Cache tag purge.
   * 
   * - **directory**: Directory purge.
   * 
   * - **ignoreParams**: Purge by ignoring parameters.
   * 
   * - **hostname**: Hostname purge.
   * 
   * - **purgeall**: Purges all cached content for the site.
   * 
   * This parameter is required.
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

