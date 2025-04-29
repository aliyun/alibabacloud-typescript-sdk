// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiHistoryResponseBodyErrorCodeSamplesErrorCodeSample extends $dara.Model {
  /**
   * @remarks
   * The returned error code.
   * 
   * @example
   * 400
   */
  code?: string;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * Missing the parameter UserId
   */
  description?: string;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * MissingParameter
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

