// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterTasksResponseBodyTasksError extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * BadRequest
   */
  code?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Addon status not match
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

