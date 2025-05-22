// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChangeSetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the change set.
   * 
   * @example
   * e85abe0c-6528-43fb-ae93-fdf8de22****
   */
  changeSetId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the stack.
   * 
   * @example
   * 4a6c9851-3b0f-4f5f-b4ca-a14bf691****
   */
  stackId?: string;
  static names(): { [key: string]: string } {
    return {
      changeSetId: 'ChangeSetId',
      requestId: 'RequestId',
      stackId: 'StackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeSetId: 'string',
      requestId: 'string',
      stackId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

