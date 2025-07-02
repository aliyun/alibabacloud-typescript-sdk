// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncreaseNodeGroup extends $dara.Model {
  /**
   * @remarks
   * 描述。
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * 节点数量。
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  nodeCount?: number;
  /**
   * @remarks
   * 节点组ID。
   * 
   * This parameter is required.
   * 
   * @example
   * ng-869471354ecd****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * 付费时长。
   * 
   * @example
   * 12
   */
  paymentDuration?: number;
  /**
   * @remarks
   * 付费时长单位。
   * 
   * @example
   * Month
   */
  paymentDurationUnit?: string;
  /**
   * @remarks
   * 虚拟机交换机ID。
   * 
   * @example
   * vsw-hp35g7ya5ymw68mmg****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      nodeCount: 'NodeCount',
      nodeGroupId: 'NodeGroupId',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      nodeCount: 'number',
      nodeGroupId: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

