// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetsPropertyItemRequest extends $dara.Model {
  /**
   * @remarks
   * The type of Asset Fingerprints to query. Default value: **sca**. Valid values:
   * 
   * - **lkm**: kernel module
   * - **autorun**: startup item
   * - **web_server**: website.
   * 
   * This parameter is required.
   * 
   * @example
   * lkm
   */
  biz?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**, which indicates the first page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether to forcefully refresh the data to be queried. Valid values:
   * - **true**: Forcefully refresh.
   * - **false**: Do not forcefully refresh.
   * 
   * @example
   * false
   */
  forceFlush?: boolean;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * 
   * - zh: Chinese
   * - en: English.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page when using paging. Default value: 20. If the PageSize parameter is left empty, 20 entries are returned by default.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The content to query. Specify different query content based on the value of **SearchItem**:
   * - If **SearchItem** is set to **domain**, enter the domain name of the Asset Fingerprints entry.
   * - If **SearchItem** is set to **module_name**, enter the module name of the Asset Fingerprints entry.
   * - If **SearchItem** is set to **path**, enter the startup item path of the Asset Fingerprints entry.
   * 
   * > The **SearchItem** and **SearchInfo** parameters must be used together. Both parameters must be set at the same time for the query to take effect. Setting only one parameter does not take effect. You can use these parameters to query all data of a specific Asset Fingerprints entry by name.
   * 
   * @example
   * /lib/systemd/s****
   */
  searchInfo?: string;
  /**
   * @remarks
   * The type of query condition. Set different aggregation search conditions based on the **Biz** parameter. Valid values:
   * - If **Biz** is set to **web_server**, the following search conditions are supported for **SearchItem**:
   *     - **domain**: domain name
   * - If **Biz** is set to **lkm**, the following search conditions are supported for **SearchItem**:
   *     - **module_name**: module name
   * - If **Biz** is set to **autorun**, the following search conditions are supported for **SearchItem**:
   *     - **path**: startup item path
   * > The **SearchItem** and **SearchInfo** parameters must be used together. Both parameters must be set at the same time for the query to take effect. Setting only one parameter does not take effect. You can use these parameters to query all data of a specific Asset Fingerprints entry by name.
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

