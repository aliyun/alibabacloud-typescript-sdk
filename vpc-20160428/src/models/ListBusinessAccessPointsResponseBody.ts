// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListBusinessAccessPointsResponseBodyBusinessAccessPoints } from "./ListBusinessAccessPointsResponseBodyBusinessAccessPoints";


export class ListBusinessAccessPointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of access points.
   */
  businessAccessPoints?: ListBusinessAccessPointsResponseBodyBusinessAccessPoints[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 611CB80C-B6A9-43DB-9E38-0B0AC3D9B58F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      businessAccessPoints: 'BusinessAccessPoints',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessAccessPoints: { 'type': 'array', 'itemType': ListBusinessAccessPointsResponseBodyBusinessAccessPoints },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.businessAccessPoints)) {
      $dara.Model.validateArray(this.businessAccessPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

