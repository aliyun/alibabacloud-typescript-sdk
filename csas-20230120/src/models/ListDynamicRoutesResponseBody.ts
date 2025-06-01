// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDynamicRoutesResponseBodyDynamicRoutes } from "./ListDynamicRoutesResponseBodyDynamicRoutes";


export class ListDynamicRoutesResponseBody extends $dara.Model {
  dynamicRoutes?: ListDynamicRoutesResponseBodyDynamicRoutes[];
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      dynamicRoutes: 'DynamicRoutes',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRoutes: { 'type': 'array', 'itemType': ListDynamicRoutesResponseBodyDynamicRoutes },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dynamicRoutes)) {
      $dara.Model.validateArray(this.dynamicRoutes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

