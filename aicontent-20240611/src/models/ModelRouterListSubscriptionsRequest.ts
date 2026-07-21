// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterListSubscriptionsRequest extends $dara.Model {
  /**
   * @example
   * permanent
   */
  balanceType?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * "5" 或 ""
   */
  nextToken?: string;
  /**
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      balanceType: 'balanceType',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      balanceType: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

