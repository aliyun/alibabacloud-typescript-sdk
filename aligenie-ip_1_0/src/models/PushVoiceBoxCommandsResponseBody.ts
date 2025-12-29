// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushVoiceBoxCommandsResponseBody extends $dara.Model {
  code?: number;
  message?: string;
  requestId?: string;
  result?: boolean;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

