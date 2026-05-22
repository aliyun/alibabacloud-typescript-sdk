// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafUsageOfRulesResponseBodySites extends $dara.Model {
  id?: number;
  name?: string;
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
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
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

