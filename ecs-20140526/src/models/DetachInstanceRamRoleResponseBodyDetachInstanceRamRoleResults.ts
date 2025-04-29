// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResult } from "./DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResult";


export class DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResults extends $dara.Model {
  detachInstanceRamRoleResult?: DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResult[];
  static names(): { [key: string]: string } {
    return {
      detachInstanceRamRoleResult: 'DetachInstanceRamRoleResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detachInstanceRamRoleResult: { 'type': 'array', 'itemType': DetachInstanceRamRoleResponseBodyDetachInstanceRamRoleResultsDetachInstanceRamRoleResult },
    };
  }

  validate() {
    if(Array.isArray(this.detachInstanceRamRoleResult)) {
      $dara.Model.validateArray(this.detachInstanceRamRoleResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

