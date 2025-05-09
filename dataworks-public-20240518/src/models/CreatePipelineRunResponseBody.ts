// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the process.
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  id?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7C352CB7-CD88-50CF-9D0D-E81BDF02XXXX
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
      id: 'string',
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

