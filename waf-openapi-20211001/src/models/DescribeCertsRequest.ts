// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCertsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the encryption algorithm. Valid values:
   * 
   * - **NotSM2 (default)**: Specifies a non-ShangMi (SM) cryptographic algorithm.
   * 
   * - **SM2**: Specifies an SM cryptographic algorithm.
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
   * The ID of the WAF instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of your current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-5yd****tb02
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region of the WAF instance. Valid values:
   * 
   * - **cn-hangzhou**: The Chinese mainland.
   * 
   * - **ap-southeast-1**: Outside the Chinese mainland.
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

