// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySensClassificationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data about data categories. The data is in the JSON format.
   * 
   * @example
   * [{         "nodeName": "teset1",         "sensitiveNotNull": true,         "nodeId": "1aac2e35-b437-486b-95c7-a5ae48371024",         "nodeOldId": "1aac2e35-b437-486b-95c7-a5ae48371024",         "parentId": "0"     }]
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
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
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

