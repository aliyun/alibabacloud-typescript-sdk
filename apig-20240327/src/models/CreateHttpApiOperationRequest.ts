// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiOperation } from "./HttpApiOperation";


export class CreateHttpApiOperationRequest extends $dara.Model {
  /**
   * @remarks
   * List of operation definitions.
   */
  operations?: HttpApiOperation[];
  static names(): { [key: string]: string } {
    return {
      operations: 'operations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operations: { 'type': 'array', 'itemType': HttpApiOperation },
    };
  }

  validate() {
    if(Array.isArray(this.operations)) {
      $dara.Model.validateArray(this.operations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

