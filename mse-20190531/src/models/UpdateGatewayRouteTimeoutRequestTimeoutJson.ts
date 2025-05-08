// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRouteTimeoutRequestTimeoutJSON extends $dara.Model {
  /**
   * @remarks
   * The status of the policy.
   * 
   * @example
   * off
   */
  status?: string;
  /**
   * @remarks
   * The unit of time. A value of s indicates seconds.
   * 
   * @example
   * s
   */
  timeUnit?: string;
  /**
   * @remarks
   * The value of the timeout period.
   * 
   * @example
   * 1
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

