// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpAddressesResponseBodyIpAddresses extends $dara.Model {
  createByWuying?: boolean;
  eipAddress?: string;
  eipId?: string;
  eipStatus?: string;
  instanceId?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      createByWuying: 'CreateByWuying',
      eipAddress: 'EipAddress',
      eipId: 'EipId',
      eipStatus: 'EipStatus',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createByWuying: 'boolean',
      eipAddress: 'string',
      eipId: 'string',
      eipStatus: 'string',
      instanceId: 'string',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpAddressesResponseBody extends $dara.Model {
  ipAddresses?: DescribeIpAddressesResponseBodyIpAddresses[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddresses: 'IpAddresses',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddresses: { 'type': 'array', 'itemType': DescribeIpAddressesResponseBodyIpAddresses },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipAddresses)) {
      $dara.Model.validateArray(this.ipAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

