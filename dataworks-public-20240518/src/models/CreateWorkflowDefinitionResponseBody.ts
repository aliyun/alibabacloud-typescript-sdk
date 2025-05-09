// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkflowDefinitionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * @example
   * 463497880880954XXXX
   */
  id?: number;
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

