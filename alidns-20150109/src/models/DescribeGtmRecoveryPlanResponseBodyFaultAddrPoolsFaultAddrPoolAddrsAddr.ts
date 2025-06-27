// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmRecoveryPlanResponseBodyFaultAddrPoolsFaultAddrPoolAddrsAddr extends $dara.Model {
  /**
   * @remarks
   * The address ID.
   * 
   * @example
   * 739
   */
  id?: number;
  /**
   * @remarks
   * The address mode.
   * 
   * @example
   * OFFLINE
   */
  mode?: string;
  /**
   * @remarks
   * The address.
   * 
   * @example
   * 1.1.1.1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      mode: 'Mode',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      mode: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

