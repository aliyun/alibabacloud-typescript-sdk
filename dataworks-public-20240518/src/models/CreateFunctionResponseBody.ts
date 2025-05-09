// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFunctionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the UDF.
   * 
   * @example
   * 580667964888595XXXX
   */
  id?: number;
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * AE49C88D-5BEE-5ADD-8B8C-C4BBC0D7XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

