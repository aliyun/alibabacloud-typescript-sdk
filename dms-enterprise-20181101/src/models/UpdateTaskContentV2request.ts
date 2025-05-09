// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskContentV2Request extends $dara.Model {
  /**
   * @example
   * { "dbId":12****, "sql":"select * from test_table",   "dbType":"lindorm_sql"  }
   */
  nodeContent?: string;
  /**
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

