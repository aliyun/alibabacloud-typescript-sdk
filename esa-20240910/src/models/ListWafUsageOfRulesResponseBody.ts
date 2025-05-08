// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWafUsageOfRulesResponseBodySites } from "./ListWafUsageOfRulesResponseBodySites";


export class ListWafUsageOfRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * List of site usage.
   */
  sites?: ListWafUsageOfRulesResponseBodySites[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sites: 'Sites',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sites: { 'type': 'array', 'itemType': ListWafUsageOfRulesResponseBodySites },
    };
  }

  validate() {
    if(Array.isArray(this.sites)) {
      $dara.Model.validateArray(this.sites);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

