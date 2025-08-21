// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudAppInfoResponseBody extends $dara.Model {
  /**
   * @example
   * patch-03fa76e8e13a49b6a966b063d9d309b4
   */
  patchId?: string;
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patchId: 'PatchId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patchId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

