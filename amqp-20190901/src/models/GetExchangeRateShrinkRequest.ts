// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExchangeRateShrinkRequest extends $dara.Model {
  consoleSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  exchangeNamesShrink?: string;
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
      exchangeNamesShrink: 'ExchangeNames',
      instanceId: 'InstanceId',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
      exchangeNamesShrink: 'string',
      instanceId: 'string',
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

