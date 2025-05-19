// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListParamsResponseBodyParams } from "./ListParamsResponseBodyParams";


export class ListParamsResponseBody extends $dara.Model {
  params?: ListParamsResponseBodyParams[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A2D07551-38DA-531E-9B22-877D1D86A579
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'array', 'itemType': ListParamsResponseBodyParams },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

