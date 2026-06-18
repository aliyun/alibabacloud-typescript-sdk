// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddConnectorResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the connector.
   * 
   * @example
   * conn_file_e0c9db4030b2465a9478028f7d76cd92_1234
   */
  connectorId?: string;
  static names(): { [key: string]: string } {
    return {
      connectorId: 'ConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddConnectorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of `Success` indicates that the request succeeded.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned by the operation.
   */
  data?: AddConnectorResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Current file status does not support delete.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 35A267BF-FBFA-54DB-8394-AA3B0742D833
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Valid values:
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
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddConnectorResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
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

