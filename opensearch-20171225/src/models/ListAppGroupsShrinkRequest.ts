// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppGroupsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. Exact match is used.
   * 
   * @example
   * ops-cn-xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the application.
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
   * The number of entries per page. Default value: 10.
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
   * The method based on which applications are sorted. Valid values:
   * 
   * *   0: sorts applications in descending order by creation time.
   * *   1: sorts applications in descending order by modification time.
   * 
   * Default value: 0.
   * 
   * @example
   * 0
   */
  sortBy?: number;
  /**
   * @remarks
   * The tags.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The type of the application. Valid values:
   * 
   * *   standard: a High-performance Search Edition application.
   * *   enhanced: an Industry Algorithm Edition application.
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
      tagsShrink: 'tags',
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
      tagsShrink: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

