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
   * The PolarFS instance ID. The CreationCategory of the instance must be basic (Basic Edition). Other categories are not supported by this operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pfs-xxx
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * The absolute path of the mount subdirectory.
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

