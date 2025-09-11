// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  addModel?: string;
  static names(): { [key: string]: string } {
    return {
      addModel: 'AddModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

