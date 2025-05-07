// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpoints } from "./DescribeDbinstanceEndpointsResponseBodyDataDbinstanceEndpoints";


export class DescribeDBInstanceEndpointsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information of the endpoints of the instance.
   */
  DBInstanceEndpoints?: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpoints;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * rm-u****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The version of the IP protocol. Valid values:
   * 
   * *   **ipv4**
   * *   **ipv6**
   * 
   * @example
   * ipv4
   */
  ipVersion?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceEndpoints: 'DBInstanceEndpoints',
      DBInstanceName: 'DBInstanceName',
      ipVersion: 'IpVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceEndpoints: DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpoints,
      DBInstanceName: 'string',
      ipVersion: 'string',
    };
  }

  validate() {
    if(this.DBInstanceEndpoints && typeof (this.DBInstanceEndpoints as any).validate === 'function') {
      (this.DBInstanceEndpoints as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

