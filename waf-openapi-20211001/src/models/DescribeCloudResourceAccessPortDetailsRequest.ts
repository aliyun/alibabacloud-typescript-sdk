// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudResourceAccessPortDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF instance.
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf-cn-tl32ast****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the list. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The port of the cloud service that is connected to WAF.
   * 
   * @example
   * 443
   */
  port?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * https
   */
  protocol?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-2zeugkfj81jvo****4tqm
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
   * The cloud service type. Valid values:
   * 
   * - **clb4**: Layer 4 CLB.
   * 
   * - **clb7**: Layer 7 CLB.
   * 
   * - **ecs**: ECS.
   * - **nlb**: NLB.
   * 
   * @example
   * clb7
   */
  resourceProduct?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      port: 'Port',
      protocol: 'Protocol',
      regionId: 'RegionId',
      resourceInstanceId: 'ResourceInstanceId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceProduct: 'ResourceProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      port: 'string',
      protocol: 'string',
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

