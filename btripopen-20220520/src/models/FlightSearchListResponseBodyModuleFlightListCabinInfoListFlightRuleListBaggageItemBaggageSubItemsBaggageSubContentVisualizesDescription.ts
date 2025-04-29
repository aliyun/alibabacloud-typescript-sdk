// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightSearchListResponseBodyModuleFlightListCabinInfoListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesDescription extends $dara.Model {
  desc?: string;
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i4/O1CN01UynXG31pjsEtA3tMF_!!6000000005397-2-tps-36-36.png
   */
  icon?: string;
  /**
   * @example
   * https://gw.alicdn.com/imgextra/i1/O1CN01qe7wL21gJ0SmEXXL7_!!6000000004120-2-tps-1206-768.png
   */
  image?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      icon: 'icon',
      image: 'image',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      icon: 'string',
      image: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

