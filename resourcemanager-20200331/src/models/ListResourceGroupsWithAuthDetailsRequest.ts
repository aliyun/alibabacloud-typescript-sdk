// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupsWithAuthDetailsRequestResourceTypes extends $dara.Model {
  /**
   * @example
   * instance
   */
  resourceTypeCode?: string;
  /**
   * @example
   * ecs
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      resourceTypeCode: 'ResourceTypeCode',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceTypeCode: 'string',
      service: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsWithAuthDetailsRequestTag extends $dara.Model {
  /**
   * @example
   * k1
   */
  key?: string;
  /**
   * @example
   * v1
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

export class ListResourceGroupsWithAuthDetailsRequest extends $dara.Model {
  /**
   * @example
   * TestRG-BVT1
   */
  displayName?: string;
  /**
   * @example
   * true
   */
  includeTags?: boolean;
  /**
   * @example
   * prod-rg
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  resourceGroupIds?: string[];
  /**
   * @example
   * cn-shenzhen
   */
  resourceRegionId?: string;
  resourceTypes?: ListResourceGroupsWithAuthDetailsRequestResourceTypes[];
  /**
   * @example
   * OK
   */
  status?: string;
  tag?: ListResourceGroupsWithAuthDetailsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      includeTags: 'IncludeTags',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupIds: 'ResourceGroupIds',
      resourceRegionId: 'ResourceRegionId',
      resourceTypes: 'ResourceTypes',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      includeTags: 'boolean',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
      resourceRegionId: 'string',
      resourceTypes: { 'type': 'array', 'itemType': ListResourceGroupsWithAuthDetailsRequestResourceTypes },
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListResourceGroupsWithAuthDetailsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroupIds)) {
      $dara.Model.validateArray(this.resourceGroupIds);
    }
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
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

