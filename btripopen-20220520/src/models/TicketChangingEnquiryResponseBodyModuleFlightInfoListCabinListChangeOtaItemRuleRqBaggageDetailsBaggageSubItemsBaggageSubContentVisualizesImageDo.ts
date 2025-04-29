// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContentVisualizesImageDO extends $dara.Model {
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i3/O1CN01kLt3m923XsUs6WVif_!!6000000007266-2-tps-280-300.png
   */
  image?: string;
  /**
   * @example
   * 50
   */
  largest?: string;
  /**
   * @example
   * 40
   */
  middle?: string;
  /**
   * @example
   * 20
   */
  smallest?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'image',
      largest: 'largest',
      middle: 'middle',
      smallest: 'smallest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      largest: 'string',
      middle: 'string',
      smallest: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

