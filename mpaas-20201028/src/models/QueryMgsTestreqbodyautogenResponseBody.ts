// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMgsTestreqbodyautogenResponseBody extends $dara.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

