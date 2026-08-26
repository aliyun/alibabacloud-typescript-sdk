// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSaseUserTagsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 141681795035****
   */
  aliuid?: string;
  /**
   * @remarks
   * The number of users associated with the user label.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The description of the user label.
   * 
   * @example
   * These are the company\\"s employees
   */
  description?: string;
  /**
   * @remarks
   * The name of the user label.
   * 
   * @example
   * boss
   */
  name?: string;
  /**
   * @remarks
   * The user label ID.
   * 
   * @example
   * su-tag-1ae52f66039fa0d4****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      count: 'Count',
      description: 'Description',
      name: 'Name',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
      count: 'number',
      description: 'string',
      name: 'string',
      tagId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSaseUserTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of user labels returned.
   */
  dataList?: ListSaseUserTagsResponseBodyDataList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7E9D7ACD-53D5-56EF-A913-79D148D06299
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of user labels.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListSaseUserTagsResponseBodyDataList },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

