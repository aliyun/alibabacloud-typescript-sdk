// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExchangeRequest extends $dara.Model {
  collina?: string;
  consoleSessionId?: string;
  exchangeName?: string;
  exchangeNames?: { [key: string]: any };
  instanceId?: string;
  umidToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      collina: 'Collina',
      consoleSessionId: 'ConsoleSessionId',
      exchangeName: 'ExchangeName',
      exchangeNames: 'ExchangeNames',
      instanceId: 'InstanceId',
      umidToken: 'UmidToken',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collina: 'string',
      consoleSessionId: 'string',
      exchangeName: 'string',
      exchangeNames: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceId: 'string',
      umidToken: 'string',
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

