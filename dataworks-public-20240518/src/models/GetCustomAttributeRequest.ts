// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The custom attribute ID. The ID must match the regular expression `^custom-attribute:[A-Za-z][A-Za-z0-9_]{0,98}$`. The part after \\"custom-attribute:\\" must be less than 100 characters long.
   * 
   * This parameter is required.
   * 
   * @example
   * custom-attribute:biz_owner
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

