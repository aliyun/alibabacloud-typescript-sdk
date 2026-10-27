// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContactsShrinkRequest extends $dara.Model {
  contactIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      contactIdsShrink: 'contactIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

