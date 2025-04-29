// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketChangingEnquiryResponseBodyModuleFlightInfoListCabinListChangeOtaItemRuleRqBaggageDetailsBaggageSubItemsBaggageSubContents extends $dara.Model {
  baggageDesc?: string;
  icon?: string;
  /**
   * @example
   * 0
   */
  style?: number;
  subTitle?: string;
  static names(): { [key: string]: string } {
    return {
      baggageDesc: 'baggage_desc',
      icon: 'icon',
      style: 'style',
      subTitle: 'sub_title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageDesc: 'string',
      icon: 'string',
      style: 'number',
      subTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

