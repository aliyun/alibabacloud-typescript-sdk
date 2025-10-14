// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarxDataNodesResponseBodyDBInstanceDataNodes extends $dara.Model {
  DBInstanceDescription?: string;
  /**
   * @example
   * pxc-hzrlcjc****sz9
   */
  DBInstanceId?: string;
  /**
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
  DBInstanceDataNodes?: DescribePolarxDataNodesResponseBodyDBInstanceDataNodes[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 0
   */
  pageSize?: number;
  /**
   * @example
   * BD99340C-4A45-548B-****-27584B0BCFFF
   */
  requestId?: string;
  /**
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

