// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAnnotationMissionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Additional information. If the request is successful, \\`success\\` is returned. If the request fails, a specific error code is returned.
   * 
   * @example
   * 执行失败：查找元素或操作超时,outTaskId:trademark_regnew_public_cn-uax33hol2uu,flowId:null,nodeUUID:541b6c71-8cce-4ab0-af84-713ca9741821
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

export class CreateAnnotationMissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the API.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateAnnotationMissionResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Additional information. If the request is successful, \\`success\\` is returned. If the request fails, a specific error code is returned.
   * 
   * @example
   * 执行失败：查找元素或操作超时,outTaskId:trademark_regnew_public_cn-uax33hol2uu,flowId:null,nodeUUID:541b6c71-8cce-4ab0-af84-713ca9741821
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. \\`true\\`: The call was successful. \\`false\\`: The call failed.
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateAnnotationMissionResponseBodyData,
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

