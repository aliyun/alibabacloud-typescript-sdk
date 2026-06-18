// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsVswitchesResponseBodyDataVswitchList extends $dara.Model {
  /**
   * @remarks
   * The number of available IP addresses.
   * 
   * @example
   * 16378
   */
  availabeIpCount?: string;
  /**
   * @remarks
   * The CIDR block of the VPC.
   * 
   * @example
   * 172.16.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The description of the database.
   * 
   * @example
   * describe
   */
  description?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * babac91eff704edf9bdccfaa6ba4efce
   */
  id?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * drdshbgae0han226
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the VPC is the default VPC. Valid values:
   * - **true**: The VPC is the default VPC.
   * - **false**: The VPC is not the default VPC.
   * 
   * @example
   * true
   */
  isDefault?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-j
   */
  izNo?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * szt-backup
   */
  name?: string;
  /**
   * @remarks
   * vpc id。
   * 
   * @example
   * vpc-uf6lis7xmm****t9wrxb5
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      availabeIpCount: 'AvailabeIpCount',
      cidrBlock: 'CidrBlock',
      description: 'Description',
      id: 'Id',
      instanceId: 'InstanceId',
      isDefault: 'IsDefault',
      izNo: 'IzNo',
      name: 'Name',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availabeIpCount: 'string',
      cidrBlock: 'string',
      description: 'string',
      id: 'number',
      instanceId: 'string',
      isDefault: 'string',
      izNo: 'string',
      name: 'string',
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

export class DescribeRdsVswitchesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The vSwitch list.
   */
  vswitchList?: DescribeRdsVswitchesResponseBodyDataVswitchList[];
  static names(): { [key: string]: string } {
    return {
      vswitchList: 'VswitchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswitchList: { 'type': 'array', 'itemType': DescribeRdsVswitchesResponseBodyDataVswitchList },
    };
  }

  validate() {
    if(Array.isArray(this.vswitchList)) {
      $dara.Model.validateArray(this.vswitchList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsVswitchesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data struct.
   */
  data?: DescribeRdsVswitchesResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeRdsVswitchesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

