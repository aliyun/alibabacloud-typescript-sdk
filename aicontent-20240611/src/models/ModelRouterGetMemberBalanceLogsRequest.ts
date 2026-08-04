// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterGetMemberBalanceLogsRequest extends $dara.Model {
  /**
   * @example
   * recharge
   */
  changeType?: string;
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
  /**
   * @example
   * false
   */
  skipTotal?: boolean;
  static names(): { [key: string]: string } {
    return {
      changeType: 'changeType',
      page: 'page',
      size: 'size',
      skipTotal: 'skipTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'string',
      page: 'number',
      size: 'number',
      skipTotal: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

