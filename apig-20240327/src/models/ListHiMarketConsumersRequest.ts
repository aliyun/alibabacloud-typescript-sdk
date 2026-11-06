// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHiMarketConsumersRequest extends $dara.Model {
  /**
   * @remarks
   * The developer ID used to filter consumers.
   * 
   * @example
   * dev-xxxxxxxx
   */
  developerId?: string;
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
   * The search keyword for the consumer name.
   * 
   * @example
   * consumer-1
   */
  name?: string;
  /**
   * @remarks
   * The pagination cursor. Pass the nextToken value returned in the previous response to retrieve the next page. Do not specify this parameter for the first query.
   * 
   * @example
   * token-xxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The portal ID used to filter consumers.
   * 
   * @example
   * portal-xxxxxxxx
   */
  portalId?: string;
  static names(): { [key: string]: string } {
    return {
      developerId: 'developerId',
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      portalId: 'portalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      developerId: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      portalId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

