// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceResourcesRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter name. You can specify one or more filter names to query resources. Valid values:
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
   * ResourceARN
   */
  name?: string;
  /**
   * @remarks
   * The filter value.
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
   * The tag key of the resource.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
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
   * The filter.
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
   * The query token. Set this to the NextToken value returned from the previous API call to retrieve the next page of results.
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
   * The type of the resource in the service instance. Valid values:
   * 
   * - AliyunResource: an Alibaba Cloud resource.
   * 
   * - ContainerResource: a pod.
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

