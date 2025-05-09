// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced configuration for the node. The value of this parameter must be a JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * { "rerun":{ "rerunEnable":true,  "rerunCount":1,   "rerunInterval":10 } }
   */
  nodeConfig?: string;
  /**
   * @remarks
   * The ID of the task node. You can call the [GetTaskInstanceRelation](https://help.aliyun.com/document_detail/424711.html) operation to query the node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 43****
   */
  nodeId?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      nodeConfig: 'NodeConfig',
      nodeId: 'NodeId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeConfig: 'string',
      nodeId: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

