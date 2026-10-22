// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInstanceDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WD20250718165839000001
   */
  bizId?: string;
  /**
   * @remarks
   * The domain name keyword for fuzzy match. This parameter is optional.
   * 
   * @example
   * example.com
   */
  domainKeyword?: string;
  /**
   * @remarks
   * The domain name management type. Valid values: CUSTOM and PLATFORM_PREFIX. If this parameter is not specified, the default value is CUSTOM.
   * 
   * @example
   * CUSTOM
   */
  domainType?: string;
  /**
   * @remarks
   * The number of entries to return for a single query.
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query. If no next query is available, this value is empty.
   * 
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The field used for sorting.
   * 
   * @example
   * CreationTime
   */
  orderColumn?: string;
  /**
   * @remarks
   * The sort order. Valid values: ASC and DESC.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 0
   */
  pageSize?: number;
  /**
   * @remarks
   * The query mode for the domain name status. Valid values: BASIC and REALTIME. BASIC returns only the persisted status. REALTIME refreshes the status from external services. If this parameter is not specified, the default value is REALTIME.
   * 
   * @example
   * REALTIME
   */
  statusQueryMode?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      domainKeyword: 'DomainKeyword',
      domainType: 'DomainType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderColumn: 'OrderColumn',
      orderType: 'OrderType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      statusQueryMode: 'StatusQueryMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      domainKeyword: 'string',
      domainType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderColumn: 'string',
      orderType: 'string',
      pageNum: 'number',
      pageSize: 'number',
      statusQueryMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

