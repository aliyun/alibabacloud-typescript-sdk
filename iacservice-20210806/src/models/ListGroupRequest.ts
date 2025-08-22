// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupRequestTag extends $dara.Model {
  key?: string;
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

export class ListGroupRequest extends $dara.Model {
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 200
   */
  pageSize?: string;
  /**
   * @example
   * p-14e80de4866bf7ffed0c4072ed9b37
   */
  projectId?: string;
  tag?: ListGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectId: 'projectId',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      projectId: 'string',
      tag: { 'type': 'array', 'itemType': ListGroupRequestTag },
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

