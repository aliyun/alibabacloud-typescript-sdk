// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListBindInfoResponseBodyBindInfoModels } from "./ListBindInfoResponseBodyBindInfoModels";


export class ListBindInfoResponseBody extends $dara.Model {
  bindInfoModels?: ListBindInfoResponseBodyBindInfoModels[];
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
   * AD2D0761-1FE5-549D-B169-D3F8D19C****
   */
  requestId?: string;
  /**
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bindInfoModels: 'BindInfoModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindInfoModels: { 'type': 'array', 'itemType': ListBindInfoResponseBodyBindInfoModels },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bindInfoModels)) {
      $dara.Model.validateArray(this.bindInfoModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

