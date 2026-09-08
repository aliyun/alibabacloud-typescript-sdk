// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitiateAttendedTransferRequest extends $dara.Model {
  /**
   * @remarks
   * The queuing priority when transferring to a skill group queue. Valid values range from 0 to 9, where 0 is the highest priority and 9 is the lowest.
   * 
   * @example
   * 5
   */
  callPriority?: number;
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
   * The queuing timeout period in seconds when the transfer target is a skill group queue.
   * 
   * @example
   * 10
   */
  queuingTimeoutSeconds?: number;
  /**
   * @remarks
   * The call assignment type. Valid values are Automatic or Manual. If this parameter is empty, the default value is Automatic, which is also the current system\\"s default behavior. When Manual is selected, you must invoke APIs such as ClaimCall to assign the call to a specific agent.
   * 
   * @example
   * Automatic
   */
  routingType?: string;
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
   * The policy parameters for agent assignment when transferring to a skill group queue.
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
   * Ingest endpoint data, primarily used for extension requirements. Regular users do not need to concern themselves with this.
   * 
   * @example
   * a=b
   */
  tags?: string;
  /**
   * @remarks
   * Timeout duration for the consultation transfer, in seconds. If the transferee does not answer within the specified time, the call is disconnected. This field is optional. Default value is 30 seconds.
   * 
   * @example
   * 60
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * The transferee, which can be an agent ID or a skill group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * agent2@ccc-test
   */
  transferee?: string;
  /**
   * @remarks
   * The destination type for the transfer. Valid values are AGENT, SKILL_GROUP, and EXTERNAL. If this parameter is not provided, the system determines the destination type based on the format of the target number. If inaccurate detection occurs, explicitly specify this parameter.
   * 
   * @example
   * SKILL_GROUP
   */
  transfereeType?: string;
  /**
   * @remarks
   * The party initiating the transfer. When transferring to an external number, this parameter specifies the caller number. This parameter is invalid when transferring to an internal agent or skill group; in such cases, the initiator is determined by the UserId parameter.
   * 
   * @example
   * 无
   */
  transferor?: string;
  /**
   * @remarks
   * The agent ID initiating the consultation transfer.
   * 
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callPriority: 'CallPriority',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      queuingOverflowThreshold: 'QueuingOverflowThreshold',
      queuingTimeoutSeconds: 'QueuingTimeoutSeconds',
      routingType: 'RoutingType',
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
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      queuingOverflowThreshold: 'number',
      queuingTimeoutSeconds: 'number',
      routingType: 'string',
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

