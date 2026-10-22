// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowDefinitionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the Data Studio workflow.
   * 
   * >Notice: This field is of the Long type before SDK 8.0.0 and of the String type in SDK 8.0.0 and later. **This change does not affect the normal use of the SDK, and the parameter is still returned based on the type defined in the SDK**. The type change may cause project compilation failures only when you upgrade the SDK across version 8.0.0. In this case, you must manually correct the data type.</notice>
   * 
   * @example
   * 463497880880954XXXX
   */
  id?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 0EF298E5-0940-5AC7-9CB0-6502507****
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

