// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyCompliancePacksResponseBody extends $dara.Model {
  copyRulesResult?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      copyRulesResult: 'CopyRulesResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copyRulesResult: 'boolean',
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

