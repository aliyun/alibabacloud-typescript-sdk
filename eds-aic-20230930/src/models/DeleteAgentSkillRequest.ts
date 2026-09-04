// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgentSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The list of skill IDs.
   */
  skillIds?: string[];
  static names(): { [key: string]: string } {
    return {
      skillIds: 'SkillIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skillIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.skillIds)) {
      $dara.Model.validateArray(this.skillIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

