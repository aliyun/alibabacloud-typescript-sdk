// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyScaItemRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the asset fingerprint that you want to query. Default value: **sca**. Valid values:
   * 
   * *   **sca**: middleware
   * *   **sca_database**: database
   * *   **sca_web**: web service
   * 
   * > If you do not specify this parameter, the default value **sca** is used, which indicates that middleware fingerprints are queried.
   * 
   * @example
   * sca
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
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * > We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The search keyword. You must specify this parameter based on the value of the **SearchItem** parameter.
   * 
   * *   If the **SearchItem** parameter is set to **name**, you must enter the name of an asset fingerprint.
   * 
   * *   If the **SearchItem** parameter is set to **type**, you must enter the type of an asset fingerprint. Valid values:
   * 
   *     *   **system_service**: system service
   *     *   **software_library**: software library
   *     *   **docker_component**: container component
   *     *   **database**: database
   *     *   **web_container**: web container
   *     *   **jar**: JAR package
   *     *   **web_framework**: web framework
   * 
   * > You must specify both the **SearchItem** and **SearchInfo** parameters before you can query the asset fingerprints based on the specified name or type.
   * 
   * @example
   * system_service
   */
  searchInfo?: string;
  /**
   * @remarks
   * The type of the search condition. Valid values:
   * 
   * *   **name**: the name of a database, middleware, or web service
   * *   **type**: the type of a database, middleware, or web service
   * 
   * > You must specify both the **SearchItem** and **SearchInfo** parameters before you can query the asset fingerprints based on the specified name or type.
   * 
   * @example
   * type
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

