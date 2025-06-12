// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancesOfUserResponseBodyDataListNumberListSkillGroups } from "./ListInstancesOfUserResponseBodyDataListNumberListSkillGroups";


export class ListInstancesOfUserResponseBodyDataListNumberList extends $dara.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  city?: string;
  /**
   * @example
   * a3fb6c62-9b49-4942-ae5b-cf2abd4123ek
   */
  contactFlowId?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 0830011****
   */
  number?: string;
  province?: string;
  skillGroups?: ListInstancesOfUserResponseBodyDataListNumberListSkillGroups[];
  /**
   * @example
   * Bidirection
   */
  usage?: string;
  /**
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      city: 'City',
      contactFlowId: 'ContactFlowId',
      instanceId: 'InstanceId',
      number: 'Number',
      province: 'Province',
      skillGroups: 'SkillGroups',
      usage: 'Usage',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      city: 'string',
      contactFlowId: 'string',
      instanceId: 'string',
      number: 'string',
      province: 'string',
      skillGroups: { 'type': 'array', 'itemType': ListInstancesOfUserResponseBodyDataListNumberListSkillGroups },
      usage: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.skillGroups)) {
      $dara.Model.validateArray(this.skillGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

