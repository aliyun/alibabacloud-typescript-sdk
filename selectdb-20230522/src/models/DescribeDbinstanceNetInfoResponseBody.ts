// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceNetInfoResponseBodyDBClustersNetInfos } from "./DescribeDbinstanceNetInfoResponseBodyDbclustersNetInfos";
import { DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos } from "./DescribeDbinstanceNetInfoResponseBodyDbinstanceNetInfos";


export class DescribeDBInstanceNetInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The network information about the backend (BE) clusters.
   */
  DBClustersNetInfos?: DescribeDBInstanceNetInfoResponseBodyDBClustersNetInfos[];
  /**
   * @remarks
   * The network information about the instance.
   */
  DBInstanceNetInfos?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ADF42B18-43FD-5100-83A9-BE81AB70C863
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClustersNetInfos: 'DBClustersNetInfos',
      DBInstanceNetInfos: 'DBInstanceNetInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClustersNetInfos: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBClustersNetInfos },
      DBInstanceNetInfos: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBClustersNetInfos)) {
      $dara.Model.validateArray(this.DBClustersNetInfos);
    }
    if(Array.isArray(this.DBInstanceNetInfos)) {
      $dara.Model.validateArray(this.DBInstanceNetInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

