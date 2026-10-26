// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachWhitelistTemplateToInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The returned status. Valid values:
   * - **ok**: Normal.
   * - **error**: Error.
   * 
   * @example
   * ok
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachWhitelistTemplateToInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * - **200**: Normal.
   * - **400**: Client error.
   * - **401**: Authentication failed.
   * - **404**: Requested page not found.
   * - **500**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of returned data.
   */
  data?: AttachWhitelistTemplateToInstanceResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * - **200**: Normal.
   * - **400**: Client error.
   * - **500**: Server error.
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
   * success
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
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
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
      data: AttachWhitelistTemplateToInstanceResponseBodyData,
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

