// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectorResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the connector.
   * 
   * @example
   * conn_file_e0c9db4030b2465a9478028f7d76cd92_1234
   */
  connectorId?: string;
  /**
   * @remarks
   * The name of the connector.
   * 
   * @example
   * name
   */
  connectorName?: string;
  /**
   * @remarks
   * The type of the connector.
   * 
   * @example
   * FILE
   */
  connectorType?: string;
  /**
   * @remarks
   * The description of the connector.
   * 
   * @example
   * Description
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      connectorId: 'ConnectorId',
      connectorName: 'ConnectorName',
      connectorType: 'ConnectorType',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorId: 'string',
      connectorName: 'string',
      connectorType: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetConnectorResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Requests throttling triggered.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7BA8ADD9-53D6-53F0-918F-A1E776AD230E
   */
  requestId?: string;
  /**
   * @remarks
   * The status code of the response.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. The valid values are:
   * 
   * - `true`: The call was successful.
   * 
   * - `false`: The call failed.
   * 
   * @example
   * True
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
      data: GetConnectorResponseBodyData,
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

