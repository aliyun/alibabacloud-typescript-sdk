// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTunnelQuotaTimerResponseBodyDataTunnelQuotaParameter extends $dara.Model {
  /**
   * @remarks
   * The number of elastically reserved slots.
   * 
   * @example
   * 100
   */
  elasticReservedSlotNum?: number;
  /**
   * @remarks
   * The number of reserved slots.
   * 
   * @example
   * 100
   */
  slotNum?: number;
  static names(): { [key: string]: string } {
    return {
      elasticReservedSlotNum: 'elasticReservedSlotNum',
      slotNum: 'slotNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticReservedSlotNum: 'number',
      slotNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

