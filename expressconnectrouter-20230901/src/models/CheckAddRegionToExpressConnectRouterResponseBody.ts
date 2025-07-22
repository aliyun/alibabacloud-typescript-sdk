// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAddRegionToExpressConnectRouterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * Authentication is failed for ****
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether the ECR is used to establish connections between regions in the Chinese mainland and regions outside China. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  anyCrossBorderLink?: boolean;
  /**
   * @remarks
   * Indicates whether the ECR is used to establish connections between regions in the Chinese mainland. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  anyInterRegionLink?: boolean;
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful. Other status codes indicate that the request failed. For more information, see Error codes.
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
   * The dynamic part in the error message. This parameter is used to replace the `%s` variable in **ErrMessage**.
   * 
   * >  For example, if the value of **ErrMessage** is **The Value of Input Parameter %s is not valid** and the value of **DynamicMessage** is **DtsInstanceId**, the request parameter **DtsInstanceId** is invalid.
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
   * Indicates whether the cross-border CDT service is activated for the account to which the ECR belongs. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isCdtCrossBorderEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the CDT service is activated for the account to which the ECR belongs. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isCdtInterRegionEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the account to which the ECR belongs can create cross-border connections. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isUserAllowedToCreateCrossBorderLink?: boolean;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6FABF516-FED3-5697-BDA2-B18C5D9A****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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

