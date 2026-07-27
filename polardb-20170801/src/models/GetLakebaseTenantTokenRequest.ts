// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLakebaseTenantTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The associated PolarDB instance ID.
   * 
   * @example
   * pc-xxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The PolarFS instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pfs-xxx
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * The mount subdirectory. Specify an absolute path.
   * 
   * This parameter is required.
   * 
   * @example
   * /home/project/p1
   */
  subdir?: string;
  /**
   * @remarks
   * The tenant identifier.
   * 
   * @example
   * tenant-xxx
   */
  tenant?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      polarFsInstanceId: 'PolarFsInstanceId',
      subdir: 'Subdir',
      tenant: 'Tenant',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      polarFsInstanceId: 'string',
      subdir: 'string',
      tenant: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

