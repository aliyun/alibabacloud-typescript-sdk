// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductEnvInfosRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  companyId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  productId?: number;
  /**
   * @example
   * SYSTEM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      productId: 'productId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      productId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

