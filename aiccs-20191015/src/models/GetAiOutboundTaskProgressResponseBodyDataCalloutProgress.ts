// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiOutboundTaskProgressResponseBodyDataCalloutProgress extends $dara.Model {
  /**
   * @example
   * 1
   */
  callLossCount?: number;
  /**
   * @example
   * 0.01
   */
  callLossRate?: number;
  /**
   * @example
   * 5
   */
  callOutConnectCount?: number;
  /**
   * @example
   * 0.5
   */
  callOutConnectRate?: number;
  /**
   * @example
   * 10
   */
  callOutCount?: number;
  /**
   * @example
   * 4
   */
  callOutServicerPickupCount?: number;
  /**
   * @example
   * 0.4
   */
  callOutServicerPickupRate?: number;
  /**
   * @example
   * 5
   */
  callOutUserPickupCount?: number;
  /**
   * @example
   * 0.5
   */
  callOutUserPickupRate?: number;
  static names(): { [key: string]: string } {
    return {
      callLossCount: 'CallLossCount',
      callLossRate: 'CallLossRate',
      callOutConnectCount: 'CallOutConnectCount',
      callOutConnectRate: 'CallOutConnectRate',
      callOutCount: 'CallOutCount',
      callOutServicerPickupCount: 'CallOutServicerPickupCount',
      callOutServicerPickupRate: 'CallOutServicerPickupRate',
      callOutUserPickupCount: 'CallOutUserPickupCount',
      callOutUserPickupRate: 'CallOutUserPickupRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callLossCount: 'number',
      callLossRate: 'number',
      callOutConnectCount: 'number',
      callOutConnectRate: 'number',
      callOutCount: 'number',
      callOutServicerPickupCount: 'number',
      callOutServicerPickupRate: 'number',
      callOutUserPickupCount: 'number',
      callOutUserPickupRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

