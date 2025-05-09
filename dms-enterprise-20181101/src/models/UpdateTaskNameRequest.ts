// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskNameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the node. You can call the [GetTaskInstanceRelation](https://help.aliyun.com/document_detail/424711.html) operation to query the node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 449***
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the node. You can call the [GetTaskInstanceRelation](https://help.aliyun.com/document_detail/424711.html) operation to query the node name.
   * 
   * This parameter is required.
   * 
   * @example
   * Spark-test
   */
  nodeName?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      nodeName: 'string',
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

