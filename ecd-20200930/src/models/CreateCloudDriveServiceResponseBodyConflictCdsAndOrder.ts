// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictCds } from "./CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictCds";
import { CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictOrder } from "./CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictOrder";


export class CreateCloudDriveServiceResponseBodyConflictCdsAndOrder extends $dara.Model {
  /**
   * @remarks
   * The conflicting enterprise drive.
   */
  conflictCds?: CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictCds[];
  /**
   * @remarks
   * The subscription orders of the conflicting enterprise drives that are unpaid.
   */
  conflictOrder?: CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictOrder[];
  static names(): { [key: string]: string } {
    return {
      conflictCds: 'ConflictCds',
      conflictOrder: 'ConflictOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conflictCds: { 'type': 'array', 'itemType': CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictCds },
      conflictOrder: { 'type': 'array', 'itemType': CreateCloudDriveServiceResponseBodyConflictCdsAndOrderConflictOrder },
    };
  }

  validate() {
    if(Array.isArray(this.conflictCds)) {
      $dara.Model.validateArray(this.conflictCds);
    }
    if(Array.isArray(this.conflictOrder)) {
      $dara.Model.validateArray(this.conflictOrder);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

