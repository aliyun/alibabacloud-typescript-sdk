// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHBaseSlbServerRequest extends $dara.Model {
  /**
   * @remarks
   * The client token.
   * 
   * @example
   * xxxxx-xxxxx-xxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn****
   */
  clusterId?: string;
  /**
   * @remarks
   * The load balancing service to create. Valid values:
   * 
   * - **thrift**: the Thrift cross-language and cross-platform remote procedure call (RPC) protocol service.
   * - **rest**: the HTTP protocol service.
   * 
   * This parameter is required.
   * 
   * @example
   * thrift
   */
  slbServer?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      slbServer: 'SlbServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clusterId: 'string',
      slbServer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

