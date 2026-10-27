// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAnnotationMissionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * > You can obtain this value from the DescribeInstance operation.
   * 
   * @example
   * 1168702
   */
  agentId?: string;
  /**
   * @remarks
   * The business space key.
   * 
   * > You can obtain this value from the DescribeInstance operation.
   * 
   * @example
   * 9137ab9c27044921860030adf8590ec4_p_outbound_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The data type of the annotation task.
   * 
   * - 1: outbound call
   * 
   * @example
   * 1
   */
  annotationMissionDataSourceType?: number;
  /**
   * @remarks
   * The annotation data source list.
   * 
   * > This parameter has the same function as AnnotationMissionDebugDataSourceListJsonString. Specify either one of them.
   */
  annotationMissionDebugDataSourceListShrink?: string;
  /**
   * @remarks
   * The debug data in JSON format.
   * > This parameter has the same function as AnnotationMissionDebugDataSourceList. Specify either one of them. The format is [1], [2], or [1,2]. You can specify multiple filter conditions in the array. The enum values for the filter conditions are as follows.
   * 
   * - 1: outbound call task
   * - 2: test task
   * 
   * @example
   * [1]
   */
  annotationMissionDebugDataSourceListJsonString?: string;
  /**
   * @remarks
   * The name of the annotation task.
   * 
   * @example
   * CarSaleInquiry-AnnotationTask-20230506-112934
   */
  annotationMissionName?: string;
  /**
   * @remarks
   * The robot ID.
   * 
   * > You can obtain this value from the DescribeScript operation.
   * 
   * @example
   * chatbot-cn-fqEnFZBYnb
   */
  chatbotId?: string;
  /**
   * @remarks
   * The end time for the call time filter.
   * 
   * @example
   * 1682956800000
   */
  conversationTimeEndFilter?: number;
  /**
   * @remarks
   * The start time for the call time filter.
   * 
   * @example
   * 1683302400000
   */
  conversationTimeStartFilter?: number;
  /**
   * @remarks
   * Specifies whether to exclude call records that have been annotated by other tasks. Default value: false.
   * 
   * @example
   * true
   */
  excludeOtherSession?: boolean;
  /**
   * @remarks
   * Specifies whether the business ended normally.
   * 
   * > This parameter takes effect only when SessionEndReasonFilterList is not specified.
   * > - true: normal call records
   * > - false: abnormal call records
   * 
   * @example
   * True
   */
  finished?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * bf3b51a5-e88a-4636-98b0-1a34725a085b
   */
  instanceId?: string;
  /**
   * @remarks
   * The custom sampling quantity.
   * > This parameter takes effect only when SamplingType is set to 3. This parameter is required in that case. Otherwise, the creation fails.
   * 
   * @example
   * 1
   */
  samplingCount?: number;
  /**
   * @remarks
   * The sampling ratio.
   * 
   * > This parameter takes effect only when SamplingType is set to 2. This parameter is required in that case. Otherwise, the creation fails.
   * 
   * @example
   * 1
   */
  samplingRate?: number;
  /**
   * @remarks
   * The sampling type.
   * 
   * - 1: full
   * - 2: percentage
   * - 3: custom quantity
   * 
   * @example
   * 1
   */
  samplingType?: number;
  /**
   * @remarks
   * The outbound call scenario ID.
   * 
   * @example
   * 6236f21e-2e04-4dad-a47b-ae77e6a48325
   */
  scriptId?: string;
  /**
   * @remarks
   * The call result status filter conditions.
   * 
   * > This parameter has the same function as SessionEndReasonFilterListJsonString. Specify either one of them.
   */
  sessionEndReasonFilterList?: number[];
  /**
   * @remarks
   * The call result status filter conditions.
   * 
   * > This parameter has the same function as SessionEndReasonFilterList. Specify either one of them. The format is [1], [1,2], etc. You can specify multiple filter conditions in the array. The enum values for the filter conditions are as follows.
   * 
   * **Call record filter enum values**
   * - 1: normal completion
   * - 2: robot hung up after recognition rejection
   * - 3: hung up due to silence timeout
   * - 4: user hung up after recognition rejection
   * - 5: user hung up without reason
   * - 6: transferred to agent by intent match
   * - 7: transferred to agent by recognition rejection
   * - 8: no interaction on user side
   * - 9: system exception interruption
   * - 10: transferred to IVR by intent match
   * - 11: transferred to IVR by recognition rejection
   * 
   * @example
   * [1]
   */
  sessionEndReasonFilterListJsonString?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentKey: 'AgentKey',
      annotationMissionDataSourceType: 'AnnotationMissionDataSourceType',
      annotationMissionDebugDataSourceListShrink: 'AnnotationMissionDebugDataSourceList',
      annotationMissionDebugDataSourceListJsonString: 'AnnotationMissionDebugDataSourceListJsonString',
      annotationMissionName: 'AnnotationMissionName',
      chatbotId: 'ChatbotId',
      conversationTimeEndFilter: 'ConversationTimeEndFilter',
      conversationTimeStartFilter: 'ConversationTimeStartFilter',
      excludeOtherSession: 'ExcludeOtherSession',
      finished: 'Finished',
      instanceId: 'InstanceId',
      samplingCount: 'SamplingCount',
      samplingRate: 'SamplingRate',
      samplingType: 'SamplingType',
      scriptId: 'ScriptId',
      sessionEndReasonFilterList: 'SessionEndReasonFilterList',
      sessionEndReasonFilterListJsonString: 'SessionEndReasonFilterListJsonString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentKey: 'string',
      annotationMissionDataSourceType: 'number',
      annotationMissionDebugDataSourceListShrink: 'string',
      annotationMissionDebugDataSourceListJsonString: 'string',
      annotationMissionName: 'string',
      chatbotId: 'string',
      conversationTimeEndFilter: 'number',
      conversationTimeStartFilter: 'number',
      excludeOtherSession: 'boolean',
      finished: 'boolean',
      instanceId: 'string',
      samplingCount: 'number',
      samplingRate: 'number',
      samplingType: 'number',
      scriptId: 'string',
      sessionEndReasonFilterList: { 'type': 'array', 'itemType': 'number' },
      sessionEndReasonFilterListJsonString: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sessionEndReasonFilterList)) {
      $dara.Model.validateArray(this.sessionEndReasonFilterList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

