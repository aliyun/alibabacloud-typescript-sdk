// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSurveyJobResponseBody extends $dara.Model {
  code?: string;
  data?: any;
  message?: string;
  requestId?: string;
  success?: boolean;
  error?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      error: 'error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      error: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

