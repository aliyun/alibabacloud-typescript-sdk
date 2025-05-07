// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfos } from "./DescribeDbinstanceNetInfoForChannelResponseBodyDbinstanceNetInfos";


export class DescribeDBInstanceNetInfoForChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the instance connection.
   */
  DBInstanceNetInfos?: DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfos;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **VPC**: a virtual private cloud (VPC)
   * *   **Classic**: classic network
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 61DF1F28-F409-50C0-B90A-CCE82D44****
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
      DBInstanceNetInfos: DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfos,
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

