// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResumeProjectRequest extends $dara.Model {
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
   * The ID of the operation flow node.
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
   * The warehouse inventory has been replenished. Delivery can be arranged.
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

