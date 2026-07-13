// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAtiRegistrantsRequest extends $dara.Model {
  /**
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cC.....
   */
  clientToken?: string;
  /**
   * @example
   * 500
   */
  maxResults?: number;
  /**
   * @example
   * 张xx
   */
  name?: string;
  /**
   * @example
   * 4698691
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @example
   * 审核通过
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

