// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DepartmentSaveShrinkRequest extends $dara.Model {
  departListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      departListShrink: 'depart_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

