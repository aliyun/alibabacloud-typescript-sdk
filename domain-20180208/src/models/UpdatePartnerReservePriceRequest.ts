// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePartnerReservePriceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  biddingId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  partnerType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  reservePrice?: number;
  static names(): { [key: string]: string } {
    return {
      biddingId: 'BiddingId',
      domainName: 'DomainName',
      partnerType: 'PartnerType',
      reservePrice: 'ReservePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biddingId: 'number',
      domainName: 'string',
      partnerType: 'string',
      reservePrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

