// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterGetMemberBalanceLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The change type filter.
   * 
   * @example
   * recharge
   */
  changeType?: string;
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
  /**
   * @remarks
   * Specifies whether to skip the total count calculation.
   * 
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

