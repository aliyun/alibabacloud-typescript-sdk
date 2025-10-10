// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  osType?: number;
  /**
   * @example
   * 1
   */
  page?: string;
  /**
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  productId?: string;
  static names(): { [key: string]: string } {
    return {
      osType: 'OsType',
      page: 'Page',
      pageSize: 'PageSize',
      productId: 'ProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osType: 'number',
      page: 'string',
      pageSize: 'string',
      productId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

