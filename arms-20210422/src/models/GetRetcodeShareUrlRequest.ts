// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRetcodeShareUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  pid?: string;
  static names(): { [key: string]: string } {
    return {
      pid: 'Pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

