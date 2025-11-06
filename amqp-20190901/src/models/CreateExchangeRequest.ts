// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExchangeRequest extends $dara.Model {
  alternateExchange?: string;
  autoDelete?: boolean;
  consoleSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  exchangeName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  exchangeType?: number;
  instanceId?: string;
  internal?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  vhostName?: string;
  XDelayedType?: string;
  XHashHeader?: string;
  static names(): { [key: string]: string } {
    return {
      alternateExchange: 'AlternateExchange',
      autoDelete: 'AutoDelete',
      consoleSessionId: 'ConsoleSessionId',
      exchangeName: 'ExchangeName',
      exchangeType: 'ExchangeType',
      instanceId: 'InstanceId',
      internal: 'Internal',
      vhostName: 'VhostName',
      XDelayedType: 'XDelayedType',
      XHashHeader: 'XHashHeader',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alternateExchange: 'string',
      autoDelete: 'boolean',
      consoleSessionId: 'string',
      exchangeName: 'string',
      exchangeType: 'number',
      instanceId: 'string',
      internal: 'boolean',
      vhostName: 'string',
      XDelayedType: 'string',
      XHashHeader: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

