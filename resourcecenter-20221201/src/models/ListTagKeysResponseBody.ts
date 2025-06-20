// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAUDnubHKJbVTCdlIGYUPtsu3EoN3bfdgjDA****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 44C8A952-D6B0-5BC8-82D5-93BA02E26F2E
   */
  requestId?: string;
  /**
   * @remarks
   * The tag keys.
   */
  tagKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagKeys)) {
      $dara.Model.validateArray(this.tagKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

