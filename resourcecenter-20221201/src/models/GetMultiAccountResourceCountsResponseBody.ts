// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultiAccountResourceCountsResponseBodyFilters extends $dara.Model {
  /**
   * @remarks
   * The key of the filter condition.
   * 
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @remarks
   * The values of the filter condition.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class GetMultiAccountResourceCountsResponseBodyResourceCounts extends $dara.Model {
  /**
   * @remarks
   * The number of resources.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * ACS::ECS::NetworkInterface
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultiAccountResourceCountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The filter condition.
   */
  filters?: GetMultiAccountResourceCountsResponseBodyFilters[];
  /**
   * @remarks
   * The dimension by which resources are queried.
   * 
   * @example
   * ResourceType
   */
  groupByKey?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EFA806B9-7F36-55AB-8B7A-D680C2C5EE57
   */
  requestId?: string;
  /**
   * @remarks
   * The numbers of resources.
   */
  resourceCounts?: GetMultiAccountResourceCountsResponseBodyResourceCounts[];
  /**
   * @remarks
   * The search scope. Valid values:
   * 
   * - ID of a resource directory: Resources within the management account and all members of the resource directory are searched.
   * 
   * - ID of the Root folder: Resources within all members in the Root folder and the subfolders of the Root folder are searched.
   * 
   * - ID of a folder: Resources within all members in the folder are searched.
   * 
   * - ID of a member: Resources within the member are searched.
   * 
   * For information about how to obtain the ID of a resource directory, the Root folder, a folder, or a member, see [GetResourceDirectory](https://help.aliyun.com/document_detail/159995.html), [ListFoldersForParent](https://help.aliyun.com/document_detail/159997.html), or [ListAccounts](https://help.aliyun.com/document_detail/160016.html).
   * 
   * @example
   * rd-r4****
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      groupByKey: 'GroupByKey',
      requestId: 'RequestId',
      resourceCounts: 'ResourceCounts',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: { 'type': 'array', 'itemType': GetMultiAccountResourceCountsResponseBodyFilters },
      groupByKey: 'string',
      requestId: 'string',
      resourceCounts: { 'type': 'array', 'itemType': GetMultiAccountResourceCountsResponseBodyResourceCounts },
      scope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    if(Array.isArray(this.resourceCounts)) {
      $dara.Model.validateArray(this.resourceCounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

