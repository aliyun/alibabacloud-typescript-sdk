// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillsRequest extends $dara.Model {
  groupIds?: string[];
  skillIds?: string[];
  /**
   * @example
   * xxx
   */
  sourceIdOfAssistantId?: string;
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      skillIds: 'SkillIds',
      sourceIdOfAssistantId: 'SourceIdOfAssistantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: { 'type': 'array', 'itemType': 'string' },
      skillIds: { 'type': 'array', 'itemType': 'string' },
      sourceIdOfAssistantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    if(Array.isArray(this.skillIds)) {
      $dara.Model.validateArray(this.skillIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

