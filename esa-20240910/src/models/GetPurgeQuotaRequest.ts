// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPurgeQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  /**
   * @remarks
   * The refresh task type. Valid values:
   * - **file** (default): file refresh.
   * - **cachetag**: cache tag refresh.
   * - **directory**: directory refresh.
   * - **ignoreParams**: ignore-parameters refresh.
   * - **hostname**: hostname refresh.
   * - **purgeall**: purge all cache under the site.
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

