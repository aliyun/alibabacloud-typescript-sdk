// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppGroupsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * foo
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * bar
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class ListAppGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. An exact match is performed.
   * 
   * @example
   * ops-cn-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * my_name
   */
  name?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * "110123123"
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - 0: Sorts applications by creation time in descending order.
   * 
   * - 1: Sorts applications by modification time in descending order.
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  sortBy?: number;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: ListAppGroupsRequestTags[];
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * - standard: a Standard Edition application.
   * 
   * - enhanced: a Premium Edition application.
   * 
   * @example
   * standard
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      sortBy: 'sortBy',
      tags: 'tags',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      sortBy: 'number',
      tags: { 'type': 'array', 'itemType': ListAppGroupsRequestTags },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

