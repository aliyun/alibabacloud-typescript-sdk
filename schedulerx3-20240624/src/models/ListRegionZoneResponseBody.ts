// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRegionZoneResponseBodyData } from "./ListRegionZoneResponseBodyData";


export class ListRegionZoneResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: ListRegionZoneResponseBodyData[];
  /**
   * @example
   * IllegalRequest
   */
  errorCode?: string;
  /**
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @example
   * 438737AC-760A-57D9-B646-B7EF79426243
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
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListRegionZoneResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

