// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos } from "./DescribeDbinstanceNetInfoResponseBodyDbinstanceNetInfos";


export class DescribeDBInstanceNetInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The connection information of the instance.
   */
  DBInstanceNetInfos?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   Classic: classic network.
   * *   VPC: VPC.
   * 
   * @example
   * Classic
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7565770E-7C45-462D-BA4A-8A5396F2CAD1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceNetInfos: 'DBInstanceNetInfos',
      instanceNetworkType: 'InstanceNetworkType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceNetInfos: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos,
      instanceNetworkType: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.DBInstanceNetInfos && typeof (this.DBInstanceNetInfos as any).validate === 'function') {
      (this.DBInstanceNetInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

