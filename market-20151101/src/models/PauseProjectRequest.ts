// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PauseProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Alibaba Cloud Marketplace order.
   * 
   * This parameter is required.
   * 
   * @example
   * 4****89
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the current operation flow node.
   * 
   * This parameter is required.
   * 
   * @example
   * 1922
   */
  nodeId?: number;
  /**
   * @remarks
   * The reason for the remark.
   * 
   * @example
   * 等待与仓库确认库存，目前库存显示异常。
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'number',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

