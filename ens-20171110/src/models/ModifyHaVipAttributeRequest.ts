// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHaVipAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the HAVIP that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * havip-52y28****
   */
  haVipId?: string;
  /**
   * @remarks
   * The name of the HAVIP. The name must be 1 to 128 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      haVipId: 'HaVipId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVipId: 'string',
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

