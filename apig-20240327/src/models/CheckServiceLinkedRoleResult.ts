// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceLinkedRoleResult extends $dara.Model {
  existed?: boolean;
  static names(): { [key: string]: string } {
    return {
      existed: 'existed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existed: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

