// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos } from "./DescribeDbinstanceNetInfoResponseBodyDbinstanceNetInfos";


export class DescribeDBInstanceNetInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the endpoints of the instance.
   */
  DBInstanceNetInfos?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **Classic**: classic network
   * *   **VPC**: virtual private cloud (VPC)
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
   * 777C4593-8053-427B-99E2-105593277CAB
   */
  requestId?: string;
  /**
   * @remarks
   * The whitelist mode of the instance. Valid values:
   * 
   * *   **normal**: standard whitelist mode
   * *   **safety**: enhanced whitelist mode
   * 
   * @example
   * safety
   */
  securityIPMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceNetInfos: 'DBInstanceNetInfos',
      instanceNetworkType: 'InstanceNetworkType',
      requestId: 'RequestId',
      securityIPMode: 'SecurityIPMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceNetInfos: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos,
      instanceNetworkType: 'string',
      requestId: 'string',
      securityIPMode: 'string',
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

