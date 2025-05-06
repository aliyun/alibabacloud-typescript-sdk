// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAdvancedSearchFileResponseBodyResourceSearch } from "./GetAdvancedSearchFileResponseBodyResourceSearch";


export class GetAdvancedSearchFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9366FE45-3C83-54FB-8BB1-44176B200706
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the resource file.
   */
  resourceSearch?: GetAdvancedSearchFileResponseBodyResourceSearch;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceSearch: 'ResourceSearch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceSearch: GetAdvancedSearchFileResponseBodyResourceSearch,
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

