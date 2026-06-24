// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateMem0PublicConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the public network connection string.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-**************
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-spsil01pww4hfz
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The port number.
   * 
   * This parameter is required.
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
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBInstanceName: 'DBInstanceName',
      port: 'Port',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      DBInstanceName: 'string',
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

