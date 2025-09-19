// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetsPropertyItemRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the asset fingerprint that you want to query. Default value: **sca**. Valid values:
   * 
   * *   **lkm**: kernel module
   * *   **autorun**: startup item
   * *   **web_server**: website
   * 
   * This parameter is required.
   * 
   * @example
   * lkm
   */
  biz?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether to forcefully refresh the data that you want to query. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  forceFlush?: boolean;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * > We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The value of the search condition. You must specify this parameter based on the value of the **SearchItem** parameter.
   * 
   * *   If you set **SearchItem** to **domain**, you must enter the domain name.
   * *   If you set **SearchItem** to **module_name**, you must enter the module name.
   * *   If you set **SearchItem** to **path**, you must enter the path to the self-starting item.
   * 
   * >  You must specify both the **SearchItem** and **SearchInfo** parameters before you can query the information about asset fingerprints by asset fingerprint name.
   * 
   * @example
   * /lib/systemd/s****
   */
  searchInfo?: string;
  /**
   * @remarks
   * The type of the search condition. You must specify this parameter based on the value of the **Biz** parameter. Valid values:
   * 
   * *   If you set **Biz** to **web_server**, set **SearchItem** to the following value:
   * 
   *     *   **domain**: the domain name
   * 
   * *   If you set **Biz** to **lkm**, set **SearchItem** to the following value:
   * 
   *     *   **module_name**: the name of the module
   * 
   * *   If you set **Biz** to **autorun**, set **SearchItem** to the following value:
   * 
   *     *   **path**: the path to the self-starting item
   * 
   * >  You must specify both the **SearchItem** and **SearchInfo** parameters before you can query the information about asset fingerprints by asset fingerprint name.
   * 
   * @example
   * path
   */
  searchItem?: string;
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      currentPage: 'CurrentPage',
      forceFlush: 'ForceFlush',
      lang: 'Lang',
      pageSize: 'PageSize',
      searchInfo: 'SearchInfo',
      searchItem: 'SearchItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      currentPage: 'number',
      forceFlush: 'boolean',
      lang: 'string',
      pageSize: 'number',
      searchInfo: 'string',
      searchItem: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

