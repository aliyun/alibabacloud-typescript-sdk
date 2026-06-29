// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkLocalClientInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The client file ID.
   * 
   * @example
   * XXXX-XXXX-XXXX-XXXX
   */
  clientFileResourceId?: string;
  /**
   * @remarks
   * The client file name.
   * 
   * @example
   * spark-cleint.zip
   */
  clientFileResourceName?: string;
  /**
   * @remarks
   * The client name.
   * 
   * @example
   * spark-clinet
   */
  clientName?: string;
  /**
   * @remarks
   * Indicates whether the client information is editable.
   * 
   * @example
   * true/false
   */
  editable?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientFileResourceId: 'ClientFileResourceId',
      clientFileResourceName: 'ClientFileResourceName',
      clientName: 'ClientName',
      editable: 'Editable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientFileResourceId: 'string',
      clientFileResourceName: 'string',
      clientName: 'string',
      editable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkLocalClientInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetSparkLocalClientInfoResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
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
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: { 'type': 'array', 'itemType': GetSparkLocalClientInfoResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

