// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCallDetailRecordResponseBodyDataAgentEventsEventSequence } from "./GetCallDetailRecordResponseBodyDataAgentEventsEventSequence";


export class GetCallDetailRecordResponseBodyDataAgentEvents extends $dara.Model {
  /**
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  agentName?: string;
  eventSequence?: GetCallDetailRecordResponseBodyDataAgentEventsEventSequence[];
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      eventSequence: 'EventSequence',
      skillGroupId: 'SkillGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      eventSequence: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataAgentEventsEventSequence },
      skillGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventSequence)) {
      $dara.Model.validateArray(this.eventSequence);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

