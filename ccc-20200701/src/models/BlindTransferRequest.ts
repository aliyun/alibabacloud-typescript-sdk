// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BlindTransferRequest extends $dara.Model {
  /**
   * @remarks
   * The queue priority when transferring to a skill group. Valid values are 0–9, where 0 is the highest priority and 9 is the lowest.
   * 
   * @example
   * 5
   */
  callPriority?: number;
  /**
   * @remarks
   * Variables passed to the contact flow. This field is optional. The variables configured here can be retrieved and used in the IVR flow. The format is a JSON string representing a set of key-value pairs.
   * 
   * @example
   * {"name":"王先生","time":"19点20分","address":"某某中心"}
   */
  contactFlowVariables?: string;
  /**
   * @remarks
   * Device ID. This parameter is meaningless and can be filled with any value.
   * 
   * @example
   * ACC-YUNBS-1.0.10-****
   */
  deviceId?: string;
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
   * The call ID.
   * 
   * This parameter is required.
   * 
   * @example
   * job-6538214103685****
   */
  jobId?: string;
  /**
   * @remarks
   * The queuing overflow threshold when the transfer target is a skill group queue. The default value is 0, which means no overflow occurs.
   * 
   * @example
   * 0
   */
  queuingOverflowThreshold?: number;
  /**
   * @remarks
   * The queuing timeout duration in seconds when the transfer target is a skill group queue.
   * 
   * @example
   * 10
   */
  queuingTimeoutSeconds?: number;
  /**
   * @remarks
   * The call routing type. Valid values are Automatic or Manual. If this parameter is empty, the system defaults to Automatic routing, which is also the current default behavior of the system. When Manual routing is selected, you must invoke APIs such as ClaimCall to assign the call to a specific agent.
   * 
   * @example
   * Manual
   */
  routingType?: string;
  /**
   * @remarks
   * Skill group ID.
   * 
   * @example
   * ee914df4-82bf-4919-bcb3-9cb8aa437f35
   */
  skillGroupId?: string;
  /**
   * @remarks
   * The policy name for agent assignment when transferring to a skill group queue.
   * 
   * @example
   * MOST_IDLE，MOST_SKILLED，MOST_ACQUAINTED，CUSTOMIZED等
   */
  strategyName?: string;
  /**
   * @remarks
   * The parameters for the agent assignment policy when transferring to a skill group queue.
   * 
   * @example
   * 当分配策略为CUSTOMIZED时，本参数的内容为如下格式：
   *  {
   *   "functionId": "512fed64-e379-400f-a1a5-14d5730xxxxx",
   *   "functionName": "routing-strategy-test-2"
   * }
   */
  strategyParams?: string;
  /**
   * @remarks
   * Ingest endpoint data, primarily used for extension purposes. Regular users do not need to concern themselves with this field.
   * 
   * @example
   * 5295578135#WAEtqY5U&Biz_Package_Rexian_Zhuanjieanquanyungaojie_2527
   */
  tags?: string;
  /**
   * @remarks
   * Timeout duration for the direct transfer, in seconds. If the transferee does not answer within the specified time, the call is disconnected. This field is optional and defaults to 30 seconds.
   * 
   * @example
   * 60
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * The transfer recipient, which can be either an agent ID or a skill group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * agent@ccc-test
   */
  transferee?: string;
  /**
   * @remarks
   * Destination type for the transfer. Valid values are AGENT, SKILL_GROUP, IVR, and EXTERNAL_NUMBER. If this parameter is not specified, the system determines the destination type based on the format of the target number. If the automatic detection is inaccurate, you must explicitly specify this parameter.
   * 
   * @example
   * SKILL_GROUP
   */
  transfereeType?: string;
  /**
   * @remarks
   * The transfer initiator. When the scenario involves directly transferring to an external number, the number specified by this parameter is used as the caller. This parameter is invalid when transferring to an internal agent or skill group; in such cases, the initiator is specified by the UserId parameter.
   * 
   * @example
   * 08314325****
   */
  transferor?: string;
  /**
   * @remarks
   * The agent ID that initiates a direct transfer.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callPriority: 'CallPriority',
      contactFlowVariables: 'ContactFlowVariables',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      queuingOverflowThreshold: 'QueuingOverflowThreshold',
      queuingTimeoutSeconds: 'QueuingTimeoutSeconds',
      routingType: 'RoutingType',
      skillGroupId: 'SkillGroupId',
      strategyName: 'StrategyName',
      strategyParams: 'StrategyParams',
      tags: 'Tags',
      timeoutSeconds: 'TimeoutSeconds',
      transferee: 'Transferee',
      transfereeType: 'TransfereeType',
      transferor: 'Transferor',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callPriority: 'number',
      contactFlowVariables: 'string',
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      queuingOverflowThreshold: 'number',
      queuingTimeoutSeconds: 'number',
      routingType: 'string',
      skillGroupId: 'string',
      strategyName: 'string',
      strategyParams: 'string',
      tags: 'string',
      timeoutSeconds: 'number',
      transferee: 'string',
      transfereeType: 'string',
      transferor: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

