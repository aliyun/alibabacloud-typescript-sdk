// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPublishedAgentResponseBodyDataList } from "./ListPublishedAgentResponseBodyDataList";


export class ListPublishedAgentResponseBodyData extends $dara.Model {
  list?: ListPublishedAgentResponseBodyDataList[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNo: 'pageNo',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListPublishedAgentResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

