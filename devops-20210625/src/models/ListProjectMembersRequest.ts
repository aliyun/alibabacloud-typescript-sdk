// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectMembersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Space
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      targetType: 'targetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

