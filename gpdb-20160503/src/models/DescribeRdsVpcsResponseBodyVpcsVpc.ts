// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs } from "./DescribeRdsVpcsResponseBodyVpcsVpcVswitchs";


export class DescribeRdsVpcsResponseBodyVpcsVpc extends $dara.Model {
  /**
   * @remarks
   * An invalid parameter. It is no longer returned when you call this operation.
   * 
   * @example
   * null
   */
  aliUid?: string;
  /**
   * @remarks
   * An invalid parameter. It is no longer returned when you call this operation.
   * 
   * @example
   * null
   */
  bid?: string;
  /**
   * @remarks
   * The CIDR block of the VPC.
   * 
   * @example
   * 10.**.**.0/8
   */
  cidrBlock?: string;
  /**
   * @remarks
   * An invalid parameter. It is no longer returned when you call this operation.
   * 
   * @example
   * null
   */
  gmtCreate?: string;
  /**
   * @remarks
   * An invalid parameter. It is no longer returned when you call this operation.
   * 
   * @example
   * null
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the VPC is the default VPC. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The state of the VPC. If **Available** is returned, the VPC is available.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The queried vSwitches.
   */
  vSwitchs?: DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs[];
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp*******************
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * vpc-name
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bid: 'Bid',
      cidrBlock: 'CidrBlock',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      isDefault: 'IsDefault',
      regionNo: 'RegionNo',
      status: 'Status',
      vSwitchs: 'VSwitchs',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bid: 'string',
      cidrBlock: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      isDefault: 'boolean',
      regionNo: 'string',
      status: 'string',
      vSwitchs: { 'type': 'array', 'itemType': DescribeRdsVpcsResponseBodyVpcsVpcVSwitchs },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchs)) {
      $dara.Model.validateArray(this.vSwitchs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

