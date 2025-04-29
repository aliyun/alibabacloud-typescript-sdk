// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightSearchListResponseBodyModuleFlightListFlightRuleListBaggageItemBaggageSubItemsBaggageSubContentVisualizesImageDO extends $dara.Model {
  /**
   * @example
   * demo
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

