// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UdfClass } from "./UdfClass";
import { UdfArtifact } from "./UdfArtifact";


export class UpdateUdfArtifactResult extends $dara.Model {
  collidingClasses?: UdfClass[];
  message?: string;
  missingClasses?: UdfClass[];
  udfArtifact?: UdfArtifact;
  updateSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      collidingClasses: 'collidingClasses',
      message: 'message',
      missingClasses: 'missingClasses',
      udfArtifact: 'udfArtifact',
      updateSuccess: 'updateSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collidingClasses: { 'type': 'array', 'itemType': UdfClass },
      message: 'string',
      missingClasses: { 'type': 'array', 'itemType': UdfClass },
      udfArtifact: UdfArtifact,
      updateSuccess: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.collidingClasses)) {
      $dara.Model.validateArray(this.collidingClasses);
    }
    if(Array.isArray(this.missingClasses)) {
      $dara.Model.validateArray(this.missingClasses);
    }
    if(this.udfArtifact && typeof (this.udfArtifact as any).validate === 'function') {
      (this.udfArtifact as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

