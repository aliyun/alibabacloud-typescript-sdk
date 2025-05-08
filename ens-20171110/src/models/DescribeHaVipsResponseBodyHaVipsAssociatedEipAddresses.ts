// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHaVipsResponseBodyHaVipsAssociatedEipAddresses extends $dara.Model {
  /**
   * @remarks
   * The EIP.
   * 
   * @example
   * 47.XX.XX.40
   */
  eip?: string;
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * @example
   * eip-5p1wz****
   */
  eipId?: string;
  static names(): { [key: string]: string } {
    return {
      eip: 'Eip',
      eipId: 'EipId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eip: 'string',
      eipId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

