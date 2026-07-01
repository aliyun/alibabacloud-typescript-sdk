// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeSignatureQualificationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * This field is not used. You can ignore it.
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The status code of the request.
   * 
   * @example
   * OK
   */
  errCode?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  errMessage?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errCode: 'string',
      errMessage: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeSignatureQualificationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the access denial. This field is returned only if RAM authentication fails.
   * 
   * @example
   * 无
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code of the request.
   * 
   * - A value of `OK` indicates that the request was successful.
   * 
   * - For other error codes, see the error code list in this topic or the [API Error Codes](https://help.aliyun.com/document_detail/101346.html) topic.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data structure.
   */
  data?: ChangeSignatureQualificationResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates this unique identifier to help you troubleshoot issues.
   * 
   * @example
   * 0A974B78-02BF-4C79-ADF3-90CFBA1B55B1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - **true**: The call was successful.
   * 
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: ChangeSignatureQualificationResponseBodyData,
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

