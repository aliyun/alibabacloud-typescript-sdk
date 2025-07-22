// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExpressConnectRouterSupportedRegionResponseBody extends $dara.Model {
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
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
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
   * *   True
   * *   False
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The regions in which the ECR feature is activated.
   */
  supportedRegionIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      supportedRegionIdList: 'SupportedRegionIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      supportedRegionIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedRegionIdList)) {
      $dara.Model.validateArray(this.supportedRegionIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

