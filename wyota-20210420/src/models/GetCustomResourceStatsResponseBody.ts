// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomResourceStatsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of terminals with custom resources configured.
   * 
   * @example
   * 10
   */
  customResourceCount?: number;
  /**
   * @remarks
   * The number of terminals on which custom resources have taken effect.
   * 
   * @example
   * 8
   */
  effectiveCount?: number;
  /**
   * @remarks
   * The number of terminals without custom resources configured.
   * 
   * @example
   * 90
   */
  noCustomResourceCount?: number;
  /**
   * @remarks
   * The number of terminals on which custom resources have not taken effect.
   * 
   * @example
   * 2
   */
  unEffectiveCount?: number;
  static names(): { [key: string]: string } {
    return {
      customResourceCount: 'CustomResourceCount',
      effectiveCount: 'EffectiveCount',
      noCustomResourceCount: 'NoCustomResourceCount',
      unEffectiveCount: 'UnEffectiveCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customResourceCount: 'number',
      effectiveCount: 'number',
      noCustomResourceCount: 'number',
      unEffectiveCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomResourceStatsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. 200 is returned if the call is successful. An error code is returned if the call fails.
   * 
   * @example
   * PARAM_ERROR
   */
  code?: string;
  /**
   * @remarks
   * The custom resource statistics information.
   */
  data?: GetCustomResourceStatsResponseBodyData;
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
   * parameter error
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
      data: GetCustomResourceStatsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

