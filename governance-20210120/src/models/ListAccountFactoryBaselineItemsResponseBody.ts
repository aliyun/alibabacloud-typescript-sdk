// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAccountFactoryBaselineItemsResponseBodyBaselineItems } from "./ListAccountFactoryBaselineItemsResponseBodyBaselineItems";


export class ListAccountFactoryBaselineItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The baseline items.
   */
  baselineItems?: ListAccountFactoryBaselineItemsResponseBodyBaselineItems[];
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAACDGQdAEX3m42z3sQ+f3VTK2Xr2DzYbz/SAfc/zJRqod
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B40D73D8-76AC-5D3C-AC63-4FC8AFCE6671
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      baselineItems: 'BaselineItems',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineItems: { 'type': 'array', 'itemType': ListAccountFactoryBaselineItemsResponseBodyBaselineItems },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baselineItems)) {
      $dara.Model.validateArray(this.baselineItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

