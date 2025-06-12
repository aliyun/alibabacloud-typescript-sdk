// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitiateAttendedTransferRequest extends $dara.Model {
  callPriority?: number;
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
   * agent2@ccc-test
   */
  transferee?: string;
  transfereeType?: string;
  transferor?: string;
  /**
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

