// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAnycastEipAddressAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anycast EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * aeip-bp1ix34fralt4ykf3****
   */
  anycastId?: string;
  /**
   * @remarks
   * The description of the Anycast EIP.
   * 
   * The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * docdesc
   */
  description?: string;
  /**
   * @remarks
   * The name of the Anycast EIP.
   * 
   * The name must be 0 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * docname
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

