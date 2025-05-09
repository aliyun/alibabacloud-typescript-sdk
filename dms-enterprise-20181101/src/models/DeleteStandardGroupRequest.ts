// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStandardGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 242***
   */
  groupId?: number;
  /**
   * @example
   * 23****
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

