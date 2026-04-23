// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInventoryJobRequest extends $dara.Model {
  param?: string;
  static names(): { [key: string]: string } {
    return {
      param: 'Param',
    };
  }

  static types(): { [key: string]: any } {
    return {
      param: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

