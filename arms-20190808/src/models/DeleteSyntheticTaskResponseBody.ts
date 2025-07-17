// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSyntheticTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A9C645C-C83F-4C9D-8CCB-29BEC9E1****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the specified tasks are deleted.
   * 
   * *   `true`: The tasks are deleted.
   * *   `false`: The tasks fail to be deleted.
   * 
   * @example
   * true
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

