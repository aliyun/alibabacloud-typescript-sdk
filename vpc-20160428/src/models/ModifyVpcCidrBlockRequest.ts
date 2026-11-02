// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcCidrBlockRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a parameter value from your client and ensure that the value is unique among different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken** identifier. The **RequestId** of each API request is different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for this request. Valid values:
   * - **true**: The system sends a check request and does not modify the CIDR block of the virtual private cloud (VPC). If the check fails, the system returns the corresponding error. If the check succeeds, the system returns the error code `DryRunOperation`.
   * - **false** (default): The system sends a normal request. After the request passes the check, the system returns an HTTP 2xx status code and directly performs the modification.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The CIDR block of the VPC that you want to modify. Both primary and secondary CIDR blocks are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/8
   */
  originalCidrBlock?: string;
  /**
   * @remarks
   * The ID of the region where the VPC is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The target CIDR block of the VPC after the modification.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/16
   */
  targetCidrBlock?: string;
  /**
   * @remarks
   * The ID of the VPC that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1di7uewzmtvfuq8****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      originalCidrBlock: 'OriginalCidrBlock',
      regionId: 'RegionId',
      targetCidrBlock: 'TargetCidrBlock',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      originalCidrBlock: 'string',
      regionId: 'string',
      targetCidrBlock: 'string',
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

