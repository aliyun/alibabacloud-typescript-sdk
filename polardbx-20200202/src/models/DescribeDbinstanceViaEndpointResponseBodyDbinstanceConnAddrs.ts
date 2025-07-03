// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceViaEndpointResponseBodyDBInstanceConnAddrs extends $dara.Model {
  /**
   * @example
   * polardbx-xxx.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @example
   * 3306
   */
  port?: number;
  /**
   * @example
   * VPC
   */
  type?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-xxxxxx
   */
  VPCId?: string;
  /**
   * @example
   * vsw-*********
   */
  vSwitchId?: string;
  /**
   * @example
   * pxc-zkralxpc5d****
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      port: 'Port',
      type: 'Type',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      port: 'number',
      type: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vpcInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

