// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDigitalTemplateLastRangeNewResponseBodyList } from "./QueryDigitalTemplateLastRangeNewResponseBodyList";
import { QueryDigitalTemplateLastRangeNewResponseBodyTags } from "./QueryDigitalTemplateLastRangeNewResponseBodyTags";


export class QueryDigitalTemplateLastRangeNewResponseBody extends $dara.Model {
  list?: QueryDigitalTemplateLastRangeNewResponseBodyList;
  requestId?: string;
  tags?: QueryDigitalTemplateLastRangeNewResponseBodyTags;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: QueryDigitalTemplateLastRangeNewResponseBodyList,
      requestId: 'string',
      tags: QueryDigitalTemplateLastRangeNewResponseBodyTags,
    };
  }

  validate() {
    if(this.list && typeof (this.list as any).validate === 'function') {
      (this.list as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

