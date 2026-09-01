// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcCidrBlockRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without modifying the CIDR block of the virtual private cloud (VPC). The system checks the request for potential issues. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * - **false** (default): sends a Normal request. If the check succeeds, an HTTP 2xx status code is returned and the modification is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The CIDR block of the VPC to modify. Both primary and secondary CIDR blocks are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/8
   */
  originalCidrBlock?: string;
  /**
   * @remarks
   * The ID of the region where the VPC resides.
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
   * The new CIDR block for the VPC after modification.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/16
   */
  targetCidrBlock?: string;
  /**
   * @remarks
   * The ID of the VPC to modify.
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

