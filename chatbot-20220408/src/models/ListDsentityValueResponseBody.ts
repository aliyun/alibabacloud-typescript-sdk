// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDSEntityValueResponseBodyEntityValues extends $dara.Model {
  /**
   * @remarks
   * The entity member name (entity value or regular expression).
   * 
   * @example
   * Book type
   */
  content?: string;
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @remarks
   * The entity ID.
   * 
   * @example
   * 34313785463
   */
  entityId?: number;
  /**
   * @remarks
   * The entity member ID.
   * 
   * @example
   * 3467858234534534532
   */
  entityValueId?: number;
  /**
   * @remarks
   * The modification time in UTC.
   * 
   * @example
   * 2021-08-12T16:00:01Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The synonym list.
   */
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
  /**
   * @remarks
   * The entity list.
   */
  entityValues?: ListDSEntityValueResponseBodyEntityValues[];
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * n3fg34gbfj8adf2gj923
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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

