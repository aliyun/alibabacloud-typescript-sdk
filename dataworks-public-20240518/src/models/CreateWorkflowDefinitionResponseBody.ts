// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowDefinitionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the workflow.
   * 
   * >  This field is of the Long type in SDK versions prior to 8.0.0, and of the String type in SDK versions 8.0.0 and later. This change does not affect normal SDK usage; the parameter will still be returned according to the type defined in the SDK. However, compilation failures may occur due to the type change only when upgrading the SDK across version 8.0.0. In this case, you must manually update the data type.
   * 
   * @example
   * 463497880880954XXXX
   */
  id?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0EF298E5-0940-5AC7-9CB0-65025070XXXX
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

