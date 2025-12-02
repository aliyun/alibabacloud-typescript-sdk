// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFeatureConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Success indicator.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * query
   * 
   * @example
   * True
   */
  data?: boolean;
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * ID assigned by the backend to uniquely identify a request. Can be used for troubleshooting.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * Returned data
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Response message of this request.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      msg: 'Msg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'boolean',
      httpStatusCode: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

