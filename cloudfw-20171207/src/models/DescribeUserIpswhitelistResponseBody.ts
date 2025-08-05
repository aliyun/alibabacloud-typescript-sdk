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

export class DescribeUserIPSWhitelistResponseBodyWhitelists extends $dara.Model {
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

export class DescribeUserIPSWhitelistResponseBody extends $dara.Model {
  ipv6Whitelists?: DescribeUserIPSWhitelistResponseBodyIpv6Whitelists[];
  requestId?: string;
  whitelists?: DescribeUserIPSWhitelistResponseBodyWhitelists[];
  static names(): { [key: string]: string } {
    return {
      ipv6Whitelists: 'Ipv6Whitelists',
      requestId: 'RequestId',
      whitelists: 'Whitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Whitelists: { 'type': 'array', 'itemType': DescribeUserIPSWhitelistResponseBodyIpv6Whitelists },
      requestId: 'string',
      whitelists: { 'type': 'array', 'itemType': DescribeUserIPSWhitelistResponseBodyWhitelists },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6Whitelists)) {
      $dara.Model.validateArray(this.ipv6Whitelists);
    }
    if(Array.isArray(this.whitelists)) {
      $dara.Model.validateArray(this.whitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

