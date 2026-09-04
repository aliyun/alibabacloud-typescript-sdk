// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePxfsRequest extends $dara.Model {
  /**
   * @remarks
   * The node specification.
   * 
   * @example
   * polarx.pxfs.x4.xlarge
   */
  classCode?: string;
  /**
   * @remarks
   * The PolarDB-X instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-xxxxxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 3
   */
  nodeCount?: number;
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
  /**
   * @remarks
   * The IP whitelist.
   * 
   * @example
   * 192.168.1.0/24,10.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The storage size.
   * 
   * @example
   * 500
   */
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      DBInstanceName: 'DBInstanceName',
      nodeCount: 'NodeCount',
      regionId: 'RegionId',
      securityIPList: 'SecurityIPList',
      storageSize: 'StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      DBInstanceName: 'string',
      nodeCount: 'number',
      regionId: 'string',
      securityIPList: 'string',
      storageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

