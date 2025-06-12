// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillGroupResponseBodyData extends $dara.Model {
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
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      name: 'Name',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      mediaType: 'string',
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

