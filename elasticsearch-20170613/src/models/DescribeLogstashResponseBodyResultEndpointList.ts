// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogstashResponseBodyResultEndpointList extends $dara.Model {
  /**
   * @remarks
   * The tags added to the ALB instance.
   * 
   * @example
   * ``172.16.**.**``
   */
  host?: string;
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 9600
   */
  port?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'host',
      port: 'port',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

