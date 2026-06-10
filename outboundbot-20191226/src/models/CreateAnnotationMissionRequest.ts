// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAnnotationMissionRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * > You can obtain this ID from the \\`DescribeInstance\\` operation.
   * 
   * @example
   * 1168702
   */
  agentId?: string;
  /**
   * @remarks
   * The workspace key.
   * 
   * > You can obtain this key from the \\`DescribeInstance\\` operation.
   * 
   * @example
   * 9137ab9c27044921860030adf8590ec4_p_outbound_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The data type of the annotation task.
   * 
   * - 1: Outbound call
   * 
   * @example
   * 1
   */
  annotationMissionDataSourceType?: number;
  /**
   * @remarks
   * The list of annotation data sources.
   * 
   * > This parameter has the same function as \\`AnnotationMissionDebugDataSourceListJsonString\\`. You can specify either of them.
   */
  annotationMissionDebugDataSourceList?: number[];
  /**
   * @remarks
   * The JSON string for the test data.
   * 
   * > This parameter has the same function as \\`AnnotationMissionDebugDataSourceList\\`. You can specify either of them. The format is \\`[1]\\`, \\`[2]\\`, or \\`[1,2]\\`. You can specify multiple filter conditions in the array. The enumeration values are as follows:
   * 
   * - 1: Outbound call task
   * 
   * - 2: Test task
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
   * 询问卖车-标注任务-20230506-112934
   */
  annotationMissionName?: string;
  /**
   * @remarks
   * The bot ID.
   * 
   * > You can obtain this ID from the \\`DescribeScript\\` operation.
   * 
   * @example
   * chatbot-cn-fqEnFZBYnb
   */
  chatbotId?: string;
  /**
   * @remarks
   * The end time for filtering calls.
   * 
   * @example
   * 1682956800000
   */
  conversationTimeEndFilter?: number;
  /**
   * @remarks
   * The start time for filtering calls.
   * 
   * @example
   * 1683302400000
   */
  conversationTimeStartFilter?: number;
  /**
   * @remarks
   * Specifies whether to exclude call records that have been annotated in other tasks. If you do not specify this parameter, the default value is \\`false\\`.
   * 
   * @example
   * true
   */
  excludeOtherSession?: boolean;
  /**
   * @remarks
   * Indicates whether the business process ended normally.
   * 
   * > This parameter takes effect only when \\`SessionEndReasonFilterList\\` is not specified.
   * >
   * > - \\`true\\`: The call record is normal.
   * >
   * > - \\`false\\`: The call did not end normally.
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
   * The custom sampling amount.
   * 
   * > This parameter is required and takes effect only when \\`SamplingType\\` is set to 3. Otherwise, the task fails to be created.
   * 
   * @example
   * 1
   */
  samplingCount?: number;
  /**
   * @remarks
   * The sampling percentage.
   * 
   * > This parameter is required and takes effect only when \\`SamplingType\\` is set to 2. Otherwise, the task fails to be created.
   * 
   * @example
   * 1
   */
  samplingRate?: number;
  /**
   * @remarks
   * The sampling type.
   * 
   * - 1: Full data
   * 
   * - 2: Percentage
   * 
   * - 3: Custom amount
   * 
   * @example
   * 1
   */
  samplingType?: number;
  /**
   * @remarks
   * The outbound scenario ID.
   * 
   * @example
   * 6236f21e-2e04-4dad-a47b-ae77e6a48325
   */
  scriptId?: string;
  /**
   * @remarks
   * The filter condition for call completion statuses.
   * 
   * > This parameter has the same function as \\`SessionEndReasonFilterListJsonString\\`. You can specify either of them.
   */
  sessionEndReasonFilterList?: number[];
  /**
   * @remarks
   * The filter condition for call completion statuses.
   * 
   * > This parameter has the same function as \\`SessionEndReasonFilterList\\`. You can specify either of them. The format is \\`[1]\\` or \\`[1,2]\\`. You can specify multiple filter conditions in the array. The enumeration values for the filter conditions are as follows.
   * 
   * **Enumeration values for filtering call records**
   * 
   * - 1: The call ended normally.
   * 
   * - 2: The bot hung up after a recognition failure.
   * 
   * - 3: The call was hung up due to a silence timeout.
   * 
   * - 4: The user hung up after a recognition failure.
   * 
   * - 5: The user hung up for no reason.
   * 
   * - 6: The call was transferred to a manual agent after an intent was hit.
   * 
   * - 7: The call was transferred to a manual agent after a recognition failure.
   * 
   * - 8: No interaction from the user.
   * 
   * - 9: The call was interrupted by a system exception.
   * 
   * - 10: The call was transferred to an IVR after an intent was hit.
   * 
   * - 11: The call was transferred to an IVR after a recognition failure.
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
      annotationMissionDebugDataSourceList: 'AnnotationMissionDebugDataSourceList',
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
      annotationMissionDebugDataSourceList: { 'type': 'array', 'itemType': 'number' },
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
    if(Array.isArray(this.annotationMissionDebugDataSourceList)) {
      $dara.Model.validateArray(this.annotationMissionDebugDataSourceList);
    }
    if(Array.isArray(this.sessionEndReasonFilterList)) {
      $dara.Model.validateArray(this.sessionEndReasonFilterList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

