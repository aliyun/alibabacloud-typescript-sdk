// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecognizeDataByRuleTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result in the JSON format.
   * 
   * @example
   * [{"custom": false,       "name": "EducationDegree",       "localeName": "EducationDegree",       "templateJsonStr": "{&quot;_clazz&quot;:&quot;com.alipay.dsgclient.sdk.dsg.fastscan.engine.cond.EducationDegreeCond&quot;}",       "desc": ""}]
   */
  data?: any;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 9990030003
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Missing parameter
   */
  errorMessage?: string;
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
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * 10000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

