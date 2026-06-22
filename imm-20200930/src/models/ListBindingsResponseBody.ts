// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Binding } from "./Binding";


export class ListBindingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of binding information between datasets and OSS buckets.
   */
  bindings?: Binding[];
  /**
   * @remarks
   * - The pagination token that is used when the total number of bindings exceeds the MaxResults value.
   * - Use this value as the NextToken in the next request to return the remaining results.
   * - This parameter has a value only when not all bindings are returned.
   * 
   * @example
   * immtest:dataset001:examplebucket01
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EFDFD356-C928-4A36-951A-6EB5A592****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bindings: 'Bindings',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindings: { 'type': 'array', 'itemType': Binding },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bindings)) {
      $dara.Model.validateArray(this.bindings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

