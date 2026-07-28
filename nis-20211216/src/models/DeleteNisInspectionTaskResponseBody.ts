// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNisInspectionTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the deletion.
   * 
   * @example
   * True
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
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

