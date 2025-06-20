// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryChangeInfoRequestLevelTreeTreeData } from "./QueryChangeInfoRequestLevelTreeTreeData";


export class QueryChangeInfoRequestLevelTree extends $dara.Model {
  dataType?: string;
  treeData?: QueryChangeInfoRequestLevelTreeTreeData[];
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      treeData: 'TreeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      treeData: { 'type': 'array', 'itemType': QueryChangeInfoRequestLevelTreeTreeData },
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

