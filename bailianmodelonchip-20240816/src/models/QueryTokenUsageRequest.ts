// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTokenUsageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-04-02 00:00:00
   */
  endDate?: string;
  /**
   * @example
   * 2oImhCz4f8XCviiM
   */
  productKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-04-01 00:00:00
   */
  startDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 520539530998273
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      productKey: 'productKey',
      startDate: 'startDate',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      productKey: 'string',
      startDate: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

