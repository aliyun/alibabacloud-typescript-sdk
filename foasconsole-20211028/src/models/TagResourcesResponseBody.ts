// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Request details.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 67F33190-946B-1105-B6A1-E2DF0426DD51
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded. Valid values:
   * 
   * - true: The call succeeded
   * 
   * - false: The call failed
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Tag request ID
   * 
   * @example
   * 154FT
   */
  tagResponseId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tagResponseId: 'TagResponseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tagResponseId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

