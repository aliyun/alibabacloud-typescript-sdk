// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProcessDefinitionWithScheduleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * 160************
   */
  code?: number;
  /**
   * @remarks
   * The serial number of the workflow.
   * 
   * @example
   * 12342
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

