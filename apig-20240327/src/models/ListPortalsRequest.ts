// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPortalsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return per request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The portal name, which is the Name property of the portal resource. This corresponds to the name field in the response list items.
   * 
   * @example
   * developer-portal
   */
  name?: string;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * next-token-xxxxxxxx
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
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

