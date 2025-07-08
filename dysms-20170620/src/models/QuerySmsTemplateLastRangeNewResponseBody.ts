// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsTemplateLastRangeNewResponseBodyList } from "./QuerySmsTemplateLastRangeNewResponseBodyList";


export class QuerySmsTemplateLastRangeNewResponseBody extends $dara.Model {
  list?: QuerySmsTemplateLastRangeNewResponseBodyList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: QuerySmsTemplateLastRangeNewResponseBodyList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.list && typeof (this.list as any).validate === 'function') {
      (this.list as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

