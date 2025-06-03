// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppDownloadHistoryResponseBody extends $dara.Model {
  data?: any;
  message?: string;
  success?: boolean;
  code?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      success: 'Success',
      code: 'code',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      message: 'string',
      success: 'boolean',
      code: 'string',
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

