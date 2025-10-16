// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetRuleHitCountResponseBody extends $dara.Model {
  /**
   * @example
   * sg_server
   */
  module?: string;
  /**
   * @example
   * 706B2093-CBA0-51B2-BEBF-58903FC6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: 'string',
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

