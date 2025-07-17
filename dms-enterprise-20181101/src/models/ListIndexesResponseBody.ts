// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIndexesResponseBodyIndexListIndex extends $dara.Model {
  /**
   * @remarks
   * The description of the index.
   * 
   * @example
   * test
   */
  indexComment?: string;
  /**
   * @remarks
   * The ID of the index.
   * 
   * @example
   * 1
   */
  indexId?: string;
  /**
   * @remarks
   * The name of the index.
   * 
   * @example
   * idx_test
   */
  indexName?: string;
  /**
   * @remarks
   * The type of the index. Valid values:
   * 
   * *   Primary
   * *   Unique
   * *   Normal
   * *   FullText
   * *   Spatial
   * 
   * @example
   * Primary
   */
  indexType?: string;
  /**
   * @remarks
   * The ID of the table.
   * 
   * @example
   * 1
   */
  tableId?: string;
  static names(): { [key: string]: string } {
    return {
      indexComment: 'IndexComment',
      indexId: 'IndexId',
      indexName: 'IndexName',
      indexType: 'IndexType',
      tableId: 'TableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexComment: 'string',
      indexId: 'string',
      indexName: 'string',
      indexType: 'string',
      tableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponseBodyIndexList extends $dara.Model {
  index?: ListIndexesResponseBodyIndexListIndex[];
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: { 'type': 'array', 'itemType': ListIndexesResponseBodyIndexListIndex },
    };
  }

  validate() {
    if(Array.isArray(this.index)) {
      $dara.Model.validateArray(this.index);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The details of indexes.
   */
  indexList?: ListIndexesResponseBodyIndexList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1F4DE2F1-5B47-462A-A973-E02EB7AF386B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      indexList: 'IndexList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      indexList: ListIndexesResponseBodyIndexList,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.indexList && typeof (this.indexList as any).validate === 'function') {
      (this.indexList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

