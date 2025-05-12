// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCustomEntitiesResponseBodyCustomEntities } from "./ListCustomEntitiesResponseBodyCustomEntities";


export class ListCustomEntitiesResponseBody extends $dara.Model {
  customEntities?: ListCustomEntitiesResponseBodyCustomEntities;
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
   * 580e8ce3-3b80-44c5-9f3f-36ac3cc5bdd5
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      customEntities: 'CustomEntities',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customEntities: ListCustomEntitiesResponseBodyCustomEntities,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.customEntities && typeof (this.customEntities as any).validate === 'function') {
      (this.customEntities as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

