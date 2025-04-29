// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiDocResponseBodyErrorCodeSamplesErrorCodeSample extends $dara.Model {
  /**
   * @remarks
   * The returned error code.
   * 
   * @example
   * Error
   */
  code?: string;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * Unauthorized
   */
  description?: string;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * error message
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

