// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGlobalDataNetworkResponseBody extends $dara.Model {
  /**
   * @example
   * gdc-xxx
   */
  channelId?: string;
  /**
   * @remarks
   * GDN ID
   * 
   * @example
   * gdn-xxx
   */
  networkId?: string;
  /**
   * @example
   * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      networkId: 'NetworkId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      networkId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

