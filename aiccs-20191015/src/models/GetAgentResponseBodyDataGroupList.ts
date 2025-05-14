// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentResponseBodyDataGroupList extends $dara.Model {
  /**
   * @example
   * 1
   */
  channelType?: number;
  description?: string;
  displayName?: string;
  name?: string;
  /**
   * @example
   * 123456
   */
  skillGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'number',
      description: 'string',
      displayName: 'string',
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

