// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInfoFromMdpResponseBody extends $dara.Model {
  data?: string;
  requestId?: string;
  resultCode?: number;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      resultCode: 'number',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

