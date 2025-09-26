// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ToolListItem } from "./ToolListItem";


export class ListToolsOutput extends $dara.Model {
  data?: ToolListItem[];
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ToolListItem },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

