// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EpdInventoryConstituteItem } from "./EpdInventoryConstituteItem";


export class GetEpdInventoryConstituteResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of environmental impact results.
   */
  data?: EpdInventoryConstituteItem[];
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
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
      data: { 'type': 'array', 'itemType': EpdInventoryConstituteItem },
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

