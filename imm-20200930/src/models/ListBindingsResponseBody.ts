// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Binding } from "./Binding";


export class ListBindingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of bindings between datasets and OSS buckets.
   */
  bindings?: Binding[];
  /**
   * @remarks
   * - The pagination token that is used when the total number of bindings exceeds the value of MaxResults.
   * - Use this value as NextToken in the next request to obtain the remaining bindings.
   * - This parameter is returned only when not all bindings are returned.
   * 
   * @example
   * immtest:dataset001:examplebucket01
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
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

