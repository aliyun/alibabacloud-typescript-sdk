// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConstituteItem } from "./ConstituteItem";


export class GetEmissionSourceConstituteResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response parameters
   */
  data?: ConstituteItem[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9bc20a5a-b26b-4c28-922a-7cd10b61f96f
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ConstituteItem },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

