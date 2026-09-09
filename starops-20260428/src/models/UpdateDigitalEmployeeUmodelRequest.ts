// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDigitalEmployeeUmodelRequest extends $dara.Model {
  /**
   * @remarks
   * The updated UModel description of the digital human.
   * 
   * This parameter is required.
   * 
   * @example
   * Sample description
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

