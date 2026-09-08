// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemovePhoneNumberFromSkillGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The phone number to detach.
   * 
   * This parameter is required.
   * 
   * @example
   * 0101234****
   */
  number?: string;
  /**
   * @remarks
   * List of skill group IDs to detach. Ensure that each skill group is already associated with the phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * ["skillgroup1@ccc-test","skillgroup2@ccc-test"]
   */
  skillGroupIdList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      number: 'Number',
      skillGroupIdList: 'SkillGroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      number: 'string',
      skillGroupIdList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

