// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrivateDnsEndpointListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * pd-12345
   */
  accessInstanceId?: string;
  /**
   * @remarks
   * The name of the private instance.
   * 
   * @example
   * test
   */
  accessInstanceName?: string;
  /**
   * @remarks
   * The type of Cloud Firewall. Valid values:
   * 
   * - **internet**
   * 
   * - **vpc**
   * 
   * - **nat**
   * 
   * @example
   * vpc
   */
  firewallType?: string;
  /**
   * @remarks
   * The UID of the member account.
   * 
   * @example
   * 135809047715****
   */
  memberUid?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * - **creating**: The instance is being created.
   * 
   * - **deleting**: The instance is being deleted.
   * 
   * - **normal**: The instance is running as expected.
   * 
   * - **updating**: The instance is being updated.
   * 
   * @example
   * normal
   */
  status?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessInstanceId: 'AccessInstanceId',
      accessInstanceName: 'AccessInstanceName',
      firewallType: 'FirewallType',
      memberUid: 'MemberUid',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionNo: 'RegionNo',
      status: 'Status',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInstanceId: 'string',
      accessInstanceName: 'string',
      firewallType: 'string',
      memberUid: 'number',
      pageNo: 'number',
      pageSize: 'number',
      regionNo: 'string',
      status: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

