// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGwConsumerOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence token.
   * 
   * @example
   * 6000170000591aed949d0f54a343f1a42***********
   */
  clientToken?: string;
  /**
   * @remarks
   * The expiration time of the API key in ISO 8601 format. The value must be later than the current time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2027-07-23T03:09:08Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The ID of the AI gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-2ze24rr575j5b18cg
   */
  gatewayId?: string;
  /**
   * @remarks
   * The number of API keys to generate, which corresponds to the number of resource plans to purchase. Valid values: 1 to 30.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  keyCount?: number;
  /**
   * @remarks
   * The specification tier of the resource plan. Valid values:
   * 
   * - basic: 3000 points per plan.
   * - advanced: 6000 points per plan.
   * - pro: 9000 points per plan.
   * 
   * This parameter is required.
   * 
   * @example
   * basic
   */
  packageSpec?: string;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query region information.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      expireTime: 'ExpireTime',
      gatewayId: 'GatewayId',
      keyCount: 'KeyCount',
      packageSpec: 'PackageSpec',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      expireTime: 'string',
      gatewayId: 'string',
      keyCount: 'number',
      packageSpec: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

