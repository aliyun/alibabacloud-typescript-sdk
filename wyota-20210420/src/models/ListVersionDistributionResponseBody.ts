// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVersionDistributionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of terminals corresponding to this version.
   * 
   * @example
   * 60
   */
  deviceCount?: number;
  /**
   * @remarks
   * The version percentage. Valid values: 0 to 1.
   * 
   * @example
   * 0.6
   */
  percentage?: number;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 2.3.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      deviceCount: 'DeviceCount',
      percentage: 'Percentage',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceCount: 'number',
      percentage: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionDistributionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 is returned if the call is successful. An error code is returned if the call fails.
   * 
   * @example
   * PARAMETER_MISSING
   */
  code?: string;
  /**
   * @remarks
   * The list of version distribution information.
   */
  data?: ListVersionDistributionResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message. This parameter is empty if the call is successful.
   * 
   * @example
   * parameter missing
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C5DCE54A-B266-522E-A6ED-468AF45F5AAA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListVersionDistributionResponseBodyData },
      httpStatusCode: 'number',
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

