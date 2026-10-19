// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchInstanceToTargetZoneRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the instance. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the child node in a cluster instance.
   * 
   * > If you do not specify this parameter, all shards are switched to the destination zone.
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The switch mode. Valid values:
   * * **ReliabilityPriority** (default): Reliability priority. A primary/secondary switchover is performed only when data synchronization between the primary and secondary nodes has no latency. This ensures that no data is lost. However, in scenarios with a large write volume and continuous synchronization latency, the switchover may fail.
   * * **AvailablePriority**: Availability priority. A primary/secondary switchover is performed immediately regardless of the synchronization latency between the primary and secondary nodes. A small amount of data may be lost.
   * 
   * > Select a switch mode based on your business requirements for data and services.
   * 
   * @example
   * ReliabilityPriority
   */
  switchType?: string;
  /**
   * @remarks
   * The ID of the destination zone.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-j
   */
  targetZoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      switchType: 'SwitchType',
      targetZoneId: 'TargetZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'string',
      switchType: 'string',
      targetZoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

