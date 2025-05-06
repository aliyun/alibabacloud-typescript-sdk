// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskRequestFieldsEnumValues extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  desc?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  enumValue?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      enumValue: 'enumValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      enumValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

