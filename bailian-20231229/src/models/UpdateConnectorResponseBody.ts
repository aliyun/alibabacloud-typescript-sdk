// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConnectorResponseBodyData extends $dara.Model {
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

export class UpdateConnectorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Index.Forbidden
   */
  code?: string;
  /**
   * @remarks
   * The data returned by the operation.
   */
  data?: UpdateConnectorResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Required parameter(%s) missing or invalid, please check the request parameters.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 778C0B3B-03C1-5FC1-A947-36EDD13606AB
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
   * Indicates whether the request was successful.
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
      data: UpdateConnectorResponseBodyData,
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

