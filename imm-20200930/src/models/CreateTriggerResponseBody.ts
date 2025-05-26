// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTriggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the trigger.
   * 
   * @example
   * trigger-9f72636a-0f0c-4baf-ae78-38b27b******
   */
  id?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC564A9A-BA5C-4499-A087-D9B9E76E*****
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

