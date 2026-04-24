// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySuccessIcpDataRequest extends $dara.Model {
  /**
   * @example
   * skill
   */
  caller?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

