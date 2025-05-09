// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserIPSWhitelistResponseBodyIpv6Whitelists extends $dara.Model {
  direction?: number;
  listType?: number;
  listValue?: string;
  whiteListValue?: string[];
  whiteType?: number;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      listType: 'ListType',
      listValue: 'ListValue',
      whiteListValue: 'WhiteListValue',
      whiteType: 'WhiteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'number',
      listType: 'number',
      listValue: 'string',
      whiteListValue: { 'type': 'array', 'itemType': 'string' },
      whiteType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.whiteListValue)) {
      $dara.Model.validateArray(this.whiteListValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

