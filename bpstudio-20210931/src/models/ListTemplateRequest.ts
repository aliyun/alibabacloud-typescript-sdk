// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplateRequestTag extends $dara.Model {
  key?: string;
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

export class ListTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword that is used to search for templates.
   * 
   * @example
   * cadt
   */
  keyword?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  nextToken?: number;
  /**
   * @remarks
   * The criterion by which the returned templates are sorted. Valid values:
   * 
   * *   1: The templates are sorted by the time when they are updated.
   * *   2: The templates are sorted by the time when they are created.
   * *   3: The templates are sorted by the system.
   * *   4: The templates are sorted by the number of times that they are used.
   * *   If you specify an integer other than 1, 2, 3, and 4 or do not specify any value, the templates are sorted by the system.
   * 
   * @example
   * 1
   */
  orderType?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyjt3c5om3hi
   */
  resourceGroupId?: string;
  tag?: ListTemplateRequestTag[];
  /**
   * @remarks
   * The tag that you want to use to query templates.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  tagList?: number;
  /**
   * @remarks
   * The type of the templates to be returned. Valid values: public and private
   * 
   * This parameter is required.
   * 
   * @example
   * public
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderType: 'OrderType',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      tagList: 'TagList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'number',
      orderType: 'number',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListTemplateRequestTag },
      tagList: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

