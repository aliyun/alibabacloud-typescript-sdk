// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveSkillGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of Success indicates that the request is successful.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The description of the status code.
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
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API operation is successful. Valid values:
   * - **true**: successful.
   * - **false**: failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

