// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCertsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of encryption algorithm. Valid values:
   * 
   * - **NotSM2 (default)**: a non-Chinese cryptographic algorithm.
   * 
   * - **SM2**: a Chinese cryptographic algorithm.
   * 
   * @example
   * SM2
   */
  algorithm?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * Instance ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query instance ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-5yd****tb02
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the paged query. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page in a paged query. Default value: **10**. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the WAF instance is deployed. Valid values:
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
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfmoiy****p2oq
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      domain: 'Domain',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      domain: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

