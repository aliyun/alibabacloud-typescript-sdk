// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHttpApiOperationResponseBodyDataOperations extends $dara.Model {
  /**
   * @remarks
   * Operation ID.
   * 
   * @example
   * op-xxx
   */
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'operationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

