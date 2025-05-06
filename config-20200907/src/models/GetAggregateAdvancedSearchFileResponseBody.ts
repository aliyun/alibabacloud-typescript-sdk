// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateAdvancedSearchFileResponseBodyResourceSearch } from "./GetAggregateAdvancedSearchFileResponseBodyResourceSearch";


export class GetAggregateAdvancedSearchFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6DB86284-DB7F-5936-B210-3B53D6D41B03
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource file.
   */
  resourceSearch?: GetAggregateAdvancedSearchFileResponseBodyResourceSearch;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceSearch: 'ResourceSearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceSearch: GetAggregateAdvancedSearchFileResponseBodyResourceSearch,
    };
  }

  validate() {
    if(this.resourceSearch && typeof (this.resourceSearch as any).validate === 'function') {
      (this.resourceSearch as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

