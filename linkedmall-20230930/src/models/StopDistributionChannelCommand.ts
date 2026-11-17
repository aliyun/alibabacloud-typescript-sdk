// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDistributionChannelCommand extends $dara.Model {
  /**
   * @remarks
   * The set of channel IDs.
   */
  channelCodes?: string[];
  /**
   * @remarks
   * The store ID.
   * 
   * @example
   * 1100001
   */
  lmShopId?: string;
  /**
   * @remarks
   * The commodity ID.
   * 
   * @example
   * 660******080
   */
  productId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 841471F6-5D61-1331-8C38-2****B55
   */
  requestId?: string;
  /**
   * @remarks
   * The request time. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2026-01-01 00:00:00
   */
  requestTime?: string;
  /**
   * @remarks
   * The requesting user.
   * 
   * @example
   * 12000000001
   */
  requestUser?: string;
  static names(): { [key: string]: string } {
    return {
      channelCodes: 'channelCodes',
      lmShopId: 'lmShopId',
      productId: 'productId',
      requestId: 'requestId',
      requestTime: 'requestTime',
      requestUser: 'requestUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelCodes: { 'type': 'array', 'itemType': 'string' },
      lmShopId: 'string',
      productId: 'string',
      requestId: 'string',
      requestTime: 'string',
      requestUser: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channelCodes)) {
      $dara.Model.validateArray(this.channelCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

