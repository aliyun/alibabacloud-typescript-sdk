// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDevelopersRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page. The default value and valid values are not specified in the API definition.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Pass the nextToken returned in the previous response to obtain the next page. Do not specify this parameter for the first query.
   * 
   * @example
   * token-xxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the portal used to filter developers.
   * 
   * @example
   * portal-xxxxxxxx
   */
  portalId?: string;
  /**
   * @remarks
   * The status of the developer used to filter developers. Valid values: PENDING, APPROVED, and REJECTED.
   * 
   * @example
   * APPROVED
   */
  status?: string;
  /**
   * @remarks
   * The logon username used to filter developers.
   * 
   * @example
   * developer-demo
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      portalId: 'portalId',
      status: 'status',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      portalId: 'string',
      status: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

