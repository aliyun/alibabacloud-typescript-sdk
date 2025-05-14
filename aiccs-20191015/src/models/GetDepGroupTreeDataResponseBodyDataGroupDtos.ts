// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDepGroupTreeDataResponseBodyDataGroupDTOS extends $dara.Model {
  name?: string;
  /**
   * @example
   * 555555
   */
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      skillGroupId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

