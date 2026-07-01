// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCardSmsTemplateReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of returned data.
   */
  model?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      model: 'model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      model: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.model)) {
      $dara.Model.validateArray(this.model);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCardSmsTemplateReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code.
   * 
   * - The value OK indicates that the request was successful.
   * 
   * - For information about other error codes, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryCardSmsTemplateReportResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B71F06CA-7735-183A-B52E-234EF8AFE14B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful. Valid values:
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
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryCardSmsTemplateReportResponseBodyData,
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

