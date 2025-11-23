// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskContentV2Request extends $dara.Model {
  /**
   * @remarks
   * The node configurations after modification.
   * 
   * >  We recommend that you change the SQL type from SELECT to INSERT/CREATE.
   * 
   * @example
   * { "dbId":12****, "sql":"select * from test_table",   "dbType":"lindorm_sql"  }
   */
  nodeContent?: string;
  /**
   * @remarks
   * The ID of the task node. You can call the [GetTaskInstanceRelation](https://help.aliyun.com/document_detail/424711.html) operation to query the node ID.
   * 
   * @example
   * 449***
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeContent: 'NodeContent',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeContent: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

