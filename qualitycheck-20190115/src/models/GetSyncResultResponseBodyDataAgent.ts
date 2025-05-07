// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSyncResultResponseBodyDataAgent extends $dara.Model {
  /**
   * @example
   * 12221
   */
  id?: string;
  name?: string;
  skillGroup?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      skillGroup: 'SkillGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      skillGroup: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

