// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the instance tag.
   * 
   * @example
   * name
   */
  key?: string;
  /**
   * @remarks
   * The value of the instance tag.
   * 
   * @example
   * xxx
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

export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the outbound robot instance.
   * 
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID.
   * > You can obtain the source API from the Resource Management documentation. Related link: https://api.aliyun.com/document/ResourceManager/2020-03-31/ListResourceGroups
   * 
   * @example
   * rg-acfm3iugit3uw7a
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the outbound robot instances.
   * > You can obtain the tags by calling the ListResourceTags operation.
   */
  tag?: ListInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListInstancesRequestTag },
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

