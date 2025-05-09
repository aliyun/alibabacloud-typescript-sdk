// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPatchBaselineResponseBodyPatchBaseline } from "./GetPatchBaselineResponseBodyPatchBaseline";


export class GetPatchBaselineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the patch baseline.
   */
  patchBaseline?: GetPatchBaselineResponseBodyPatchBaseline;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2C630E64-7273-57AC-A598-1B2B8B35CEA5
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
      patchBaseline: GetPatchBaselineResponseBodyPatchBaseline,
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

