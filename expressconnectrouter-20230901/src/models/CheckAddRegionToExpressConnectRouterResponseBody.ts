// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAddRegionToExpressConnectRouterResponseBody extends $dara.Model {
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
   * Indicates whether the Express Connect Router (ECR) instance has cross-border connections between the Chinese mainland and regions outside the Chinese mainland. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * true
   */
  anyCrossBorderLink?: boolean;
  /**
   * @remarks
   * Indicates whether the Express Connect Router (ECR) instance has cross-region connections in the Chinese mainland. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * true
   */
  anyInterRegionLink?: boolean;
  /**
   * @remarks
   * Indicates whether the call was successful. A return value of 200 indicates that the request was successful. Any other value indicates that the request failed. For more information about the causes of failure, see Error codes.
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
   * The dynamic error message, which is used to replace `%s` in the **ErrMessage** error message.
   * 
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsInstanceId**, it indicates that the **DtsInstanceId** request parameter is invalid.
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
   * Indicates whether the cross-border Cloud Data Transfer (CDT) service is enabled for the account to which the Express Connect Router (ECR) instance belongs. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * true
   */
  isCdtCrossBorderEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the Cloud Data Transfer (CDT) service is enabled for the account to which the Express Connect Router (ECR) instance belongs. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * true
   */
  isCdtInterRegionEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the account to which the Express Connect Router (ECR) instance belongs is allowed to create cross-border connections. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * true
   */
  isUserAllowedToCreateCrossBorderLink?: boolean;
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
   * 
   * - **True**: The call was successful.
   * 
   * - **False**: The call failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      anyCrossBorderLink: 'AnyCrossBorderLink',
      anyInterRegionLink: 'AnyInterRegionLink',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      isCdtCrossBorderEnabled: 'IsCdtCrossBorderEnabled',
      isCdtInterRegionEnabled: 'IsCdtInterRegionEnabled',
      isUserAllowedToCreateCrossBorderLink: 'IsUserAllowedToCreateCrossBorderLink',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      anyCrossBorderLink: 'boolean',
      anyInterRegionLink: 'boolean',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      isCdtCrossBorderEnabled: 'boolean',
      isCdtInterRegionEnabled: 'boolean',
      isUserAllowedToCreateCrossBorderLink: 'boolean',
      message: 'string',
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

