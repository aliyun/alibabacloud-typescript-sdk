// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarxDataNodesResponseBodyDBInstanceDataNodes extends $dara.Model {
  /**
   * @remarks
   * The description of the node instance.
   * 
   * @example
   * pxc-z****nfxsxy728 : PROD-OMS-Auto-生产库克隆实例
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pxc-hzrlcjc****sz9
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pxc-hzrp5m****04w4
   */
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarxDataNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of node information.
   */
  DBInstanceDataNodes?: DescribePolarxDataNodesResponseBodyDBInstanceDataNodes[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 0
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD99340C-4A45-548B-****-27584B0BCFFF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of nodes.
   * 
   * @example
   * 0
   */
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceDataNodes: 'DBInstanceDataNodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceDataNodes: { 'type': 'array', 'itemType': DescribePolarxDataNodesResponseBodyDBInstanceDataNodes },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalNumber: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceDataNodes)) {
      $dara.Model.validateArray(this.DBInstanceDataNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

