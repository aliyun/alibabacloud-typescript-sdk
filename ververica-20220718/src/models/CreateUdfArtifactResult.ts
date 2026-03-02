// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UdfClass } from "./UdfClass";
import { UdfArtifact } from "./UdfArtifact";


export class CreateUdfArtifactResult extends $dara.Model {
  /**
   * @remarks
   * All classes in conflict.
   */
  collidingClasses?: UdfClass[];
  /**
   * @remarks
   * Indicates whether the JAR file was created.
   * 
   * @example
   * true
   */
  createSuccess?: boolean;
  /**
   * @remarks
   * The message used to create the JAR file.
   * 
   * @example
   * “”
   */
  message?: string;
  /**
   * @remarks
   * The JAR file that you created.
   */
  udfArtifact?: UdfArtifact;
  static names(): { [key: string]: string } {
    return {
      collidingClasses: 'collidingClasses',
      createSuccess: 'createSuccess',
      message: 'message',
      udfArtifact: 'udfArtifact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collidingClasses: { 'type': 'array', 'itemType': UdfClass },
      createSuccess: 'boolean',
      message: 'string',
      udfArtifact: UdfArtifact,
    };
  }

  validate() {
    if(Array.isArray(this.collidingClasses)) {
      $dara.Model.validateArray(this.collidingClasses);
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

