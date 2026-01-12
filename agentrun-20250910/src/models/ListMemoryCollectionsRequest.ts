// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemoryCollectionsRequest extends $dara.Model {
  /**
   * @example
   * my-memory-1
   */
  memoryCollectionName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * READY
   */
  status?: string;
  /**
   * @example
   * mem0
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      memoryCollectionName: 'memoryCollectionName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memoryCollectionName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

