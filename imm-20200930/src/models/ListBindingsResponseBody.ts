// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Binding } from "./Binding";


export class ListBindingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The bindings between the dataset and OSS buckets.
   */
  bindings?: Binding[];
  /**
   * @remarks
   * *   The pagination token that is used in the next request to retrieve a new page of results if the total number of results exceeds the value of the MaxResults parameter.
   * *   The next request returns remaining results starting from the position marked by the NextToken parameter value.
   * *   This parameter has a non-empty value only when not all bindings are returned.
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

