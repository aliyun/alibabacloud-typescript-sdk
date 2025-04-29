// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AttachInstanceRamRoleResponseBodyAttachInstanceRamRoleResultsAttachInstanceRamRoleResult } from "./AttachInstanceRamRoleResponseBodyAttachInstanceRamRoleResultsAttachInstanceRamRoleResult";


export class AttachInstanceRamRoleResponseBodyAttachInstanceRamRoleResults extends $dara.Model {
  attachInstanceRamRoleResult?: AttachInstanceRamRoleResponseBodyAttachInstanceRamRoleResultsAttachInstanceRamRoleResult[];
  static names(): { [key: string]: string } {
    return {
      attachInstanceRamRoleResult: 'AttachInstanceRamRoleResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachInstanceRamRoleResult: { 'type': 'array', 'itemType': AttachInstanceRamRoleResponseBodyAttachInstanceRamRoleResultsAttachInstanceRamRoleResult },
    };
  }

  validate() {
    if(Array.isArray(this.attachInstanceRamRoleResult)) {
      $dara.Model.validateArray(this.attachInstanceRamRoleResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

