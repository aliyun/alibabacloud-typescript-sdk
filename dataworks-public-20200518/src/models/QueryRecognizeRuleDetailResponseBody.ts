// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecognizeRuleDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the sensitive field in the JSON format.
   * 
   * @example
   * {"nodeName":"basic unit overview","gmtModified":1709017449000,"hitThreshold":30,"sensitiveName":"mobile-yinni","templateId":"8222abeb-9784-4417-b420-0322926d5cbf","recognizeRulesType":2,"delete":false,"bydAccuracy":1,"colScan":"," defineType ":1,": ydAccuracy ":{" contentRule ":))," operationType ":0}," nodeParent ":" unit/unit basic information/unit basic overview "," level ":6," keyRuleId ":" 228248921215042mobile-yinni "," isDelete ":false," levelName ":" 6level "," sensitive ":false," operationType ":0," sourceName ": dsg-test-zuoyue","nodeId":"bea2fc81-90c9-45f3-b7a9-26d534208a0d","status":1}
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
   * Indicates whether the request was successful.
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

