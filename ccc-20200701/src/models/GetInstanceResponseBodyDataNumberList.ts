// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstanceResponseBodyDataNumberListSkillGroups } from "./GetInstanceResponseBodyDataNumberListSkillGroups";


export class GetInstanceResponseBodyDataNumberList extends $dara.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  city?: string;
  /**
   * @example
   * 2ec7a58f-3243-4815-bb21-97b480b95f5e
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
  skillGroups?: GetInstanceResponseBodyDataNumberListSkillGroups[];
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
      skillGroups: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataNumberListSkillGroups },
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

