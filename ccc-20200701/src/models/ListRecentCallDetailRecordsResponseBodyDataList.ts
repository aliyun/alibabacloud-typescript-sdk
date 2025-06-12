// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecentCallDetailRecordsResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * agent@ccc-test
   */
  agentIds?: string;
  /**
   * @example
   * 16
   */
  callDuration?: string;
  /**
   * @example
   * 1332315****
   */
  calledNumber?: string;
  /**
   * @example
   * 0533128****
   */
  callingNumber?: string;
  /**
   * @example
   * Success
   */
  contactDisposition?: string;
  /**
   * @example
   * job-7660472242845****
   */
  contactId?: string;
  /**
   * @example
   * Outbound
   */
  contactType?: string;
  /**
   * @example
   * 16
   */
  duration?: number;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupIds?: string;
  /**
   * @example
   * 1532448000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      callDuration: 'CallDuration',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      contactDisposition: 'ContactDisposition',
      contactId: 'ContactId',
      contactType: 'ContactType',
      duration: 'Duration',
      instanceId: 'InstanceId',
      skillGroupIds: 'SkillGroupIds',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: 'string',
      callDuration: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      contactDisposition: 'string',
      contactId: 'string',
      contactType: 'string',
      duration: 'number',
      instanceId: 'string',
      skillGroupIds: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

