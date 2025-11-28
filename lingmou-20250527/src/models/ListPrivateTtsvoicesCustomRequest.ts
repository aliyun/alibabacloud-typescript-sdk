// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateTTSVoicesCustomRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  maxResults?: number;
  name?: string;
  /**
   * @example
   * Q45algIClks=
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * This parameter is required.
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
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      pageIndex: 'number',
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

