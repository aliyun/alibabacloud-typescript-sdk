// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateContext0PublicConnectionRequest extends $dara.Model {
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
   * The instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * pxsp-*********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The target node type: service or dashboard.
   * 
   * @example
   * dn
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
   * The region ID.
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

