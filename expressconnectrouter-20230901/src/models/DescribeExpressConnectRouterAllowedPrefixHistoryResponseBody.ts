// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectRouterAllowedPrefixHistoryResponseBodyAllowedPrefixHistoryList extends $dara.Model {
  /**
   * @remarks
   * The prefix route.
   */
  allowedPrefix?: string[];
  /**
   * @remarks
   * The time when the historical route entry was created.
   * 
   * @example
   * 1673751163000
   */
  gmtCreate?: string;
  static names(): { [key: string]: string } {
    return {
      allowedPrefix: 'AllowedPrefix',
      gmtCreate: 'GmtCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedPrefix: { 'type': 'array', 'itemType': 'string' },
      gmtCreate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedPrefix)) {
      $dara.Model.validateArray(this.allowedPrefix);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterAllowedPrefixHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * Authentication is failed for ****
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The list of historical prefix routes.
   */
  allowedPrefixHistoryList?: DescribeExpressConnectRouterAllowedPrefixHistoryResponseBodyAllowedPrefixHistoryList[];
  /**
   * @remarks
   * Indicates whether the call was successful. A value of 200 indicates that the operation was successful. Other values indicate that the operation failed. For more information about the causes of failures, see error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * IllegalParamFormat.EcrId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace `%s` in the error message of the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the request parameter **DtsJobId** is invalid.
   * 
   * @example
   * The param format of EcrId **** is illegal.
   */
  dynamicMessage?: string;
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
   * The message returned for the operation.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6FABF516-FED3-5697-BDA2-B18C5D9A****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **True**: Successful.
   * - **False**: Failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      allowedPrefixHistoryList: 'AllowedPrefixHistoryList',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      allowedPrefixHistoryList: { 'type': 'array', 'itemType': DescribeExpressConnectRouterAllowedPrefixHistoryResponseBodyAllowedPrefixHistoryList },
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.allowedPrefixHistoryList)) {
      $dara.Model.validateArray(this.allowedPrefixHistoryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

