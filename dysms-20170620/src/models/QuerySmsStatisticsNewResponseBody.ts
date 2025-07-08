// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsStatisticsNewResponseBodyList } from "./QuerySmsStatisticsNewResponseBodyList";


export class QuerySmsStatisticsNewResponseBody extends $dara.Model {
  list?: QuerySmsStatisticsNewResponseBodyList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QuerySmsStatisticsNewResponseBodyList },
      requestId: 'string',
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

