// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAifgResultRequest extends $dara.Model {
  /**
   * @remarks
   * The task identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * 9cd7aee5-d365-4d4e-8236-58a110a4ea09
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

