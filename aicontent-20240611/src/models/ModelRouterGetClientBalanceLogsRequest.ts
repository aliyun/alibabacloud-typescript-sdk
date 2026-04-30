// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterGetClientBalanceLogsRequest extends $dara.Model {
  /**
   * @example
   * recharge
   */
  changeType?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * None
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
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

