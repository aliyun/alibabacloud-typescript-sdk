// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceSupportRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to view the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region to which the WAF instance belongs. Valid values:
   * 
   * - **cn-hangzhou**: indicates the Chinese mainland.
   * 
   * - **ap-southeast-1**: indicates regions outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzpks****kdjq
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The cloud product to which the resource belongs. By default, instances of ALB, MSE, FC, and SAE products are returned. Valid values:
   * 
   * - **alb**: indicates the ALB product.
   * 
   * - **mse**: indicates the MSE product.
   * 
   * - **fc**: indicates the FC product.
   * 
   * - **sae**: indicates the SAE product.
   * 
   * - **ecs**: indicates the ECS product.
   * 
   * - **clb4**: indicates the CLB(TCP) product.
   * 
   * - **clb7**: indicates the CLB(HTTP/HTTPS) product.
   * 
   * - **apig**: indicates the APIG product.
   * 
   * - **nlb**: indicates the NLB product.
   * 
   * > Each product supports different regions. When the product filter field has a value, you need to refer to the regions supported by the product. Otherwise, the filtering may fail.
   * 
   * @example
   * clb7
   */
  resourceProduct?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceProduct: 'ResourceProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceProduct: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

