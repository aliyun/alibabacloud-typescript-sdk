// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterGetClientBalanceLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The change type filter. Valid values: auto_deduct, deduct, recharge.
   * 
   * @example
   * recharge
   */
  changeType?: string;
  /**
   * @remarks
   * The maximum number of entries to return.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next request.
   * 
   * @example
   * None
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      changeType: 'changeType',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      page: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

