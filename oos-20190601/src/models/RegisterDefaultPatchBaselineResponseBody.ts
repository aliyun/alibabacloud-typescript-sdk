// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RegisterDefaultPatchBaselineResponseBodyPatchBaseline } from "./RegisterDefaultPatchBaselineResponseBodyPatchBaseline";


export class RegisterDefaultPatchBaselineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the patch baseline.
   */
  patchBaseline?: RegisterDefaultPatchBaselineResponseBodyPatchBaseline;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D6850689-348D-59FC-AE13-BB0EDB7C4BE8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patchBaseline: 'PatchBaseline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patchBaseline: RegisterDefaultPatchBaselineResponseBodyPatchBaseline,
      requestId: 'string',
    };
  }

  validate() {
    if(this.patchBaseline && typeof (this.patchBaseline as any).validate === 'function') {
      (this.patchBaseline as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

