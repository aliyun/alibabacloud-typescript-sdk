// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A3140FC7-B78B-4D8E-B0C8-926D28******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the backup policy was successfully configured.
   * 
   * @example
   * success
   */
  result?: string;
  /**
   * @remarks
   * Indicates whether the database creation failure records were removed from the DRDS instance.
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
      result: 'string',
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

