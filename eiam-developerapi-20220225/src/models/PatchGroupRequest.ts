// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PatchGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * name001
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

