// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDSEntityValueResponseBodyEntityValues extends $dara.Model {
  content?: string;
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @example
   * 34313785463
   */
  entityId?: number;
  /**
   * @example
   * 3467858234534534532
   */
  entityValueId?: number;
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  modifyTime?: string;
  synonyms?: string[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      entityId: 'EntityId',
      entityValueId: 'EntityValueId',
      modifyTime: 'ModifyTime',
      synonyms: 'Synonyms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      entityId: 'number',
      entityValueId: 'number',
      modifyTime: 'string',
      synonyms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.synonyms)) {
      $dara.Model.validateArray(this.synonyms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDSEntityValueResponseBody extends $dara.Model {
  entityValues?: ListDSEntityValueResponseBodyEntityValues[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * n3fg34gbfj8adf2gj923
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      entityValues: 'EntityValues',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityValues: { 'type': 'array', 'itemType': ListDSEntityValueResponseBodyEntityValues },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.entityValues)) {
      $dara.Model.validateArray(this.entityValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

