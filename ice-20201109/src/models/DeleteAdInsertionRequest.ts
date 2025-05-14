// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAdInsertionRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * my_ad
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

