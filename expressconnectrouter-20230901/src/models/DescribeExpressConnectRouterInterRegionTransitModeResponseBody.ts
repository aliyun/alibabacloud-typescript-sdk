// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectRouterInterRegionTransitModeResponseBodyInterRegionTransitModeList extends $dara.Model {
  /**
   * @remarks
   * The cross-region forwarding mode of the ECR. Valid values:
   * - **ECMP**: load balancing mode.
   * - **NearBy**: nearest forwarding mode.
   * 
   * @example
   * ECMP
   */
  mode?: string;
  /**
   * @remarks
   * The ID of the region to which the Express Connect Router (ECR) belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExpressConnectRouterInterRegionTransitModeResponseBody extends $dara.Model {
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
   * Indicates whether the call was successful. A return value of 200 indicates success, and any other value indicates failure. For the cause of failure, see error codes.
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
   * The dynamic error message, which is used to replace `%s` in the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the **DtsJobId** request parameter is invalid.
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
   * The list of cross-region forwarding modes.
   */
  interRegionTransitModeList?: DescribeExpressConnectRouterInterRegionTransitModeResponseBodyInterRegionTransitModeList[];
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
   * - **True**: The call was successful.
   * - **False**: The call failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      httpStatusCode: 'HttpStatusCode',
      interRegionTransitModeList: 'InterRegionTransitModeList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      httpStatusCode: 'number',
      interRegionTransitModeList: { 'type': 'array', 'itemType': DescribeExpressConnectRouterInterRegionTransitModeResponseBodyInterRegionTransitModeList },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.interRegionTransitModeList)) {
      $dara.Model.validateArray(this.interRegionTransitModeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

