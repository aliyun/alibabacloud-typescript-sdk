// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSkillGroupRequest extends $dara.Model {
  /**
   * @example
   * 123456
   */
  outerGroupId?: string;
  /**
   * @example
   * 2
   */
  outerGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      outerGroupId: 'OuterGroupId',
      outerGroupType: 'OuterGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerGroupId: 'string',
      outerGroupType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

