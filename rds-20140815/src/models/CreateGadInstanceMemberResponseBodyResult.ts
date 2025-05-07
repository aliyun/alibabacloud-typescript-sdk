// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGadInstanceMemberResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The number of unit nodes that are created by calling this operation.
   * 
   * @example
   * 2
   */
  createCount?: string;
  /**
   * @remarks
   * The ID of the global active database cluster.
   * 
   * @example
   * gad-rm-bp1npi2j8********
   */
  gadInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      createCount: 'CreateCount',
      gadInstanceName: 'GadInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCount: 'string',
      gadInstanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

