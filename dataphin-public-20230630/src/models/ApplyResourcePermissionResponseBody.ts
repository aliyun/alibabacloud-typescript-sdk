// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyResourcePermissionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of application IDs.
   */
  applyIds?: string[];
  /**
   * @remarks
   * The list of approval IDs.
   */
  bpmsIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applyIds: 'ApplyIds',
      bpmsIds: 'BpmsIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyIds: { 'type': 'array', 'itemType': 'string' },
      bpmsIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.applyIds)) {
      $dara.Model.validateArray(this.applyIds);
    }
    if(Array.isArray(this.bpmsIds)) {
      $dara.Model.validateArray(this.bpmsIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyResourcePermissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code of the request. A value of OK indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The application result.
   */
  data?: ApplyResourcePermissionResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message of the request.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      data: ApplyResourcePermissionResponseBodyData,
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

