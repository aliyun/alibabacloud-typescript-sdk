// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillGroupRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  mediaType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * skillgroup
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      mediaType: 'MediaType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      mediaType: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

