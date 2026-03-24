// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCloudResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the protected resource. WAF automatically generates this ID when you add the cloud service to WAF.
   * 
   * > Call [CreateCloudResource](https://help.aliyun.com/document_detail/2839876.html) to add a resource and then view the resource ID in the response.
   * 
   * @example
   * lb-****py9kcm2n6nuesiu2a-80-clb4
   */
  cloudResourceId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to view the ID of your WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The port of the cloud service that is added to WAF.
   * 
   * @example
   * 443
   * 
   * @deprecated
   */
  port?: number;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the cloud service instance.
   * 
   * @example
   * lb-bp1*****jqnnqk5uj2p
   * 
   * @deprecated
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of the cloud service. Valid values:
   * 
   * - **clb4**: Layer 4 CLB.
   * 
   * - **clb7**: Layer 7 CLB.
   * 
   * - **ecs**: ECS.
   * 
   * - **nlb**: Network Load Balancer (NLB).
   * 
   * @example
   * clb7
   * 
   * @deprecated
   */
  resourceProduct?: string;
  static names(): { [key: string]: string } {
    return {
      cloudResourceId: 'CloudResourceId',
      instanceId: 'InstanceId',
      port: 'Port',
      regionId: 'RegionId',
      resourceInstanceId: 'ResourceInstanceId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceProduct: 'ResourceProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudResourceId: 'string',
      instanceId: 'string',
      port: 'number',
      regionId: 'string',
      resourceInstanceId: 'string',
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

