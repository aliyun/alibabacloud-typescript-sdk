// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteTableListResponseBodyRouteTableList extends $dara.Model {
  associateType?: string;
  routeTableId?: string;
  routeTableType?: string;
  routerType?: string;
  status?: string;
  vSwitchIds?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      associateType: 'AssociateType',
      routeTableId: 'RouteTableId',
      routeTableType: 'RouteTableType',
      routerType: 'RouterType',
      status: 'Status',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateType: 'string',
      routeTableId: 'string',
      routeTableType: 'string',
      routerType: 'string',
      status: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRouteTableListResponseBody extends $dara.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  routeTableList?: DescribeRouteTableListResponseBodyRouteTableList[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      routeTableList: 'RouteTableList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      routeTableList: { 'type': 'array', 'itemType': DescribeRouteTableListResponseBodyRouteTableList },
    };
  }

  validate() {
    if(Array.isArray(this.routeTableList)) {
      $dara.Model.validateArray(this.routeTableList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

