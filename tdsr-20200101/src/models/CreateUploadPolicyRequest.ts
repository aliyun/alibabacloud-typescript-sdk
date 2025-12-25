// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUploadPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {}
   */
  option?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * scene
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      option: 'Option',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      option: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

