// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPhoneNumbersResponseBodyDataListSkillGroups } from "./ListPhoneNumbersResponseBodyDataListSkillGroups";


export class ListPhoneNumbersResponseBodyDataList extends $dara.Model {
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
  contactFlowName?: string;
  /**
   * @example
   * 1617958538000
   */
  createTime?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 08330011****
   */
  number?: string;
  /**
   * @example
   * alicom
   */
  provider?: string;
  province?: string;
  skillGroups?: ListPhoneNumbersResponseBodyDataListSkillGroups[];
  /**
   * @example
   * M1
   */
  tags?: string;
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
      contactFlowName: 'ContactFlowName',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      number: 'Number',
      provider: 'Provider',
      province: 'Province',
      skillGroups: 'SkillGroups',
      tags: 'Tags',
      usage: 'Usage',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      city: 'string',
      contactFlowId: 'string',
      contactFlowName: 'string',
      createTime: 'string',
      instanceId: 'string',
      number: 'string',
      provider: 'string',
      province: 'string',
      skillGroups: { 'type': 'array', 'itemType': ListPhoneNumbersResponseBodyDataListSkillGroups },
      tags: 'string',
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

