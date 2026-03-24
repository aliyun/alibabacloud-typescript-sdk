// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveRequestLogRequest extends $dara.Model {
  /**
   * @remarks
   * The account that initiated the request.
   * 
   * @example
   * admin
   */
  account?: string;
  /**
   * @remarks
   * The API path.
   * 
   * @example
   * /api/users/login
   */
  apiFormat?: string;
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * 103.118.55.**
   */
  clientIP?: string;
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * > This parameter is available only for hybrid cloud scenarios. You can call the [DescribeHybridCloudClusters](https://help.aliyun.com/document_detail/2849376.html) operation to query information about hybrid cloud clusters.
   * 
   * @example
   * 433
   */
  clusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1726057800
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_cdnsdf3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The domain name of the API.
   * 
   * @example
   * a.***.com
   */
  matchedHost?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The type of sensitive data.
   * 
   * > You can call the [DescribeApisecRules](https://help.aliyun.com/document_detail/2859155.html) operation to query the supported sensitive data types.
   * 
   * @example
   * 1000,1001
   */
  sensitiveCode?: string;
  /**
   * @remarks
   * The sensitive data in the response.
   * 
   * @example
   * user
   */
  sensitiveData?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1723392000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      apiFormat: 'ApiFormat',
      clientIP: 'ClientIP',
      clusterId: 'ClusterId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      matchedHost: 'MatchedHost',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      sensitiveCode: 'SensitiveCode',
      sensitiveData: 'SensitiveData',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      apiFormat: 'string',
      clientIP: 'string',
      clusterId: 'string',
      endTime: 'number',
      instanceId: 'string',
      matchedHost: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      sensitiveCode: 'string',
      sensitiveData: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

