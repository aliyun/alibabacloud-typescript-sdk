// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouteTableListResponseBodyRouterTableListRouterTableListType } from "./DescribeRouteTableListResponseBodyRouterTableListRouterTableListType";


export class DescribeRouteTableListResponseBodyRouterTableList extends $dara.Model {
  routerTableListType?: DescribeRouteTableListResponseBodyRouterTableListRouterTableListType[];
  static names(): { [key: string]: string } {
    return {
      routerTableListType: 'RouterTableListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routerTableListType: { 'type': 'array', 'itemType': DescribeRouteTableListResponseBodyRouterTableListRouterTableListType },
    };
  }

  validate() {
    if(Array.isArray(this.routerTableListType)) {
      $dara.Model.validateArray(this.routerTableListType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

