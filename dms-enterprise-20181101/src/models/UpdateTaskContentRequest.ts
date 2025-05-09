// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskContentRequest extends $dara.Model {
  /**
   * @remarks
   * The node configurations after modification.
   * 
   * @example
   * { "dbId":12****, "sql":"select * from test_table",   "dbType":"lindorm_sql"  }
   */
  nodeContent?: string;
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
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see the ["View information about the current tenant"](https://help.aliyun.com/document_detail/181330.html) section of the Manage DMS tenants topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      nodeContent: 'NodeContent',
      nodeId: 'NodeId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeContent: 'string',
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

