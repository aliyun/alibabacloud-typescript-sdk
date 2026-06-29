// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Total amount of data under the current request conditions. This parameter is optional and does not need to be returned by default.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Details
   * 
   * @example
   * null
   */
  details?: string;
  /**
   * @remarks
   * error code
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * Return message of the request
   * 
   * This parameter is required.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 90ABA848-AD74-1F6E-84BC-4182A7F1F29E
   */
  requestId?: string;
  /**
   * @remarks
   * is succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * 1529360348342353920
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      details: 'Details',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      details: 'string',
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

