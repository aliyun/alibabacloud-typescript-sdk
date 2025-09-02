// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the workspace.
   * 
   * @example
   * Env
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the workspace.
   * 
   * @example
   * Test
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

export class ListProjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzbn7pti3zfa
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The tags to add to the workspace.
   */
  tags?: ListProjectsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceManagerResourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListProjectsRequestTags },
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

