// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveDrdsDbFailedRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D98BC610-5A91-453A-BC44-5873EF******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the database creation failure records were deleted from the DRDS instance.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
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

