// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetaCategoryTableEntity } from "./MetaCategoryTableEntity";


export class ListTablesInCategoryResponseBodyEntityList extends $dara.Model {
  metaCategoryTableEntity?: MetaCategoryTableEntity[];
  static names(): { [key: string]: string } {
    return {
      metaCategoryTableEntity: 'MetaCategoryTableEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaCategoryTableEntity: { 'type': 'array', 'itemType': MetaCategoryTableEntity },
    };
  }

  validate() {
    if(Array.isArray(this.metaCategoryTableEntity)) {
      $dara.Model.validateArray(this.metaCategoryTableEntity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesInCategoryResponseBody extends $dara.Model {
  entityList?: ListTablesInCategoryResponseBodyEntityList;
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      entityList: 'EntityList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityList: ListTablesInCategoryResponseBodyEntityList,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.entityList && typeof (this.entityList as any).validate === 'function') {
      (this.entityList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

