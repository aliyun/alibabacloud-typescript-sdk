// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallDetailRecordsRequest extends $dara.Model {
  /**
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  /**
   * @example
   * 1320523****
   */
  calledNumber?: string;
  /**
   * @example
   * 07353988****
   */
  callingNumber?: string;
  /**
   * @example
   * Success
   */
  contactDisposition?: string;
  /**
   * @example
   * ["Success","NoAnswer"]
   */
  contactDispositionList?: string;
  /**
   * @example
   * job-12515239414412****
   */
  contactId?: string;
  /**
   * @example
   * Outbound
   */
  contactType?: string;
  /**
   * @example
   * ["Internal","Inbound"]
   */
  contactTypeList?: string;
  /**
   * @example
   * {"phoneNumber":"0735"}
   */
  criteria?: string;
  /**
   * @example
   * ["NotConnected","NoAnswer"]
   */
  earlyMediaStateList?: string;
  /**
   * @example
   * 1532707199000
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * startTime
   */
  orderByField?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  satisfactionDescriptionList?: string;
  /**
   * @example
   * ["1","3"]
   */
  satisfactionList?: string;
  /**
   * @example
   * IVR
   */
  satisfactionSurveyChannel?: string;
  /**
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @example
   * DESC
   */
  sortOrder?: string;
  /**
   * @example
   * 1532448000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      contactDisposition: 'ContactDisposition',
      contactDispositionList: 'ContactDispositionList',
      contactId: 'ContactId',
      contactType: 'ContactType',
      contactTypeList: 'ContactTypeList',
      criteria: 'Criteria',
      earlyMediaStateList: 'EarlyMediaStateList',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      orderByField: 'OrderByField',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      satisfactionDescriptionList: 'SatisfactionDescriptionList',
      satisfactionList: 'SatisfactionList',
      satisfactionSurveyChannel: 'SatisfactionSurveyChannel',
      skillGroupId: 'SkillGroupId',
      sortOrder: 'SortOrder',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      contactDisposition: 'string',
      contactDispositionList: 'string',
      contactId: 'string',
      contactType: 'string',
      contactTypeList: 'string',
      criteria: 'string',
      earlyMediaStateList: 'string',
      endTime: 'number',
      instanceId: 'string',
      orderByField: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      satisfactionDescriptionList: 'string',
      satisfactionList: 'string',
      satisfactionSurveyChannel: 'string',
      skillGroupId: 'string',
      sortOrder: 'string',
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

