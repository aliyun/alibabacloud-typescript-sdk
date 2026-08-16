// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePackageDeductionsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time in UNIX timestamp format.
   * 
   * @example
   * 1709117383000
   */
  endTime?: number;
  /**
   * @remarks
   * The list of cloud computer IDs. If this parameter is specified, the `PackageIds` parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The list of core-hour package IDs in JSON format.
   */
  packageIds?: string[];
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Settings the number of rows per page for paging. Maximum value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Desktop
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of resource types.
   */
  resourceTypes?: string[];
  /**
   * @remarks
   * The start time in UNIX timestamp format.
   * 
   * @example
   * 1709117383000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceIds: 'InstanceIds',
      packageIds: 'PackageIds',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      resourceTypes: 'ResourceTypes',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      packageIds: { 'type': 'array', 'itemType': 'string' },
      pageNum: 'number',
      pageSize: 'number',
      resourceType: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.packageIds)) {
      $dara.Model.validateArray(this.packageIds);
    }
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

