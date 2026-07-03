// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogTypeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The log type for the rule.
   * 
   * @example
   * HTTP_ACTIVITY
   */
  logType?: string;
  /**
   * @remarks
   * The code for the log type name.
   * 
   * @example
   * sas.cloudsiem.prod.http_activity
   */
  logTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      logType: 'LogType',
      logTypeName: 'LogTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logType: 'string',
      logTypeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the request.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeLogTypeResponseBodyData[];
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': DescribeLogTypeResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

