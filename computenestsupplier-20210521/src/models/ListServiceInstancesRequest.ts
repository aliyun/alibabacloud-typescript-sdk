// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstancesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the filter. You can specify one or more filter names to query service instances. Valid values:
   * 
   * - Name: The name of the service. To perform a fuzzy search, enter the content in the \\*xxx\\* format for the value parameter. For example, if the service name is `My Service`, you can enter `*My*` or `*Service*` for a fuzzy search.
   * 
   * - ServiceInstanceId: The ID of the service instance.
   * 
   * - ServiceId: The ID of the service.
   * 
   * - UserId: The ID of the user.
   * 
   * - Version: The version of the service.
   * 
   * - Status: The status of the service instance.
   * 
   * - DeployType: The deployment type.
   * 
   * - ServiceType: The service type.
   * 
   * - OperationStartTimeBefore: The time before the start of the Alibaba Cloud Managed Services.
   * 
   * - OperationStartTimeAfter: The time after the start of the Alibaba Cloud Managed Services.
   * 
   * - OperationEndTimeBefore: The time before the end of the Alibaba Cloud Managed Services.
   * 
   * - OperationEndTimeAfter: The time after the end of the Alibaba Cloud Managed Services.
   * 
   * - OperatedServiceInstanceId: The ID of the managed service instance for a private service.
   * 
   * - OperationServiceInstanceId: The ID of the service instance for a pure Alibaba Cloud Managed Service.
   * 
   * - EnableInstanceOps: Indicates whether Alibaba Cloud Managed Services are enabled for the service instance.
   * 
   * @example
   * ServiceInstanceId
   */
  name?: string;
  /**
   * @remarks
   * A list of filter values.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class ListServiceInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter.
   */
  filter?: ListServiceInstancesRequestFilter[];
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set it to the NextToken value returned from the previous API call.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
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
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzkt5buxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to display the deleted service instances. Valid values:
   * 
   * - true: Displays the deleted service instances.
   * 
   * - false: Does not display the deleted service instances.
   * 
   * @example
   * false
   */
  showDeleted?: boolean;
  /**
   * @remarks
   * The custom tags.
   */
  tag?: ListServiceInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      showDeleted: 'ShowDeleted',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServiceInstancesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      showDeleted: 'boolean',
      tag: { 'type': 'array', 'itemType': ListServiceInstancesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
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

