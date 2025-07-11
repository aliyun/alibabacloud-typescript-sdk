// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDefenseRuleBlockIpResponseBody extends $dara.Model {
  /**
   * @example
   * 9D11AC3A-A10C-56E7-A342-E87EC892BAE2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

