// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySkillGroupsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2
   */
  channelType?: number;
  description?: string;
  displayName?: string;
  /**
   * @example
   * 123456
   */
  skillGroupId?: number;
  skillGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      description: 'Description',
      displayName: 'DisplayName',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
      description: 'string',
      displayName: 'string',
      skillGroupId: 'number',
      skillGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

