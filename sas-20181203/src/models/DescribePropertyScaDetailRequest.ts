// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyScaDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the asset fingerprint that you want to query. Default value: **sca**. Valid values:
   * 
   * *   **sca**: middleware
   * *   **sca_database**: database
   * *   **sca_web**: web service
   * 
   * >  If you do not specify this parameter, the default value **sca** is used, which indicates that middleware fingerprints are queried.
   * 
   * @example
   * sca
   */
  biz?: string;
  /**
   * @remarks
   * The type of the middleware, database, or web service that you want to query. Valid values:
   * 
   * *   **system_service**: system service
   * *   **software_library**: software library
   * *   **docker_component**: container component
   * *   **database**: database
   * *   **web_container**: web container
   * *   **jar**: JAR package
   * *   **web_framework**: web framework
   * 
   * @example
   * system_service
   */
  bizType?: string;
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
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the middleware, database, or web service.
   * 
   * >  This parameter is deprecated. You can ignore it.
   * 
   * @example
   * 1
   */
  name?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The PID.
   * 
   * @example
   * 756
   */
  pid?: string;
  /**
   * @remarks
   * The port that the process monitors.
   * 
   * @example
   * 68
   */
  port?: string;
  /**
   * @remarks
   * The timestamp when the process ends. Unit: milliseconds.
   * 
   * @example
   * 1641110965
   */
  processStartedEnd?: number;
  /**
   * @remarks
   * The timestamp when the process starts. Unit: milliseconds.
   * 
   * @example
   * 1641024565
   */
  processStartedStart?: number;
  /**
   * @remarks
   * The search condition, such as a server name or a server IP address.
   * 
   * >  Fuzzy match is supported.
   * 
   * @example
   * 192.168
   */
  remark?: string;
  /**
   * @remarks
   * The name of the asset fingerprint that you want to query.
   * 
   * @example
   * openssl
   */
  scaName?: string;
  /**
   * @remarks
   * The name of the process.
   * 
   * @example
   * open
   */
  scaNamePattern?: string;
  /**
   * @remarks
   * The version of the middleware, database, or web service.
   * 
   * @example
   * 1.0.2k
   */
  scaVersion?: string;
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
   * >  You must specify both the **SearchItem** and **SearchInfo** parameters before you can query the asset fingerprints based on the specified name or type.
   * 
   * @example
   * openssl
   */
  searchInfo?: string;
  /**
   * @remarks
   * The keyword of the subquery. You must specify this parameter based on the value of the **SearchItemSub** parameter.
   * 
   * *   If the **SearchItemSub** parameter is set to **port**, you must enter a port number.
   * *   If the **SearchItemSub** parameter is set to **pid**, you must enter a process ID (PID).
   * *   If the **SearchItemSub** parameter is set to **version**, you must enter the version of a database, middleware, or web service.
   * *   If the **SearchItemSub** parameter is set to **user**, you must enter a username.
   * 
   * >  The subquery is used to search for data of a specified database, middleware, or web service.
   * 
   * @example
   * 1.0.2k
   */
  searchInfoSub?: string;
  /**
   * @remarks
   * The type of the search condition. Valid values:
   * 
   * *   **name**: the name of a database, middleware, or web service
   * *   **type**: the type of a database, middleware, or web service
   * 
   * >  You must specify both the **SearchItem** and **SearchInfo** parameters before you can query the asset fingerprints based on the specified name or type.
   * 
   * @example
   * name
   */
  searchItem?: string;
  /**
   * @remarks
   * The type of the subquery. Valid values:
   * 
   * *   **port**
   * *   **pid**
   * *   **version**
   * *   **user**
   * 
   * @example
   * version
   */
  searchItemSub?: string;
  /**
   * @remarks
   * The user who runs the process.
   * 
   * @example
   * root
   */
  user?: string;
  /**
   * @remarks
   * The UUID of the server on which the middleware, database, or web service is run.
   * 
   * @example
   * uuid-02ebabe7-1c19-ab****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      bizType: 'BizType',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      name: 'Name',
      pageSize: 'PageSize',
      pid: 'Pid',
      port: 'Port',
      processStartedEnd: 'ProcessStartedEnd',
      processStartedStart: 'ProcessStartedStart',
      remark: 'Remark',
      scaName: 'ScaName',
      scaNamePattern: 'ScaNamePattern',
      scaVersion: 'ScaVersion',
      searchInfo: 'SearchInfo',
      searchInfoSub: 'SearchInfoSub',
      searchItem: 'SearchItem',
      searchItemSub: 'SearchItemSub',
      user: 'User',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      bizType: 'string',
      currentPage: 'number',
      lang: 'string',
      name: 'number',
      pageSize: 'number',
      pid: 'string',
      port: 'string',
      processStartedEnd: 'number',
      processStartedStart: 'number',
      remark: 'string',
      scaName: 'string',
      scaNamePattern: 'string',
      scaVersion: 'string',
      searchInfo: 'string',
      searchInfoSub: 'string',
      searchItem: 'string',
      searchItemSub: 'string',
      user: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

