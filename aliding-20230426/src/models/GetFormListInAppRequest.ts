// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFormListInAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_PBKT0xxx
   */
  appType?: string;
  /**
   * @example
   * receipt
   */
  formTypes?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hexxxx
   */
  systemToken?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      formTypes: 'FormTypes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      systemToken: 'SystemToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      formTypes: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      systemToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

