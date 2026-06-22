// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageVulWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The alias of the vulnerability to query.
   * 
   * @example
   * CVE-2007-5686:rpath_linux
   */
  aliasName?: string;
  /**
   * @remarks
   * The page number of the current page in a paged query. Paging is used to display results.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language type for the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. Paging is used to display results. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The source of the whitelist. Valid values:
   * - **image**: image
   * - **agentless**: agentless.
   * 
   * @example
   * image
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

