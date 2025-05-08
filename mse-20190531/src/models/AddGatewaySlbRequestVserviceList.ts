// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewaySlbRequestVServiceList extends $dara.Model {
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   HTTP
   * *   HTTPS
   * 
   * @example
   * HTTPS
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the virtual server group.
   * 
   * @example
   * rsp-bp1j**t0fyl**
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The name of the virtual server group.
   */
  VServerGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
      VServerGroupId: 'VServerGroupId',
      VServerGroupName: 'VServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
      VServerGroupId: 'string',
      VServerGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

