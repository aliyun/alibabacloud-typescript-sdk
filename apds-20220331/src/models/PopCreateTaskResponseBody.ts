// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PopCreateTaskResponseBody extends $dara.Model {
  data?: number;
  errCode?: string;
  errMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      errCode: 'string',
      errMessage: 'string',
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

