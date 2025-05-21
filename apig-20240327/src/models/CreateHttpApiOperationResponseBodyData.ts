// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateHttpApiOperationResponseBodyDataOperations } from "./CreateHttpApiOperationResponseBodyDataOperations";


export class CreateHttpApiOperationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Operation information.
   */
  operations?: CreateHttpApiOperationResponseBodyDataOperations[];
  static names(): { [key: string]: string } {
    return {
      operations: 'operations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operations: { 'type': 'array', 'itemType': CreateHttpApiOperationResponseBodyDataOperations },
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

