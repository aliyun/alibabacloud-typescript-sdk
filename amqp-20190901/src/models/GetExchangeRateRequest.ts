// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExchangeRateRequest extends $dara.Model {
  consoleSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  exchangeNames?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      consoleSessionId: 'ConsoleSessionId',
      exchangeNames: 'ExchangeNames',
      instanceId: 'InstanceId',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
      exchangeNames: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceId: 'string',
      vhostName: 'string',
    };
  }

  validate() {
    if(this.exchangeNames) {
      $dara.Model.validateMap(this.exchangeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

