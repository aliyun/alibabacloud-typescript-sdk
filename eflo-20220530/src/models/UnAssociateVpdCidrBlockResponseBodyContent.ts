// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnAssociateVpdCidrBlockResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the Lingjun CIDR block.
   * 
   * @example
   * vpd-ze3na0wf
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

