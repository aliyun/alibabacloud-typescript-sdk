// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBResourcePoolResponseBodyPoolsInfo } from "./DescribeDbresourcePoolResponseBodyPoolsInfo";


export class DescribeDBResourcePoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Details of the resource group.
   */
  poolsInfo?: DescribeDBResourcePoolResponseBodyPoolsInfo[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      poolsInfo: 'PoolsInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      poolsInfo: { 'type': 'array', 'itemType': DescribeDBResourcePoolResponseBodyPoolsInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.poolsInfo)) {
      $dara.Model.validateArray(this.poolsInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

