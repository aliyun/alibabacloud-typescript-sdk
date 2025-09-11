// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  updateModel?: string;
  static names(): { [key: string]: string } {
    return {
      updateModel: 'UpdateModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

