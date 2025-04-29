// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRegionsResponseBodyRegions } from "./ListRegionsResponseBodyRegions";


export class ListRegionsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @remarks
   * -
   */
  regions?: ListRegionsResponseBodyRegions[];
  /**
   * @example
   * AFD5B166-4A7D-50DF-91BF-EFAFD41F7335
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      regions: 'Regions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      regions: { 'type': 'array', 'itemType': ListRegionsResponseBodyRegions },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

