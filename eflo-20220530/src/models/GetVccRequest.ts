// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVccRequest extends $dara.Model {
  /**
   * @remarks
   * By default, popApi is not ignored and idempotent
   * 
   * @example
   * c5e3130a-d02f-11ec-a7d3-0242ac110005
   */
  clientToken?: string;
  /**
   * @remarks
   * Paging Parameters: The current parameters are obsolete.
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * Paging Parameters: The current parameters are obsolete.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Paging Parameters: The current parameters are obsolete.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      enablePage: 'EnablePage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      vccId: 'VccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enablePage: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      vccId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

