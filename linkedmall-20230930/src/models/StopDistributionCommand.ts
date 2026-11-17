// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDistributionCommand extends $dara.Model {
  /**
   * @remarks
   * The LM shop ID.
   * 
   * @example
   * 21000019
   */
  lmShopId?: string;
  /**
   * @remarks
   * The product ID.
   * 
   * @example
   * 660057403063402509
   */
  productId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 48A34399-A72C-1E23-8388-7E63A1B2E927
   */
  requestId?: string;
  /**
   * @remarks
   * The submission time.
   * 
   * @example
   * 2024-12-01 10:01:00
   */
  requestTime?: string;
  /**
   * @remarks
   * The submitter.
   * 
   * @example
   * demo_user
   */
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

