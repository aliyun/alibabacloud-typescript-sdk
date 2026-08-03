// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDsReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The dialog flow information in the format: key:{value:aaa}}, where aaa indicates the number of occurrences.
   * 
   * @example
   * "{\\"Label1\\":{\\"LabelValue1\\":2},\\"Label2\\":{\\"LabelValue1\\":2},\\"Label3\\":{\\"LabelValue1\\":1,\\"LabelValue2\\":1}}"
   */
  dsReports?: string;
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
   * The API response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1364f208-982d-4d0c-89aa-d56e22b47589
   */
  requestId?: string;
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
      dsReports: 'DsReports',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dsReports: 'string',
      httpStatusCode: 'number',
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

