// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubnetsResponseBodySubnets extends $dara.Model {
  cidrBlock?: string;
  name?: string;
  officeSiteId?: string;
  status?: string;
  subnetId?: string;
  totalEdsCount?: number;
  totalEdsCountForGroup?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      name: 'Name',
      officeSiteId: 'OfficeSiteId',
      status: 'Status',
      subnetId: 'SubnetId',
      totalEdsCount: 'TotalEdsCount',
      totalEdsCountForGroup: 'TotalEdsCountForGroup',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      name: 'string',
      officeSiteId: 'string',
      status: 'string',
      subnetId: 'string',
      totalEdsCount: 'number',
      totalEdsCountForGroup: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubnetsResponseBody extends $dara.Model {
  nextToken?: string;
  requestId?: string;
  subnets?: DescribeSubnetsResponseBodySubnets[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      subnets: 'Subnets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      subnets: { 'type': 'array', 'itemType': DescribeSubnetsResponseBodySubnets },
    };
  }

  validate() {
    if(Array.isArray(this.subnets)) {
      $dara.Model.validateArray(this.subnets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

