// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchInstanceToTargetZoneRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @example
   * r-bp1zxszhcgatnx****-db-0
   */
  nodeId?: string;
  /**
   * @example
   * ReliabilityPriority
   */
  switchType?: string;
  /**
   * @remarks
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

