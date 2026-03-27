// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUmodelRequest extends $dara.Model {
  /**
   * @remarks
   * Description.
   * 
   * @example
   * workspace test
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

