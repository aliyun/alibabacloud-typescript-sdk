// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SelectTagResourceNewResponseBodyTags } from "./SelectTagResourceNewResponseBodyTags";


export class SelectTagResourceNewResponseBody extends $dara.Model {
  nextToken?: string;
  requestId?: string;
  tags?: SelectTagResourceNewResponseBodyTags;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tags: SelectTagResourceNewResponseBodyTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

