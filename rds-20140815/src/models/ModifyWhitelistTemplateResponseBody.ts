// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyWhitelistTemplateResponseBodyData } from "./ModifyWhitelistTemplateResponseBodyData";


export class ModifyWhitelistTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code returned. Valid values:
   * 
   * *   **200**: success
   * *   **400**: client error
   * *   **401**: identity authentication failed
   * *   **404**: request page not found
   * *   **500**: server error
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: ModifyWhitelistTemplateResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned. Valid values:
   * 
   * *   **200**: success
   * *   **400**: client error
   * *   **500**: server error
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
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 08A3B71B-FE08-4B03-974F-CC7EA6DB1828
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ModifyWhitelistTemplateResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

