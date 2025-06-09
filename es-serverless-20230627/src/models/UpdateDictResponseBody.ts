// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDictResponseBody extends $dara.Model {
  /**
   * @example
   * 12797BCC-E0B5-5A47-B4B9-A14DDF0B0200
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

