// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkCardsNetworkCardInfo extends $dara.Model {
  /**
   * @remarks
   * The index of the network card.
   * 
   * @example
   * 1
   */
  networkCardIndex?: number;
  static names(): { [key: string]: string } {
    return {
      networkCardIndex: 'NetworkCardIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkCardIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

