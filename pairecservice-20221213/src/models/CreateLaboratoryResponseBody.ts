// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLaboratoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The laboratory ID.
   * 
   * @example
   * 3
   */
  laboratoryId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 42391E6D-822C-58F8-9F7E-D991BB86D6AD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      laboratoryId: 'LaboratoryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      laboratoryId: 'string',
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

