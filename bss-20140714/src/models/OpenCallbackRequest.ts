// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenCallbackRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  paramStr?: string;
  static names(): { [key: string]: string } {
    return {
      paramStr: 'paramStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

