// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryProductPageRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  modelType?: Buffer;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  productName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 679583000646594
   */
  tenantId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 359687
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      modelType: 'modelType',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      productName: 'productName',
      tenantId: 'tenantId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelType: 'Buffer',
      pageIndex: 'number',
      pageSize: 'number',
      productName: 'string',
      tenantId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

