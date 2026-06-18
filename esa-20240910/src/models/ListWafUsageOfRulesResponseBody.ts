// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafUsageOfRulesResponseBodySites extends $dara.Model {
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The site name.
   * 
   * @example
   * example.com
   */
  name?: string;
  /**
   * @remarks
   * The number of WAF rules or rule sets used by the site.
   * 
   * @example
   * 1
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      usage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafUsageOfRulesResponseBody extends $dara.Model {
  batchConfigUsage?: number;
  instanceUsage?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * A list of sites and their respective WAF rule usage.
   */
  sites?: ListWafUsageOfRulesResponseBodySites[];
  static names(): { [key: string]: string } {
    return {
      batchConfigUsage: 'BatchConfigUsage',
      instanceUsage: 'InstanceUsage',
      requestId: 'RequestId',
      sites: 'Sites',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchConfigUsage: 'number',
      instanceUsage: 'number',
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

