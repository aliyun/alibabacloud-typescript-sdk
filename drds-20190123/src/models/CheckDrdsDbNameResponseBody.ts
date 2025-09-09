// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDrdsDbNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CF38538C-68BD-4278-B58F-EDE96F******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the DRDS database name is valid. Valid values: true: The database name is valid. false: the database name is invalid.
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the call is successful.
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

