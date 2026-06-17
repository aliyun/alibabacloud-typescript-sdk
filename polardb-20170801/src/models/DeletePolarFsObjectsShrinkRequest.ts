// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolarFsObjectsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The list of objects to delete.
   * 
   * This parameter is required.
   */
  objectsToDeleteShrink?: string;
  /**
   * @remarks
   * The PolarLakebase instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pfs-2ze0i7*****
   */
  polarFsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      objectsToDeleteShrink: 'ObjectsToDelete',
      polarFsInstanceId: 'PolarFsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      objectsToDeleteShrink: 'string',
      polarFsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

