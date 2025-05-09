// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePatchBaselineResponseBodyPatchBaseline } from "./CreatePatchBaselineResponseBodyPatchBaseline";


export class CreatePatchBaselineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the patch baseline.
   */
  patchBaseline?: CreatePatchBaselineResponseBodyPatchBaseline;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A5173FF6-D10D-5E8C-8F71-943C2A3E25C0
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
      patchBaseline: CreatePatchBaselineResponseBodyPatchBaseline,
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

