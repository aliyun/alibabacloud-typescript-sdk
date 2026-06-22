// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePropertyScaDetailRequestSearchCriteriaList extends $dara.Model {
  /**
   * @remarks
   * The name of the search criterion.
   * 
   * @example
   * Name
   */
  name?: string;
  /**
   * @remarks
   * The filter value of the search criterion.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePropertyScaDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The type of Asset Fingerprints to query. Default value: **sca**. Valid values:
   * 
   * - **sca**: middleware
   * - **sca_database**: database
   * - **sca_web**: web service
   * 
   * > If this parameter is not set, the default value **sca** is used, which queries Asset Fingerprints information of the middleware type.
   * 
   * @example
   * sca
   */
  biz?: string;
  /**
   * @remarks
   * The type of middleware, database, or web service to query. Valid values:  
   * - **system_service**: system service
   * - **software_library**: software library
   * - **docker_component**: container component
   * - **database**: database
   * - **web_container**: web container
   * - **jar**: JAR package
   * - **web_framework**: web framework.
   * 
   * @example
   * system_service
   */
  bizType?: string;
  /**
   * @remarks
   * The page number of the page to return in the query results. Default value: **1**, which indicates that the results are displayed starting from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the middleware, database, or web service.
   * > This parameter is deprecated. You do not need to specify this parameter.
   * 
   * @example
   * 1
   */
  name?: number;
  /**
   * @remarks
   * The token that marks the current position from which to start reading. Leave this parameter empty to start reading from the beginning.
   * 
   * > Do not specify this parameter for the first call. The response includes the NextToken value for the second call. Each subsequent response contains the NextToken value for the next call.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6k+AtdhNE3kgQEK36GujZ5on+tWdc+4WoaoMP/kUNxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * Sets the number of Asset Fingerprints entries per page in a paged query. Default value: **10**, which indicates that 10 Asset Fingerprints entries are displayed per page.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The process ID.
   * 
   * @example
   * 756
   */
  pid?: string;
  /**
   * @remarks
   * The port on which the process listens.
   * 
   * @example
   * 68
   */
  port?: string;
  /**
   * @remarks
   * The end of the time range for querying the process start timestamp. Unit: seconds.
   * 
   * @example
   * 1641110965
   */
  processStartedEnd?: number;
  /**
   * @remarks
   * The start of the time range for querying the process start timestamp. Unit: seconds.
   * 
   * @example
   * 1641024565
   */
  processStartedStart?: number;
  /**
   * @remarks
   * The search condition (server name or IP address).
   * > Fuzzy match is supported.
   * 
   * @example
   * 192.168
   */
  remark?: string;
  /**
   * @remarks
   * The name of the Asset Fingerprints entry to query.
   * 
   * @example
   * openssl
   */
  scaName?: string;
  /**
   * @remarks
   * The process name.
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
   * The list of search criteria.
   */
  searchCriteriaList?: DescribePropertyScaDetailRequestSearchCriteriaList[];
  /**
   * @remarks
   * The content to query. Depending on the value of **SearchItem**, you need to enter different query content:
   * - If **SearchItem** is set to **name**, enter the name of the asset fingerprint as the query condition.
   * - If **SearchItem** is set to **type**, select the type of asset fingerprint to query. Valid values:   
   *     - **system_service**: system service
   *     - **software_library**: software library
   *     - **docker_component**: container component
   *     - **database**: database
   *     - **web_container**: web container
   *     - **jar**: JAR package
   *     - **web_framework**: web framework  
   * 
   * > The **SearchItem** and **SearchInfo** parameters must be used together. Setting only one of them has no effect. By setting both parameters, you can view all data for asset fingerprints of a specified name or type.
   * 
   * @example
   * openssl
   */
  searchInfo?: string;
  /**
   * @remarks
   * The content of the sub-query condition. Depending on the value of **SearchItemSub**, you need to enter different query content:
   * - If **SearchItemSub** is set to **port**, enter the port as the sub-query condition.
   * - If **SearchItemSub** is set to **pid**, enter the process ID as the sub-query condition.
   * - If **SearchItemSub** is set to **version**, enter the middleware, database, or web service version as the sub-query condition.
   * - If **SearchItemSub** is set to **user**, enter the username as the sub-query condition.
   * 
   * > Sub-query conditions help you search for the data list of a specific middleware, database, or web service.
   * 
   * @example
   * 1.0.2k
   */
  searchInfoSub?: string;
  /**
   * @remarks
   * The type of query condition. Valid values:
   * - **name**: the name of the middleware, database, or web service.
   * - **type**: the type of the middleware, database, or web service.
   * 
   * > The **SearchItem** and **SearchInfo** parameters must be used together. Setting only one of them has no effect. By setting both parameters, you can view all data for asset fingerprints of a specified name or type.
   * 
   * @example
   * name
   */
  searchItem?: string;
  /**
   * @remarks
   * The type of sub-query condition. Valid values:
   * - **port**: port
   * - **pid**: process ID
   * - **version**: version
   * - **user**: user.
   * 
   * @example
   * version
   */
  searchItemSub?: string;
  /**
   * @remarks
   * Specifies whether to use the NextToken method to retrieve asset list data. If this parameter is used, TotalCount is no longer returned. Valid values:
   * 
   * - **true**: Use the NextToken method.
   * - **false**: Do not use the NextToken method.
   * 
   * @example
   * true
   */
  useNextToken?: boolean;
  /**
   * @remarks
   * The user that runs the process.
   * 
   * @example
   * root
   */
  user?: string;
  /**
   * @remarks
   * The UUID of the server on which the middleware, database, or web service is deployed.
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
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      pid: 'Pid',
      port: 'Port',
      processStartedEnd: 'ProcessStartedEnd',
      processStartedStart: 'ProcessStartedStart',
      remark: 'Remark',
      scaName: 'ScaName',
      scaNamePattern: 'ScaNamePattern',
      scaVersion: 'ScaVersion',
      searchCriteriaList: 'SearchCriteriaList',
      searchInfo: 'SearchInfo',
      searchInfoSub: 'SearchInfoSub',
      searchItem: 'SearchItem',
      searchItemSub: 'SearchItemSub',
      useNextToken: 'UseNextToken',
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
      nextToken: 'string',
      pageSize: 'number',
      pid: 'string',
      port: 'string',
      processStartedEnd: 'number',
      processStartedStart: 'number',
      remark: 'string',
      scaName: 'string',
      scaNamePattern: 'string',
      scaVersion: 'string',
      searchCriteriaList: { 'type': 'array', 'itemType': DescribePropertyScaDetailRequestSearchCriteriaList },
      searchInfo: 'string',
      searchInfoSub: 'string',
      searchItem: 'string',
      searchItemSub: 'string',
      useNextToken: 'boolean',
      user: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.searchCriteriaList)) {
      $dara.Model.validateArray(this.searchCriteriaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

