// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UdfClass } from "./UdfClass";


export class DeleteUdfArtifactResult extends $dara.Model {
  deleteSuccess?: boolean;
  message?: string;
  referencedClasses?: UdfClass[];
  static names(): { [key: string]: string } {
    return {
      deleteSuccess: 'deleteSuccess',
      message: 'message',
      referencedClasses: 'referencedClasses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteSuccess: 'boolean',
      message: 'string',
      referencedClasses: { 'type': 'array', 'itemType': UdfClass },
    };
  }

  validate() {
    if(Array.isArray(this.referencedClasses)) {
      $dara.Model.validateArray(this.referencedClasses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

