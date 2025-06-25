// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPersistentAppInstancesResponseBodyPersistentAppInstanceModels } from "./ListPersistentAppInstancesResponseBodyPersistentAppInstanceModels";


export class ListPersistentAppInstancesResponseBody extends $dara.Model {
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
  persistentAppInstanceModels?: ListPersistentAppInstancesResponseBodyPersistentAppInstanceModels[];
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      persistentAppInstanceModels: 'PersistentAppInstanceModels',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      persistentAppInstanceModels: { 'type': 'array', 'itemType': ListPersistentAppInstancesResponseBodyPersistentAppInstanceModels },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.persistentAppInstanceModels)) {
      $dara.Model.validateArray(this.persistentAppInstanceModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

