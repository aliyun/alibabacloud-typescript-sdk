// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAccountFactoryBaselinesResponseBodyBaselines } from "./ListAccountFactoryBaselinesResponseBodyBaselines";


export class ListAccountFactoryBaselinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The baselines.
   */
  baselines?: ListAccountFactoryBaselinesResponseBodyBaselines[];
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAALHWGpGoYCcYMxiFfmlhvh62Xr2DzYbz/SAfc*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3245E413-7CDD-5287-8988-6A94DE8A8369
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      baselines: 'Baselines',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselines: { 'type': 'array', 'itemType': ListAccountFactoryBaselinesResponseBodyBaselines },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baselines)) {
      $dara.Model.validateArray(this.baselines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

