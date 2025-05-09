// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdatePatchBaselineResponseBodyPatchBaseline } from "./UpdatePatchBaselineResponseBodyPatchBaseline";


export class UpdatePatchBaselineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the patch baseline.
   */
  patchBaseline?: UpdatePatchBaselineResponseBodyPatchBaseline;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1457F46C-7AAE-59FA-BD12-0BDB3751E6F8
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
      patchBaseline: UpdatePatchBaselineResponseBodyPatchBaseline,
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

