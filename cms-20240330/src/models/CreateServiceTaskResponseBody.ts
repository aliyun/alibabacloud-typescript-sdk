// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1B2C3D4-E5F6-7890-ABCD-EF1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the created task. Use this ID for subsequent query or deletion operations.
   * 
   * @example
   * a1b2c3d4-e5f6-7890-abcd-ef1234567890
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

