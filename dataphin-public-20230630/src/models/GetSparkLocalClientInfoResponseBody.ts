// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkLocalClientInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * XXXX-XXXX-XXXX-XXXX
   */
  clientFileResourceId?: string;
  /**
   * @example
   * spark-cleint.zip
   */
  clientFileResourceName?: string;
  /**
   * @example
   * spark-clinet
   */
  clientName?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: GetSparkLocalClientInfoResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
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

