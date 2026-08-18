// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateContextDBPublicConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the public network connection string.
   * 
   * @example
   * pxc-**************
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-xxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The type of the target node. Valid values: service and dashboard.
   * 
   * @example
   * service
   */
  nodeType?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBInstanceName: 'DBInstanceName',
      nodeType: 'NodeType',
      port: 'Port',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      DBInstanceName: 'string',
      nodeType: 'string',
      port: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

