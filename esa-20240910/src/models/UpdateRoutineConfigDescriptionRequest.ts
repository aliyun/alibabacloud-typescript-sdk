// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRoutineConfigDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The routine description.
   * 
   * @example
   * description of this routine
   */
  description?: string;
  /**
   * @remarks
   * The routine name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-routine1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

