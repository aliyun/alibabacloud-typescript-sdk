// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveApgroupSsidConfigResponseBody extends $dara.Model {
  data?: number[];
  errorCode?: number;
  errorMessage?: string;
  isSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      isSuccess: 'IsSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      errorCode: 'number',
      errorMessage: 'string',
      isSuccess: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

