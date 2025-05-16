// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteHundredThousandWhysDialogueResponseBodyChoices } from "./ExecuteHundredThousandWhysDialogueResponseBodyChoices";


export class ExecuteHundredThousandWhysDialogueResponseBody extends $dara.Model {
  choices?: ExecuteHundredThousandWhysDialogueResponseBodyChoices[];
  /**
   * @example
   * 0
   */
  created?: number;
  /**
   * @example
   * null
   */
  id?: string;
  /**
   * @example
   * null
   */
  model?: string;
  /**
   * @example
   * null
   */
  object?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DBFA232A-1176-50E6-95AE-50F7A62A28AD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      choices: 'choices',
      created: 'created',
      id: 'id',
      model: 'model',
      object: 'object',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choices: { 'type': 'array', 'itemType': ExecuteHundredThousandWhysDialogueResponseBodyChoices },
      created: 'number',
      id: 'string',
      model: 'string',
      object: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.choices)) {
      $dara.Model.validateArray(this.choices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

