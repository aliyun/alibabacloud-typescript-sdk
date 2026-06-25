// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegionZoneResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Local name.
   * 
   * @example
   * E
   */
  localName?: string;
  /**
   * @remarks
   * zone id
   * 
   * @example
   * cn-beijing-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionZoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
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
   * @remarks
   * Error code.
   * 
   * @example
   * IllegalRequest
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Parameter check error
   */
  message?: string;
  /**
   * @remarks
   * Request UUID.
   * 
   * @example
   * 438737AC-760A-57D9-B646-B7EF79426243
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the invocation succeeded.
   * - **true**: The invocation succeeded.
   * - **false**: Failed to invoke.
   * 
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

