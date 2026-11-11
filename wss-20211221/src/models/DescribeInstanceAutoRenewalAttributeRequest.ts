// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAutoRenewalAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The auto-renewal status. Valid values: true (auto-renewal enabled) and false (auto-renewal disabled).
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The list of instance IDs for which to query the auto-renewal status.
   */
  instanceIdList?: string[];
  /**
   * @remarks
   * The maximum number of entries to return per query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The mark for paging. Leave this parameter empty for the first query. For subsequent paging, pass the NextToken value returned in the previous response as is. Do not construct or decode the value.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6k=
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The maximum number of entries per page. Maximum value: 500. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource type. Valid value: CorePackage (core-hour package).
   * 
   * @example
   * CorePackage
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of resource types.
   */
  resourceTypeList?: string[];
  /**
   * @remarks
   * The region ID used to filter instances.
   * 
   * @example
   * cn-hangzhou
   */
  searchRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      instanceIdList: 'InstanceIdList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      resourceTypeList: 'ResourceTypeList',
      searchRegionId: 'SearchRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      pageNo: 'number',
      pageSize: 'number',
      resourceType: 'string',
      resourceTypeList: { 'type': 'array', 'itemType': 'string' },
      searchRegionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIdList)) {
      $dara.Model.validateArray(this.instanceIdList);
    }
    if(Array.isArray(this.resourceTypeList)) {
      $dara.Model.validateArray(this.resourceTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

