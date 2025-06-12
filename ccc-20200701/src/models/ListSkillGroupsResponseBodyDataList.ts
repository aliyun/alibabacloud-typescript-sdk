// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillGroupsResponseBodyDataList extends $dara.Model {
  description?: string;
  displayName?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  mediaType?: string;
  /**
   * @example
   * 1
   */
  phoneNumberCount?: number;
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @example
   * skillgroup
   */
  skillGroupName?: string;
  /**
   * @example
   * 2
   */
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      phoneNumberCount: 'PhoneNumberCount',
      skillGroupId: 'SkillGroupId',
      skillGroupName: 'SkillGroupName',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      mediaType: 'string',
      phoneNumberCount: 'number',
      skillGroupId: 'string',
      skillGroupName: 'string',
      userCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

