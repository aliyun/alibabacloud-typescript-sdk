// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryExecuteInfoRequestLevelTreeTreeData } from "./QueryExecuteInfoRequestLevelTreeTreeData";


export class QueryExecuteInfoRequestLevelTree extends $dara.Model {
  dataType?: string;
  treeData?: QueryExecuteInfoRequestLevelTreeTreeData[];
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      treeData: 'TreeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      treeData: { 'type': 'array', 'itemType': QueryExecuteInfoRequestLevelTreeTreeData },
    };
  }

  validate() {
    if(Array.isArray(this.treeData)) {
      $dara.Model.validateArray(this.treeData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

