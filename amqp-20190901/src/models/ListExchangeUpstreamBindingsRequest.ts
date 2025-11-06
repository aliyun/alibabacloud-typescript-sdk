// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExchangeUpstreamBindingsRequest extends $dara.Model {
  consoleSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  exchangeName?: string;
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  vhostName?: string;
  static names(): { [key: string]: string } {
    return {
      consoleSessionId: 'ConsoleSessionId',
      currentPage: 'CurrentPage',
      exchangeName: 'ExchangeName',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      vhostName: 'VhostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleSessionId: 'string',
      currentPage: 'number',
      exchangeName: 'string',
      instanceId: 'string',
      pageSize: 'number',
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

