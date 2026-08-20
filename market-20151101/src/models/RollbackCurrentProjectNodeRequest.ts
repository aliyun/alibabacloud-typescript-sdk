// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackCurrentProjectNodeRequest extends $dara.Model {
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
   * The ID of the current process node.
   * 
   * This parameter is required.
   * 
   * @example
   * 1925
   */
  nodeId?: number;
  /**
   * @remarks
   * The remarks for the rejection reason.
   * 
   * @example
   * 尊敬的顾客您好，您提交的收货地址存在多个匹配结果，请您核对后再重新提交。
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

