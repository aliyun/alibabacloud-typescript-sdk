// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAliDingGroupChatsRequest extends $dara.Model {
  /**
   * @remarks
   * The cursor for the paged query. Set this parameter to 0 for the first request. For subsequent paging requests, set this parameter to the value of **nextCursor** returned in the previous response.
   * 
   * @example
   * 0
   */
  cursor?: string;
  /**
   * @remarks
   * Specifies whether to exclude muted group chats.
   * 
   * @example
   * false
   */
  excludeMuted?: boolean;
  /**
   * @remarks
   * The keyword for search. The keyword always matches the name field. If the description field is defined in the schema, the keyword also matches the description field.
   * 
   * This parameter is required.
   * 
   * @example
   * Customer project
   */
  keyword?: string;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If this parameter is not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'cursor',
      excludeMuted: 'excludeMuted',
      keyword: 'keyword',
      pageSize: 'pageSize',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
      excludeMuted: 'boolean',
      keyword: 'string',
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

