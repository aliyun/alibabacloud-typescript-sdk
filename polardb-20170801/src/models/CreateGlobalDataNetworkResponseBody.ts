// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGlobalDataNetworkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the synchronization link.
   * 
   * @example
   * gdc-xxx
   */
  channelId?: string;
  /**
   * @remarks
   * The ID of the global database network (GDN).
   * 
   * @example
   * gdn-xxx
   */
  networkId?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

