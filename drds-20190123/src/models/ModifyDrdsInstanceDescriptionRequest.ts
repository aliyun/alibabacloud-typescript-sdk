// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDrdsInstanceDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

