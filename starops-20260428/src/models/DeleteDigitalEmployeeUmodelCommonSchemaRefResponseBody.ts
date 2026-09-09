// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDigitalEmployeeUmodelCommonSchemaRefResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * 0A1B2C3D-4E5F-6789-ABCD-1234567890AB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

