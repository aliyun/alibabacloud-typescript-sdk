// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallDetailRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * Filter by agent ID.
   * 
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  /**
   * @remarks
   * Filter by called number.
   * 
   * @example
   * 1320523****
   */
  calledNumber?: string;
  /**
   * @remarks
   * Filter by calling number.
   * 
   * @example
   * 07353988****
   */
  callingNumber?: string;
  /**
   * @remarks
   * Filter by disposition type. Note: Disposition reasons such as voicemail, transfer to agent failed, queuing timeout, queuing overflow, and IVR abnormal are only displayed if the customer has configured a disposition reason node. If no such node is configured and there is no transfer-to-agent module in the IVR, the disposition reason defaults to "Abandoned in IVR".
   * 
   * @example
   * Success
   */
  contactDisposition?: string;
  /**
   * @remarks
   * Filter by hang-up reason list.
   * 
   * @example
   * ["Success","NoAnswer"]
   */
  contactDispositionList?: string;
  /**
   * @remarks
   * Query the record of a specific call by specifying a contactId. The contactId can be obtained from the softphone software development kit (SDK) during a call. If this parameter is provided, all other query parameters are automatically ignored.
   * 
   * @example
   * job-12515239414412****
   */
  contactId?: string;
  /**
   * @remarks
   * Filter by call type.
   * 
   * @example
   * Outbound
   */
  contactType?: string;
  /**
   * @remarks
   * Filter by contact type list.
   * 
   * @example
   * ["Internal","Inbound"]
   */
  contactTypeList?: string;
  /**
   * @remarks
   * Perform a fuzzy query based on the calling or called number. The value must be a JSON string containing only one field, phoneNumber, which can be the full number or a partial segment of either the calling or called number.
   * 
   * @example
   * {"phoneNumber":"0735"}
   */
  criteria?: string;
  /**
   * @remarks
   * Filter by a list of reasons for failed connection.
   * 
   * @example
   * ["NotConnected","NoAnswer"]
   */
  earlyMediaStateList?: string;
  /**
   * @remarks
   * End time of the historical data to retrieve. The default value is the current time, in UNIX timestamp format with millisecond precision.
   * 
   * @example
   * 1532707199000
   */
  endTime?: number;
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
   * Sorting field. Optional. Default value is startTime (call start time).
   * 
   * @example
   * startTime
   */
  orderByField?: string;
  /**
   * @remarks
   * Page number for paging, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Filter by satisfaction description list. The description content is Custom by the Customer.
   * 
   * @example
   * ["满意","一般"]
   */
  satisfactionDescriptionList?: string;
  /**
   * @remarks
   * Filter by satisfaction List. Separate multiple satisfaction Results with commas.
   * 
   * @example
   * ["1","3"]
   */
  satisfactionList?: string;
  /**
   * @remarks
   * Filter by satisfaction survey channel.
   * 
   * @example
   * IVR
   */
  satisfactionSurveyChannel?: string;
  /**
   * @remarks
   * Filter by skill group ID.
   * 
   * @example
   * skillgroup@ccc-test
   */
  skillGroupId?: string;
  /**
   * @remarks
   * Sorting order. This parameter is optional and defaults to descending.
   * 
   * @example
   * DESC
   */
  sortOrder?: string;
  /**
   * @remarks
   * Start time of the historical data to retrieve. The default value is 00:00:00 of the current day, in UNIX timestamp format with millisecond precision.
   * 
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

