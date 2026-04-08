// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTrafficControlTaskCodeResponseBody extends $dara.Model {
  /**
   * @example
   * Create Table xxx.......
   */
  code?: string;
  /**
   * @example
   * False
   */
  preNeedConfig?: boolean;
  /**
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      preNeedConfig: 'PreNeedConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      preNeedConfig: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

