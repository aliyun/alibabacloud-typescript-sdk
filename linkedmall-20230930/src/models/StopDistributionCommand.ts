// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDistributionCommand extends $dara.Model {
  lmShopId?: string;
  productId?: string;
  requestId?: string;
  /**
   * @example
   * 2024-12-01 10:01:00
   */
  requestTime?: string;
  requestUser?: string;
  static names(): { [key: string]: string } {
    return {
      lmShopId: 'lmShopId',
      productId: 'productId',
      requestId: 'requestId',
      requestTime: 'requestTime',
      requestUser: 'requestUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lmShopId: 'string',
      productId: 'string',
      requestId: 'string',
      requestTime: 'string',
      requestUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

