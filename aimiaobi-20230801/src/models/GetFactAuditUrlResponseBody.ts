// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFactAuditUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @remarks
   * List of source URLs currently used for factuality audit. If the list is empty, the retrieval source is the entire network. If URLs are present, information is retrieved only from the configured URLs. To delete unnecessary source URLs, use the URLs from the response parameter as input for the DeleteFactAuditUrl API.
   * 
   * This parameter is required.
   */
  data?: string[];
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
   * Error description.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F2F366D6-E9FE-1006-BB70-2C650896AAB5
   */
  requestId?: string;
  /**
   * @remarks
   * Whether this request was successful.
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
      data: { 'type': 'array', 'itemType': 'string' },
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

