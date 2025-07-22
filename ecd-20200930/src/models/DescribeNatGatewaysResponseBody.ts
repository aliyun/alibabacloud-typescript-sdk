// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatGatewaysResponseBodyNatGatewaysIpLists extends $dara.Model {
  allocationId?: string;
  ipAddress?: string;
  privateIpAddress?: string;
  snatEntryEnabled?: string;
  usingStatus?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      ipAddress: 'IpAddress',
      privateIpAddress: 'PrivateIpAddress',
      snatEntryEnabled: 'SnatEntryEnabled',
      usingStatus: 'UsingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      ipAddress: 'string',
      privateIpAddress: 'string',
      snatEntryEnabled: 'string',
      usingStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBodyNatGateways extends $dara.Model {
  forwardTableIds?: string[];
  ipLists?: DescribeNatGatewaysResponseBodyNatGatewaysIpLists[];
  name?: string;
  natGatewayId?: string;
  snatTableIds?: string[];
  status?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardTableIds: 'ForwardTableIds',
      ipLists: 'IpLists',
      name: 'Name',
      natGatewayId: 'NatGatewayId',
      snatTableIds: 'SnatTableIds',
      status: 'Status',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableIds: { 'type': 'array', 'itemType': 'string' },
      ipLists: { 'type': 'array', 'itemType': DescribeNatGatewaysResponseBodyNatGatewaysIpLists },
      name: 'string',
      natGatewayId: 'string',
      snatTableIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.forwardTableIds)) {
      $dara.Model.validateArray(this.forwardTableIds);
    }
    if(Array.isArray(this.ipLists)) {
      $dara.Model.validateArray(this.ipLists);
    }
    if(Array.isArray(this.snatTableIds)) {
      $dara.Model.validateArray(this.snatTableIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewaysResponseBody extends $dara.Model {
  maxResults?: number;
  natGateways?: DescribeNatGatewaysResponseBodyNatGateways[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      natGateways: 'NatGateways',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      natGateways: { 'type': 'array', 'itemType': DescribeNatGatewaysResponseBodyNatGateways },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.natGateways)) {
      $dara.Model.validateArray(this.natGateways);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

