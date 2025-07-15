// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOpsItemsResponseBodyOpsItems extends $dara.Model {
  /**
   * @remarks
   * The category.
   * 
   * @example
   * Security
   */
  category?: string;
  /**
   * @remarks
   * The time when the O\\&M item was created.
   * 
   * @example
   * 2023-07-09T10:01Z
   */
  createDate?: string;
  /**
   * @remarks
   * The ID of the O\\&M item.
   * 
   * @example
   * oi-d52b08695e2b46ae8413
   */
  opsItemId?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The Alibaba Resource Names (ARNs) of the associated resources.
   */
  resources?: string[];
  /**
   * @remarks
   * The severity level.
   * 
   * @example
   * Medium
   */
  severity?: string;
  /**
   * @remarks
   * The source business.
   * 
   * @example
   * /aliyun/ecs
   */
  source?: string;
  /**
   * @remarks
   * The status of the O\\&M item.
   * 
   * @example
   * Open
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1":"v1"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The title of the O\\&M item.
   * 
   * @example
   * Test
   */
  title?: string;
  /**
   * @remarks
   * The time when the O\\&M item was updated.
   * 
   * @example
   * 2023-07-09T10:01Z
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createDate: 'CreateDate',
      opsItemId: 'OpsItemId',
      priority: 'Priority',
      resources: 'Resources',
      severity: 'Severity',
      source: 'Source',
      status: 'Status',
      tags: 'Tags',
      title: 'Title',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createDate: 'string',
      opsItemId: 'string',
      priority: 'number',
      resources: { 'type': 'array', 'itemType': 'string' },
      severity: 'string',
      source: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOpsItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC6KPDUL0FIIb
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of O\\&M items.
   */
  opsItems?: ListOpsItemsResponseBodyOpsItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 113DD533-389C-5F83-9C69-F64D5BAB10B2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      opsItems: 'OpsItems',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      opsItems: { 'type': 'array', 'itemType': ListOpsItemsResponseBodyOpsItems },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.opsItems)) {
      $dara.Model.validateArray(this.opsItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

