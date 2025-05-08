// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRouteWafStatusResponseBodyDataTimeout extends $dara.Model {
  /**
   * @remarks
   * The status.
   * 
   * @example
   * off
   */
  status?: string;
  /**
   * @remarks
   * The time unit.
   * 
   * @example
   * s
   */
  timeUnit?: string;
  /**
   * @remarks
   * The unit number.
   * 
   * @example
   * 10
   */
  unitNum?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      timeUnit: 'TimeUnit',
      unitNum: 'UnitNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      timeUnit: 'string',
      unitNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

