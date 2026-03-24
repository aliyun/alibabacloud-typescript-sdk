// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolarFsObjectsRequest extends $dara.Model {
  /**
   * @example
   * pc-***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  objectsToDelete?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pfs-2ze0i7*****
   */
  polarFsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      objectsToDelete: 'ObjectsToDelete',
      polarFsInstanceId: 'PolarFsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      objectsToDelete: { 'type': 'array', 'itemType': 'string' },
      polarFsInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objectsToDelete)) {
      $dara.Model.validateArray(this.objectsToDelete);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

