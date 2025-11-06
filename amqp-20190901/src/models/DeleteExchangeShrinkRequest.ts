// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExchangeShrinkRequest extends $dara.Model {
  collina?: string;
  consoleSessionId?: string;
  exchangeName?: string;
  exchangeNamesShrink?: string;
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
      exchangeNamesShrink: 'ExchangeNames',
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
      exchangeNamesShrink: 'string',
      instanceId: 'string',
      umidToken: 'string',
      vhostName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

