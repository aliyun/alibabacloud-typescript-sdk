// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSwimmingLaneRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the lane group.
   * 
   * This parameter is required.
   * 
   * @example
   * 79
   */
  groupId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

