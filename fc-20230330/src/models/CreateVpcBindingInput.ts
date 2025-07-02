// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcBindingInput extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-8vb8x8dggvr0axxxxxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

