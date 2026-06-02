// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAnnotationMissionShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1168702
   */
  agentId?: string;
  /**
   * @example
   * 9137ab9c27044921860030adf8590ec4_p_outbound_public
   */
  agentKey?: string;
  /**
   * @example
   * 1
   */
  annotationMissionDataSourceType?: number;
  annotationMissionDebugDataSourceListShrink?: string;
  /**
   * @example
   * [1]
   */
  annotationMissionDebugDataSourceListJsonString?: string;
  annotationMissionName?: string;
  /**
   * @example
   * chatbot-cn-fqEnFZBYnb
   */
  chatbotId?: string;
  /**
   * @example
   * 1682956800000
   */
  conversationTimeEndFilter?: number;
  /**
   * @example
   * 1683302400000
   */
  conversationTimeStartFilter?: number;
  /**
   * @example
   * true
   */
  excludeOtherSession?: boolean;
  /**
   * @example
   * True
   */
  finished?: boolean;
  /**
   * @example
   * bf3b51a5-e88a-4636-98b0-1a34725a085b
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  samplingCount?: number;
  /**
   * @example
   * 1
   */
  samplingRate?: number;
  /**
   * @example
   * 1
   */
  samplingType?: number;
  /**
   * @example
   * 6236f21e-2e04-4dad-a47b-ae77e6a48325
   */
  scriptId?: string;
  sessionEndReasonFilterList?: number[];
  /**
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

