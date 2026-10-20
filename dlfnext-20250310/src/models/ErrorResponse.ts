// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ErrorResponse extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 404
   */
  code?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Resource not found
   */
  message?: string;
  /**
   * @remarks
   * The name of the resource involved in the error.
   * 
   * @example
   * my_table
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource involved in the error.
   * 
   * @example
   * table
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

