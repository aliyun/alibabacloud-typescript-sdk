// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetTestTaskRequestCommTestHosts extends $dara.Model {
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 169.253.253.15
   */
  IP?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-tw-bqisacl3z6l
   */
  nodeId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * i111670831721110797708
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * VBw
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      nodeId: 'NodeId',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      nodeId: 'string',
      resourceId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

