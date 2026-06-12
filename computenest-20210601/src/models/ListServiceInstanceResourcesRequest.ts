// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceResourcesRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The name of the filter. Valid values:
   * 
   * - ExpireTimeStart
   * 
   * - ExpireTimeEnd
   * 
   * - PayType
   * 
   * - ResourceARN
   * 
   * @example
   * ExpireTimeStart
   */
  name?: string;
  /**
   * @remarks
   * The filter condition values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the resource tag.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of the resource tag.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions. Valid values:
   * 
   * - ExpireTimeStart: The start of the time range to query the expiration time of subscription resources.
   *   >Notice: This parameter applies only to service instances in private deployments.
   * 
   * - ExpireTimeEnd: The end of the time range to query the expiration time of subscription resources.
   *   >Notice: This parameter applies only to service instances in private deployments.
   * 
   * - PayType: The billing method.>Notice:  This parameter applies only to service instances in private deployments.
   *   Valid values:
   * 
   *   - Subscription: subscription.
   * 
   *   - PayAsYouGo: pay-as-you-go.
   * 
   * - ResourceARN: The Alibaba Cloud Resource Name (ARN) of the resource.
   * 
   * resource name (ARN).
   */
  filters?: ListServiceInstanceResourcesRequestFilters[];
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. Set this to the NextToken value from a previous API call.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLbAx7BkQzyYC+ONO+WudHGKEdB0uWSY7AGnM3qCgm/Ynge7zU6NWdbj0Tegyajyqyc=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * si-d8a0cc2a1ee04dce****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The resource type of the service instance. Valid values:
   * 
   * - AliyunResource: an Alibaba Cloud resource.
   * 
   * - ContainerResource: a container group (pod) resource.
   * 
   * @example
   * AliyunResource
   */
  serviceInstanceResourceType?: string;
  /**
   * @remarks
   * The resource tags.
   */
  tag?: ListServiceInstanceResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceInstanceResourceType: 'ServiceInstanceResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': ListServiceInstanceResourcesRequestFilters },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      serviceInstanceId: 'string',
      serviceInstanceResourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListServiceInstanceResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

