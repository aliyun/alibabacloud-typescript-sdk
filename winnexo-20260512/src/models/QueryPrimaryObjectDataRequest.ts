// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPrimaryObjectDataRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword for search. The keyword is matched against the name field. If the schema defines a description field, the keyword is also matched against the description field.
   * 
   * @example
   * SampleKeyword
   */
  keyword?: string;
  /**
   * @remarks
   * Specifies whether to return only favorited primary objects. If this parameter is set to false or not specified, all objects are returned with the isFavorited flag.
   * 
   * @example
   * false
   */
  onlyFavorites?: boolean;
  /**
   * @remarks
   * The operating object name (such as customer_1).
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The page number (starting from 1).
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass this value explicitly by using --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      onlyFavorites: 'onlyFavorites',
      operatingObjectName: 'operatingObjectName',
      page: 'page',
      pageSize: 'pageSize',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      onlyFavorites: 'boolean',
      operatingObjectName: 'string',
      page: 'number',
      pageSize: 'number',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

