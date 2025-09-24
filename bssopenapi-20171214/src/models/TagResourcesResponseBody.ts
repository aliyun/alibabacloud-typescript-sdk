// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * InternalError
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * This API is not applicable for caller.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1537A007-72D7-4165-8A26-8694A38E219A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
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

