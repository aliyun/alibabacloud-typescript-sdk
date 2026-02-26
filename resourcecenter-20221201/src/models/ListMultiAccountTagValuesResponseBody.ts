// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMultiAccountTagValuesResponseBody extends $dara.Model {
  nextToken?: string;
  requestId?: string;
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagValues)) {
      $dara.Model.validateArray(this.tagValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

