// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Number of documents.
   * 
   * @example
   * 10
   */
  documentCount?: number;
  /**
   * @remarks
   * Number of services or days.
   * 
   * @example
   * 10
   */
  frequency?: number;
  static names(): { [key: string]: string } {
    return {
      documentCount: 'DocumentCount',
      frequency: 'Frequency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentCount: 'number',
      frequency: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDocumentSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Data query result.
   */
  data?: GetDocumentSummaryResponseBodyData;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Prompt message for the returned result.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7903F2DE-D9EE-5D16-8A08-E9223E54B281
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. Values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * True
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
      data: GetDocumentSummaryResponseBodyData,
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

