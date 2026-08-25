// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageTestResultRequest extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Custom_image_xxxx_xxxx
   */
  id?: string;
  /**
   * @remarks
   * The test process ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 582d4896-d224-413b-b883-239eeebe0bc5
   */
  processId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      processId: 'ProcessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      processId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

