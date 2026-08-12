// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address or domain name of the origin server that corresponds to the domain name.
   * 
   * @example
   * 1.1.XX.XX
   */
  backend?: string;
  /**
   * @remarks
   * Specifies whether public cloud disaster recovery is enabled. Valid values:
   * 
   * - **true**: Public cloud disaster recovery is enabled.
   * 
   * - **false**: Public cloud disaster recovery is not enabled.
   * 
   * @example
   * true
   */
  cnameEnabled?: boolean;
  /**
   * @remarks
   * The domain name to query.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * > You can call [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) to query the ID of the current WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v3prepaid_public_cn-***********
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number to return in a paging query. Default value: **1**, which indicates the first page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paging query. Default value: **10**, which indicates 10 entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfmvtc5z52****
   */
  resourceManagerResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      backend: 'Backend',
      cnameEnabled: 'CnameEnabled',
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
      backend: 'string',
      cnameEnabled: 'boolean',
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

