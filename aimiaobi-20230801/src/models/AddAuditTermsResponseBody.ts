// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAuditTermsResponseBodyDataV1 extends $dara.Model {
  /**
   * @remarks
   * ID
   * 
   * @example
   * 562fe4163a59d7bcb44bfdde4e3d5046
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAuditTermsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @remarks
   * Business data (whether the update succeeded). This field is deprecated. Use DataV1 to get the primary key ID instead.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * ID of the added dictionary term
   * 
   * @example
   * 返回添加的实体信息
   */
  dataV1?: AddAuditTermsResponseBodyDataV1;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * F2F366D6-E9FE-1006-BB70-2C650896AAB5
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dataV1: 'DataV1',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      dataV1: AddAuditTermsResponseBodyDataV1,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dataV1 && typeof (this.dataV1 as any).validate === 'function') {
      (this.dataV1 as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

