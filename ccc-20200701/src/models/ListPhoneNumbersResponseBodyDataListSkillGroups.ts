// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPhoneNumbersResponseBodyDataListSkillGroups extends $dara.Model {
  displayName?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * skillgroup
   */
  name?: string;
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      name: 'Name',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      instanceId: 'string',
      name: 'string',
      skillGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

