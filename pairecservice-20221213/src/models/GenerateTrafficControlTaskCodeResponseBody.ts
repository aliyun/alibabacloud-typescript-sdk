// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTrafficControlTaskCodeResponseBody extends $dara.Model {
  code?: string;
  preNeedConfig?: boolean;
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

