// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IssueSoftphoneCommandRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

