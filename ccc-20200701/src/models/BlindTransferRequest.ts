// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BlindTransferRequest extends $dara.Model {
  callPriority?: number;
  contactFlowVariables?: string;
  /**
   * @example
   * ACC-YUNBS-1.0.10-****
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * job-6538214103685****
   */
  jobId?: string;
  queuingOverflowThreshold?: number;
  queuingTimeoutSeconds?: number;
  routingType?: string;
  skillGroupId?: string;
  strategyName?: string;
  strategyParams?: string;
  tags?: string;
  /**
   * @example
   * 60
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * agent@ccc-test
   */
  transferee?: string;
  transfereeType?: string;
  /**
   * @example
   * 08314325****
   */
  transferor?: string;
  /**
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

